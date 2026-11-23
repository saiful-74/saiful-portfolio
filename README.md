# Saiful Islam — Portfolio

Personal portfolio website. One page, dark editorial design, built with React, Vite and Tailwind CSS.

Sections, top to bottom: Hero, Projects, About, Skills, Research, Education, Contact, Footer.

## Features

- Works on phones, tablets and desktops (checked from 320px to 1440px wide)
- All text and links are kept in simple data files, separate from the layout code
- Missing information is left out or clearly labeled, never replaced with made-up content
- A project can be hidden and restored with one value, without deleting its data
- On desktop, each project image stays in view while its description scrolls
- Dark theme by default, with a light theme the visitor can switch to (the choice is remembered)
- Keyboard friendly: skip link, visible focus ring, Escape closes the mobile menu
- Animations switch off for visitors who prefer reduced motion
- No backend, no database and no contact form

## Run it on your computer

You need [Node.js](https://nodejs.org) 20.19+ or 22.12+. Check your version with:

```bash
node -v
```

Then, in the project folder:

```bash
npm install      # first time only: downloads the dependencies
npm run dev      # starts the site and prints its address, usually http://localhost:5173
```

Press `Ctrl + C` in the terminal to stop the site.

Other commands:

| Command | What it does |
| --- | --- |
| `npm run build` | Creates the final site in the `dist/` folder. Run this before deploying to check for errors. |
| `npm run preview` | Shows the built `dist/` site, usually at http://localhost:4173 |

## Configuration

No extra configuration is required.

- No environment variables and no `.env` file
- No API keys, passwords or accounts needed to run the site
- No `vercel.json` file needed for deployment
- Tailwind CSS is set up inside `src/index.css`, so there is no `tailwind.config.js` file

## Folder structure

```
index.html              Page shell: browser tab title, description, font links
package.json            Project name, commands and dependencies
package-lock.json       Exact dependency versions (created by npm, do not edit)
vite.config.js          Build tool setup
.gitignore              Files and folders that git should not upload
README.md               This file
public/                 Files copied to the site as they are
  favicon.svg           Browser tab icon
  images/               Your photo and project screenshots (create this folder when you add the first image)
src/
  main.jsx              Entry point: starts the app
  App.jsx               Order of the sections on the page
  index.css             Design tokens (colors, fonts) and global styles
  data/                 TEXT AND LINKS LIVE HERE
    profile.js          Name, role, intro, email, GitHub, LinkedIn, resume, photo, menu links
    projects.js         Projects
    about.js            About text
    skills.js           Skills and their levels
    research.js         Research topic and interests
    education.js        University details
  components/           Layout of each part of the page
    Header.jsx          Top bar and mobile menu
    ThemeToggle.jsx     Sun/Moon button that switches between dark and light theme
    Hero.jsx            Name, role, intro, photo
    Projects.jsx        List of project cards
    ProjectCard.jsx     One project card, including the panel shown when it has no screenshot
    About.jsx           About section
    Skills.jsx          Skills section
    Research.jsx        Research section
    Education.jsx       Education section
    Contact.jsx         Contact section
    Footer.jsx          Bottom bar
    Section.jsx         Shared spacing and heading for every section
    Reveal.jsx          Fade-in when a block scrolls into view
    Pending.jsx         Small "To be added" label for a missing project detail
```

Created on your computer and not uploaded to GitHub (listed in `.gitignore`):

```
node_modules/           Downloaded dependencies (created by npm install)
dist/                   The built site (created by npm run build)
review-screenshots/     Screenshots taken while reviewing the design
PROJECT_NOTES.md        Private to-do notes
```

**Rule of thumb:** to change words or links, edit a file in `src/data/`. To change how something looks, edit a file in `src/components/` or `src/index.css`.

Two pieces of text are not in `src/data/`: the browser tab title and description (in `index.html`) and the footer line (in `src/components/Footer.jsx`).

## How placeholders work

In the data files, a value of `null` (or an empty list `[]`) means "not supplied yet". Nothing fake is ever shown. What visitors see depends on the item:

| Missing item | What the site shows |
| --- | --- |
| Photo, LinkedIn, resume | Nothing. That part is left out until you add it. |
| Research summary, degree name, education years | Nothing. That line is left out until you add it. |
| Project screenshot | A plain panel with the words "Screenshot coming soon". |
| A project's text details or links (status, problem, contribution, features, tech stack, live link, source link) | A small dashed **"To be added"** label. |

Visitors never see file names or setup instructions. Because project text details do show a "To be added" label, fill them in before you show a project, or keep the project hidden (see "Hide or restore a project").

To fill a text value, replace `null` with real text in quotes:

```js
// before
linkedin: null,

// after
linkedin: "https://www.linkedin.com/in/your-name",
```

To fill a list, put each item in quotes, separated by commas, inside the square brackets:

```js
// before
features: [],

// after
features: ["First feature", "Second feature", "Third feature"],
```

Every placeholder has a `// TODO (Saiful)` comment next to it. Search the `src/data/` folder for `TODO` to find them all.

## Common edits

### Change the hero text

Open `src/data/profile.js`. `role` is the small line above the name, `intro` is the paragraph under it, and `facts` are the three short lines at the bottom of the hero.

### Add your photo

1. Create the folder `public/images/` if it does not exist.
2. Put the image there, for example `public/images/saiful.jpg`. A portrait shape (4:5) works best.
3. In `src/data/profile.js` set `photo: "/images/saiful.jpg"`.

### Add your resume

1. Put the PDF in `public/`, named `resume.pdf`.
2. In `src/data/profile.js` set `resumeUrl: "/resume.pdf"`.

A "Resume" link then appears in the header and in the Contact section.

### Add LinkedIn

In `src/data/profile.js` set `linkedin` to your full profile URL. The link appears in the Hero and Contact sections.

### Add a project screenshot

1. Put the image in `public/images/`, for example `public/images/localcb.png`. A wide shape (16:10) works best.
2. In `src/data/projects.js`, in that project, set:

```js
screenshot: "/images/localcb.png",
screenshotAlt: "LocalChefBazaar home page showing the meal list",
```

`screenshotAlt` is a short description of the picture for people who cannot see it.

Until a project has a screenshot, the site shows a plain panel in its place, with the words "Screenshot coming soon". The panel disappears by itself when you set `screenshot`.

### Image size guidance

Large images make the page slow, especially on phones.

| Image | Suggested size | Suggested file size |
| --- | --- | --- |
| Photo | about 800 × 1000 pixels | under 200 KB |
| Project screenshot | about 1280 × 800 pixels | under 300 KB |

JPG or WebP suits photos. PNG or WebP suits screenshots. Resize and compress an image before adding it.

### Add or edit a project

Open `src/data/projects.js`. Copy one whole project object (from its `{` to its `},`), paste it, and change the values. The order in the file is the order on the site.

Two values must be different for every project:

- `id`: a short name in lowercase with no spaces. Two projects must never share an `id`.
- `number`: the number shown on the card, such as `"01"`, `"02"`, `"03"`. Keep them in order.

Example:

```js
{
  id: "my-new-project",
  number: "03",
  title: "My New Project",
  type: "Solo project",
  status: "In progress",

  problem: "One or two sentences about what the project does and who it is for.",
  contribution: "What you built yourself.",
  features: ["First feature", "Second feature", "Third feature"],
  stack: ["React", "Node.js", "MongoDB"],

  screenshot: null,
  screenshotAlt: "",

  links: {
    live: null,
    liveNote: null,
    source: null,
    sourceBackend: null,
  },
},
```

Leave a value as `null` (or a list as `[]`) if you do not have it yet. Only write what is true and what you can show.

### Hide or restore a project

You can hide a project from the site without deleting its data. Open `src/data/projects.js` and use the `hidden` value inside that project:

```js
{
  id: "my-project",
  hidden: true,    // true = not shown on the site
  ...
}
```

- **Hide a project:** add `hidden: true,` to it.
- **Restore a project:** change it to `hidden: false,` or delete the line.

A project with no `hidden` line is shown. The remaining cards keep their order, and the image still alternates left and right. Check that the `number` values still run in order after you hide or restore a card.

Before you restore a hidden project, fill in its details first, so the card does not appear full of "To be added" labels.

### Add or remove a live site notice

A project can show a "Live site notice" box under its links. Use it to tell visitors honestly when a live demo is not fully working, for example when its backend is down.

The text comes from the `liveNote` value inside that project's `links` in `src/data/projects.js`:

```js
links: {
  live: "https://example.com",
  liveNote: "The frontend is online, but some features do not load right now.",
  ...
},
```

- **Show a notice:** set `liveNote` to a short, plain sentence that says what does not work.
- **Remove a notice:** set `liveNote` to `null`. Do this only after you have opened the live site and checked that it really works again.

### Change the About text

Open `src/data/about.js`. `lead` is the large opening line, `paragraphs` is the list of paragraphs, and `openTo` is the last line. Set `openTo` to `null` to remove that line.

### Change skills

Open `src/data/skills.js`. Each skill has a `name` and a `level`. The level must be one of:

| Value | Shown on the site as |
| --- | --- |
| `"used"` | Used in projects |
| `"learning"` | Learning |
| `"exploring"` | Exploring |
| `null` | To confirm |

Be honest with levels. There are no percentage bars on purpose.

### Change education

Open `src/data/education.js`. Fill `degree` and `period` when you have the exact details.

### Change the research section

Open `src/data/research.js`. Keep `status` as "In progress — not published" until a paper is really published.

### Change the menu links

Open `src/data/profile.js` and edit `navLinks`. Each `href` must match the `id` of a section on the page, for example `#projects`.

### Change the browser tab title

Open `index.html` and edit the `<title>` line and the `description` line below it.

### Change colors or fonts

Open `src/index.css`. The `@theme` block at the top holds the dark theme colors and the three fonts. The block below it, `:root[data-theme="light"]`, holds the light theme colors. Change a color there and the whole site updates. See "Dark and light theme" below before you change a color.

To change a font, do two things: change the font name in the `@theme` block, and change the Google Fonts link in `index.html` so that the new font is loaded.

## Dark and light theme

The site has a dark theme and a light theme. A Sun/Moon button in the header switches between them.

How it behaves:

- **First visit:** always the dark theme, whatever the visitor's computer is set to.
- **After a visitor clicks the button:** their choice is saved in their browser (`localStorage`, key `theme`) and is used on every later visit.
- **The computer's own dark/light setting** never changes a saved choice.
- **No flash:** a small script at the top of `index.html` applies a saved light choice before the page is drawn.
- **Reduced motion:** switching fades the colors for a quarter of a second, unless the visitor has turned on "reduce motion" in their system settings.
- **JavaScript turned off:** the dark theme is shown.

Where the colors live, in `src/index.css`:

| Color name | What it is used for |
| --- | --- |
| `bg` | Page background |
| `surface` | Cards and raised areas |
| `chip` | Small tags, such as the tech stack |
| `line` | Borders and dividers |
| `ink` | Main text |
| `muted` | Secondary text |
| `accent` | The violet, used for shapes: the main button, dots, underlines, focus ring |
| `accent-text` | The violet when it is used as text |
| `on-accent` | Text that sits on top of the violet, such as the button label |

The light theme uses a darker violet for `accent-text`, because the normal violet is too pale to read as text on white. If you change any color, check that text stays readable (WCAG AA contrast: at least 4.5 to 1 for normal text). A free online "contrast checker" can measure it.

Two places outside `src/index.css` repeat the page background color, for the color of the browser bar on phones. Update them too if you change `bg`: `index.html` (the `theme-color` line and the small theme script) and `src/components/ThemeToggle.jsx` (`BROWSER_BAR_COLOR`).

## Deploy to Vercel

Vercel can host this site on its free plan, and it rebuilds the site every time you push to GitHub. You need a GitHub account and [Git](https://git-scm.com) installed.

Please note: a public GitHub repository shows all the code and text in this project to everyone, including the email address used on the site.

### Before you deploy

1. Run `npm run build`. It must finish without errors.
2. Run `npm run preview` and look through the whole page once.
3. Check that no "To be added" label is visible on the page. If one is, fill in that detail or hide that project.

### Step 1 — Set up Git (first time only)

Check that Git is installed:

```bash
git --version
```

Tell Git who you are. Use your own name and the email of your GitHub account:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

This email is saved in every commit and is visible in a public repository. If you want to keep it private, GitHub offers a "noreply" address under **Settings → Emails** that you can use here instead.

### Step 2 — Create the repository on GitHub

1. Sign in at [github.com](https://github.com) and open [github.com/new](https://github.com/new).
2. Type a repository name, for example `portfolio`.
3. Choose **Public**.
4. Do **not** tick "Add a README", ".gitignore" or "license". The repository must start empty.
5. Click **Create repository**.

### Step 3 — Upload the code

In the project folder, run these commands one at a time. In the fifth line, replace `portfolio` if you chose a different repository name.

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/saiful-74/portfolio.git
git push -u origin main
```

The first time you push, a browser window opens and asks you to sign in to GitHub. Sign in and allow access, and the upload continues.

The `.gitignore` file already keeps `node_modules/`, `dist/`, `.env` files, review screenshots and private notes out of the repository.

### Step 4 — Import the repository in Vercel

Button names on Vercel can change over time. Look for the closest match.

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **Add New… → Project**.
3. Find your repository and click **Import**.
4. Vercel detects Vite by itself. Check that the settings show:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Leave the environment variables empty. None are needed.
6. Click **Deploy**.

When the build finishes, Vercel shows the address of your live site.

### Step 5 — Check the live site

- Open the address on your computer and on your phone.
- Click every menu link, the GitHub link, the email link and every project link.
- Open the mobile menu and close it.
- Add the live address to the top of this README and to your GitHub profile.

### Step 6 — Update the site later

Edit files, check with `npm run build`, then:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

Vercel rebuilds and publishes the new version by itself.

### Optional — Custom domain

In the Vercel project, open **Settings → Domains**, add your domain, and follow the DNS instructions shown there.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| `npm install` or `npm run dev` fails with a Node version message | Run `node -v`. You need Node.js 20.19+ or 22.12+. |
| The site does not open at `http://localhost:5173` | Another program may be using that port. Vite then picks the next free port. Use the address printed in the terminal. |
| The page is blank or the terminal shows a red error after you edit a data file | Usually a missing comma, quote or bracket. Compare your edit with the lines around it. |
| An image does not show | Check that the file is inside `public/`, and that the path starts with `/` and matches the file name exactly, including capital letters. |
| The build works on your computer but fails on Vercel | Open the build log on Vercel and read the first error. Check the "Node.js Version" in the Vercel project settings: it must meet the same requirement, Node.js 20.19+ or 22.12+ (for example 22.x). |
| A project's live demo opens but shows no data | That project's own backend may be down. This portfolio cannot fix it. Fix and redeploy the backend in that project's repository, and add a live site notice here until it works. |
| `git push` is rejected | Make sure the GitHub repository was created empty, and that the address in `git remote add origin` matches your repository name. |

## Quality checks done

Checked in November 2026 in Microsoft Edge (Chromium) on a production build:

- No horizontal scrolling from 320px to 1440px wide, and at 200% zoom
- Layout reviewed in screenshots at phone (390px), tablet (768px) and desktop (1440px) widths
- Automated accessibility scan (axe-core, WCAG 2.2 AA rules): 0 violations on desktop, mobile, and with the mobile menu open
- Full keyboard use: visible focus ring on every link and button, skip link, Escape closes the mobile menu
- Animations switch off for users who prefer reduced motion
- No console errors, no failed requests, all external links respond
- Dark and light theme: dark on first visit, saved choice restored after refresh, no flash of the wrong theme, WCAG AA text contrast and 0 accessibility-scan problems in both themes

Not yet checked: Firefox, Safari, a real phone, and a screen reader. Test these before sharing the link widely.

## Tech and privacy

React 19, Vite 8, Tailwind CSS 4, lucide-react (icons).

The site has no backend, and its own code uses no analytics and sets no cookies. It does load its fonts from Google Fonts, so each visitor's browser sends a request to Google's servers. Links to GitHub and to the live project sites lead to other websites with their own policies.
