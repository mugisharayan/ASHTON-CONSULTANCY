# ASHTON CONSULTANCY Website — AI Coding Assistant Prompts

Use these prompts in order with your AI coding assistant (Claude Code, Cursor, v0, etc.). Start with the **Design System** prompt so the assistant locks in the theme, then run each page prompt one at a time. Paste the logo file into the project's `/assets` or `/public` folder before you begin.

---

## 0. Design System / Global Setup Prompt

```
Build a multi-page marketing website for "ASHTON CONSULTANCY", an Agriculture, 
Social & Environmental Research consultancy based in Kampala, Uganda. Use 
React  with a component-based structure.

BRAND / LOGO
- Circular logo: white background, dark teal ring border, a 5-leaf plant icon 
  at the top (gradient from lime green on the outer-left leaves to deep green 
  on the outer-right leaf), with "ASHTON" in bold dark teal uppercase, 
  "CONSULTANCY" below it in the same dark teal uppercase, then a tagline line 
  "Agriculture, Social & Environmental" in dark teal, and "Research" in gray 
  beneath that.
- Logo file will be provided as logo.jpg/png — use it in the navbar (left) and 
  footer.

COLOR PALETTE (use as CSS variables / Tailwind theme extension)
- Primary dark (headers, footers, dark section bands, nav text): deep 
  forest/teal green, approx #0B4A3A (sample and adjust to match the provided 
  logo/wireframe exactly).
- Accent / CTA (buttons, active tab states, highlighted heading words, stat 
  numbers): lime/leaf green, approx #7CBB3F.
- Secondary text / subtitles: medium gray, approx #6B7280.
- Body text: near-black, approx #1F2A24.
- Background: white (#FFFFFF), with alternating light-gray (#F7F8F7) sections.
- Status badges: green for "Completed", orange/amber for "Ongoing".

TYPOGRAPHY
- Clean modern sans-serif (e.g. "Poppins" or "Inter") for headings, bold 
  weight for H1/H2.
- Regular sans-serif for body copy.
- Nav links: medium weight, small caps feel, dark teal, lime green on hover/active.

GLOBAL LAYOUT PATTERN
1. Top utility bar (dark teal background, small text): left = phone icon + 
   "+256 700 123 456", email icon + "info@ashtonconsultancy.com"; center/right 
   = location pin + "Kampala, Uganda"; far right = social icons (Facebook, 
   Twitter/X, Instagram, LinkedIn).
2. Main nav bar (white background): logo left; center links = Home, About Us, 
   Services (dropdown), Projects (dropdown), Insights, Contact; right = lime 
   green pill button "Request Consultation".
3. Every interior page has a dark-teal hero/banner strip with the page title 
   in white and a breadcrumb below it in the format "Home / [Page Name]".
4. Footer (dark teal background, 4 columns): 
   - Col 1: logo + short tagline sentence about evidence-based solutions, 
     social icons row.
   - Col 2: "Quick Links" — Home, About Us, Services, Projects, Insights, 
     Contact, FAQ.
   - Col 3: "Our Services" — Field Research, Data Analysis, GIS & Spatial 
     Analysis, Agricultural Advisory.
   - Col 4: "Contact Info" — address "Plot 123, Makerere Hill Road, Kampala, 
     Uganda", phone "+256 700 123 456", email "info@ashtonconsultancy.com".
   - Bottom bar: "© 2024 ASHTON CONSULTANCY. All Rights Reserved." left, 
     "Privacy Policy | Terms of Use" right.

Buttons: two styles — solid lime-green pill button with white text 
("Our Services", "Request Consultation", "Subscribe", "Send Message"), and 
outlined white/transparent pill button with white border+text used over dark 
hero images.

Set up routing/pages for: Home, About Us, Services, Projects/Portfolio, 
Insights & Resources, Contact (Contact can be its own page or the footer-area 
section shown on Home — build it as a reusable section). Confirm the theme 
tokens (colors, fonts, spacing, button/card styles) before moving to 
individual pages so every page stays visually identical.
```

