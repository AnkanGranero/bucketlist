🎯 Bucket List
A small vanilla TypeScript web app where users can log in with a username, create dreams (goals), and organize them into themes.

All data is stored in localStorage, and no backend is required.

🔧 Installation
Clone the repo:

bash
Kopiera
Redigera
git clone <repo-url>
Install dependencies:

bash
Kopiera
Redigera
npm install
Start the TypeScript compiler in watch mode:

bash
Kopiera
Redigera
npm run dev
🚀 Usage
You can run the app by opening pages/login.html in your browser. There’s no server — the app runs entirely in the browser using static HTML.

The flow as a developer:

Start at login.html

Enter a username → it’s saved to localStorage and you're redirected to dashboard.html

In dashboard.html

View all dreams

Mark dreams as checked/unchecked

Delete dreams

Add a new dream

Go to pages/add-dream.html

Select a theme and name → it's added to localStorage

Manage themes or username

Go to pages/settings.html

Change username

Add/remove dream themes

🧱 Folder Structure
pgsql
Kopiera
Redigera
bucketlist/
├── assets/               → images and icons
├── css/                  → styling files
├── dist/                 → compiled JS files (from TypeScript)
├── pages/                → HTML files
├── src/                  → source code
│   ├── models/           → TypeScript types and interfaces
│   ├── pages/            → scripts specific to each page
│   ├── services/         → app logic per domain (e.g., dreams, themes)
│   ├── store/            → global state variables (initial data)
│   └── utils/            → reusable helpers (e.g., DOM, localStorage)
├── package.json
├── tsconfig.json
└── README.md             → you're reading this!
⚙️ Tech Stack
TypeScript

HTML + CSS

localStorage for persistence

No frameworks, just native DOM APIs

