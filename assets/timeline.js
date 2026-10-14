/* Timeline behaviour. Content lives in data.js; images in images/moments/. */
(() => {
  "use strict";

  const IMAGE_DIR = "images/moments/";
  const IMAGE_EXTS = ["jpg", "jpeg", "png", "webp"];
  const STACKED = window.matchMedia("(max-width: 720px), (max-height: 520px)");
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)");
  const $ = id => document.getElementById(id);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  // — settings (remembered on this device) —
  const DEFAULTS = { stepMode: "All strands", overlay: "deep", showMeanwhile: true, showMissing: true, blackAndWhite: true };
  let settings = { ...DEFAULTS };
  try { Object.assign(settings, JSON.parse(localStorage.getItem("timeline-settings") || "{}")); } catch (e) {}
  function applySettings() {
    const b = document.body.classList;
    b.toggle("show-meanwhile", !!settings.showMeanwhile);
    b.toggle("show-missing", !!settings.showMissing);
    b.toggle("bw", !!settings.blackAndWhite);
    b.toggle("overlay-signal", settings.overlay === "signal");
    try { localStorage.setItem("timeline-settings", JSON.stringify(settings)); } catch (e) {}
    if (idx != null) render();
  }

  // — data —
  const items = MOMENTS.map(m => {
    const li = LANES.findIndex(l => l.key === m.lane);
    const ei = ERAS.findIndex(e => m.year >= e.from && m.year <= e.to);
    return { ...m, li, ei, lane: LANES[li], era: ERAS[ei], img: undefined, cards: [] };
  }).sort((a, b) => a.year - b.year || a.li - b.li);
  items.forEach((it, i) => { it.i = i; });

  // — build the timeline —
  const track = $("track"), scroller = $("scroller");
  const lanesCol = el("div", "lanes");
  lanesCol.setAttribute("aria-hidden", "true");
  lanesCol.append(el("div", "lanes-corner"));
  LANES.forEach(l => {
    const d = el("div", "lane");
    d.append(el("div", "lane-num", l.num), el("div", "lane-name", l.name));
    lanesCol.append(d);
  });
  track.append(lanesCol);

  ERAS.forEach((era, ei) => {
    const sec = el("section", "era");
    sec.dataset.era = ei;
    sec.setAttribute("aria-labelledby", "era-" + ei);
    const h = el("h2", "era-head");
    h.id = "era-" + ei;
    const range = el("span", "era-range", era.range);
    h.append(el("span", "era-name", era.name), el("span", "sr-only", ": "), range);
    sec.append(h);
    LANES.forEach((lane, li) => {
      const list = items.filter(it => it.ei === ei && it.li === li);
      const cell = el("div", "cell" + (list.length ? "" : " empty"));
      const ch = el("h3", "cell-lane sr-only");
      ch.append(el("span", "lane-num", lane.num), el("span", "lane-name", lane.name));
      cell.append(ch);
      if (list.length) {
        const ul = el("ul", "cards");
        list.forEach(it => {
          const li_ = el("li");
          const b = el("button", "card-btn");
          b.type = "button";
          b.setAttribute("aria-haspopup", "dialog");
          const top = el("span", "card-top");
          top.append(el("span", "card-year", it.label));
          const need = el("span", "card-need", "Image needed");
          need.hidden = true;
          top.append(need);
          b.append(top, el("span", "card-title", it.title));
          b.addEventListener("click", () => open(it.i, b));
          it.card = b; it.needEl = need;
          li_.append(b); ul.append(li_);
        });
        cell.append(ul);
      } else {
        cell.append(el("p", "sr-only", "No moments"));
      }
      sec.append(cell);
    });
    track.append(sec);
  });

  // — images: look for images/moments/<id>.<ext> —
  function findImage(it) {
    if (it.imgPromise) return it.imgPromise;
    it.imgPromise = new Promise(resolve => {
      let k = 0;
      const tryNext = () => {
        if (k >= IMAGE_EXTS.length) return resolve(null);
        const url = IMAGE_DIR + encodeURIComponent(it.id) + "." + IMAGE_EXTS[k++];
        const probe = new Image();
        probe.onload = () => resolve(url);
        probe.onerror = tryNext;
        probe.src = url;
      };
      tryNext();
    }).then(url => {
      it.img = url;
      it.needEl.hidden = !!url;
      return url;
    });
    return it.imgPromise;
  }
  // Probe a few at a time so the page stays responsive.
  (function probeAll() {
    let next = 0;
    const worker = () => next < items.length ? findImage(items[next++]).then(worker) : null;
    for (let n = 0; n < 6; n++) worker();
  })();

  // — card rows: two rows of cards per lane on tall screens, one on short —
  function measure() {
    if (STACKED.matches) return;
    const lane = (scroller.clientHeight - 100) / 4 - 28;
    track.style.setProperty("--rows", lane >= 196 ? 2 : 1);
  }
  window.addEventListener("resize", measure);
  measure();

  // — era navigation —
  const eraEls = () => [...track.querySelectorAll("[data-era]")];
  const behavior = () => (REDUCED.matches ? "auto" : "smooth");
  function scrollToEra(i) {
    const cols = eraEls();
    if (!cols[i]) return;
    if (STACKED.matches) scroller.scrollTo({ top: cols[i].offsetTop, behavior: behavior() });
    else scroller.scrollTo({ left: cols[i].offsetLeft - lanesCol.offsetWidth, behavior: behavior() });
  }
  function currentEra() {
    let cur = 0;
    eraEls().forEach((c, i) => {
      const pos = STACKED.matches ? c.offsetTop <= scroller.scrollTop + 4 : c.offsetLeft - lanesCol.offsetWidth <= scroller.scrollLeft + 4;
      if (pos) cur = i;
    });
    return cur;
  }
  function jumpEra(d) {
    scrollToEra(Math.max(0, Math.min(ERAS.length - 1, currentEra() + d)));
  }

  // Vertical mouse wheel scrolls the timeline sideways (unless over a lane that scrolls itself).
  scroller.addEventListener("wheel", e => {
    if (STACKED.matches || e.ctrlKey || Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    const cell = e.target.closest(".cell");
    if (cell && cell.scrollHeight > cell.clientHeight + 1) return;
    e.preventDefault();
    scroller.scrollLeft += e.deltaY;
  }, { passive: false });

  // — moment dialog —
  const dlg = $("moment");
  let idx = null, opener = null;

  function seq() {
    const it = items[idx];
    return settings.stepMode === "Same strand" ? items.filter(x => x.li === it.li) : items;
  }
  function neighbour(d) {
    const s = seq(), p = s.indexOf(items[idx]);
    return s[(p + d + s.length) % s.length];
  }

  function renderImage(it) {
    const fig = $("mImg");
    fig.replaceChildren();
    const fill = url => {
      if (idx !== it.i) return;
      fig.replaceChildren();
      if (url) {
        const img = el("img");
        img.src = url;
        img.alt = it.alt || it.lookAt || it.title;
        fig.append(img);
      } else {
        const box = el("div", "m-empty");
        box.innerHTML = '<svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="square"><rect x="3" y="3" width="18" height="18"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>';
        box.append(el("span", "cap", "Image needed: " + (it.lookAt || it.title)));
        const how = el("span", "how", "Add ");
        how.append(el("code", null, IMAGE_DIR + it.id + ".jpg"));
        box.append(how);
        fig.append(box);
      }
    };
    if (it.img !== undefined) fill(it.img);
    else findImage(it).then(fill);
  }

  function render(announce) {
    const it = items[idx], s = seq();
    $("mLane").textContent = it.lane.num + " — " + it.lane.name;
    $("mEra").textContent = it.era.name;
    const pos = s.indexOf(it) + 1;
    $("mPos").textContent = pos + " / " + s.length;
    $("mPos").setAttribute("aria-label", "Moment " + pos + " of " + s.length);
    $("mYear").textContent = it.label;
    $("mTitle").textContent = it.title;
    $("mBody").textContent = it.body;
    $("mEx").hidden = !it.lookAt;
    $("mExText").textContent = it.lookAt;
    renderImage(it);

    const pv = neighbour(-1), nx = neighbour(1);
    $("mPrevT").textContent = pv.label + " · " + pv.title;
    $("mNextT").textContent = nx.label + " · " + nx.title;
    $("mPrev").setAttribute("aria-label", "Previous: " + pv.label + ", " + pv.title);
    $("mNext").setAttribute("aria-label", "Next: " + nx.label + ", " + nx.title);

    const mw = items.filter(x => x.li !== it.li)
      .sort((a, b) => Math.abs(a.year - it.year) - Math.abs(b.year - it.year)).slice(0, 3)
      .sort((a, b) => a.year - b.year);
    const grid = $("mMwGrid");
    grid.replaceChildren(...mw.map(m => {
      const li = el("li");
      const b = el("button", "m-mw-btn");
      b.type = "button";
      b.append(el("span", "m-mw-k", m.lane.name + " · " + m.label), el("span", "m-mw-t", m.title));
      b.addEventListener("click", () => go(m.i));
      li.append(b);
      return li;
    }));

    if (announce) $("mLive").textContent = "Moment " + pos + " of " + s.length + ". " + it.label + ". " + it.title + ". " + it.body;
    if (STACKED.matches) dlg.scrollTop = 0;
  }

  function go(i) { idx = i; render(true); }
  function step(d) { go(neighbour(d).i); }

  function open(i, from) {
    idx = i; opener = from || null;
    $("mLive").textContent = "";
    render(false);
    dlg.showModal();
    $("mClose").focus();
  }
  function close() { if (dlg.open) dlg.close(); }
  dlg.addEventListener("close", () => {
    const it = items[idx];
    idx = null;
    if (!it) return;
    scrollToEra(it.ei);
    // Return focus to the card for the moment we ended on.
    (it.card || opener) && (it.card || opener).focus({ preventScroll: true });
  });
  $("mClose").addEventListener("click", close);
  $("mPrev").addEventListener("click", () => step(-1));
  $("mNext").addEventListener("click", () => step(1));

  // Swipe left/right between moments on touch screens.
  let touch = null;
  dlg.addEventListener("touchstart", e => { const t = e.changedTouches[0]; touch = { x: t.clientX, y: t.clientY }; }, { passive: true });
  dlg.addEventListener("touchend", e => {
    if (!touch) return;
    const t = e.changedTouches[0], dx = t.clientX - touch.x, dy = t.clientY - touch.y;
    touch = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
  }, { passive: true });

  // — keyboard —
  document.addEventListener("keydown", e => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if ($("settings").open) { if (e.key === "Escape") { e.preventDefault(); $("settings").close(); } return; }
    const t = e.target, onControl = t.closest && t.closest("button, input, select, textarea, a");
    if (dlg.open) {
      if (e.key === "ArrowRight" || e.key === "PageDown" || (e.key === " " && !onControl)) { e.preventDefault(); step(1); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); step(-1); }
      // Escape is handled natively by <dialog>.
    } else if (e.key === "ArrowRight" || e.key === "PageDown") { e.preventDefault(); jumpEra(1); }
    else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); jumpEra(-1); }
  });

  // — settings dialog —
  const sDlg = $("settings"), sForm = sDlg.querySelector("form");
  $("settingsBtn").addEventListener("click", () => {
    sForm.stepMode.value = settings.stepMode;
    sForm.overlay.value = settings.overlay;
    ["showMeanwhile", "showMissing", "blackAndWhite"].forEach(k => { sForm[k].checked = !!settings[k]; });
    sDlg.showModal();
  });
  sForm.addEventListener("change", () => {
    settings.stepMode = sForm.stepMode.value;
    settings.overlay = sForm.overlay.value;
    ["showMeanwhile", "showMissing", "blackAndWhite"].forEach(k => { settings[k] = sForm[k].checked; });
    applySettings();
  });
  sDlg.addEventListener("close", () => $("settingsBtn").focus());

  STACKED.addEventListener && STACKED.addEventListener("change", measure);
  applySettings();
})();
