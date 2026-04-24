document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('dictionaryModal');
  const backToTopButton = document.getElementById('backToTop');
  const vocabSection = document.getElementById('vocabulary-section');

  vocabSection.addEventListener('scroll', function () {
    if (vocabSection.scrollTop > 200) {
      backToTopButton.style.display = 'flex';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', function () {
    vocabSection.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function hideBackToTop() {
    backToTopButton.style.display = 'none';
  }
  document.getElementById('closeDictionaryBtn').addEventListener('click', hideBackToTop);
  document.getElementById('dictionaryModalOverlay').addEventListener('click', hideBackToTop);
});
document.addEventListener('DOMContentLoaded', function () {

  const openBtn = document.getElementById('openDictionaryBtn');
  const closeBtn = document.getElementById('closeDictionaryBtn');
  const modal = document.getElementById('dictionaryModal');
  const overlay = document.getElementById('dictionaryModalOverlay');

  function openModal() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
});

const activeCategories = new Set();
const vocabularyData = [
  {
    term: "⟁URNELCY",
    category: ["Mapnel", "IUVALCY", "ARc⟁diA", "Aursyl", "Lysrua", "D⦾MIN⦿'s"],
    definition: "Univers littéraire de Fenekohq.",
    implication: "Intéressé ?",
    simplified: "Œuvre d'un pauvre fou",
    desc: "Fostrah, UiNo, Uewij, Vydnitt, Xyfurn, Nezrog, Ekeline, Wacwe・Leqwa, Logjēm, Slacpi°, Tôhla",
    parent: "Vie sur la planète Terre",
    etymology: "⟁UR(ARc⟁diA & Aursyl) NEL(Mapnel) CY(IUVALCY) Lettres Dispatchées(Lysrua) Structure Métaphorique(D⦾MIN⦿'s)",
    synonym: "ONEL6, Onelsix",
    pronunce: "Français /oʁ.nɛl.si/ English /ɔːɹ.nəl.si/",
    surnatural: "Invoquer ⟁URNELCY est signe de pure folie.",
    version: "AURNELCY, aurnelcyen, aurnelcyens, aurnelcyenne, aurnelcyennes, ONEL6"
  },
  {
    term: "Fenekohq",
    category: ["Persona", "Concepteur"],
    definition: "Le Pseudonyme de l'Auteur d'⟁URNELCY.",
    simplified: "L'alias fétiche du pauvre fou en question",
    synonym: "Fenek, Feneko, FE猫HQ, フェネコーク",
    etymology: "Fennec - Neko(Japonais)/Chat - Coq {en théorie}",
    pronunce: "/fɛ.nɛ.kɔk/"
  },
  {
    term: "Mapnel",
    category: ["Mapnel"],
    definition: "Dialogue entre contraires.",
    simplified: "Rétention et Relâchement",
    desc: "Vydnitt, Xyfurn, Nezrog, Ekeline, Wacwe・Leqwa",
    parent: "⟁URNELCY",
    etymology: "Ma(Monoa-Admagcoq) pnel(Polyz-Nezkelwac[N-ezrog, E-keline, L-eqwa])",
    synonym: "ℳ𝒶𝓅𝓃ℯ𝓁",
    pronunce: "Français /map.nɛl/ English /ˈmæp.nəl/",
    version: "Mapnélien, Mapnéliens, Mapnélienne, Mapnéliennes, Mapnélo"
  },
  {
    term: "IUVALCY",
    category: ["IUVALCY"],
    definition: "Chambre de la perception.",
    simplified: "Méta-Méditation",
    desc: "Fostrah, UiNo, Uewij",
    parent: "⟁URNELCY",
    etymology: "I(Ligne) UV(Aiguisement) AL(Chaise) CY(Conscience V Levée)",
    pronunce: "Français /ju.val.si/ English /ˈjuː.væl.si/",
    version: "Iuvalcien, Iuvalciens, Iuvalcienne, Iuvalciennes, Iuvalco, IUVALCIUM"
  },
  {
    term: "ARc⟁diA",
    category: ["ARc⟁diA"],
    definition: "Jeu de la plaisanterie.",
    simplified: "Farce",
    desc: "Logjēm, Slacpi°, Tôhla",
    parent: "⟁URNELCY",
    etymology: "Arc, Arcade",
    synonym: "Arcadia",
    pronunce: "Français /aʁ.ka.dja/ English /ɑːrˈkeɪ.di.ə/",
    version: "Arcadia, Arcadien, Arcadiens, Arcadienne, Arcadiennes, Arcado"
  },
  {
    term: "Aursyl",
    category: ["Aursyl"],
    definition: "Manigances esclavagistes.",
    simplified: "Colonisation",
    desc: "18+",
    parent: "⟁URNELCY",
    etymology: "Aura, Réunion",
    synonym: "𝔄𝔲𝔯𝔰𝔶𝔩",
    pronunce: "Français /ɔʁ.sil/ English /ˈɔːɹ.sɪl/",
    version: "Aursylien, Aursyliens, Aursylienne, Aursyliennes, Aursylo"
  },
  {
    term: "Lysrua",
    category: ["Lysrua"],
    definition: "Profusion Symphonique.",
    simplified: "Multi-Culture",
    desc: "5 Mapnéliens, 3 Iuvalciens, 3 Arcadiens, 1 Aursylien",
    parent: "⟁URNELCY",
    etymology: "Aursyl Inversé",
    pronunce: "Français /lis.ʁɥa/ English /ˈlɪs.ruː.ə/",
    version: "Lysruéen, Lysruéens, Lysruéenne, Lysruéennes, Lysro"
  },
  {
    term: "AurLys",
    category: ["Aursyl", "Lysrua"],
    definition: "Technologie hors la loi.",
    simplified: "Sexe Télépathique",
    desc: "Paramètres",
    parent: "⟁URNELCY",
    etymology: "Politique (Purifiée de l'In Real Life Be Like)",
    pronunce: "Français /oʁ.lis/ English /ɔːɹ.lɪs/",
    version: "Aurlysien, Aurlysiens, Aurlysienne, Aurlysiennes, Aurlyso, Aurlystique, Aurlysaur, Aurlysaurs, Aurlysaure, Aurlysaures"
  },
  {
    term: "D⦾MIN⦿'s",
    category: ["D⦾MIN⦿'s"],
    definition: "Récit Fabuleux.",
    simplified: "Légende",
    desc: "Ø",
    parent: "⟁URNELCY",
    etymology: "Domicile, Domination, Domino",
    synonym: "DOMINO's",
    pronunce: "Français /dɔ.mi.noz/ English /ˈdɒ.mɪ.noʊz/",
    version: "DOMINO, DOMINO's, D⦾MINI⦿N, DOMINION, DOMINIONS, D⦾MINI⦿NNE, DOMINIONNE, DOMINIONNES"
  },
  {
    term: "Héros/Héroïne",
    category: ["Mapnel", "Persona", "Supervision", "Supernova"],
    definition: "Figure célèbre et admirable de combat et d'adversité, on en raconte la fulgurance iconique de sa vie.",
    etymology: "Chef/Demi-Dieu",
    version: "Héros, Héroïne, Hero, Heroine"
  },
  {
    term: "Pérégrination",
    category: ["Mapnel", "Cueillette"],
    definition: "Long voyage sinueux en région reculée des habitudes routinières aisées.",
    etymology: "Voyage Lointain",
    synonym: "Périple, Pèlerinage, Expédition, Cheminement, Odysée, Errance",
    version: "Pérégrinations, Pérégrineur, Pérégriner"

  },
  {
    term: "Monoa-Polyz",
    category: ["Mapnel", "Vydnitt", "Monoa-Polyz", "Concepteur", "Spherµ", "Trinité"],
    definition: "Être et Devenir Monom&Polyp et Monop%Polym.",
    implication: "Animation originale[-] Au format vedette[Polyz] À toile de fond[Monoa].",
    simplified: "Matière Corde Passage ou Déploiement Énergique",
    synonym: "𝙼𝚘𝚗𝚘𝚊-𝙿𝚘𝚕𝚢𝚣(Monospace)",
    version: "Moa&Poz, M&P, 𝙼𝚘𝚗𝚘𝚊-𝙿𝚘𝚕𝚢𝚣"
  },
  {
    term: "Monom/Mono-Mémoire",
    category: ["Mapnel", "Vydnitt", "Nezrog", "Monoa-Polyz", "Persona", "Cueillette"],
    definition: "Éternité Homogène Singulière/Sensation vivante d'expérimenter une manifestation perpétuelle.",
    implication: "Une fermeture des coulisses n'achève pas la vie. Monom implique Polyp (Monom&Polyp)",
    simplified: "Être Mouvant",
    synonym: "Unité, Unique, Central, Rétention, Enfermement",
    version: "Monom, Mono-Mémoire"
  },
  {
    term: "Polyp/Poly-Projection",
    category: ["Mapnel", "Vydnitt", "Wacwe", "Monoa-Polyz", "Phénotype", "Supernova"],
    definition: "Recommencement Hétérogène Pluriel/Sensation vivante d'expérimenter une actualisation cordiale.",
    implication: "L'ouverture des erreurs adapte le rythme d'une vie. Polyp implique Monom (Monom&Polyp)",
    simplified: "Devenir Renouvelé",
    synonym: "Fraction, Multiple, Décentral, Éclattement, Dispersion",
    version: "Polyp, Poly-Projection"
  },
  {
    term: "&(Terla)",
    category: ["Mapnel", "Vydnitt", "Ekeline", "Monoa-Polyz", "Phénomène", "Supervision"],
    definition: "Reflet fortificateur de la boucle entre Monom et Polyp.",
    implication: "Instructrice régulatrice de la sensation vivante expérientielle.",
    simplified: "PlusPlus",
    desc: "Terla est représenté en anneau pendentif.",
    synonym: "Jonction, Stabilité, Composition, Conteneur, Concentration",
    version: "Terla"
  },
  {
    term: "Monom&Polyp",
    category: ["Mapnel", "Vydnitt", "Leqwa", "Monoa-Polyz", "Citadel"],
    definition: "État-Dynamique intemporelle où être et devenir sont entrelacés dans une communion harmonieuse.",
    simplified: "Mémoire nourricière permanente & Projection épisodique cyclique ou Laisser Ouvert",
    synonym: " Mom&Pop, MM&PP, ℳℴ𝓃ℴ𝓂🙵𝒫ℴ𝓁𝓎𝓅(Cursive), ℳℴ𝓂🙵𝒫ℴ𝓅, ℳ🙵𝒫",
    pronunce: "MTP, monomennepolype, monome-terla-polype",
    version: "Mom&Pop, MM&PP, ℳℴ𝓃ℴ𝓂🙵𝒫ℴ𝓁𝓎𝓅, ℳℴ𝓂🙵𝒫ℴ𝓅, ℳ🙵𝒫"
  },
  {
    term: "Monop/Mono-Prohibition",
    category: ["Aursyl", "Vydnitt", "Monoa-Polyz", "Persona", "Cueillette"],
    definition: "Éternité Inhibée Figée/Non-réconciliation rugueuse d'afistoler le menu classique des attributions déterminées.",
    implication: "Dépiction survivante d'un échec ultime et de son insolubilité funeste. Monop implique Polym (Monop%Polym)",
    simplified: "Être Surchargé",
    version: "Monop, Mono-Prohibition"
  },
  {
    term: "Polym/Poly-Malaise",
    category: ["Aursyl", "Vydnitt", "Monoa-Polyz", "Phénotype", "Supernova"],
    definition: "Recommencement Excité Troublé/Non-réajustement raboteux avec la sécession globale.",
    implication: "Déconstruction survivante de la santé en vue d'opérations autres. Polym implique Monop (Monop%Polym)",
    simplified: "Devenir Perturbé",
    version: "Polym, Poly-Malaise"
  },
  {
    term: "%(Derla)",
    category: ["Aursyl", "Vydnitt", "Monoa-Polyz", "Phénomène", "Supervision"],
    definition: "Scission Démolisseuse de la sangle entre Monop et Polym.",
    implication: "Obstructrice dispatcheuse atrophiante de la vitalité juvénile.",
    simplified: "MoinsMoins",
    desc: "Derla est représenté en boulet de forçat.",
    version: "Derla"
  },
  {
    term: "Monop%Polym",
    category: ["Aursyl", "Vydnitt", "Monoa-Polyz", "Citadel"],
    definition: "État-Dynamique contractée où être et devenir sont imbriqués dans une déperdition rupturante.",
    simplified: "Prohibition affamante saturée % Malaise apathique déclinant ou Prendre au Piège",
    synonym: "Mop%Pom, MP%PM, 𝔐𝔬𝔫𝔬𝔭%𝔓𝔬𝔩𝔶𝔪(Fraktur), 𝔐𝔬𝔭%𝔓𝔬𝔪, 𝔐%𝔓",
    pronunce: "MDP, monopeourpolyme, monope-derla-polyme",
    version: "Mop%Pom, MP%PM, 𝔐𝔬𝔫𝔬𝔭%𝔓𝔬𝔩𝔶𝔪, 𝔐𝔬𝔭%𝔓𝔬𝔪, 𝔐%𝔓"
  },
  {
    term: "Monstre 0",
    category: ["Mapnel", "Fostrah", "Vydnitt", "Xyfurn", "Persona", "Phénotype"],
    definition: "Créature au trajet de l'entre-deux sujette à la corruption et à la finitude condamnée//graciée à la fertilité.",
    implication: "Empreinte animale au milieu de la naissance et du décès plongée à la fois dans une clarté spécifique et un flou intersidéral.",
    simplified: "Toute créature concernée par la vie et la mort.",
    synonym: "M0nstre, Mont0, Animalia",
    surnatural: "Chair répondant au Comment au travers d'une instantanéité définie.",
    version: "Monstres 0, M0nstre, Monstruosité, Monstruosité 0, Monstruosités, Monstruosités 0"
  },
  {
    term: "Dévore-Novice",
    category: ["Aursyl", "UiNo", "Vydnitt", "Persona", "Concepteur"],
    definition: "Adversaire de la seigneurie planifiant son itinéraire purement stratégique dans des proportions d'ennui globalisé.",
    implication: "Annihilateur ontologique de la raison d'être ou la sournoise trafiqueuse de conscience vers l'ébranlement de sa volonté propre dont on ne peut certifier la provenance.",
    simplified: "Colonisateur d'apprentis-novices vers la déflagration de leur consciences.",
    desc: "Il est décrit comme ayant 2 mains 2 pieds 2 yeux 2 oreilles 1 nez 1 bouche, mais s'est aussi construit une citadelle dans le monde invisible de l'esprit de chacun.",
    synonym: "Tyran, Esclavagiste, Despote, Imposteur, Crapule, Aliénatueur, Assassin du Sens, Fumée Noire, Déchu, Marque de Fabrique",
    surnatural: "Putschiste de Dieu déguisé en celui-ci injoncteur du Pourquoi capable de ruiner au moins un millier de personnes de leur soutien servile consenti par la délégation.",
    version: "Dévore-Novicien, Dévore-Novicienne, Dévore-Noviciens, Dévore-Noviciennes"
  },
  {
    term: "Ventriloque",
    category: ["Aursyl", "Fostrah", "Persona", "Supervision"],
    definition: "Bagarreur de fortune d'un manque irascible, sous une expression difforme de la faim au détriment de l'organisme intégral.",
    implication: "Partisans compétiteurs de l'entendement dévore-novice comme loisir obsessionnel.",
    version: "Ventriloquien"
  },
  {
    term: "Admagcoq",
    category: ["Mapnel", "Xyfurn", "Monoa-Polyz", "Trinité", "Tablette"],
    definition: "Trinité Individuelle (Aventure - Magie - Cuisine)",
    synonym: "AMC"
  },
  {
    term: "Enquête",
    category: ["Mapnel", "Aursyl", "Lysrua", "Xyfurn", "Supervision", "Codex", "Cueillette"],
    definition: "Stimulation interrogative explorative autosuffisante dont l'accoutumance ne rend jamais de marbre.",
    version: "Enquêtes, Enquêter"
  },
  {
    term: "Directions Souveraines",
    category: ["Mapnel", "Xyfurn", "Museum"],
    definition: "[Xyf] Aperçu global du sentiment commun, glissant de son évolution sur des générations de l'errance étrangère à la chère réminiscence.",
    version: "Direction Civilisationnelle"
  },
  {
    term: "Illusion",
    category: ["Mapnel", "IUVALCY", "UiNo", "Xyfurn", "Phénomène", "Phénotype"],
    definition: "Filtre stimulant clos intrapersonnel ouvert à ambiguïté interpersonnel.",
    implication: "Ample enchaînement de tensions multi-perspectives.",
    version: "Illusions"
  },
  {
    term: "Atelier Ataraxial",
    category: ["Mapnel", "Xyfurn", "Codex", "Parc"],
    definition: "Accroissement progressif des facultés de tolérance actives vers des vertus passives.",
    simplified: "Culture musculaire de paix intérieure.",
    version: "Atelier, Ataraxie"
  },
  {
    term: "Fluide Élémentaire",
    category: ["Mapnel", "Xyfurn", "Phénotype", "Cipher"],
    definition: "[Urn] État second pair évanouissant l'interdit premier impair de la partie analytique vers sa pleine fougue permise ou dommageante.",
    simplified: "Mouvement inné s'accomplissant sans intervention clivante.",
    version: "Fluide Vital"
  },
  {
    term: "Blessure Fossile",
    category: ["Mapnel", "Aursyl", "Xyfurn", "Codex"],
    definition: "Matérialité du tragique balistique, séquelle de fragilisation traumatique.",
    implication: "Détresses périlleuses en représailles.",
    version: "Blessures Kamikazes"
  },
  {
    term: "Miroir Clairvoyant",
    category: ["Mapnel", "Xyfurn", "Mouet-Pouet", "Phénomène", "Museum"],
    definition: "Méditation olfactive de sa réalité apparente à un instant donné.",
    implication: "Disposition à l'honnêteté objective et à l'évaluation concise des conséquences a priori."
  },
  {
    term: "Gravité Centrale",
    category: ["Mapnel", "Xyfurn", "Supervision"],
    definition: "[Xyf-Urn] Point d'attraction et d'équilibre, pivot des appuis et de la soutenance robuste.",
    version: "Gravité"
  },
  {
    term: "Nezkelwac",
    category: ["Mapnel", "Nezrog", "Ekeline", "Wacwe", "Monoa-Polyz", "Trinité", "Tablette"],
    definition: "Trinité Collective (Nezrog - Ekeline - Wacwe)",
    synonym: "NKW"
  },
  {
    term: "Naustre C",
    category: ["Mapnel", "Uewij", "Nezrog", "Persona", "Cueillette"],
    definition: "Créature navigatrice consciente et psychiquement relationnelle de son 0 aussi appelée mortel.",
    implication: "Marcheur de son propre sentier s'écartant du coin de l'action définit par la réprimande répressive.",
    simplified: "Toute créature concernée par l'engagement.",
    synonym: "NauC",
    surnatural: "Chair répondant au Pourquoi au travers d'une maturation indéfinie.",
    version: "Naustre, Naustrique, Naustriques, Naustral, Naustricité"
  },
  {
    term: "Palpiter de l'Infini",
    category: ["Mapnel", "Nezrog", "Mouet-Pouet", "Codex"],
    definition: "Battre, disposer l'énergie microcosmique transmutée dans la grandeur macrocosmique.",
    implication: "Acceptation radicale de la totalité, se posant sans surcharge ajoutée les choses appelées à jouer en toute circonstance.",
    synonym: "PIII",
    version: "Palpiter, Palpite, Infini"
  },
  {
    term: "Semaine Sublime",
    category: ["Mapnel", "Nezrog", "Museum", "Citadel"],
    definition: "Élévation continuelle des formes de richesse parmi 7 paliers d'initiations.",
    simplified: "Génitale structuration métaphorique de l'ordre",
    surnatural: "Rythme Circadien Hebdomadaire",
    version: "Semaine, Semaines"
  },
  {
    term: "Hyenuul",
    category: ["Mapnel", "Nezrog", "Phénotype", "Spherµ"],
    definition: "Attache ne pouvant pas se passer de l'envie en vie.",
    etymology: "Hâte Hermétique entre guillemets impure.",
    parent: "Nihilin",
    surnatural: "Discernement des Significations Indisables"
  },
  {
    term: "Macabrisme",
    category: ["Mapnel", "Ekeline", "Phénomène", "Cueillette"],
    definition: "Odeur épaisse de mort où la fragilité s'expose à coup sûr tôt ou tard.",
    implication: "Véhicule des sentiments souvent extrêmement impactants et brutaux.",
    synonym: "Mortalité, Létalité, Alerte, Clouage, Larguage, Démunion, Rendez-Vous",
    version: "Macabre, Macabres, Macabrismes, Macabriste, Macabristes, Macabrique, Macabriques"
  },
  {
    term: "Gaunie",
    category: ["Mapnel", "Ekeline", "Mouet-Pouet", "Supernova"],
    definition: "Gaieté unie réveilleuse en plénitude médiale, prolongement des angles latéraux en toute finesse.",
    parent: "Bouquet Gaunique, Instances Gauniques(Reptilien, Sifflet, ARvers-Xoi, Innokcien)",
    etymology: " La Gaunie [4-3 Instances] ⟷ L'Agonie [2-1 Instance(s)]",
    surnatural: "Jauge de Concetration Unitaire",
    version: "Gaunico, Gaunique"
  },
  {
    term: "Florescence",
    category: ["Mapnel", "Ekeline", "Phénotype", "Supervision", "Cueillette", "Parc", "Citadel"],
    definition: "Alliance protéiforme de toutes les instances sous leur rôles adéquat.",
    implication: "Guérison des correspondants bossus désamorçant le célibat cellulaire versatile.",
    version: "Fleurissant"
  },
  {
    term: "Innokcien",
    category: ["Mapnel", "Ekeline", "Persona", "Codex", "Concepteur"],
    definition: "Dispossédé médiateur reptilien rapetissant les inadvertances par la magnificence de sa trempe.",
    simplified: "Instance témoin à la sagacité holistique des ensembles.",
    etymology: "Innocence",
    version: "Innokciens, Innokcienne, Innokciennes"
  },
  {
    term: "EntroPied",
    category: ["Mapnel", "Aursyl", "Wacwe", "Phénomène"],
    definition: "Matérialité du divorce cinétique, tension d'extinction cataclysmique stimulant sa propre réalisation vers une chute prémonitoire.",
    implication: "Désorganisation d'incertitude certaine plus ou moins prédictible.",
    version: "Entropique"
  },
  {
    term: "Filet",
    category: ["Mapnel", "Wacwe", "Supervision", "Codex", "Cipher"],
    definition: "Pertinence exemplaire dont l'admiration foudroie de respect et de tenue civilisatrice.",
    implication: "Dextérité interceptrice des forces de discorde et d'affaiblissement.",
    synonym: "Cloche, Cerceau, Poche, Hameçon, Échet",
    version: "Filets, Filature"
  },
  {
    term: "Picol-Kentron",
    category: ["Mapnel", "Wacwe", "Cueillette", "Tablette", "Museum", "Parc", "Citadel"],
    definition: "Schéma de multiplicité des rôles, fonctions interprétées par cercles s'empilant par objectifs •RGB•BNG•",
    implication: "Chaque couleur poursuit un rapport étroit avec l'intégralité fonctionnelle et fondamentale.",
    etymology: "(Pi: Cercle Circulaire) - (Col: Color/Couleur) - (Kentron: Aiguillon/Pointe)",
    version: "Kentronien, Kentroniens, Kentronienne, Kentroniennes"
  },
  {
    term: "Chromel",
    category: ["Mapnel", "Wacwe", "Phénotype", "Supernova", "Codex"],
    definition: "Sublimation décisive des marqueurs traumatiques à la page tournante.",
    implication: "Reprise des déjà-vus sur une phase supérieure de configuration.",
    desc: "Meilleur Drapeau, forme authentique et hypothétique.",
    surnatural: "Supporte Fardeaux",
    version: "Chroméliste, Chromélisme"
  },
  {
    term: "Fon:Rel:Inc",
    category: ["Mapnel", "Vydnitt", "Monoa-Polyz", "Spherµ", "Codex", "Trinité", "Tablette"],
    definition: "=Trinité Clinique= [Littérale]｜Fondations - Relativité - Inclinaisons (Rythme Minceur)",
    version: "F:R:I"
  },
  {
    term: "Fondations",
    category: ["Mapnel", "Vydnitt", "Persona", "Museum"],
    definition: "=Fon:Rel:Inc= [Z-A]｜Solides associés à [Monoa]. Mosaïque d'amplitude vécue répondant par [Polyz].",
    version: "Fondation, Fondateur, Fondateurs, Fondatrice, Fondatrices,Fonder"
  },
  {
    term: "Inclinaisons",
    category: ["Mapnel", "Vydnitt", "Supervision", "Parc"],
    definition: "=Fon:Rel:Inc= [A-Z]｜Espaces associés à [Polyz]. Palette d'actions concevables traduites par [Monoa].",
    version: "Inclinaison, Inclination, Inclinations, Incliner"
  },
  {
    term: "Relativité",
    category: ["Mapnel", "Vydnitt", "Phénotype", "Mouet-Pouet", "Citadel"],
    definition: "=Fon:Rel:Inc= [AZ-ZA]｜Marge de relief associé à [Variable -]. Fluctuation accouchée des continuités inexorables [Monoa-Polyz].",
    version: "Relativités"
  },
  {
    term: "Scé;Syn;Cel",
    category: ["Mapnel", "Fostrah", "UiNo", "Uewij", "Monoa-Polyz", "Spherµ", "Codex", "Trinité", "Tablette"],
    definition: "=Trinité Empirique= [Numérale]｜Scénario - Syndrome - Cellules (Symétrie Pinceuse)",
    version: "S;S;C"
  },
  {
    term: "Scénario",
    category: ["Mapnel", "Fostrah", "Cueillette", "Museum"],
    definition: "=Scé;Syn;Cel= [9-1]｜Affaires associés à [Monoa]. Plateau de terrain étendue prolongé par [Polyz].",
    version: "Scénarios, Scénariste, Scénaristes, Scénariser"
  },
  {
    term: "Cellules",
    category: ["Mapnel", "Uewij", "Cipher", "Parc"],
    definition: "=Scé;Syn;Cel= [1-9]｜Chaînes associés à [Polyz]. Carreaux de dalles pratiquables portés par [Monoa].",
    version: "Cellule, Cellulier, Celluliers"
  },
  {
    term: "Syndrome",
    category: ["Mapnel", "UiNo", "Phénomène", "Mouet-Pouet", "Citadel"],
    definition: "=Scé;Syn;Cel= [00-10]｜Intervalle de mesure associé à [Variable -]. Morceau arrangé des chroniques implacables [Monoa-Polyz].",
    version: "Syndromes, Syndromatique, Syndromatiques"
  },
  {
    term: "Équation d'Efficacité Inanitoire",
    category: ["Aursyl", "Fostrah", "Codex", "Cipher", "Museum"],
    definition: "Calcul scripté pour résulter une détermination à la servitude sous les leviers du contrôle des richesses et la falsification identitaire.",
    version: "EEI, Science Inanitoire, Bricole du 0, Bricolage du 0, Inanité Religieuse, Équation Fragmentaire"
  },
  {
    term: "Flingue",
    category: ["Aursyl", "UiNo", "Supernova", "Citadel"],
    definition: "Arme neutralisatrice d'emprise comportementale et psychologique, menace mutilatoire liquidatrice d'intrus en cadavres muets.",
    synonym: "Revolver, Fusil, Calibre, Troueur, Railgun, Perforant",
    version: "Flingues, Flingueur, Flingueurs, Flingueuse, Flingueuses, Flinguer"
  },
  {
    term: "Trompette",
    category: ["Aursyl", "Uewij", "Mouet-Pouet", "Supervision", "Parc"],
    definition: "Arme jugulatrice d'emprise attentionnelle et épistémologique, menace exilatoire plaqueuse de volontés en valises malléables.",
    synonym: "Turbine, Klaxon, Sonnerie, Couvre-Feu, Intimidateur, Convocation",
    version: "Trompettes"
  },
  {
    term: "Mélodie Inépelable",
    category: ["Mapnel", "Nezrog", "Ekeline", "Wacwe", "Mouet-Pouet", "Cipher"],
    definition: "Composition arrangée sans commandement en cohésion organique souple.",
    synonym: "Méline",
    version: "Méline"
  },
  {
    term: "Sfivoq",
    category: ["Mapnel", "Leqwa", "Persona"],
    definition: "Dauphin bouillonant d'exaltation, symbolique de l'initiation vitale de déferlantes affirmations cordiales.",
    desc: "Larmes de Vitalité, 4 Évents Lévitation, Corne en Fusion, 100 Nageoires, 3 Yeux Néons RGB, Peau Grise, Taille de 9 Mètres",
    version: "Sfivoqs"
  },
  {
    term: "Duel Xceptionnel",
    category: ["Mapnel", "Aursyl", "Leqwa", "Supervision", "Supernova"],
    definition: "Controverse du statu quo, de son décalcage standardisé et de son arsenal pour le maintenir.",
    implication: "Culmination du déchaînement ravageur pour finalité la délivrance du dévore-novice et de sa machination.",
    simplified: "Complétude Nezkelwac et Admagcoq misent en synthèse dans la table des jeux.",
    synonym: "Duel ⚔️ceptionnel"
  },
  {
    term: "MonPol",
    category: ["Mapnel", "Lysrua", "Leqwa", "Monoa-Polyz", "Phénotype", "Spherµ", "Cueillette"],
    definition: "Titre honorifique envers l'être et son devenir ou le mémojectile quoi qu'il en soit.",
    pronunce: "Monne-Polle"
  },
  {
    term: "Crithekiel",
    category: ["IUVALCY", "UiNo", "Persona", "Concepteur", "Citadel"],
    definition: "Metteur en scène du manège de l'échec dialectique de la dialectique.",
    implication: "La création s'embouche un coin, souffle l'effondrement d'une complétude-incomplète.",
    etymology: "Critère:Théologie｜Critique:Théorie｜Que Dieu le fortifie [Ui Appellation Statique]",
    simplified: "Dénomination artificielle",
    synonym: "Critheka"
  },
  {
    term: "Critheqiel",
    category: ["IUVALCY", "UiNo", "Phénomène", "Codex", "Parc"],
    definition: "Redéveloppement référenciel jusqu'à son terme en irrémédiable piège.",
    implication: "Impasse cognitive et obsolescence, la capture se dissout spontanément part en part.",
    etymology: "Critère:Théologie｜Critique:Théorie｜Que Dieu le fortifie [No Évocation Dynamique]",
    simplified: "Disposition d'hyper-perspective",
    synonym: "Crithequ"
  },
  {
    term: "Critheçiel",
    category: ["IUVALCY", "UiNo", "Cueillette", "Cipher", "Museum"],
    definition: "Formule de l'impérissable des puissances potentielles invisibles.",
    implication: "Tant les familles ou les champs lexicaux, ça ne peut que faire sens sans faire sens mais c'est comme ça.",
    etymology: "Critère:Théologie｜Critique:Théorie｜Que Dieu le fortifie [Ui-No Fabulation Médiane]",
    simplified: "Douance prospectoire",
    synonym: "Critheci"
  },
  {
    term: "Crethole",
    category: ["IUVALCY", "Tôhla", "Trinité", "Spherµ", "Codex"],
    definition: "Le monde comme école prise par les moins entravés.",
    implication: "Déjouer la tyrannie du sens ensemble, c'est compris ?",
    simplified: "Divination idiote",
    synonym: "Critheco"
  },
  {
    term: "Critherçation・Critherçer",
    category: ["IUVALCY", "UiNo", "Slacpi°", "Mouet-Pouet", "Phénotype","Cipher"],
    definition: "[nom/verbe] inconnu complétable-incomplétable comme bon semble. Depuis le rationnel et l'irrationnel, kinésie gymnastique à partir d'incantations, celles dissécatoires de la dissection indissectionnable.",
    implication: "Rien ne veut rien dire, le langage sied cette pipelette à merveille, une vrai tête à claque amuseuse de galerie.",
    simplified: "Discours sans dessus dessous・Mot à deviner indiqué par {Ç@} ou {Çaro}",
    version: "Critherçations, Critherçement, Ç@"
  },
  {
    term: "PAMABWA",
    category: ["IUVALCY", "Nezrog", "Monoa-Polyz", "Phénotype", "Mouet-Pouet", "Concepteur"],
    definition: "Invention pocuP&moceM, ce qu'on appelle le souci, pas le mot ni la croyance.",
    synonym: "Couple épanoui"
  },
  {
    term: "INTIMACY",
    category: ["IUVALCY", "Uewij", "Phénomène", "Supernova", "Trinité", "Tablette"],
    definition: "Trinité Viscérale [⦻] {0} (∞) ou <Ж>; Proximité sensorielle sous dégradé exponentiel, sous un rayon complémentaire de la libido au plaisir centrifuge.",
    implication: "Supporter collaborateur de l'entendement novice comme amusement dégagé.",
    synonym: "For Intérieur"
  },
  {
    term: "XaraЖereX",
    category: ["IUVALCY", "UiNo", "Uewij", "Mouet-Pouet", "Spherµ"],
    definition: "@ttributs tout aussi bien absolus et relatifs comprisent dans une pille de données interminable.",
    simplified: "Danse confuse ambivalente en cadre et légitimité.",
    pronunce: "SaraXteriZ"
  },
  {
    term: "Déjà-Vu",
    category: ["IUVALCY", "Leqwa", "Mouet-Pouet", "Phénomène"],
    definition: "Sentiment d'expérience/expérimental/d'expertise du vécu.",
    simplified: "Superposition Analogue"
  },
  {
    term: "Travail",
    category: ["Aursyl", "Fostrah", "Codex"],
    definition: "Collecteur $¥€₿ [Monop%Polym] abusant la culture (Profit - Extraction - Monopole - Accumulation).",
    implication: "Ce qui doit formellement être fait pour l'âme collective à ce qu'on dit.",
    simplified: "Tic au devoir avec ravoir.",
    desc: "Représenté par le coquin ayant un lien étroit avec le cachotier."
  },
  {
    term: "Veldiac",
    category: ["Mapnel", "IUVALCY", "Uewij", "Codex"],
    definition: "Voilier 1234 traversant la culture (1 - 2 - 3 - 4).",
    implication: "Ce qui doit informellement devenir oublié pour la psyché individuelle à ce qu'on dit.",
    simplfied: "Silence au devoir sans savoir.",
    desc: "Représenté par la cachoterie ayant un lien étroit avec le coquin.",
    version: "Veldiaçien, Veldiaçiens, Veldiaçienne, Veldiaçiennes, Veldique, Veldiques"
  },
  {
    term: "Veldiac Jtie",
    category: ["Mapnel", "Fostrah", "Phénotype", "Supervision"],
    definition: "Voilier !:?# [Monom&Polyp] épanouissant la culture (Impulsion - Transmission - Questionnement - Action).",
    synonym: "Veldiac Mapnélien, Jtie"
  },
  {
    term: "Veldiac AL",
    category: ["IUVALCY", "Uewij", "Phénomène", "Supernova"],
    definition: "Voilier 0@O⏲ [Critheçiel] épanouissant la culture (Éther - Association - Manifestation - Horloge).",
    synonym: "Veldiac Iuvalcien, AL"
  },
  {
    term: "Veldiac AJtieL",
    category: ["Mapnel", "IUVALCY", "UiNo", "Cueillette"],
    definition: "Voilier [Monom&Polyp]~=~[Critheçiel] réalisant la culture.",
    synonym: "Veldiac Mapnélo-Iuvalcien",
    version: "AJtieL"
  },
  {
    term: "Ganie",
    category: ["IUVALCY", "Uewij", "Supernova", "Cueillette"],
    definition: "Hors-ganisme alias aux couches plus lointaines que l'organologie actuelle.",
    version: "Ganico, Ganique"
  },
  {
    term: "GaunieGanie",
    category: ["Mapnel", "IUVALCY", "Ekeline", "Uewij", "Mouet-Pouet", "Supernova", "Cueillette"],
    definition: "Gaieté Hors-ganique.",
    etymology: "Gaunie+Ganie pouvant se dire à l'avers ou à revers.",
    synonym: "Extase, Félicité, Transe",
    meme: "Gaunico=Ganique/Ganico=Gaunique",
    version: "Gaunico=Ganique, Ganico=Gaunique"
  },
  {
    term: "CritHAïe",
    category: ["IUVALCY", "Fostrah", "UiNo", "Uewij", "Tôhla", "Cipher"],
    definition: "Comment puis-je te le dire ?",
    implication: "Il s'agit de nous qui n'est pas nôtres.",
    simplified: "Douloureuse translation",
    etymology: "Inanité critique Ha"
  },
  {
    term: "TRIBALT",
    category: ["IUVALCY", "Aursyl", "Fostrah", "Spherµ", "Codex"],
    definition: "Structure évolutives des formes morcelées vers leur incompréhensibles compréhensions avortées."
  },
  {
    term: "GESTALT",
    category: ["IUVALCY", "Uewij", "Spherµ", "Codex", "Cipher", "Concepteur"],
    definition: "Structure évolutives des formes entières vers leur définitions indéfinissables fécondées."
  },
  {
    term: "Goalois(e)",
    category: ["IUVALCY", "Fostrah", "Persona", "Phénomène"],
    definition: "Solution Miscible Immiscible plongée dans le circuit du sens.",
    etymology: "Gaulois-Goal Polyphonie",
    version: "Goalois, Goaloise, Goaloises"
  },
  {
    term: "Möbius Netwow",
    category: ["IUVALCY", "UiNo", "Supernova", "Spherµ", "Citadel"],
    definition: "Site cousu décousu d'entendement domestique gouvernant.",
    version: "Netwow, Netwower, Netwowers"
  },
  {
    term: "PROTAGONISM",
    category: ["IUVALCY", "UiNo", "Leqwa", "Concepteur"],
    definition: "Pouvoir affirmatif du défi continuel vers une forme de vie irréductible et croissante.",
    synonym: "Ganique(profusée)",
    version: "Protagoniste, Protagonique, Protagoniques"
  },
  {
    term: "Crith",
    category: ["IUVALCY", "UiNo", "Supervision"],
    definition: "Commandement à l'antenne de singularité complète-incomplète."
  },
  {
    term: "⟁",
    category: ["ARc⟁diA", "Mouet-Pouet", "Cipher"],
    definition: "Awkward.",
    etymology: "awk = ambigu｜ward = direction spaciale/temporelle",
    synonym: "Étrange, Maladroit, Embarassant, Difficile, Gênant, Délicat, Fâcheux, Lourd",
    version: "Awkward"
  },
  {
    term: "ZooZaZe",
    category: ["ARc⟁diA", "Logjēm", "Slacpi°", "Trinité", "Tablette"],
    definition: "Trinité Cultivatrice (JooQooBoo - aLIaKKaHH - eRUeGGeHH)",
    simplified: "Forces"
  },
  {
    term: "JooQooBoo",
    category: ["ARc⟁diA", "Logjēm", "Supervision", "Supernova"],
    definition: "Hostilité macabrique affranchie des lois établies ensemanceuse de plosions imparables.",
    simplified: "Jeu du Cou Menacé",
    synonym: "JooQ, SWOT, Compétition, Violence, Agitation",
    version: "JooQooBoos, JooQooBien, JooQooBiens, JooQooBienne, JooQooBiennes"
  },
  {
    term: "aLIaKKaHH",
    category: ["ARc⟁diA", "Slacpi°", "Ekeline", "Phénotype", "Cueillette"],
    definition: "Dissolution affiliatrice affranchie des coercitions prescrites enrôleuse d'horizons inexplorés.",
    simplified: "Alimentation Accentueuse de Soulagement",
    synonym: "aLIa, SCAMPER, Coopération, Douceur, Calme",
    version: "aLIaKKaHHs, aLIaKKien, aLIaKKiens, aLIaKKienne, aLIaKKiennes"
  },
  {
    term: "eRUeGGeHH",
    category: ["ARc⟁diA", "Nezrog", "Phénomène"],
    definition: "Passage didactique affranchie des limitations formées animateur d'exterrogations impénétrables.",
    simplified: "Éruption Égayeuse d'Interpellations",
    synonym: "eRUe, QQOQCCP, Congruence, Proportion, Médiation",
    version: "eRUeGGeHHs, eRUeGGien, eRUeGGiens, eRUeGGienne, eRUeGGiennes"
  },
  {
    term: "Letricot",
    category: ["ARc⟁diA", "Aursyl", "Logjēm", "Mouet-Pouet", "Parc"],
    definition: "Technicité éditoriale du langage et des combinaisons parmi les attributions de sens et du voisinage phonétique.",
    implication: "Lecture interchangée possiblement à l'envers pour décrire une forme nouvelle éventuellement dissonante de la théorie à la pratique.",
    synonym: "Label, Étiquette, Marque, Cachet",
    etymology: "Tricotage-Lettres,"
  },
  {
    term: "TRICK_&_TREAT",
    category: ["ARc⟁diA", "Logjēm", "Supervision", "Codex"],
    definition: "Essayer de raisonner ou Conduire sa raison, telle est la question.",
    synonym: "Trinitrotoluène(TNT)",
    meme: "Désolé tu n'es plus Urflosien… Tu ne l'as jamais été, à vrai dire. Je t'ai mal jugé."
  },
  {
    term: "fantômiseur/phantomizer",
    category: ["ARc⟁diA", "Slacpi°", "Persona", "Mouet-Pouet", "Cipher", "Cueillette"],
    definition: "Il m'en bouche un coin, je voudrai effectivement une diarrhée pérenne.",
    implication: "Je t'ai démasqué petit cachotier, voilà un fantôme, ça existe pour de vrai ouuahhh!!",
    version: "fantômiseur, phantomizer, fantômiste, fantômistes, fantômisation, fantômisé, fantômisés, fantômisée, fantômisées"
  },
  {
    term: "~Monom&moceM~🙵~Polyp&pocuP~",
    category: ["ARc⟁diA", "Xyfurn", "Monoa-Polyz", "Mouet-Pouet"],
    definition: "C'est probablement une blague (つ≧▽≦)つ ʱªʱªʱª(ᕑᗢूᓫ∗)",
    implication: "Pouvoir Magique Incantatoire",
    synonym: "&🙵&"
  },
  {
    term: "Mirsa Mirsa Mua",
    category: ["ARc⟁diA", "Slacpi°", "Cueillette"],
    definition: "Thémathique du vouloir double, Forme Hypothéthique ouverte «Tu saura prochainement si tu es intéressé».",
    meme: "Quel kit de farceur joyeux( ͡° ͜ʖ ͡°)"
  },
  {
    term: "EURÊK⟁",
    category: ["ARc⟁diA", "Lysrua", "Logjēm", "Slacpi°", "Tôhla", "Cueillette", "Tablette", "Museum"],
    definition: "Lecture artistique des semences ZooZaZe Z옹Z야Z웨 d'ouvrages culturels.",
    synonym: "Eurêka, J'ai trouvé!"
  },
  {
    term: "SP⟁RK",
    category: ["ARc⟁diA", "Tôhla", "Supernova", "Spherµ", "Museum", "Parc", "Citadel"],
    definition: "System, Purpose, and the Awkward Realm of Kindred ≈ Système, Intention, et le Monde Étrange de la Parenté",
    synonym: "SPARK, Société, Énergie, Généalogie",
    version: "SPARK"
  },
  {
    term: "Câble/Wire",
    category: ["ARc⟁diA", "Aursyl", "Logjēm", "Slacpi°", "Phénomène", "Supervision", "Codex"],
    definition: "Le destin t'a choisi, ta vie a un sens, tu as besoin de ceci ou cela XD.",
    implication: "Scepticisme de l'artificialité.",
    version: "Câble, Câbles, Wire, Wires, Wired, Wiring, Câblage, Câblé, Câblée, Cablés, Cablées"
  },
  {
    term: "InfiNieR",
    category: ["ARc⟁diA", "Tôhla", "Persona", "Supernova"],
    definition: "Antinomie tragico-splendide profanateur de panoptisme.",
    etymology: "Infirme, Infirmier, Infirmerie, Infini",
    parent: "Palpiter de l'Infini"
  },
  {
    term: "Blehdwoluzvi",
    category: ["ARc⟁diA", "Aursyl", "Tôhla", "Mouet-Pouet", "Phénotype"],
    definition: "Le pouvoir dévoriste n'est que blehdwo, tu connais maintenant, tu es prêt pour la vie!",
    implication: "Librairie Ludothèque Hourra! Comédie ou Tragédie ?",
    synonym: "Blehdwo, t'attends quoi?, Bruh, What the Fuck, Incompréhension, le juron par excellence",
    meme: "C'est les livres. C'est la musique. C'est la culture. Toute la merde du monde. Ceux que vous souhaitiez jusqu'à présent.",
    version: "Blehdwo"
  },
  {
    term: "Tra§Vel",
    category: ["ARc⟁diA", "Leqwa", "Logjēm", "Codex", "Supervision"],
    definition: "Bouclure de flambeau Doppelgänger des entrailles exclusives inclusives selon la forme et les convulsions du vouloir.",
    implication: "Le ratio concernant la collection abusive et le voile traversé serait de 20%~80% pour les gauniques voire 10%~90% chez les gaunico-ganiques.",
    simplified: "Dose d'altérité réaliste et idéaliste sous les moyens du bord et du fond.",
    desc: "Représenté par le coquin et le cachotier.",
    parent: "Travail, Veldiac",
    etymology: "English Travel (Français Voyager)",
    meme: "Ça n'existe pas à ce qu'on dit.",
    version: "Tra§Veling"
  },
  {
    term: "Gorgeous Raper",
    category: ["ARc⟁diA", "Aursyl", "Logjēm", "Slacpi°", "Tôhla", "Mouet-Pouet"],
    definition: "Magnifique Violeur.",
    implication: "Tu peux t'en aller si tu veux.",
    simplified: "Un combat qui ne peut être pas"
  },
  {
    term: "aTHaTCHa",
    category: ["ARc⟁diA", "Aursyl", "Slacpi°", "Phénotype", "Tablette"],
    definition: "Dualité Apathique/Empathique (ApaTH - CyaTH - EmpaTH)",
    implication: "Dévore-Novice et Antinomies",
    synonym: "Adieu"
  },
  {
    term: "VII-X",
    category: ["Aursyl", "Logjēm", "Spherµ", "Tablette", "Trinité"],
    definition: "Trinité Tourmentaire; Plaie internalisé sur des générations.",
    etymology: "VII(7)-X(10)=III(3)"
  },
  {
    term: "Conte Sanguinaire",
    category: ["Aursyl", "Fostrah", "Nezrog", "Spherµ", "Cueillette"],
    definition: "Déconseillé aux humains moins humains."
  },
  {
    term: "InFeXcuse",
    category: ["Aursyl", "Slacpi°", "Codex", "Phénotype", "Parc", "Tablette"],
    definition: "Préfixes % Suffixes odieux à utiliser avec modération.",
    simplified: "Structure des mots du politicien",
    implication: "Il y a le X, le Xé, le Xeur; la Xation est féroce.",
    etymology: "Infection + Excuse"
  },
  {
    term: "Hœmnet",
    category: ["Aursyl", "Persona", "Cueillette", "Codex"],
    definition: "Viande de chair humaine recommandé pour son goût délicieux et sa texture raffinée.",
    simplified: "Spécialité culinaire des professionnels",
  },
  {
    term: "ANTAGONISM",
    category: ["Aursyl", "Concepteur"],
    definition: "Pouvoir négateur du défi continuel vers une forme de vie indestructible et cruciale.",
    synonym: "Agonique(Diffusée)",
    version: "Antagoniste, Antagonique, Antagoniques"
  },
  {
    term: "Nihilin",
    category: ["Aursyl", "Nezrog", "Supernova", "Concepteur"],
    definition: "Abandon absolu de toute forme de sens.",
    etymology: "Nihilisme, Nihil, Rien",
    parent: "Hyenuul"
  },
  {
    term: "Dévore-Nova",
    category: ["Aursyl", "Wacwe", "Supernova", "Cipher"],
    definition: "Champion de la perpétuation, forme adaptative de réinvention des franchises aursyliennes.",
    implication: "Néo-versions du même plan ennuyeux inquisiteur de la prise au piège."
  },
  {
    term: "PROjECT SSeCCu$",
    category: ["Aursyl", "Codex", "Tablette", "Museum", "Parc", "Citadel"],
    definition: "Diagramme colonisé - Revue du succès",
    implication: "Les règles du succès sous une banière instrumentale co-produite",
    version: "SSeCCu$, SSeCCuS"
  },
  {
    term: "￣\_(ツ)_/￣",
    category: ["Lysrua", "Xyfurn", "Mouet-Pouet", "Cueillette", "Codex", "Tablette"],
    definition: "Je ne sais pas.",
    implication: "Universalité"
  },
  {
    term: "phoRÊTT",
    category: ["Lysrua", "Mapnel", "Aursyl", "IUVALCY", "ARc⟁diA", "Ekeline", "Persona", "Phénomène", "Supernova", "Parc", "Tablette"],
    definition: "Support de rôles et d'archétypes impliquant des principes factoriels interdépendants qui régissent le code personnel arangé.",
    implication: "Duo avec dézELTT",
    etymology: "Forêt - Phore = Qui porte (ελληνικά/Grec)",
    parent: "Fon:Rel:Inc"
  },
  {
    term: "dézELTT",
    category: ["Lysrua", "Mapnel", "Aursyl", "IUVALCY", "ARc⟁diA", "Ekeline", "Phénotype", "Supervision", "Codex", "Museum", "Tablette"],
    definition: "Support d'analyse et d'observation impliquant des sources causales interdépendantes qui régissent les décrets communs composés.",
    implication: "Duo avec phoRÊTT",
    etymology: "Désert - Zelt = Tente (Deutsch/Allemand)",
    parent: "Scé;Syn;Cel"
  },
  {
    term: "Iacy",
    category: ["IUVALCY", "Lysrua", "UiNo", "Phénotype"],
    definition: "Bonjour/Bonsoir/Bienvenue.",
    parent: "Invité Iac/Veldiac",
    meme: "Yashi"
  },
  {
    term: "Terlush・Derlush",
    category: ["Lysrua", "Aursyl", "Vydnitt", "Phénotype"],
    definition: "Pardon/S'il vous plaît.",
    implication: "[version légère]・[version lourde]",
    parent: "Mlush'Plush",
    meme: "T-T-Terlush・D-D-Derlush"
  },

  {
    term: "Sublii(s)",
    category: ["Mapnel", "Lysrua", "Nezrog", "Phénotype"],
    definition: "Merci(exagération).",
    parent: "Semaine Sublime",
    meme: "Subliissssss(jusqu'à épuisement)"
  },
  {
    term: "Atcha",
    category: ["ARc⟁diA", "Lysrua", "Slacpi°", "Phénotype"],
    definition: "Au revoir.",
    parent: "aTHaTCHa",
    meme: "Atchoom"
  },
  {
    term: "Gliobë",
    category: ["Lysrua", "Mapnel", "IUVALCY", "ARc⟁diA", "Aursyl", "Mouet-Pouet", "Tablette"],
    definition: "Cartographie Emojitique du Plan Lointain aurnelcyen."
  },
  {
    term: "Mlush'Plush",
    category: ["Lysrua", "Vydnitt", "Monoa-Polyz", "Phénomène", "Phénotype", "Supervision", "Supernova", "Cipher", "Museum", "Parc"],
    definition: "Double facette ini-exo tunnel passerelle, vastitude transversale sans mesure propre.",
    implication: "Attention à la priorité de lecture linéaire inévitable!",
    simplified: "Spécialité Implicite Explicite aux goûts variés.",
    desc: "Il se représente dans le bandage de la pilosité sur elle-même.",
    synonym: "Contraires, Paradigmes, Traitement, Médecine, Thérapie, Semblance, Antidote",
    parent: "Monoa-Polyz"
  },
  {
    term: "YgijfeV",
    category: ["Lysrua", "Slacpi°", "Spherµ", "Cueillette", "Concepteur", "Citadel"],
    definition: "Vague motrice réceptionnée et renvoyée de friandises fugaces remplies et vides.",
    implication: "Poche bouchebéante gonflable insoupçonnée en matière pénétrante.",
    simplified: "Écosystème//Écouah du Tout et du Rien.",
    desc: "Elle est représentée dans la futilité des arbres-ciel.",
    synonym: "⦾⦿, ◯⬤○● Y ●○⬤◯, Richesse, Daimon, Démiurge, Représailles, Rétribution, Combination, Monde, Organe, Déjà-vu"
  },
  {
    term: "白𝓒α𐌺心αট黒",
    category: ["Lysrua", "Aursyl", "Logjēm", "Tablette", "Cipher"],
    definition: "ÉCARLATE ou la Promesse Brisée d'Aursyl/Lysrua.",
    version: "ÉCARLATE"
  },
  {
    term: "⼰ㄈ🜆ꡙҼ7",
    category: ["Lysrua", "Aursyl", "Tôhla", "Tablette", "Cipher", "Codex"],
    definition: "SCARLET ou la Déclaration sur papier non-papier.",
    implication: "[Domaine] Sciences & Technologies",
    parent: "Gliobë",
    version: "SCARLET"
  },
  {
    term: "ÇEMiNi!",
    category: ["Lysrua", "Trinité", "Tablette"],
    definition: "Trinité Stimulatoire ands.ot.rus la Réalité ! ?lush. (LEMiNiQ - GEMiNiC - REMiNiK)",
    implication: "[SYL｜LYS]"
  },
  {
    term: "LEMiNiQ",
    category: ["Lysrua", "Museum"],
    definition: "dans.autour la Réalité Lucide Onirique Mlush.",
    implication: "[Secret｜SycrⒺt]"
  },
  {
    term: "REMiNiK",
    category: ["Lysrua", "Parc"],
    definition: "sur.autour la Réalité DOMINO Ludique Plush.",
    implication: "[Sélection｜SylectiΩn]"
  },
  {
    term: "GEMiNiC",
    category: ["Lysrua", "Citadel"],
    definition: "dans.autour.sur la Réalité CoqUiNe DOMINO Mlush'Plush YgijfeV.",
    implication: "[Syllepse｜Syllæps]"
  },
  {
    term: "⮟ЮꡙΞԵ",
    category: ["Lysrua", "Aursyl", "Fostrah", "Uewij", "Tablette", "Cipher", "Mouet-Pouet"],
    definition: "VIOLET ou la Prouesse Saugrenue des querelles spectrales.",
    implication: "[Domaine] Société & Vie pratique",
    parent: "ÇEMiNi!",
    version: "VIOLET"
  },
  {
    term: "Z옹Z야Z웨",
    category: ["Lysrua", "Tôhla", "Trinité", "Tablette"],
    definition: "Trinité Cantinière (J옹Q옹B옹 - 야LI야KK야HH - 웨RU웨GG웨HH)",
    pronunce: "ZongZyaZwe",
    parent: "ZooZaZe",
    version: "ZongZyaZwe",
  },
  {
    term: "J옹Q옹B옹",
    category: ["Lysrua", "Mapnel", "Leqwa", "Supervision", "Supernova", "Citadel"],
    definition: "Guerre vectorielle, vasculaire et pronominale à l'encontre de l'exigence ontologique carcérale.",
    simplified: "Assaut Con Gravissime",
    pronunce: "옹 = ong (JongQongBong)",
    synonym: "JooQooBoo MonPol",
    version: "JongQongBong, JooQooBoo MonPol, JooQooBoo Mapnélien"
  },
  {
    term: "야LI야KK야HH",
    category: ["Lysrua", "ARc⟁diA", "UiNo", "Phénotype", "Cueillette", "Concepteur", "Parc"],
    definition: "Paix éthique, syntropique et pronominale à l'inverse de tout modèle dogmatique cruel.",
    simplified: "Aliage Consolidé avec Soin",
    pronunce: "야 = ya (yaLIyaKKyaHH)",
    synonym: "aLIaKKaHH CritHAïe",
    version: "yaLIyaKKyaHH, aLIaKKaHH CritHAïe, aLIaKKaHH Iuvalcien"
  },
  {
    term: "웨RU웨GG웨HH",
    category: ["Lysrua", "IUVALCY", "Xyfurn", "Phénomène", "Cipher", "Museum"],
    definition: "Émulation existentielle, inestancielle et nominale à revers des édifications définitives invariables.",
    simplified: "Personnalisation des Œufs Captivants",
    pronunce: "웨 = we (weRUweGGweHH)",
    synonym: "eRUeGGeHH Blehdwo",
    version: "weRUweGGweHH, weRUweGGweHH Blehdwo, weRUweGGweHH Arcadien"
  },
  {
    term: "ҨყⰎல",
    category: ["Lysrua", "Aursyl", "UiNo", "Leqwa", "Tablette", "Cipher", "Persona"],
    definition: "CYAN ou la Berceuse du monde au temps de l'incongru.",
    implication: "[Domaine] Alchimie & Humanités",
    parent: "Z옹Z야Z웨",
    version: "CYAN"
  },
  {
    term: "elzel0lezle",
    category: ["Lysrua", "Wacwe", "Codex", "Supervision"],
    definition: "Ressource supra-kentronienne de garantie en rencontres fortuites grâce à l'arbre de connexion YgijfeV.",
    implication: "Filet interceptant Tra§Vel de la malédiction éternisante des directions cognantes abusives.",
    simplified: "Proximité civilisationnelle au travers de SCARLET, VIOLET, CYAN, ￣\_(ツ)_/￣ et 大ටभᲡⰡ.",
    synonym: "Paraplay/Armada/Soinnaie/Flawy/Terroga/Hollox",
    version: "Elzel, l0l, Lezle"
  },
  {
    term: "Domaines",
    category: ["Lysrua", "Spherµ", "Codex", "Cueillette", "Museum", "Parc", "Citadel"],
    definition: "Organigramme des disciplines SCARLET VIOLET et CYAN.",
    version: "Domaine"
  },
  {
    term: "Opale・Opaler",
    category: ["Lysrua", "Leqwa", "Phénotype", "Supervision", "Concepteur", "Trinité"],
    definition: "Impératif (fantômiquement non-impératif) de vie contenu dans chaque vie.",
    implication: "Substitution du devoir tyrannique suppresseur de chimères aursyliennes vers une d'autres chimères.",
    desc: "L'opale est représenté par la cachoterie (ou peut-être pas).",
    etymology: "Upala(Sanskrit) = Pierre Précieuse",
    synonym: "Dû×Opale Devoir×Opaler Dette×Opaliade Débit×lolol"
  },
  {
    term: "大ටभᲡⰡ",
    category: ["Lysrua", "Tôhla", "Persona", "Tablette", "Supernova", "Spherµ", "Concepteur"],
    definition: "TÔHLA ou la Zone Domicile Conquérante.",
    implication: "Visualisation simultanée interchangeable 'Colorful Colorless'"
  },
  {
    term: "Syoneme Sublime",
    category: ["Lysrua", "Parc", "Citadel"],
    definition: "Élévation continuelle des non-formes de pauvreté parmi 7 pentes d'ajournements.",
    simplified: "Céphalique instructuration littérale des forces du chaos",
    surnatural: "Cacophonie Anormale Hebdomadaire",
    version: "Syoneme, Syonemes"
  },
  {
    term: "Articulation Par-ci=Par-là (Mapnélienne)",
    category: ["Mapnel", "Capsule", "Persona", "Supervision", "Supernova"],
    definition: "Esprit - Mental - Corps - Monstre",
    synonym: "ci=là/Cilà",
    version: "Par-ci=Par-là"
  },
  {
    term: "Articulation Ecsætera (Iuvalcienne)",
    category: ["IUVALCY", "Capsule", "Phénomène", "Phénotype"],
    definition: "Inanité - Doigté - Estomac - Ganique",
    synonym: "Jumbo",
    version: "Ecsætera"
  },
  {
    term: "Articulation Link/Age (Arcadienne)",
    category: ["ARc⟁diA", "Capsule", "Museum", "Parc", "Citadel"],
    definition: "Logique - Connection - Engagement - Inspiration - Hummm",
    synonym: "dotFUL",
    version: "Link/Age"
  },
  {
    term: "Articulation deHist (Aursylienne)",
    category: ["Aursyl", "Capsule", "Persona", "Concepteur"],
    definition: "Investisseur - Inconnu - Intouchable",
    synonym: "PlumEncre",
    version: "deHist"
  },
  {
    term: "Articulation KaLeiDo (Lysruéenne)",
    category: ["Lysrua", "Capsule", "Cipher"],
    definition: "OPAL - ALTER - EGO×Ω𝚸𐒰Ⅼ - Æ↰⊥ƎЯ - Ⓔ🇬㊔",
    synonym: "VIRGINless",
    version: "KaLeiDo"
  },
  {
    term: "Squelette ZigZag (Dominion)",
    category: ["D⦾MIN⦿'s", "Capsule", "Spherµ", "Cueillette"],
    definition: "0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - A - B - C - D - E - F",
    synonym: "Indissect",
    version: "ZigZag"
  },
  {
    term: "Hiérarchie Kentronienne (Wacwéen)",
    category: ["Mapnel", "Aursyl", "Capsule", "Spherµ", "Cueillette", "Museum", "Parc", "Citadel"],
    definition: "Rouge - Vert - Bleu - Blanc - Noir - Gris",
    synonym: "KTN",
    version: "Société/Civilisation Kentronienne"
  },
  {
    term: "Semaine Hebdomadaire",
    category: ["Aursyl", "Capsule", "Tablette"],
    definition: "Cycle de 7 jours."
  },
  {
    term: "Calendrier Grégorien",
    category: ["Aursyl", "Capsule", "Tablette"],
    definition: "Tableau des 365 jours d'une année Solaire.",
    version: "Grégorien"
  },
  {
    term: "Syoneme Hebdomadaire",
    category: ["Lysrua", "Capsule", "Tablette"],
    definition: "Cycle de 6 jours."
  },
  {
    term: "Calendrier Emmaïe",
    category: ["Lysrua", "Capsule", "Tablette"],
    definition: "Tableau des 364 jours d'une année Solaire-Lunaire.",
    parent: "CritHAïe",
    version: "Emmaïe"
  },
  {
    term: "MATRICE 5ync sur 5ync",
    category: ["Mapnel", "IUVALCY", "Capsule", "Monoa-Polyz", "Spherµ"],
    definition: "Symbolisme Pentagrammique [5x20] Mapnélo-Iuvalcien.",
    simplified: "Cinq sur Cinq, SNEWLC",
    synonym: "⛤",
    version: "5ync sur 5ync"
  },
  {
    term: "MATRICE 4lien 4perçu",
    category: ["ARc⟁diA", "Aursyl", "Capsule", "Cueillette", "Cipher"],
    definition: "Partie bricolée [14 Mots Croisés] Arcado-Aursylien.",
    simplified: "Alien Aperçu, lien perçu",
    synonym: "⊠",
    version: "4lien 4perçu, Alien Aperçu, lien perçu"
  },
  {
    term: "MATRICE A6es 6tiques 6colaire",
    category: ["Lysrua", "Mapnel", "IUVALCY", "ARc⟁diA", "Aursyl", "D⦾MIN⦿'s", "Capsule", "Spherµ", "Cipher", "Mouet-Pouet"],
    definition: "Tableau Aurnelcyen [6x24] à apprendre par le cœur à ce qu'on dit.",
    implication: "Nouveau lore concernant le QI de la bête 666.",
    simplified: "Assises Cystiques si Scolaire",
    synonym: "🚽💦🏫",
    etymology: "Siège de l'anomalie de la vessie à l'école",
    meme: "Quelle chance d'aller aux toilettes!",
    version: "A6es 6tiques 6colaire, Assises Cystiques si Scolaire"
  },
  {
    term: "DOMINION",
    category: ["D⦾MIN⦿'s", "Persona"],
    definition: "Personnage de la prophétie non-prophétique."
  },
  {
    term: "Innok",
    category: ["D⦾MIN⦿'s", "Ekeline"],
    definition: "Pays aurnelcyen.",
    parent: "Innokcien",
    desc: "Superficie de 47.093km² en forme de pieuvre/gant - 4.863 Habitants",
    meme: "Un habitant n'est dans aucune des 3 villes."
  },
  {
    term: "Urflosia",
    category: ["D⦾MIN⦿'s", "Logjēm"],
    definition: "Capitale//Sifflet au centre d'Innok.",
    parent: "Florescence",
    version: "Urflosien, Urflosiens, Urflosienne, Urflosiennes",
    desc: "Superficie de 2.152km² en forme d'ellipse/œil - 3.108 Habitants"
  },
  {
    term: "Srin",
    category: ["D⦾MIN⦿'s", "Xyfurn"],
    definition: "Ville de l'est d'Innok.",
    parent: "Directions Souveraines",
    version: "Srien, Sriens, Srienne, Sriennes",
    desc: "Superficie de 1.748km² en forme de triangle - 1.130 Habitants"
  },
  {
    term: "Altopus",
    category: ["D⦾MIN⦿'s", "Fostrah"],
    definition: "Ville du nord d'Innok.",
    parent: "TRIBALT//GESTALT",
    version: "Altopien, Altopiens, Altopienne, Altopiennes",
    desc: "Superficie de 0.601km² en forme de carré - 624 Habitants"
  },
  {
    term: "Rantlot",
    category: ["D⦾MIN⦿'s", "Fostrah", "Uewij", "Wacwe", "Logjēm"],
    definition: "Entreprise communauté d'architecture sans possession distinguée.",
    meme: "Rantlot était unanimement d'accord sur le fait que ces gens n'ont rien à faire."
  },
  {
    term: "NEON",
    category: ["D⦾MIN⦿'s", "UiNo", "Vydnitt", "Nezrog", "Wacwe"],
    definition: "Structure de l'enseignement selon la volonté de X."
  },
  {
    term: "H2O",
    category: ["D⦾MIN⦿'s", "Vydnitt", "Ekeline", "Wacwe", "Leqwa", "Slacpi°"],
    definition: "Établissement de la recherche vers l'appartenance.",
    meme: "Leqwa en tant qu'être et son devenir […]"
  },
  {
    term: "TouRise",
    category: ["D⦾MIN⦿'s", "Vydnitt", "Xyfurn", "Wacwe"],
    definition: "Organe Touristique pour s'enrichir et trouver sa place."
  },
  {
    term: "CGU(Carpet Glance Unit)",
    category: ["D⦾MIN⦿'s", "Nezrog", "Slacpi°", "Tôhla"],
    definition: "Institution militaire d'espionage imposant le minimum de sang."
  },
  {
    term: "Esliz",
    category: ["D⦾MIN⦿'s", "Leqwa", "Logjēm", "Slacpi°", "Tôhla"],
    definition: "Association promulgant l'indépendance guslacro-sizrewilienne."
  },
  {
    term: "NEET Club",
    category: ["D⦾MIN⦿'s", "Logjēm", "Tôhla"],
    definition: "Groupe de glandeurs sous-estimé qui aime le chez-soi."
  },
  {
    term: "xXx",
    category: ["D⦾MIN⦿'s"],
    definition: "Organisation à l'origine de toute la tradition de l'idée-maître."
  },
  {
    term: "RaycRa Forces",
    category: ["D⦾MIN⦿'s"],
    definition: "Puissance militaire en vagabondage."
  },
];

function initializeCategoryTags() {
  const categoryHierarchy = {
    "Théorèmes": ["Mapnel", "IUVALCY", "ARc⟁diA", "Aursyl", "Lysrua", "D⦾MIN⦿'s"],
    "Thèses": ["Fostrah", "UiNo", "Uewij", "Vydnitt", "Xyfurn", "Nezrog", "Ekeline", "Wacwe", "Leqwa", "Logjēm", "Slacpi°", "Tôhla"],
    "Thèmes": ["Monoa-Polyz", "Mouet-Pouet", "Persona", "Phénomène", "Phénotype", "Supervision", "Supernova", "Spherµ", "Cueillette", "Codex", "Cipher", "Concepteur", "Museum", "Parc", "Citadel", "Trinité", "Tablette", "Capsule"] // Will be populated with remaining categories
  };

  const allCategories = new Set();
  vocabularyData.forEach(item => {
    if (Array.isArray(item.category)) {
      item.category.forEach(cat => allCategories.add(cat));
    } else if (item.category) {
      allCategories.add(item.category);
    }
  });

  const mainCategories = [...categoryHierarchy["Théorèmes"], ...categoryHierarchy["Thèses"]];
  const desiredThemesOrder = [
    "Monoa-Polyz", "Mouet-Pouet", "Persona", "Phénomène", "Phénotype", "Supervision", "Supernova", "Spherµ",
    "Cueillette", "Codex", "Cipher", "Concepteur", "Museum", "Parc", "Citadel", "Trinité", "Tablette", "Capsule"
  ];

  // Find all categories that are not in Théorèmes or Thèses
  const unmentionedThemes = Array.from(allCategories)
    .filter(cat =>
      !mainCategories.includes(cat) &&
      !desiredThemesOrder.includes(cat)
    );

  // Set the Thèmes order: your explicit order, then the rest
  categoryHierarchy["Thèmes"] = [...desiredThemesOrder, ...unmentionedThemes];

  const tagsContainer = document.getElementById('category-tags');
  tagsContainer.innerHTML = '';

  function getCategoryCount(category) {
    const searchTerm = document.getElementById('vocab-search').value.toLowerCase();
    return vocabularyData.filter(item => {
      const matchesCategory = Array.isArray(item.category)
        ? item.category.includes(category)
        : item.category === category;
      const matchesSearch = searchTerm === '' ||
        (item.term && item.term.toLowerCase().includes(searchTerm));

      const matchesActive = activeCategories.size === 0 ||
        (Array.isArray(item.category) &&
          Array.from(activeCategories).every(activeTag =>
            item.category.includes(activeTag)
          ));
      return matchesCategory && matchesSearch && matchesActive;
    }).length;
  }

  const allTag = document.createElement('span');
  allTag.className = 'category-tag active';
  allTag.textContent = 'Tous';
  allTag.onclick = () => {
    document.querySelectorAll('.category-tag').forEach(tag => tag.classList.remove('active'));
    allTag.classList.add('active');
    activeCategories.clear();
    searchVocabulary();
    updateCategoryCounts();
  };
  tagsContainer.appendChild(allTag);

  window.tagElements = {};

  Object.entries(categoryHierarchy).forEach(([section, categories]) => {

    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'category-section';

    const header = document.createElement('h3');
    header.textContent = section;
    sectionDiv.appendChild(header);

    const tagGroup = document.createElement('div');
    tagGroup.className = 'tag-group';

    categories.forEach(category => {
      const tag = document.createElement('span');
      tag.className = 'category-tag';
      tag.textContent = `${category} (${getCategoryCount(category)})`;
      tag.onclick = () => {
        allTag.classList.remove('active');
        tag.classList.toggle('active');
        if (tag.classList.contains('active')) {
          activeCategories.add(category);
        } else {
          activeCategories.delete(category);
        }
        if (activeCategories.size === 0) {
          allTag.classList.add('active');
        }
        searchVocabulary();
        updateCategoryCounts();
      };
      tagGroup.appendChild(tag);
      tagElements[category] = tag;
    });

    sectionDiv.appendChild(tagGroup);
    tagsContainer.appendChild(sectionDiv);
  });

  window.tagElements = window.tagElements || {};
  window.activeCategories = window.activeCategories || new Set();

  function updateCategoryCounts() {
    // On boucle sur tes catégories pour mettre à jour les chiffres (ex: "Art (5)")
    Object.keys(window.tagElements).forEach(category => {
      if (typeof getCategoryCount === 'function') {
        const count = getCategoryCount(category);
        window.tagElements[category].textContent = `${category} (${count})`;
      }
    });
  }

  window.updateCategoryCounts = updateCategoryCounts;
}
function searchVocabulary() {
  if (window.updateCategoryCounts) window.updateCategoryCounts();
  const searchTerm = document.getElementById('vocab-search').value.toLowerCase();
  const vocabularyList = document.getElementById('vocabulary-list');
  vocabularyList.innerHTML = '';

  let shownCount = 0;

  vocabularyData.forEach(item => {

    // Vérifie si TOUTES les catégories actives sont présentes dans l'item
    const itemCats = Array.isArray(item.category) ? item.category : [item.category];
    const matchesCategory = activeCategories.size === 0 ||
      Array.from(activeCategories).every(activeTag => itemCats.includes(activeTag));

    const matchesSearch = searchTerm === '' ||
      (item.term && item.term.toLowerCase().includes(searchTerm));

    if (matchesCategory && matchesSearch) {
      const itemElement = document.createElement('div');
      itemElement.className = 'vocabulary-item';

      const title = document.createElement('h3');
      title.textContent = item.term;
      itemElement.appendChild(title);

      const category = document.createElement('div');
      category.className = 'vocabulary-category';

      if (Array.isArray(item.category)) {
        category.innerHTML = item.category.map(cat => {
          return activeCategories.has(cat) ?
            `<span style="color: #FF2400">${cat}</span>` :
            cat;
        }).join(', ');
      } else {
        category.innerHTML = activeCategories.has(item.category) ?
          `<span style="color: #FF2400">${item.category}</span>` :
          item.category;
      }
      itemElement.appendChild(category);

      if (item.definition) {
        const defP = document.createElement('p');
        defP.textContent = item.definition;
        // Pas de classe detail-item → jamais masqué par les filtres
        itemElement.appendChild(defP);
      }

      const fields = [
        { key: 'implication', label: 'Implication ⇒ ' },
        { key: 'simplified', label: 'Simplifié 👌 ' },
        { key: 'desc', label: 'Représentation 🖼️ ' },
        { key: 'parent', label: 'Parenté # ' },
        { key: 'etymology', label: 'Étymologie ⓘ ' },
        { key: 'synonym', label: 'Synonyme ≈ ' },
        { key: 'pronunce', label: 'Prononciation 🗣 ' },
        { key: 'meme', label: 'Phénomème 🗿 ' },
        { key: 'surnatural', label: 'Surnaturel 🔮 ' },
        { key: 'version', label: 'Versions alternatives ≍ ' }
      ];

      fields.forEach(field => {
        if (item[field.key]) {
          const p = document.createElement('p');
          p.textContent = `${field.label}${item[field.key]}`;

          p.classList.add('is-detail');
          p.classList.add('detail-item');
          p.classList.add(`detail-${field.key}`);

          itemElement.appendChild(p);
        }
      });

      vocabularyList.appendChild(itemElement);
      shownCount++;
    }
  });

  const vocabCount = document.getElementById('vocab-count');
  if (vocabCount) vocabCount.textContent = shownCount;
}

const originalVocabularyData = [...vocabularyData];

function sortVocabulary(sortType) {
  if (sortType === 'alpha') {
    vocabularyData.sort((a, b) => a.term.localeCompare(b.term));
  } else {
    vocabularyData.length = 0;
    vocabularyData.push(...originalVocabularyData);
  }

  searchVocabulary();
}

function filterVocabulary() {
  searchVocabulary();
}

document.addEventListener('DOMContentLoaded', () => {
  initializeCategoryTags();
  searchVocabulary();
});

window.detailVisibility = {
  implication: true, simplified: true, desc: true, parent: true,
  etymology: true, synonym: true, pronunce: true, meme: true,
  surnatural: true, version: true,

  update() {
    if (window.activePopovers) {
      window.activePopovers.forEach(popover => {
        Object.keys(this).forEach(key => {
          if (typeof this[key] !== 'boolean') return;
          const el = popover.querySelector('[data-detail-type="' + key + '"]');
          if (el) el.style.display = this[key] ? '' : 'none';
        });
      });
    }

    Object.keys(this).forEach(key => {
      if (typeof this[key] !== 'boolean') return;
      const dictElements = document.querySelectorAll('.detail-item.detail-' + key);
      dictElements.forEach(el => {
        el.style.display = this[key] ? '' : 'none';
      });
    });
  },

  setAll(value) {
    Object.keys(this).forEach(key => {
      if (typeof this[key] === 'boolean') this[key] = value;
    });
    this.update();
  },

  set(key, value) {
    if (typeof this[key] === 'boolean') {
      this[key] = value;
      this.update();
    }
  }
};