---

## 1. Home Page Prompt

```
Build the ASHTON CONSULTANCY Home page using the established design system, 
with these sections top to bottom:

1. HERO SECTION
   - Full-width background image of green rolling farmland/mountains with a 
     dark overlay for text contrast.
   - Heading (large, bold, white): "Evidence-Based Solutions for" on line 1, 
     "Agriculture & Environment" on line 2 in lime green.
   - Subtext (white, smaller): "We deliver reliable field research, data 
     analysis, GIS solutions, and agricultural advisory services that drive 
     sustainable impact."
   - Two buttons side by side: solid lime-green "Our Services", and 
     outlined-white "Request Consultation".

2. "WHO WE ARE" SECTION
   - Two-column layout: left = heading "Who We Are", paragraph describing 
     ASHTON CONSULTANCY as a leading consultancy firm providing professional 
     services in field research, data analysis, GIS & spatial analysis, and 
     agricultural advisory, and a second paragraph on helping organizations 
     make informed decisions through accurate data, advanced analytics, and 
     practical solutions; lime-green outlined button "Learn More About Us".
   - Right = photo of a man in a teal/green branded polo shirt standing in a 
     crop field holding a tablet.

3. "OUR CORE SERVICES" SECTION
   - Centered heading "Our Core Services".
   - 4-column card grid, each card white with a light border/shadow, an icon 
     at top, a bold title, a 1–2 sentence description, and a "Learn More →" 
     lime-green text link:
     a. Field Research — "High-quality data collection through surveys, 
        interviews, FGDs, and digital tools."
     b. Data Analysis — "Transforming raw data into actionable insights 
        using advanced analytics."
     c. GIS & Spatial Analysis — "Mapping, spatial analysis, and remote 
        sensing for better decision-making."
     d. Agricultural Advisory — "Practical recommendations to improve 
        productivity and sustainability."

4. "OUR IMPACT IN NUMBERS" SECTION
   - Full-width dark teal band, 5 stat blocks in a row, each with a large 
     lime-green bold number and a white/gray label underneath:
     150+ Projects Completed | 250K+ Farmers Reached | 500+ Surveys 
     Conducted | 50+ Districts Covered | 120+ Research Reports

5. "FEATURED PROJECTS" SECTION
   - Centered heading "Featured Projects".
   - 4-column card grid, each with a farm/field photo, project title, region 
     location caption in gray, and "View Project →" lime-green link:
     - Agricultural Baseline Survey — Central Region, Uganda
     - GIS Mapping for Land Use — Western Region, Uganda
     - Coffee Value Chain Study — Eastern Region, Uganda
     - Climate Smart Agriculture — Northern Region, Uganda
   - Centered lime-green button below the grid: "View All Projects".

6. CONTACT / FOOTER-AREA SECTION
   - Heading "Contact Us" with breadcrumb-style label "Home / Contact".
   - 3-column layout: 
     a. Office Address, Phone Number, Email Address, Business Hours 
        (Mon–Fri, 8:00 AM–5:00 PM), each with an icon.
     b. "Send Us a Message" form: Full Name, Organization, Email Address, 
        Phone Number, "Service Required" dropdown, Message textarea, solid 
        lime-green "Send Message" button.
     c. An embedded map (placeholder map image or embed) pinned to Kampala, 
        Uganda.
   - Global footer as defined in the design system below this section.

Make sure the hero image, "Who We Are" image, and Featured Projects thumbnails 
all use warm, natural green farmland photography consistent with the 
wireframe.
```

---

## 2. About Us Page Prompt

