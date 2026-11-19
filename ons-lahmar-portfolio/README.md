# Portfolio — Ons Lahmar

Portfolio professionnel d'**Ons Lahmar**, élève ingénieure en Génie Logiciel (Java / Spring Boot & IA appliquée).

**Stack :** React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · Lucide icons

- Responsive (mobile, tablette, desktop), mode clair / sombre mémorisé
- SEO : balises meta, Open Graph, JSON-LD `Person`, `sitemap.xml` et `robots.txt` générés au build
- Accessibilité : lien « Skip to content », navigation clavier, focus visible, `prefers-reduced-motion` respecté, audit axe (WCAG 2 A/AA) sans erreur en clair et en sombre
- Polices auto-hébergées (aucun appel à un CDN externe)
- Tout le contenu se trouve dans `src/data/` : aucune donnée en dur dans les composants

---

## 1. Prérequis

- **Node.js 20.19 ou plus** (`node -v` pour vérifier) — https://nodejs.org
- npm (installé avec Node)

## 2. Installation

```bash
cd ons-lahmar-portfolio
npm install
```

## 3. Lancer en local

```bash
npm run dev
```

Ouvrir http://localhost:5173. Les modifications sont rechargées à chaud.

Autres commandes :

| Commande            | Rôle                                                        |
| ------------------- | ----------------------------------------------------------- |
| `npm run build`     | Vérifie les types puis génère le site optimisé dans `dist/` |
| `npm run preview`   | Sert le build de production sur http://localhost:4173       |
| `npm run typecheck` | Vérification TypeScript seule                               |

## 4. Déployer sur Vercel

### Option A — via GitHub (recommandé : chaque push redéploie automatiquement)

1. Créer un dépôt GitHub (par ex. `lahmarons/portfolio`) et y pousser le projet :
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/lahmarons/portfolio.git
   git push -u origin main
   ```
2. Aller sur https://vercel.com, se connecter avec GitHub, puis **Add New… → Project** et importer le dépôt.
3. Vercel détecte **Vite** automatiquement (Build : `npm run build`, Output : `dist`). Cliquer sur **Deploy**.
4. Le site est en ligne sur une URL du type `https://<nom-du-projet>.vercel.app`.

### Option B — en ligne de commande

```bash
npm i -g vercel
vercel          # premier déploiement (aperçu), répondre aux questions
vercel --prod   # mise en production
```

### Après le premier déploiement : renseigner l'URL du site

L'URL publique sert au lien canonique, aux aperçus LinkedIn (Open Graph) et au `sitemap.xml`.

1. Ouvrir `.env` et remplacer la valeur par l'URL réelle :
   ```
   VITE_SITE_URL=https://ons-lahmar.vercel.app
   ```
   (Il est aussi possible de définir `VITE_SITE_URL` dans Vercel → Project → Settings → Environment Variables.)
2. Redéployer (push GitHub ou `vercel --prod`).

Pour vérifier l'aperçu sur LinkedIn : https://www.linkedin.com/post-inspector/

---

## 5. Modifier le contenu

| Fichier                     | Contenu                                                            |
| --------------------------- | ------------------------------------------------------------------ |
| `src/data/profile.ts`       | Nom, titre, présentation, disponibilité, langues, liens, CV        |
| `src/data/skills.ts`        | Compétences par catégorie (+ où chacune a été appliquée)           |
| `src/data/experience.ts`    | Stages (le stage mis en avant utilise `featured: true`)            |
| `src/data/projects.ts`      | Projets, liens GitHub, schémas d'architecture                      |
| `src/data/education.ts`     | Formation et certifications (statut `obtained` / `in-progress`)    |
| `public/cv/Ons-Lahmar-CV.pdf` | CV téléchargeable — remplacer le fichier en gardant le même nom |

### Points à mettre à jour plus tard

- **MediRdv** : le dépôt GitHub n'est pas encore public, la carte affiche « Code available on request ».
  Quand le code est poussé, dans `src/data/projects.ts`, décommenter :
  ```ts
  githubUrl: 'https://github.com/lahmarons/MediRdv',
  ```
- **Certification Power BI** : affichée « In progress ». Une fois obtenue, dans `src/data/education.ts` :
  ```ts
  status: 'obtained',
  year: '2026',
  ```
- **Compétences** : il n'y a pas de pourcentages auto-évalués. Une puce bleue indique une technologie réellement
  utilisée dans un stage ou un projet du site (champ `usedIn`). Ajouter un projet dans `usedIn` lorsqu'une
  nouvelle technologie est mise en pratique.

---

## 6. Structure du projet

```
ons-lahmar-portfolio/
├── index.html                 # Meta SEO, Open Graph, JSON-LD, script anti-flash du thème
├── public/
│   ├── cv/Ons-Lahmar-CV.pdf   # CV téléchargeable
│   ├── og-image.png           # Image d'aperçu (LinkedIn, etc.) 1200×630
│   ├── favicon.svg
│   └── apple-touch-icon.png
├── src/
│   ├── data/                  # ← tout le contenu éditable
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, ThemeToggle
│   │   ├── sections/          # Hero, About, Skills, Experience, Projects, Education, Certifications, Contact
│   │   ├── cards/             # ExperienceCard, ProjectCard (réutilisables)
│   │   ├── diagrams/          # FlowDiagram (schémas d'architecture en HTML/CSS)
│   │   ├── ui/                # Button, Tag, Section, Reveal
│   │   └── icons/             # Logos GitHub / LinkedIn
│   ├── hooks/                 # useTheme, useActiveSection
│   ├── types.ts               # Types du contenu
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.ts         # Palette : paper (blanc cassé), navy, electric, mist (gris clair)
├── vite.config.ts             # + génération de sitemap.xml / robots.txt
└── vercel.json                # Cache des assets et en-têtes de sécurité
```
