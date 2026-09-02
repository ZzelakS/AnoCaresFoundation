#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════════
   2-FILE SPLIT — automates the server/client separation so every
   page can export its own `metadata`.

   For each route it:
     1. Reads  src/app/<route>/page.tsx
     2. Moves it to  src/app/<route>/<Component>.tsx  (keeps 'use client')
     3. Writes a new server  page.tsx  exporting metadata + rendering it

   Run from the project root:   node scripts/split-pages.mjs
   Safe to re-run — it skips any route already split.
   ══════════════════════════════════════════════════════════════════ */

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const SITE = 'https://anocaresfoundation.org'

const routes = [
  {
    dir: 'about',
    component: 'AboutContent',
    title: 'About E.J. Anosike | Anosike Cares Foundation',
    description:
      'Educated to Lead. Built to Win. Committed to Serve. The journey of E.J. Anosike — scholar-athlete, professional basketball champion, United Nations delegate and founder of the Anosike Cares Foundation.',
    ogTitle: 'About E.J. Anosike',
    image: '/images/leadership/leadership-1.jpeg',
  },
  {
    dir: 'foundation',
    component: 'FoundationContent',
    title: 'The Foundation | Anosike Cares Foundation',
    description:
      'Anosike Cares Foundation is a global human development organization expanding opportunity through education, leadership development, food security, entrepreneurship, cultural exchange and sport.',
    ogTitle: 'Anosike Cares Foundation',
    image: '/images/kids/kids-1.jpeg',
  },
  {
    dir: 'impact',
    component: 'ImpactContent',
    title: 'Our Impact | Anosike Cares Foundation',
    description:
      'Progress measured in people and possibility. Youth development, education, mentorship and community work across Nigeria, South Korea, the Philippines, China and the United States.',
    ogTitle: 'Our Impact',
    image: '/images/kids/kids-1.jpeg',
  },
  {
    dir: 'forum',
    component: 'ForumContent',
    title: 'Global Opportunity Forum | Anosike Cares Foundation',
    description:
      'Connecting leaders from government, education, business, sport, philanthropy and international development — transforming conversation into collaboration.',
    ogTitle: 'Global Opportunity Forum',
    image: '/images/leadership/leadership-2.jpg',
  },
  {
    dir: 'partners',
    component: 'PartnersContent',
    title: 'Partner With Us | Anosike Cares Foundation',
    description:
      'Partnership opportunities across youth development, basketball camps, educational pathways, cultural exchange, scholarships, community outreach and economic empowerment.',
    ogTitle: 'Partner With Us',
    image: '/images/leadership/leadership-3.jpg',
  },
  {
    dir: 'donate',
    component: 'SupportContent',
    title: 'Support The Mission | Anosike Cares Foundation',
    description:
      'Invest in opportunity. Support educational pathways, leadership programmes and community impact, or reach out directly about partnering with the Foundation.',
    ogTitle: 'Support The Mission',
    image: '/images/kids/kids-2.jpeg',
  },
  {
    dir: 'contact',
    component: 'ContactContent',
    title: 'Contact | Anosike Cares Foundation',
    description:
      'Get in touch with the Anosike Cares Foundation about partnerships, media enquiries, speaking engagements, programme participation or general questions.',
    ogTitle: 'Contact the Foundation',
    image: '/images/hero/hero-1.jpg',
  },
]

const serverPage = (r) => `import type { Metadata } from 'next'
import ${r.component} from './${r.component}'

export const metadata: Metadata = {
  title: '${r.title}',
  description:
    '${r.description.replace(/'/g, "\\'")}',
  alternates: { canonical: '/${r.dir}' },
  openGraph: {
    title: '${r.ogTitle}',
    description:
      '${r.description.replace(/'/g, "\\'")}',
    url: '/${r.dir}',
    images: [{ url: '${r.image}', width: 1200, height: 630, alt: '${r.ogTitle}' }],
  },
}

export default function Page() {
  return <${r.component} />
}
`

let done = 0, skipped = 0, missing = 0

for (const r of routes) {
  const dir = join('src', 'app', r.dir)
  const pagePath = join(dir, 'page.tsx')
  const compPath = join(dir, `${r.component}.tsx`)

  if (!existsSync(pagePath)) {
    console.log(`  ✗  ${r.dir}  — page.tsx not found, skipped`)
    missing++
    continue
  }

  if (existsSync(compPath)) {
    console.log(`  •  ${r.dir}  — already split, skipped`)
    skipped++
    continue
  }

  let source = readFileSync(pagePath, 'utf8')

  // Rename the default export so the filename and component agree
  source = source.replace(
    /export default function\s+\w+\s*\(/,
    `export default function ${r.component}(`
  )

  writeFileSync(compPath, source, 'utf8')
  writeFileSync(pagePath, serverPage(r), 'utf8')
  console.log(`  ✓  ${r.dir}  — split into ${r.component}.tsx + page.tsx`)
  done++
}

console.log(`\nDone. ${done} split, ${skipped} already done, ${missing} missing.`)
if (done > 0) console.log('Run `npm run build` to verify.\n')
