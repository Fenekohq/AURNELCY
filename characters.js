const characters = [
  {
    name: "Nom",
    title: "Titre(s)",
    organisation: "Organisation(s)",
    intro: "Introduction du personnage."
  },
  {
    name: "Fostrah",
    title: "Goalois, Architecte",
    organisation: "Rantlot",
    intro: "Fostrah est un sceptique scrupuleux, il a des manières distancielles que ce soit avec les choses ou les gens et se sent souvent petit et morose."
  },
  {
    name: "UiNo",
    title: "Démonom, Non-con-nu, LucyFer, Dieauble, Foufolle, Gargouille, Grimaçouille, Orphilon",
    organisation: "NEON",
    intro: "UiNo est un(e) clandestin(e) androgyne non-identifiable, spécialiste des grimaces dont on ne comprend jamais au premier abord les messages."
  },
  {
    name: "Uewij",
    title: "Sucrube, Sorcière",
    organisation: "Rantlot",
    intro: "Uewij est une fidèle droite à ses principes gardant toujours le mot d'ordre de ses dires, sa diligence envers-elle même motive son entourage."
  },
  {
    name: "Vydnitt",
    title: "Momie, Excentrique, Somnolant",
    organisation: "NEON, H2O, TouRise",
    intro: "Vydnitt est un érudit mystique inventif, bien qu'il abandonne vite ses identifications, sa capacité d'adaptation est au rendez-vous."
  },
  {
    name: "Xyfurn",
    title: "Nuagiste, Aspirant, Oiseau, Polyglotte",
    organisation: "TouRise",
    intro: "Xyfurn est un enthousiaste de son ignorance, cela signifie qu'il a de quoi avoir la journée remplie."
  },
  {
    name: "Nezrog",
    title: "Templier, Macropulseur, Maïeuticien",
    organisation: "NEON, CGU(Carpet Glance Unit)",
    intro: "Nezrog est un interrogateur qui aime tester et titiller l'intérêt pour le dépassement du moi actuel."
  },
  {
    name: "Ekeline",
    title: "Planteuse, Salivatrice, Équilibriste, Innokcienne",
    organisation: "H2O",
    intro: "Ekeline est une insouciante ayant la langue bien pendue pour garder le moral, on trouverait la défaite en perdant de vue les petites choses selon elle."
  },
  {
    name: "Wacwe",
    title: "Challenger, Kentronien",
    organisation: "H2O, Rantlot, NEON, TouRise",
    intro: "Wacwe est un marginal obssédé vivant chaque jour comme le potentiel dernier, il veut faire dédicace à son appartenance plus que tout au monde."
  },
  {
    name: "Leqwa",
    title: "Sfivoq, Chutvalier, Arcadiste",
    organisation: "H2O, Esliz",
    intro: "Leqwa est un libérateur insolite qui se promène de façon non-chalante dans les propriétés qu'il reconnaît entre deux gouttes d'eau."
  },
  {
    name: "Logjēm",
    title: "Hérétique, Arachnide, Erreur GJ, AnonLeafmous",
    organisation: "Esliz, NEET Club, Rantlot",
    intro: "Logjēm est un internaute fan de fiction, il badine comiquement tout ce dont il est issue parfois avec un humour sarcastique mais garde à l'esprit le désir du meilleur."
  },
  {
    name: "Slacpi°",
    title: "Épouvantail, PrisM, CelHerbty",
    organisation: "Esliz, H2O, CGU(Carpet Glance Unit)",
    intro: "Slacpi° est une trublionne farfelue jouant aux devinettes, cette peste sait simuler et s'effacer dans le décor quand cela s'avère nécessaire."
  },
  {
    name: "Tôhla",
    title: "Cuisinière, Kindappeuse, InfiNieR, Hémorroïde, Chatouilleuse",
    organisation: "NEET Club, Esliz, CGU(Carpet Glance Unit)",
    intro: "Tôhla est une écolière excusée atteinte d'infirmité troglodyte, elle adore apporter une touche d'iconicité a tout ce qu'elle fait et voit peu importe les situations."
  },
  {
    name: "Emma(âme)",
    title: "Mal de tête, Paumé, Garant",
    organisation: "xXx",
    intro: "Emma est la directive survivante des systèmes amorphes autonomes sous autorité symbolique de la lignée X."
  },
  {
    name: "Sephun",
    title: "PiuPiu, Défunt",
    organisation: "RaycRa Forces",
    intro: "Sephun est commandant d'une escouade, la seul maîtrisant les armes laser, nul ne sait s'il est capable d'avoir un autre hobby."
  }
];

let index = 0;
const nameEl = document.getElementById('name');
const titleEl = document.getElementById('title');
const organisationEl = document.getElementById('organisation');
const introEl = document.getElementById('intro');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const indicatorEl = document.getElementById('indicator');

function render() {
  const c = characters[index];
  nameEl.textContent = c.name;
  titleEl.textContent = c.title;
  organisationEl.textContent = c.organisation;
  introEl.textContent = c.intro;
  indicatorEl.textContent = `${index + 1} / ${characters.length}`;
}
prevBtn.addEventListener('click', () => {
  index = (index - 1 + characters.length) % characters.length;
  render();
});
nextBtn.addEventListener('click', () => {
  index = (index + 1) % characters.length;
  render();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevBtn.click();
  if (e.key === 'ArrowRight') nextBtn.click();
});

render();