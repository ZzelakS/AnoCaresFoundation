/**
 * IMAGE CONFIGURATION
 * ─────────────────────────────────────────────────────────────
 * Update the filenames below to match your actual files inside
 * /public/images/{folder}/
 * ─────────────────────────────────────────────────────────────
 */

export const images = {
  hero: {
    main: '/images/hero/hero-1.jpg',
    secondary: '/images/hero/hero-2.jpg',
  },
  basketball: {
    main: '/images/basketball/basketball-1.jpeg',
    action: '/images/basketball/basketball-2.jpeg',
    motion: '/images/basketball/basketball-3.jpeg',
    champ: '/images/basketball/basketball-4.jpeg',
  },
  kids: {
    main: '/images/kids/kids-1.jpeg',
    secondary: '/images/kids/kids-2.jpeg',
    tertiary: '/images/kids/kids-3.jpeg',
    quaternary: '/images/kids/kids-4.jpg',
  },
  leadership: {
    un: '/images/leadership/leadership-1.jpeg',
    forum: '/images/leadership/leadership-2.jpg',
    meetings: '/images/leadership/leadership-3.jpg',
    conference: '/images/leadership/leadership-4.jpg',
    congress: '/images/leadership/leadership-5.jpeg',
    seminar: '/images/leadership/leadership-6.jpg',
    message: '/images/leadership/leadership-7.jpeg',
    message1: '/images/leadership/leadership-8.jpg',
  },
  lifestyle: {
    china: '/images/lifestyle/lifestyle-1.png',
    travel: '/images/lifestyle/lifestyle-2.jpeg',
    tour: '/images/lifestyle/lifestyle-3.jpg',
    trip: '/images/lifestyle/lifestyle-4.jpg',
  },
  ruckerpark: {
    main: '/images/ruckerpark/rucker6.jpg',
    yaba: '/images/ruckerpark/rucker7.jpg',
    lagos: '/images/ruckerpark/rucker2.jpg',
    history: '/images/ruckerpark/rucker8.jpg',
    dunk: '/images/ruckerpark/rucker4.jpg',
    hype: '/images/ruckerpark/rucker9.jpg',
    camp: '/images/ruckerpark/rucker10.jpeg',
    prizes: '/images/ruckerpark/rucker11.jpg',
    bridge: '/images/ruckerpark/rucker12.jpg',
    boss: '/images/ruckerpark/rucker13.jpg',
    referee: '/images/ruckerpark/rucker14.jpg',
    impact: '/images/ruckerpark/rucker15.jpeg',
    talent: '/images/ruckerpark/rucker16.jpg',
    hope: '/images/ruckerpark/rucker17.jpg',
    collabs: '/images/ruckerpark/rucker18.jpg',
    crowd: '/images/ruckerpark/rucker19.jpg',
    beacon: '/images/ruckerpark/rucker20.jpg',
    cola: '/images/ruckerpark/cola.jpeg',
    fruitguard: '/images/ruckerpark/fruitguard.jpg',
    five: '/images/ruckerpark/500K.jpg',
    two: '/images/ruckerpark/2M.jpg',
    king: '/images/ruckerpark/king.jpg',
    sponsors: '/images/ruckerpark/sponsor.jpeg',   // sponsor banner / brand activation wall
    mvp: '/images/ruckerpark/dami.jpeg',        // Damilare with E.J. and Mrs. Ngozi Anosike
    legacy: '/images/ruckerpark/legacy.jpg',     // Dr. O.D. Anosike receiving Legacy Award
    bona: '/images/ruckerpark/bona.jpg',       // Adem Bona at the event
    legacy2: '/images/ruckerpark/legacyy.jpg',
  },
}

/** Helper: returns inline style object for a CSS background image */
export function bg(
  src: string,
  position: string = 'center center',
  extra: React.CSSProperties = {}
): React.CSSProperties {
  return {
    backgroundImage: `url('${src}')`,
    backgroundSize: 'cover',
    backgroundPosition: position,
    backgroundRepeat: 'no-repeat',
    ...extra,
  }
}