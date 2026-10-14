/*
 * Timeline content. Edit moments here.
 *
 *   id      Also the image file name: put a picture at images/moments/<id>.jpg
 *           (or .jpeg / .png / .webp) and it appears on that moment's slide.
 *   lane    a = Art & Design, t = Technology, s = Society & Ads, m = Music
 *   year    Sort position on the timeline (decimals order moments within a year).
 *   label   The date shown on screen, e.g. "c.1040" or "1970s".
 *   lookAt  Optional example work, shown under "Look at".
 *   alt     Optional description of the image for screen-reader users. If left
 *           empty, the "Look at" text (or the title) is used.
 */
const LANES = [
  { key: "a", num: "01", name: "Art & Design" },
  { key: "t", num: "02", name: "Technology" },
  { key: "s", num: "03", name: "Society & Ads" },
  { key: "m", num: "04", name: "Music" }
];
const ERAS = [
  { from: 0, to: 1449, range: "1025–1449", name: "Origins of print" },
  { from: 1450, to: 1799, range: "1450–1799", name: "The press age" },
  { from: 1800, to: 1899, range: "1800–1899", name: "Industrial print" },
  { from: 1900, to: 1944, range: "1900–1944", name: "Modernism & the avant-garde" },
  { from: 1945, to: 1969, range: "1945–1969", name: "Post-war" },
  { from: 1970, to: 1989, range: "1970–1989", name: "Punk & pixels" },
  { from: 1990, to: 2009, range: "1990–2009", name: "The web" },
  { from: 2010, to: 9999, range: "2010–Now", name: "Networked & generative" }
];

