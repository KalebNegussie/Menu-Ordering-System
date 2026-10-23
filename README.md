# Demo Restaurant — QR Table Ordering

Customers scan a QR code on their table → the menu opens on their phone → they order → the cashier approves → the kitchen cooks → the order is marked ready. The customer's phone shows live status the whole time.

## Files
| File | What it is |
|---|---|
| `index.html` | Customer menu + ordering (opened by the QR code) |
| `staff.html` | Staff screen: Cashier → Kitchen → Ready → Done tabs |
| `qr.html` | Printable QR code for every table |
| `menu.js` | **Edit this** — restaurant name, tables, menu items, prices |
| `config.js` | **Edit this** — paste Firebase settings to go live |
| `store.js`, `style.css` | Engine + styling (no need to touch) |

## 1. Put it on GitHub Pages
1. Sign in at github.com → **New repository** → name it `demo-restaurant` → **Public** → Create.
2. Click **uploading an existing file** → drag in all the files (unzipped) → **Commit changes**.
3. Go to **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main**, folder **/(root)** → Save.
4. Wait 1–2 minutes. Your site is at `https://YOUR-USERNAME.github.io/demo-restaurant/`.

## 2. Try it in demo mode (one device)
Open the site on your phone. Open `staff.html` in a second tab on the **same** phone/browser. Place an order in tab 1 and it shows up in tab 2.
Demo mode can't send orders between different devices. That needs step 3.

## 3. Make orders reach other devices (Firebase, free)
1. Go to console.firebase.google.com → **Add project** → any name → you can turn off Google Analytics → Create.
2. Left menu: **Build → Firestore Database → Create database** → pick a location → **Start in test mode** → Enable.
3. Click the gear ⚙ → **Project settings** → scroll to **Your apps** → click the **</>** (Web) icon → give it a nickname → Register.
4. Copy the `firebaseConfig = { ... }` block it shows.
5. On GitHub, open `config.js` → pencil icon (edit) → replace `window.FIREBASE_CONFIG = null;` with
   `window.FIREBASE_CONFIG = { ...paste the values... };` → **Commit changes**.
6. Wait a minute, then reload. The staff screen should say **● Live**.

## 4. Print the QR codes
Open `https://YOUR-USERNAME.github.io/demo-restaurant/qr.html` → set the number of tables → **Print** (or save as PDF).
Each code opens the menu with its table number already filled in.

## 5. Test the full flow
1. Laptop: open `staff.html` → tap **Turn on sound**.
2. Phone: scan Table 3's QR code → add items → **Place order**.
3. Laptop: the order beeps in under **Cashier** → **Approve** → it moves to **Kitchen** → **Start cooking** → **Mark ready** → **Served**.
4. Watch the phone update its status at each step.

## Before using this for a real client
- **Firestore test mode expires after 30 days** and lets anyone read and write. Fine for a demo, not for real customers.
- For production, add security rules: customers can only *create* orders, and only logged-in staff can read or update them. Also add a staff login (Firebase Authentication) to `staff.html`.
- Anyone can open `staff.html` if they know the link, so don't share it publicly.
