import { images } from '@/config/images'
import type { Chapter } from '@/components/ChapterNav'

export const chapters: Chapter[] = [
  { id:'ch-01', num:'01', title:'From Harlem To Lagos' },
  { id:'ch-02', num:'02', title:'The Impact In Numbers' },
  { id:'ch-03', num:'03', title:'Opportunity Beyond The Court' },
  { id:'ch-04', num:'04', title:'Education As A Core Pillar' },
  { id:'ch-05', num:'05', title:'Investing In Girls And Young Women' },
  { id:'ch-06', num:'06', title:'The Field' },
  { id:'ch-07', num:'07', title:'FruitGuard Dunk Contest' },
  { id:'ch-08', num:'08', title:'Three-Point Championship' },
  { id:'ch-09', num:'09', title:'Under-18 Championship' },
  { id:'ch-10', num:'10', title:'Damilare Salawu — U-18 MVP' },
  { id:'ch-11', num:'11', title:'The Unlimited Division' },
  { id:'ch-12', num:'12', title:'Jamelo — Unlimited MVP' },
  { id:'ch-13', num:'13', title:'The Main Event — King of Lagos' },
  { id:'ch-14', num:'14', title:'Honouring Legacy' },
  { id:'ch-15', num:'15', title:'A Global Basketball Community' },
  { id:'ch-16', num:'16', title:'When Basketball Meets Culture' },
  { id:'ch-17', num:'17', title:'Value For Local Businesses' },
  { id:'ch-18', num:'18', title:'₦11 Million In Direct Value' },
  { id:'ch-19', num:'19', title:'More Than An Event' },
  { id:'ch-20', num:'20', title:'Impact Summary' },
]

export const impactStats = [
  { n:'565',    l:'Attendees In Person' },
  { n:'70%',    l:'Under Age 25' },
  { n:'150',    l:'Youth Jobs Created' },
  { n:'100+',   l:'Athletes Competing' },
  { n:'5,000+', l:'Livestream Viewers' },
  { n:'550K',   l:'Digital Views' },
  { n:'25',     l:'iPads Distributed' },
  { n:'₦11M',   l:'Direct Value Delivered' },
]

/* Chapter 06 — twelve academies across five divisions */
export const divisions = [
  { name:'Under-12 Boys\u2019 3v3 Showcase',  teams:['Explosive Basketball Academy','Rowe Park Academy'] },
  { name:'Under-12 Girls\u2019 3v3 Showcase', teams:['Victoria Queens Academy','Rowe Park Academy'] },
  { name:'Under-18 Division',                 teams:['Anosike Basketball Club','Rookies Academy','Cantonment Braves Academy','Warrior Academy'] },
  { name:'Elite Unlimited 5v5',               teams:['Hoops & Read','Raptors Academy','DeepBond','Banire Academy','White Fire','Rowe Park'] },
]

/* Chapter 09 — championship roster */
export const roster = [
  'Onime Victor','Onyeka Chukwuka Donald','Salawu Korede',
  'Salawu Damilare','Chidera Francis','Chukwuka Makua',
  'Afeez Basit','Anekwe Thadeo Arinze','Ajibike Oluwatobiloba Peter',
]

export const eventPartners = [
  'FruitGuard','Ano Energy Corporation','American Cola Nigeria',
  'BYG','City Pub','Rowe Park Lagos',
]

/* ── VIDEO IDS ──
   Replace the empty strings as Vimeo IDs arrive. A chapter with an
   empty id simply renders without a video — nothing breaks. */
export const videos = {
  recap:      '1222639161',  // Hero — official Lagos recap film
  crowd:      '',            // 02 — crowd / opening atmosphere
  production: '',            // 03 — behind the scenes
  girls:      '',            // 05 — girls' showcase / mentorship
  moses:      '',            // 07 — Egbujor Moses final dunk
  yusuf:      '',            // 08 — Yusuf final shooting sequence
  u18:        '',            // 09 — U-18 championship highlights
  damilare:   '',            // 10 — Damilare deep three
  jamelo:     '',            // 12 — Jamelo highlights
  kingMontage:'',            // 13 — King of Lagos 1v1 montage
  railway:    '',            // 13 — Railway final possession
  jumabee:    '1223346784',            // 16 — Jumabee performance
}

/* ── GALLERY ──
   Full lightbox set near the foot of the page. */
export const galleryItems = [
  { src: images.ruckerpark.lagos,      alt:'Rowe Park, Lagos during the Rucker Park Africa activation', caption:'Rowe Park, Lagos' },
  { src: images.ruckerpark.crowd,      alt:'Spectators packed around the court at Rowe Park',           caption:'Peak attendance' },
  { src: images.ruckerpark.yaba,       alt:'Young athletes at a Rucker Park Africa youth clinic',       caption:'Youth clinics' },
  { src: images.ruckerpark.camp,       alt:'Competition action during the Lagos activation',            caption:'Game time' },
  { src: images.ruckerpark.dunk,       alt:'Dunk contest action at Rucker Park Africa Lagos',           caption:'Above the rim' },
  { src: images.ruckerpark.fruitguard, alt:'FruitGuard Dunk Contest at Rucker Park Africa Lagos',       caption:'FruitGuard Dunk Contest' },
  { src: images.ruckerpark.five,       alt:'Three-point championship at Rucker Park Africa Lagos',      caption:'Three-point championship' },
  { src: images.ruckerpark.cola,       alt:'Under-18 division play at Rucker Park Africa Lagos',        caption:'Under-18 division' },
  { src: images.ruckerpark.two,        alt:'Unlimited division championship action',                    caption:'Unlimited division' },
  { src: images.ruckerpark.king,       alt:'King of Lagos one-on-one competition',                      caption:'King of Lagos' },
  { src: images.ruckerpark.mvp,        alt:'Damilare Salawu receiving the U-18 MVP award from E.J. Anosike and Mrs. Ngozi Anosike', caption:'Sport was the entry point. Education and opportunity were the larger mission.' },
  // { src: images.ruckerpark.legacy,     alt:'Dr. Oderah O.D. Anosike receiving the Rucker Park Africa Legacy Award', caption:'Legacy Award' },
  { src: images.ruckerpark.impact,     alt:'Young Nigerians working across event production and media', caption:'150 youth jobs created' },
  { src: images.ruckerpark.prizes,     alt:'Prize presentation at Rucker Park Africa Lagos 2026',       caption:'Prize presentation' },
  { src: images.ruckerpark.talent,     alt:'Young athletes developing skills at Rucker Park Africa',    caption:'Talent development' },
  { src: images.ruckerpark.hope,       alt:'Participants at the Rucker Park Africa Lagos activation',   caption:'Hope and dreams' },
  { src: images.ruckerpark.bridge,     alt:'Community engagement at Rucker Park Africa Lagos',          caption:'Community bridge' },
  { src: images.ruckerpark.collabs,    alt:'International collaboration at Rucker Park Africa Lagos',   caption:'International collaboration' },
  { src: images.ruckerpark.referee,    alt:'Referee training at Rucker Park Africa Lagos',              caption:'Referee training' },
  { src: images.ruckerpark.beacon,     alt:'Rucker Park Africa Lagos 2026 community moment',            caption:'Beacon of hope' },
]