const MOMENTS = [
  { id: "1025-guido-darezzos-staff", lane: "m", year: 1025, label: "c.1025", title: "Guido d'Arezzo's staff", body: "Guido d'Arezzo sets out lines-and-spaces notation. Music becomes something you can write down precisely, and later print.", lookAt: "", alt: "" },
  { id: "1040-bi-shengs-movable-type", lane: "t", year: 1040, label: "c.1040", title: "Bi Sheng's movable type", body: "In Song-dynasty China, Bi Sheng makes individual characters from fired clay that can be set, printed and reused. The reusable letter is born.", lookAt: "", alt: "" },
  { id: "1300-blackletter-takes-hold", lane: "a", year: 1300, label: "c.1300", title: "Blackletter takes hold", body: "Dense, angular Textura becomes the formal book hand of northern Europe. Gutenberg will model his first typeface directly on it.", lookAt: "", alt: "" },
  { id: "1347-the-black-death", lane: "s", year: 1347, label: "1347", title: "The Black Death", body: "Plague kills perhaps a third of Europe. Labour becomes scarce and costly, and slow hand copying starts to look ripe for mechanisation.", lookAt: "", alt: "" },
  { id: "1377-jikji-printed-in-metal", lane: "t", year: 1377, label: "1377", title: "Jikji, printed in metal", body: "Korean monks print the Jikji with cast metal type: the oldest surviving book made this way, decades before Gutenberg.", lookAt: "", alt: "" },
  { id: "1439-gutenbergs-press", lane: "t", year: 1439, label: "1439", title: "Gutenberg's press", body: "Johannes Gutenberg combines cast metal type, oil-based ink and a screw press. Moving type makes mass production of text possible; his 42-line Bible follows c.1455.", lookAt: "", alt: "" },
  { id: "1460-block-books", lane: "t", year: 1460, label: "1460s", title: "Block books", body: "Whole pages, image and text together, are cut into single woodblocks. Cheap illustrated books spread religious stories to a wider public.", lookAt: "Biblia Pauperum", alt: "" },
  { id: "1501-music-goes-to-press", lane: "m", year: 1501, label: "1501", title: "Music goes to press", body: "Ottaviano Petrucci's Odhecaton is the first book of polyphonic music printed from movable type. Compositions travel faster than musicians.", lookAt: "", alt: "" },
  { id: "1517-luthers-pamphlets", lane: "s", year: 1517, label: "1517", title: "Luther's pamphlets", body: "Martin Luther's Ninety-five Theses spread across Germany in weeks via cheap printed pamphlets. Print becomes a political weapon.", lookAt: "", alt: "" },
  { id: "1620-the-coranto-and-the-first-adverts", lane: "s", year: 1620, label: "1620s", title: "The coranto and the first adverts", body: "Single-sheet news 'corantos' appear in Amsterdam and London, precursors to the newspaper. Paid announcements soon follow: the first printed adverts.", lookAt: "", alt: "" },
  { id: "1796-lithography", lane: "t", year: 1796, label: "1796", title: "Lithography", body: "Alois Senefelder prints from a flat stone using grease and water. Image and lettering can be drawn freely rather than carved.", lookAt: "", alt: "" },
  { id: "1814-the-steam-press", lane: "t", year: 1814, label: "1814", title: "The steam press", body: "The Times is printed on Friedrich Koenig's steam-powered press at over 1,000 sheets an hour. Print goes industrial.", lookAt: "", alt: "" },
  { id: "1837-chromolithography", lane: "t", year: 1837, label: "1837", title: "Chromolithography", body: "Godefroy Engelmann patents a way to print lithographs in multiple colours. Colour printing reaches posters, packaging and labels.", lookAt: "", alt: "" },
  { id: "1841-fox-talbots-calotype", lane: "t", year: 1841, label: "1841", title: "Fox Talbot's calotype", body: "Henry Fox Talbot patents the negative–positive process. One negative can make many prints: photography becomes reproducible.", lookAt: "", alt: "" },
  { id: "1870-mass-literacy-mass-adverts", lane: "s", year: 1870, label: "1870", title: "Mass literacy, mass adverts", body: "The Elementary Education Act extends schooling in England and Wales. Local papers fill with display advertising for a newly reading public.", lookAt: "Advertisement in the Kilburn Times, 28 May 1870", alt: "" },
  { id: "1877-the-phonograph", lane: "m", year: 1877, label: "1877", title: "The phonograph", body: "Thomas Edison records and plays back sound. Music becomes a product you can own, and eventually one that needs packaging.", lookAt: "", alt: "" },
  { id: "1885-the-halftone-screen", lane: "t", year: 1885, label: "1885", title: "The halftone screen", body: "Frederic Ives develops a screen that breaks photographs into printable dots. Photos can now be printed alongside type on the same press.", lookAt: "", alt: "" },
  { id: "1887-monotype", lane: "t", year: 1887, label: "1887", title: "Monotype", body: "Tolbert Lanston's machine casts individual letters mechanically. Typesetting speeds up dramatically while keeping fine typographic control.", lookAt: "", alt: "" },
  { id: "1888-kodak-for-everyone", lane: "t", year: 1888, label: "1888", title: "Kodak for everyone", body: "'You press the button, we do the rest.' The Kodak camera makes photography available to the general public.", lookAt: "", alt: "" },
  { id: "1890-art-nouveau", lane: "a", year: 1890, label: "c.1890", title: "Art Nouveau", body: "An ornamental style of flowing, organic line that flourishes across Europe and the US until about 1910, from posters to architecture.", lookAt: "Alphonse Mucha, St Louis World's Fair poster (1903)", alt: "" },
  { id: "1904-offset-printing", lane: "t", year: 1904, label: "1904", title: "Offset printing", body: "Ira Rubel discovers offset lithography by accident. It becomes the workhorse of commercial print for the next century.", lookAt: "", alt: "" },
  { id: "1907-cubism", lane: "a", year: 1907, label: "c.1907", title: "Cubism", body: "Single-viewpoint perspective is abandoned for simple geometric shapes, interlocking planes and, later, collage.", lookAt: "Pablo Picasso, Girl with a Mandolin (1910)", alt: "" },
  { id: "1909-futurism", lane: "a", year: 1909, label: "1909", title: "Futurism", body: "Begun in Italy, Futurism rejects tradition and embraces the energy and speed of modern technology. Typography explodes across the page.", lookAt: "Marinetti, In the Evening, Lying on her Bed… (1919)", alt: "" },
  { id: "1913-the-rite-of-spring", lane: "m", year: 1913, label: "1913", title: "The Rite of Spring", body: "Stravinsky's ballet premieres in Paris to uproar. The avant-garde in music arrives as loudly as in art.", lookAt: "", alt: "" },
  { id: "1914-the-war-poster", lane: "s", year: 1914, label: "1914", title: "The war poster", body: "WWI turns the poster into a tool of mass persuasion: recruitment, rationing, propaganda.", lookAt: "Alfred Leete, Lord Kitchener Wants You (1914)", alt: "" },
  { id: "1915-suprematism", lane: "a", year: 1915, label: "c.1915", title: "Suprematism", body: "Kazimir Malevich's Russian abstract movement: simple geometric shapes associated with spiritual purity.", lookAt: "", alt: "" },
  { id: "1916-dada", lane: "a", year: 1916, label: "1916", title: "Dada", body: "A European movement (1916–23) that flouts conventional values through nonsense, travesty and incongruity.", lookAt: "Marcel Duchamp, Fountain (1917)", alt: "" },
  { id: "1917-de-stijl", lane: "a", year: 1917, label: "1917", title: "De Stijl", body: "Rejects pre-war decoration and pushes Cubism to total abstraction: vertical and horizontal lines, primary colours.", lookAt: "Piet Mondrian (1921)", alt: "" },
  { id: "1919-constructivism", lane: "a", year: 1919, label: "1919", title: "Constructivism", body: "Art as construction, not composition: an analysis of materials and form aimed at functional, political design.", lookAt: "El Lissitzky, Beat the Whites with the Red Wedge (1919)", alt: "" },
  { id: "1919-the-bauhaus", lane: "a", year: 1919.5, label: "1919", title: "The Bauhaus", body: "A German art school combining art and craft. It begins to formalise design principles: typography, grids, structure, composition.", lookAt: "László Moholy-Nagy (1922); Herbert Bayer, Universal Alphabet (1925)", alt: "" },
  { id: "1922-graphic-design-is-named", lane: "a", year: 1922, label: "1922", title: "'Graphic design' is named", body: "Book designer William Addison Dwiggins first uses the term to describe structuring and managing the visuals of a book.", lookAt: "", alt: "" },
  { id: "1924-surrealism", lane: "a", year: 1924, label: "1924", title: "Surrealism", body: "An avant-garde movement seeking to release the unconscious mind through the irrational juxtaposition of images.", lookAt: "René Magritte, The Son of Man (1964)", alt: "" },
  { id: "1928-the-new-typography", lane: "a", year: 1928, label: "1928", title: "The New Typography", body: "Jan Tschichold's Die neue Typographie sets out the principles of typographic modernism: asymmetry, sans serif, function first.", lookAt: "Tschichold, Dance Festival poster (1928)", alt: "" },
  { id: "1932-photomontage-as-protest", lane: "a", year: 1932, label: "1932", title: "Photomontage as protest", body: "Cutting and recombining photographs into new images becomes a weapon against fascism.", lookAt: "John Heartfield, Adolf the Superman (1932)", alt: "" },
  { id: "1935-the-wpa-social-realism", lane: "s", year: 1935, label: "1935", title: "The WPA & Social Realism", body: "The New Deal employs artists through the WPA. Social Realism treats themes of social protest in a naturalistic manner.", lookAt: "Alfred Castagne sketching WPA workers (1939)", alt: "" },
  { id: "1936-television-broadcasts", lane: "t", year: 1936, label: "1936", title: "Television broadcasts", body: "The BBC launches the first regular high-definition TV service. The screen begins its long rise as a design medium.", lookAt: "", alt: "" },
  { id: "1940-the-album-cover", lane: "m", year: 1940, label: "1940", title: "The album cover", body: "Alex Steinweiss at Columbia replaces plain sleeves with illustrated covers, and sales jump. Music graphics is born.", lookAt: "", alt: "" },
  { id: "1945-the-new-york-school", lane: "a", year: 1945, label: "1940s", title: "The New York School", body: "Emphasis on the expression of ideas and open, direct communication: conceptual thinking in visual form.", lookAt: "Saul Bass, The Man with the Golden Arm (1955)", alt: "" },
  { id: "1948-the-lp", lane: "m", year: 1948, label: "1948", title: "The LP", body: "Columbia's 12-inch long-player gives designers a large, square canvas that becomes a defining format.", lookAt: "", alt: "" },
  { id: "1950-swiss-style", lane: "a", year: 1950, label: "1950s", title: "Swiss Style", body: "The International Typographic Style: grids, sans serifs, objectivity. Its focus on legibility and simplicity still shapes the field.", lookAt: "Josef Müller-Brockmann, Auto Club poster (1955); Neue Grafik", alt: "" },
  { id: "1954-push-pin-studios", lane: "a", year: 1954, label: "1954", title: "Push Pin Studios", body: "Milton Glaser and Seymour Chwast found Push Pin, an eclectic, illustrative counterpoint to Swiss rigour.", lookAt: "Milton Glaser, I ❤ NY (1977)", alt: "" },
  { id: "1959-think-small", lane: "s", year: 1959, label: "1959", title: "Think Small", body: "Helmut Krone and DDB's Volkswagen ads use honesty, wit and white space. Conceptual advertising arrives.", lookAt: "Helmut Krone, Think Small (1959)", alt: "" },
  { id: "1962-pop-art", lane: "a", year: 1962, label: "1962", title: "Pop Art", body: "Emerging in the 1950s and flourishing in the 60s, Pop draws on popular and commercial culture.", lookAt: "Andy Warhol, Campbell's Soup Cans (1962)", alt: "" },
  { id: "1964-first-things-first", lane: "a", year: 1964, label: "1964", title: "First Things First", body: "Ken Garland and 21 others call on designers to turn from trivial advertising toward education and public service.", lookAt: "", alt: "" },
  { id: "1964-tokyos-pictograms", lane: "s", year: 1964.5, label: "1964", title: "Tokyo's pictograms", body: "Masaru Katsumie's team designs pictograms for the Tokyo Olympics, a visual language that crosses barriers of speech.", lookAt: "", alt: "" },
  { id: "1966-psychedelic-posters", lane: "m", year: 1966, label: "1966", title: "Psychedelic posters", body: "In San Francisco, concert posters dissolve lettering into vibrating colour. Psychedelia shapes dress, language, art and music.", lookAt: "Wes Wilson, The Association at the Fillmore (1966)", alt: "" },
  { id: "1967-sgt-pepper", lane: "m", year: 1967, label: "1967", title: "Sgt. Pepper", body: "Peter Blake and Jann Haworth's collage cover turns the LP sleeve into a celebrated artwork in its own right.", lookAt: "", alt: "" },
  { id: "1971-swiss-punk-new-wave", lane: "a", year: 1971, label: "1970s", title: "Swiss Punk / New Wave", body: "Wolfgang Weingart defies the grid: inconsistent letterspacing, mixed weights, type set at odd angles.", lookAt: "Wolfgang Weingart, Typographic Signs (1971)", alt: "" },
  { id: "1971-the-first-email", lane: "t", year: 1971.5, label: "1971", title: "The first email", body: "Ray Tomlinson sends the first networked email across ARPANET, the precursor to the internet.", lookAt: "", alt: "" },
  { id: "1972-corporate-identity", lane: "s", year: 1972, label: "1970s", title: "Corporate identity", body: "Companies adopt full visual identity systems: logo, colour, type and rules applied everywhere. Branding becomes strategy.", lookAt: "BP's identity, from shield (1979) to Landor's Helios (2000)", alt: "" },
  { id: "1973-hip-hop-is-born", lane: "m", year: 1973, label: "1973", title: "Hip hop is born", body: "DJ Kool Herc's Bronx parties start a culture with its own visual language, from graffiti to flyers.", lookAt: "", alt: "" },
  { id: "1975-hipgnosis", lane: "m", year: 1975, label: "1975", title: "Hipgnosis", body: "Storm Thorgerson's photographic, surreal covers define rock's visual identity for Pink Floyd, Led Zeppelin and Genesis.", lookAt: "Storm Thorgerson, Wish You Were Here (1975)", alt: "" },
  { id: "1975-betamax-vs-vhs", lane: "t", year: 1975.5, label: "1975", title: "Betamax vs VHS", body: "Sony's Betamax (1975) and JVC's VHS (1976) bring video into the home, and the format war begins.", lookAt: "", alt: "" },
  { id: "1977-punk-graphics", lane: "m", year: 1977, label: "1977", title: "Punk graphics", body: "Punk gives the disenfranchised a sound, a voice and a visual currency: ransom-note type and cut-up imagery.", lookAt: "Jamie Reid, God Save the Queen; Malcolm Garrett, Buzzcocks (1977)", alt: "" },
  { id: "1979-unknown-pleasures", lane: "m", year: 1979, label: "1979", title: "Unknown Pleasures", body: "Peter Saville's Factory Records covers for Joy Division and New Order bring modernist restraint to music graphics.", lookAt: "Peter Saville, Joy Division, Unknown Pleasures (1979)", alt: "" },
  { id: "1981-memphis", lane: "a", year: 1981, label: "1981", title: "Memphis", body: "Ettore Sottsass's group blends 1950s kitsch, Art Deco and Pop into a loud postmodern style.", lookAt: "Ettore Sottsass, Carlton room divider (1981)", alt: "" },
  { id: "1981-mtv", lane: "m", year: 1981.5, label: "1981", title: "MTV", body: "Music television launches. Bands now need a moving image identity as much as a sleeve.", lookAt: "", alt: "" },
  { id: "1982-benettons-provocations", lane: "s", year: 1982, label: "1982", title: "Benetton's provocations", body: "Oliviero Toscani's campaigns for Benetton (1982–2000) use shock and social issues to sell clothes.", lookAt: "", alt: "" },
  { id: "1984-the-macintosh", lane: "t", year: 1984, label: "1984", title: "The Macintosh", body: "Apple launches the Mac, a graphical computer with fonts and a mouse.", lookAt: "", alt: "" },
  { id: "1984-guerrilla-marketing", lane: "s", year: 1984.5, label: "1984", title: "Guerrilla marketing", body: "Jay Conrad Levinson coins the term: low-cost, unconventional tactics that achieve outsized results.", lookAt: "", alt: "" },
  { id: "1985-desktop-publishing", lane: "t", year: 1985, label: "1985", title: "Desktop publishing", body: "Apple's LaserWriter, PostScript and PageMaker put typesetting on a desk. Designers take control of production.", lookAt: "", alt: "" },
  { id: "1986-the-computer-as-medium", lane: "a", year: 1986, label: "1986", title: "The computer as medium", body: "April Greiman treats the Mac not as a tool but as a new visual medium, helping usher in digital design.", lookAt: "April Greiman, Does It Make Sense? (1986)", alt: "" },
  { id: "1989-the-berlin-wall-falls", lane: "s", year: 1989, label: "1989", title: "The Berlin Wall falls", body: "The Cold War ends and global markets open. Brands go international.", lookAt: "", alt: "" },
  { id: "1990-the-world-wide-web", lane: "t", year: 1990, label: "1990", title: "The World Wide Web", body: "Tim Berners-Lee invents HTML and the web. Hypertext makes design non-linear.", lookAt: "", alt: "" },
  { id: "1990-information-design", lane: "s", year: 1990.5, label: "1990", title: "Information design", body: "Edward Tufte's Envisioning Information argues for presenting data clearly rather than decoratively.", lookAt: "Edward Tufte, Envisioning Information (1990)", alt: "" },
  { id: "1992-rules-are-made-to-be-broken", lane: "a", year: 1992, label: "1992", title: "Rules are made to be broken", body: "David Carson's Ray Gun magazine pushes experimental, often illegible typography.", lookAt: "David Carson, Bryan Ferry interview (1994)", alt: "" },
  { id: "2001-code-as-design", lane: "a", year: 2001, label: "2001", title: "Code as design", body: "Joshua Davis's Praystation wins Ars Electronica's Golden Nica. He shares his source code openly.", lookAt: "Joshua Davis, Praystation (2001)", alt: "" },
  { id: "2004-social-media", lane: "s", year: 2004, label: "2004", title: "Social media", body: "Facebook (2004), Twitter (2006) and Instagram (2010) turn audiences into publishers.", lookAt: "", alt: "" },
  { id: "2007-the-iphone", lane: "t", year: 2007, label: "2007", title: "The iPhone", body: "Smartphones put a screen in every pocket. Design shifts to touch, apps and responsive layouts.", lookAt: "", alt: "" },
  { id: "2007-london-2012-logo", lane: "s", year: 2007.5, label: "2007", title: "London 2012 logo", body: "Wolff Olins' jagged Olympic identity divides opinion and shows how far brand systems had moved from the static logo.", lookAt: "Wolff Olins, London 2012 (2007)", alt: "" },
  { id: "2008-financial-crisis", lane: "s", year: 2008, label: "2008", title: "Financial crisis", body: "Lehman Brothers collapses. Budgets shrink, and cheaper, viral and guerrilla approaches gain ground.", lookAt: "", alt: "" },
  { id: "2010-the-ipad", lane: "t", year: 2010, label: "2010", title: "The iPad", body: "Tablets create new reading and interactive formats for magazines, books and ads.", lookAt: "", alt: "" },
  { id: "2010-interactive-viral-ads", lane: "s", year: 2010.5, label: "2010", title: "Interactive & viral ads", body: "YouTube campaigns let viewers steer the story; word of mouth is amplified online.", lookAt: "Tipp-Ex, A Hunter Shoots a Bear (2010)", alt: "" },
  { id: "2013-adaptive-identity", lane: "a", year: 2013, label: "2013", title: "Adaptive identity", body: "Experimental Jetset's responsive 'W' for the Whitney Museum flexes to fit any format.", lookAt: "Experimental Jetset, Whitney Museum (2013)", alt: "" },
  { id: "2015-streaming-takes-over", lane: "m", year: 2015, label: "2015", title: "Streaming takes over", body: "Digital music revenues overtake physical sales. The cover shrinks to a thumbnail.", lookAt: "", alt: "" },
  { id: "2015-craft-revival", lane: "a", year: 2015.5, label: "2010s", title: "Craft revival", body: "A backlash to the screen: letterpress, hand-rendered type and calligraphy return.", lookAt: "Alan Kitching; Tobias Hall", alt: "" },
  { id: "2016-blackstar", lane: "m", year: 2016, label: "2016", title: "Blackstar", body: "Jonathan Barnbrook's stark, star-built cover for David Bowie's final album.", lookAt: "Jonathan Barnbrook, Blackstar (2016)", alt: "" },
  { id: "2020-the-pandemic", lane: "s", year: 2020, label: "2020", title: "The pandemic", body: "Lockdowns move culture, commerce and education online almost overnight.", lookAt: "", alt: "" },
  { id: "2022-generative-ai", lane: "t", year: 2022, label: "2022", title: "Generative AI", body: "Image and text generators go mainstream, reopening the question of what a designer is for.", lookAt: "", alt: "" }
];
