# ANO CARES Website

## Anosike Cares Foundation — Global Human Development Organization

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Production build
```

## Deploying to Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. Deploy — zero configuration needed

---

## Adding Your Images

Place your photos inside the `/public/images/` folder, organized by category:

```
public/
└── images/
    ├── hero/
    │   ├── hero-1.jpg          ← Main hero (black & white road photo)
    │   └── hero-2.jpg          ← Secondary hero
    │
    ├── basketball/
    │   ├── basketball-1.jpg    ← Championship / trophy photos
    │   └── basketball-2.jpg    ← Action / celebrations
    │
    ├── kids/
    │   ├── kids-1.jpg          ← Youth programs / clinics
    │   └── kids-2.jpg          ← Community / mentorship
    │
    ├── leadership/
    │   ├── leadership-1.jpg    ← UN / speaking / government meetings
    │   ├── leadership-2.jpg    ← Africa CEO Forum / conferences
    │   └── leadership-3.jpg    ← Business meetings / professional
    │
    └── lifestyle/
        ├── lifestyle-1.jpg     ← Great Wall / international travel
        └── lifestyle-2.jpg     ← Cultural experiences / networking
```

### Image tips
- **Format:** JPG or WebP preferred for performance
- **Hero images:** 1920×1080 minimum, landscape orientation
- **Card images:** 800×1000 minimum, portrait orientation
- **Compress** all images before uploading (use squoosh.app or tinypng.com)
- You can add more images and reference them in the CSS classes in `globals.css`

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/about` | EJ Anosike founder story & timeline |
| `/foundation` | ANO CARES Foundation overview |
| `/impact` | Impact areas & programs |
| `/rucker-africa` | Rucker Africa initiative |
| `/forum` | Global Opportunity Forum |
| `/partners` | Partnership page |
| `/donate` | Donation page |
| `/contact` | Contact form |

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Playfair Display + Inter)
- **Deployed on Vercel**

---

Built by Simon Okpe Alachi | simon-portfolio-yd81.vercel.app
