# Moment images

Each moment on the timeline shows **one picture** on its full-screen slide. Pictures live in this folder, and the **file name decides which moment it belongs to**.

## Adding or replacing a picture

1. Find the moment's file name in the table below, for example `1501-music-goes-to-press`.
2. Save your picture with that name and one of these endings: `.jpg`, `.jpeg`, `.png` or `.webp`.
   For example `1501-music-goes-to-press.jpg`.
3. Upload it to this folder (`images/moments/`). On GitHub: open this folder, click **Add file → Upload files**, drag the picture in and click **Commit changes**.
4. Reload the website. The "Image needed" label disappears and the picture shows on the slide.

To **replace** a picture, upload a new file with exactly the same name; GitHub overwrites the old one. If two files share a name but have different endings, the site uses the first it finds in this order: `.jpg`, `.jpeg`, `.png`, `.webp`. So delete the old file if you change the ending.

Tips:
- Names are lower case, with hyphens instead of spaces, exactly as in the table.
- About 1600–2400 px on the long side looks sharp on a projector. Keep files under about 1 MB so slides open quickly.
- The site shows pictures in black and white by default (the design style's rule). Turn this off under **Settings** (the sliders button, top right) for colour work such as Mondrian.

## Describing the picture (alt text)

People using screen readers hear a description instead of seeing the picture. By default the site uses the moment's "Look at" text, or its title. For a better description, open `assets/data.js`, find the moment by its `id`, and fill in `alt`, for example:

```js
alt: "Woodcut of two printers working a wooden screw press"
```

Describe what's in the picture in one sentence; don't start with "Image of".

## Checklist

| Picture | Date | Row | Moment | File name (add .jpg / .png / .webp) |
| --- | --- | --- | --- | --- |
| **needed** | c.1025 | Music | Guido d'Arezzo's staff | `1025-guido-darezzos-staff` |
| ✓ | c.1040 | Technology | Bi Sheng's movable type | `1040-bi-shengs-movable-type` |
| **needed** | c.1300 | Art & Design | Blackletter takes hold | `1300-blackletter-takes-hold` |
| **needed** | 1347 | Society & Ads | The Black Death | `1347-the-black-death` |
| **needed** | 1377 | Technology | Jikji, printed in metal | `1377-jikji-printed-in-metal` |
| ✓ | 1439 | Technology | Gutenberg's press | `1439-gutenbergs-press` |
| ✓ | 1460s | Technology | Block books | `1460-block-books` |
| **needed** | 1501 | Music | Music goes to press | `1501-music-goes-to-press` |
| **needed** | 1517 | Society & Ads | Luther's pamphlets | `1517-luthers-pamphlets` |
| **needed** | 1620s | Society & Ads | The coranto and the first adverts | `1620-the-coranto-and-the-first-adverts` |
| **needed** | 1796 | Technology | Lithography | `1796-lithography` |
| **needed** | 1814 | Technology | The steam press | `1814-the-steam-press` |
| ✓ | 1837 | Technology | Chromolithography | `1837-chromolithography` |
| ✓ | 1841 | Technology | Fox Talbot's calotype | `1841-fox-talbots-calotype` |
| ✓ | 1870 | Society & Ads | Mass literacy, mass adverts | `1870-mass-literacy-mass-adverts` |
| ✓ | 1877 | Music | The phonograph | `1877-the-phonograph` |
| ✓ | 1885 | Technology | The halftone screen | `1885-the-halftone-screen` |
| ✓ | 1887 | Technology | Monotype | `1887-monotype` |
| ✓ | 1888 | Technology | Kodak for everyone | `1888-kodak-for-everyone` |
| ✓ | c.1890 | Art & Design | Art Nouveau | `1890-art-nouveau` |
| **needed** | 1904 | Technology | Offset printing | `1904-offset-printing` |
| ✓ | c.1907 | Art & Design | Cubism | `1907-cubism` |
| ✓ | 1909 | Art & Design | Futurism | `1909-futurism` |
| **needed** | 1913 | Music | The Rite of Spring | `1913-the-rite-of-spring` |
| **needed** | 1914 | Society & Ads | The war poster | `1914-the-war-poster` |
| **needed** | c.1915 | Art & Design | Suprematism | `1915-suprematism` |
| ✓ | 1916 | Art & Design | Dada | `1916-dada` |
| ✓ | 1917 | Art & Design | De Stijl | `1917-de-stijl` |
| ✓ | 1919 | Art & Design | Constructivism | `1919-constructivism` |
| ✓ | 1919 | Art & Design | The Bauhaus | `1919-the-bauhaus` |
| ✓ | 1922 | Art & Design | 'Graphic design' is named | `1922-graphic-design-is-named` |
| ✓ | 1924 | Art & Design | Surrealism | `1924-surrealism` |
| ✓ | 1928 | Art & Design | The New Typography | `1928-the-new-typography` |
| ✓ | 1932 | Art & Design | Photomontage as protest | `1932-photomontage-as-protest` |
| ✓ | 1935 | Society & Ads | The WPA & Social Realism | `1935-the-wpa-social-realism` |
| **needed** | 1936 | Technology | Television broadcasts | `1936-television-broadcasts` |
| **needed** | 1940 | Music | The album cover | `1940-the-album-cover` |
| ✓ | 1940s | Art & Design | The New York School | `1945-the-new-york-school` |
| **needed** | 1948 | Music | The LP | `1948-the-lp` |
| ✓ | 1950s | Art & Design | Swiss Style | `1950-swiss-style` |
| ✓ | 1954 | Art & Design | Push Pin Studios | `1954-push-pin-studios` |
| ✓ | 1959 | Society & Ads | Think Small | `1959-think-small` |
| ✓ | 1962 | Art & Design | Pop Art | `1962-pop-art` |
| ✓ | 1964 | Art & Design | First Things First | `1964-first-things-first` |
| ✓ | 1964 | Society & Ads | Tokyo's pictograms | `1964-tokyos-pictograms` |
| ✓ | 1966 | Music | Psychedelic posters | `1966-psychedelic-posters` |
| **needed** | 1967 | Music | Sgt. Pepper | `1967-sgt-pepper` |
| ✓ | 1970s | Art & Design | Swiss Punk / New Wave | `1971-swiss-punk-new-wave` |
| ✓ | 1971 | Technology | The first email | `1971-the-first-email` |
| ✓ | 1970s | Society & Ads | Corporate identity | `1972-corporate-identity` |
| **needed** | 1973 | Music | Hip hop is born | `1973-hip-hop-is-born` |
| ✓ | 1975 | Music | Hipgnosis | `1975-hipgnosis` |
| ✓ | 1975 | Technology | Betamax vs VHS | `1975-betamax-vs-vhs` |
| ✓ | 1977 | Music | Punk graphics | `1977-punk-graphics` |
| ✓ | 1979 | Music | Unknown Pleasures | `1979-unknown-pleasures` |
| **needed** | 1981 | Art & Design | Memphis | `1981-memphis` |
| **needed** | 1981 | Music | MTV | `1981-mtv` |
| ✓ | 1982 | Society & Ads | Benetton's provocations | `1982-benettons-provocations` |
| ✓ | 1984 | Technology | The Macintosh | `1984-the-macintosh` |
| **needed** | 1984 | Society & Ads | Guerrilla marketing | `1984-guerrilla-marketing` |
| ✓ | 1985 | Technology | Desktop publishing | `1985-desktop-publishing` |
| ✓ | 1986 | Art & Design | The computer as medium | `1986-the-computer-as-medium` |
| **needed** | 1989 | Society & Ads | The Berlin Wall falls | `1989-the-berlin-wall-falls` |
| ✓ | 1990 | Technology | The World Wide Web | `1990-the-world-wide-web` |
| ✓ | 1990 | Society & Ads | Information design | `1990-information-design` |
| ✓ | 1992 | Art & Design | Rules are made to be broken | `1992-rules-are-made-to-be-broken` |
| ✓ | 2001 | Art & Design | Code as design | `2001-code-as-design` |
| ✓ | 2004 | Society & Ads | Social media | `2004-social-media` |
| ✓ | 2007 | Technology | The iPhone | `2007-the-iphone` |
| ✓ | 2007 | Society & Ads | London 2012 logo | `2007-london-2012-logo` |
| **needed** | 2008 | Society & Ads | Financial crisis | `2008-financial-crisis` |
| ✓ | 2010 | Technology | The iPad | `2010-the-ipad` |
| **needed** | 2010 | Society & Ads | Interactive & viral ads | `2010-interactive-viral-ads` |
| ✓ | 2013 | Art & Design | Adaptive identity | `2013-adaptive-identity` |
| **needed** | 2015 | Music | Streaming takes over | `2015-streaming-takes-over` |
| ✓ | 2010s | Art & Design | Craft revival | `2015-craft-revival` |
| **needed** | 2016 | Music | Blackstar | `2016-blackstar` |
| **needed** | 2020 | Society & Ads | The pandemic | `2020-the-pandemic` |
| **needed** | 2022 | Technology | Generative AI | `2022-generative-ai` |