```
Build the ASHTON CONSULTANCY "About Us" page:

1. HERO/BANNER
   - Dark teal banner, centered white heading "About Us", breadcrumb 
     "Home / About Us" below it.

2. "OUR STORY" SECTION
   - Two columns: left = heading "Our Story", 2 short paragraphs: first 
     about being founded with a passion for excellence and commitment to 
     sustainability, growing into a trusted partner for organizations across 
     Uganda and beyond; second about combining local knowledge with modern 
     technology to deliver solutions that transform communities and protect 
     the environment.
   - Below the paragraphs, 3 icon rows: 
     - Vision — "A sustainable future where data drives positive change."
     - Mission — "To provide reliable data, insightful analysis, and 
       practical recommendations for sustainable development."
     - Core Values — "Precision, Compassion, Innovation, Integrity, 
       Sustainability"
   - Right column = photo of a man kneeling in a young maize field holding a 
     tablet/clipboard, wearing a wide-brim hat.

3. "OUR APPROACH" SECTION
   - Full-width dark teal band, centered heading "Our Approach" with 
     subheading "We use a systematic and evidence-based approach to deliver 
     measurable results."
   - 6-step horizontal process row with circular icon badges connected by 
     arrows: Research → Collect → Analyze → Map → Recommend → Impact.

4. "OUR TEAM" SECTION
   - Centered heading "Our Team".
   - 4-column card grid, each with a circular headshot photo, name (bold), 
     and title in gray below it:
     - Dr. John Asiimwe — Managing Director
     - Sarah Nakato — Research Manager
     - Michael Ojara — GIS Specialist
     - Grace Namutebi — Data Analyst
   - Centered lime-green outlined button: "View All Team Members".

Use the same global nav and footer as the Home page.
```

---

## 3. Services Page Prompt

```
Build the ASHTON CONSULTANCY "Services" page:

1. HERO/BANNER
   - Dark teal banner over a faded green field background image, centered 
     white heading "Our Services", breadcrumb "Home / Services".

2. FILTER TABS
   - Horizontal pill/tab row, centered, with tabs: "All Services" (active, 
     solid lime-green), "Field Research", "Data Analysis", "GIS & Spatial", 
     "Agricultural Advisory" (inactive tabs = white/outlined).
   - Clicking a tab filters/shows the corresponding service detail block 
     below (only one detail block visible at a time, matching selected tab).

3. SERVICE DETAIL BLOCK (example shown for "Field Research", repeat pattern 
   for each service)
   - Two columns: left = heading "Field Research", short description 
     "We collect high-quality primary data using proven methodologies and 
     modern tools.", then an 8-item checklist in 2 sub-columns each item with 
     a green checkmark icon:
     Column A: Agricultural Surveys, Household Surveys, Monitoring & 
     Evaluation (M&E), Digital Data Collection
     Column B: Research Design, Enumerator Training, Focus Group Discussions, 
     Key Informant Interviews
   - Below checklist: solid lime-green "Request Consultation" button.
   - Right column: photo of a field researcher in a teal polo shirt working 
     in a crop field with a tablet.
   - Build equivalent detail blocks for Data Analysis, GIS & Spatial 
     Analysis, and Agricultural Advisory with their own relevant checklist 
     items and imagery, following the identical layout.

4. FAQ SECTION
   - Dark teal banner heading "Frequently Asked Questions" with breadcrumb 
     "Home / FAQ".
   - Left column: accordion list (expand/collapse) with these questions:
     - What services does ASHTON CONSULTANCY provide?
     - Which regions do you operate in?
     - How do I request consultancy services?
     - Do you provide GIS mapping services?
     - How long does a consultancy project take?
   - Right column: a card titled "Still have questions?" with a short 
     sentence inviting the user to reach out, and a solid lime-green 
     "Request Consultation" button.

Use the same global nav and footer as the Home page.
```

---

## 4. Projects / Portfolio Page Prompt

