# 🎯 Bucket List

A small vanilla TypeScript web app where users can log in with a username, create dreams (goals), and organize them into themes.

All data is stored in `localStorage`, and no backend is required.

---

## 🔧 Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/AnkanGranero/bucketlist
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the TypeScript compiler in watch mode:

   ```bash
   npm run dev
   ```

---

## 🚀 Usage

You can run the app by opening `pages/login.html` in your browser.  
There’s no server — the app runs entirely in the browser using static HTML.

### Flow (as a developer)

- **Start at** `login.html`  
  Enter a username → it's saved to localStorage and you're redirected to `dashboard.html`.

- **In** `dashboard.html`
  - View all dreams
  - Mark dreams as checked/unchecked
  - Delete dreams

- **To add a new dream**
  - Go to `pages/add-dream.html`
  - Select a theme and name → it's added to localStorage

- **To manage username or themes**
  - Go to `pages/settings.html`
  - Change username
  - Add or remove dream themes

---

## 🧱 Structure

```
bucketlist/
├── assets/               → images and icons
├── css/                  → styling files
├── dist/                 → compiled JS files (from TypeScript)
├── pages/                → HTML files
├── src/                  → source code
│   ├── models/           → TypeScript types and interfaces
│   ├── pages/            → scripts specific to each HTML page
│   ├── services/         → app logic (e.g., dreams, themes)
│   ├── store/            → global state variables
│   └── utils/            → reusable helpers (DOM, localStorage, etc.)
├── package.json
├── tsconfig.json
└── README.md             → you're reading this!
```

---

## ⚙️ Tech Stack

- TypeScript
- HTML + CSS
- `localStorage` for persistence
- No frameworks, just native DOM APIs