# Daniel Bail - Personal Portfolio

Mein persönliches Portfolio, entwickelt mit Next.js, TypeScript und Tailwind CSS.

## 🚀 Features

- Responsive Design
- Dark/Light Mode
- Deutsche Lokalisierung
- Interaktive Komponenten
- Moderne UI mit shadcn/ui

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Animationen:** Framer Motion

## 📦 Installation

```bash
npm install
npm run dev
```

## 🚀 Deployment auf GitHub Pages

### Automatisches Deployment (Empfohlen)

1. **Repository auf GitHub erstellen:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/DEIN_USERNAME/personalpage.git
   git push -u origin main
   ```

2. **GitHub Pages aktivieren:**
   - Gehe zu deinem Repository auf GitHub
   - Klicke auf "Settings" → "Pages"
   - Wähle "Deploy from a branch" aus
   - Wähle "gh-pages" Branch und "/(root)" Ordner
   - Klicke "Save"

3. **Automatisches Deployment:**
   - Bei jedem Push auf den `main` Branch wird automatisch auf GitHub Pages deployed
   - Der GitHub Actions Workflow (`.github/workflows/deploy.yml`) übernimmt das Deployment

### Manuelles Deployment

```bash
npm run build
# Der statische Export wird im /out Ordner erstellt
```

## 🌐 Live Demo

[Portfolio Website](http://localhost:3000)

## 📧 Kontakt

- **LinkedIn:** [Daniel Bail](https://www.linkedin.com/in/daniel-bail-431268198/)
- **GitHub:** [@Dan1elBa1l](https://github.com/Dan1elBa1l)
- **Email:** bail.daniel@aol.com