```
Build the ASHTON CONSULTANCY "Projects / Portfolio" page:

1. HERO/BANNER
   - Dark teal banner over a green landscape background image, centered 
     white heading "Projects / Portfolio", breadcrumb "Home / Projects".

2. FILTER TABS
   - Horizontal tab row: "All Projects" (active, solid lime-green), 
     "Completed", "Ongoing" (inactive/outlined). Filtering shows/hides cards 
     by status.

3. PROJECT CARD GRID
   - 3-column grid (2 rows visible by default), each card: project photo, 
     bold title, region/location in gray, status badge (green pill 
     "Completed" or amber/orange pill "Ongoing"), and "View Details →" 
     lime-green link. Cards:
     - Agricultural Baseline Survey — Central Region, Uganda — Completed
     - GIS Mapping for Land Use — Western Region, Uganda — Completed
     - Coffee Value Chain Study — Eastern Region, Uganda — Completed
     - Climate Smart Agriculture — Northern Region, Uganda — Ongoing
     - Market Assessment Study — Kampala, Uganda — Ongoing
     - Environmental Impact Study — South Western Region, Uganda — Ongoing
   - Centered lime-green "Load More Projects" button below the grid 
     (paginate or reveal more cards on click).

Use the same global nav and footer as the Home page.
```

---

## 5. Insights & Resources Page Prompt

```
Build the ASHTON CONSULTANCY "Insights & Resources" page:

1. HERO/BANNER
   - Dark teal banner over a green field background image, centered white 
     heading "Insights & Resources", breadcrumb "Home / Insights".

2. CATEGORY FILTER TABS
   - Horizontal tab row: "All" (active, solid lime-green), "Agriculture", 
     "GIS", "Research", "Environment", "Technology" (inactive/outlined).

3. ARTICLE CARD GRID
   - 3-column card grid, each with a photo, publish date (gray, small), bold 
     title, and "Read More →" lime-green link:
     - Climate-Smart Agriculture Practices — May 10, 2024
     - GIS Applications in Agriculture — April 28, 2024
     - Data-Driven Decision Making — April 15, 2024
   - Centered lime-green "View All Articles" button below the grid.

4. NEWSLETTER SECTION
   - Full-width dark teal band, centered heading "Subscribe to Our 
     Newsletter", subtext about getting the latest updates, insights, and 
     news.
   - Centered email input field with a solid lime-green "Subscribe" button 
     attached to its right.

Use the same global nav and footer as the Home page.
```

---

## 6. Shared Footer Component Prompt (reference again if the assistant needs it standalone)

```
Build a reusable Footer component, dark teal background, 4-column grid on 
desktop (stacked on mobile):

Column 1: ASHTON CONSULTANCY logo, one-line tagline: "Evidence-based 
solutions for agriculture and environmental impact through research, data, 
and innovation." Row of 4 social icons (Facebook, Twitter/X, Instagram, 
LinkedIn) as circular outlined buttons.

Column 2 — "Quick Links": Home, About Us, Services, Projects, Insights, 
Contact, FAQ (each a plain link, lime-green on hover).

Column 3 — "Our Services": Field Research, Data Analysis, GIS & Spatial 
Analysis, Agricultural Advisory.

Column 4 — "Contact Info": address icon + "Plot 123, Makerere Hill Road, 
Kampala, Uganda"; phone icon + "+256 700 123 456"; email icon + 
"info@ashtonconsultancy.com".

Bottom bar (thin border-top, smaller text): left "© 2024 ASHTON CONSULTANCY. 
All Rights Reserved.", right "Privacy Policy | Terms of Use".
```

---

## How to use this doc
1. Feed the **Design System / Global Setup** prompt first so your AI coding 
   assistant scaffolds the project, theme, and shared Nav/Footer components.
2. Then feed each page prompt one at a time, in order, so the assistant 
   builds on the same design tokens instead of drifting.
3. Attach `logo.jpg` and the wireframe screenshot to the same chat/session so 
   the assistant can visually cross-check colors, spacing, and image style 
   (photo tone, icon style) against the reference.
4. After each page, ask the assistant to compare its output against the 
   wireframe screenshot section-by-section before moving to the next prompt.
