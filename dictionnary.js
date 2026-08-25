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

  function handleOpenModal(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    openModal();
  }

  openBtn.addEventListener('click', handleOpenModal);
  openBtn.addEventListener('touchend', handleOpenModal, { passive: false });
  openBtn.addEventListener('pointerup', handleOpenModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
});

const activeCategories = new Set();
const vocabularyData = [
  {
    term: "Terme",
    category: ["K0re"],
    definition: "Entrée du dictionnaire — le concept clé qui peut être défini, contextualisé et relié.",
    school: "École, régime ou cadre conceptuel qui situe l'entrée dans le système.",
    implication: "Champ indiquant ce que le terme engage, provoque ou mobilise dans le système.",
    simplified: "Résumé rapide et accessible du sens général du terme.",
    desc: "Représentation visuelle, symbole ou image mentale associée au terme.",
    example: "Illustration concrète ou situation d'usage qui aide à comprendre le terme.",
    quote: "Formule, phrase ou citation qui incarne l'esprit du terme.",
    parent: "Terme plus vaste ou catégorie parente qui structure la relation conceptuelle.",
    etymology: "Origine du mot ou décomposition de ses éléments pour en comprendre la genèse.",
    synonym: "Mots ou notions proches qui peuvent être utilisées comme variantes.",
    pronunce: "Transcription ou indications de prononciation pour le terme.",
    meme: "Élément comique, phrase drôle ou clin d’œil humoristique lié au terme.",
    surnatural: "Dimension mythologique, étrange ou magique associée au terme.",
    version: "Formes alternatives, flexions et variantes écrites du terme."
  },
  {
    term: "⟁URNELCY",
    category: ["Mapnel", "IUVALCY", "ARc⟁diA", "Aursyl", "Lysrua", "D⦾MIN⦿'s","K0re"],
    definition: "Univers littéraire de Fenekohq.",
    school: "Système littéraire, philosophique et mythologique conçu par Fenekohq.",
    implication: "Intéressé ?",
    simplified: "Œuvre d'un pauvre fou",
    desc: "Fostrah, UiNo, Uewij, Vydnitt, Xyfurn, Nezrog, Ekeline, Wacwe・Leqwa, Logjēm, Slacpi°, Tôhla, Dévore-Novice",
    example: "Création d'un nouveau genre de monde, d'une nouvelle civilisation et d'une nouvelle culture",
    quote: "La malfaisance avait donné rendez-vous à Fenekohq aux marécages pour le baigner au gouffre, mais le capricieux marginal y est sortie en transe pour découvrir le terme de ses recherches palpitantes.",
    parent: "Vie sur la planète Terre",
    etymology: "⟁UR(ARc⟁diA & Aursyl) NEL(Mapnel) CY(IUVALCY) Lettres Dispatchées(Lysrua) Structure Métaphorique(D⦾MIN⦿'s)",
    synonym: "ONEL6, Onelsix, OLINELICI",
    pronunce: "Français /oʁ.nɛl.si/ English /ɔːɹ.nəl.si/",
    meme: "Es-tu aurnelcyen ?",
    surnatural: "Invoquer ⟁URNELCY est signe de pure folie.",
    version: "AURNELCY, aurnelcyen, aurnelcyens, aurnelcyenne, aurnelcyennes, ONEL6, Onelsix, OLINELICI"
  },
  {
    term: "Fenekohq",
    category: ["Persona", "Concepteur","K0re"],
    definition: "Le Pseudonyme de l'Auteur d'⟁URNELCY.",
    school: "Nom d'auteur et identité créatrice du projet ⟁URNELCY.",
    implication: "Fenekohq a crée sa plus grande passion juste ici.",
    simplified: "L'alias fétiche du pauvre fou en question",
    quote: "L'origine de Fenekohq vient d'un Fennec du désert qui a conquis le Sahara, d'un Chat du japon devenu une idole kawaii et d'un Coq ayant fui et assasiné tous ceux voulant sa viande. Leur union au sein du pays aurnelcyen à donné naissance à Fenekohq étant le seul possèdant les chromosomes X Y et Z ce qui marque l'ascension d'une nouvelle race pour faire trembler tout les terriens impliqués dans la destruction de la civilisation.",
    etymology: "Fennec - Neko(Japonais)/Chat - Coq {en théorie}",
    synonym: "Fenek, Feneko, FE猫HQ, フェネコーク",
    pronunce: "/fɛ.nɛ.kɔk/"
  },
  {
    term: "0K",
    category: ["0K","K0re"],
    definition: "C'est OK pour l'instant.",
    school: "État provisoirement acceptable ou tenable.",
    simplified: "J'ai fait de mon mieux",
    desc: "Emma",
    example: "Éponge qui s'embouche un coin",
    quote: "C'est la fenêtre de tir, prends ta chance, je vais te photographier!",
    parent: "⟁URNELCY, non-⟁URNELCY",
    etymology: "0 Kill, All Correct, Orl Korrect",
    synonym: "OK",
    pronunce: "Français /ɔ.ke/ English /ˌoʊˈkeɪ/",
    version: "OK, Okien, Okiens, Okienne, Okiennes, Zérokien, Zérokiens, Zérokienne, Zérokiennes"
  },
  {
    term: "Mapnel",
    category: ["Mapnel","K0re"],
    definition: "Dialogue entre contraires.",
    school: "Régime fondé sur la tension entre contraires et leur juste articulation.",
    simplified: "Rétention et Relâchement",
    desc: "Vydnitt, Xyfurn, Nezrog, Ekeline, Wacwe・Leqwa",
    example: "Mettre la puce à l'oreille, puis la retirer pour la remettre à l'oreille opposée",
    quote: "Premier jet brouillon raturé, second jet ressemble à quelque chose, troisième jet immersion possédé, quatrièmement accomplis-toi: la maturation du monstre est inéluctable.",
    parent: "⟁URNELCY",
    etymology: "Ma(Monoa-Admagcoq) pnel(Polyz-Nezkelwac[N-ezrog, E-keline, L-eqwa])",
    synonym: "ℳ𝒶𝓅𝓃ℯ𝓁",
    pronunce: "Français /map.nɛl/ English /ˈmæp.nəl/",
    version: "Mapnélien, Mapnéliens, Mapnélienne, Mapnéliennes, Mapnélo"
  },
  {
    term: "IUVALCY",
    category: ["IUVALCY","K0re"],
    definition: "Chambre de la perception.",
    school: "Régime d'analyse de la perception, des filtres mentaux et de la conscience.",
    simplified: "Méta-Méditation",
    desc: "Fostrah, UiNo, Uewij",
    example: "Aiguiser ses sens sans début et sans fin",
    quote: "Une inspiration se produit, peu importe le faire; au souffle, parmi les 1000 combinaisons, une sera choisie.",
    parent: "⟁URNELCY",
    etymology: "I(Ligne) UV(Aiguisement) AL(Chaise) CY(Conscience V Levée)",
    pronunce: "Français /ju.val.si/ English /ˈjuː.væl.si/",
    version: "Iuvalcien, Iuvalciens, Iuvalcienne, Iuvalciennes, Iuvalco, IUVALCIUM"
  },
  {
    term: "ARc⟁diA",
    category: ["ARc⟁diA","K0re"],
    definition: "Jeu de la plaisanterie.",
    school: "Régime du jeu, du masque, de la farce et de la simulation.",
    simplified: "Farce",
    desc: "Logjēm, Slacpi°, Tôhla",
    example: "Encore une blague de mauvais goût, devinons celle-ci",
    quote: "La partie n'est pas terminée, tu as crié victoire trop tôt, faut-il que je te rappelle les règles du jeu ?",
    parent: "⟁URNELCY",
    etymology: "Arc, Arcade",
    synonym: "Arcadia",
    pronunce: "Français /aʁ.ka.dja/ English /ɑːrˈkeɪ.di.ə/",
    version: "Arcadia, Arcadien, Arcadiens, Arcadienne, Arcadiennes, Arcado"
  },
  {
    term: "Aursyl",
    category: ["Aursyl","K0re"],
    definition: "Manigances esclavagistes.",
    school: "Régime de capture, de domination et d'aliénation.",
    simplified: "Colonisation",
    desc: "18+",
    example: "Conquête d'un territoire par une puissance extérieure",
    quote: "Je vous ai demandé poliement d'enfouir votre âme dans les tréfonds de l'amnésie alors faites-le. Ah… mais j'oubliais, il faut d'abord y croire.",
    parent: "⟁URNELCY",
    etymology: "Aura, Réunion",
    synonym: "𝔄𝔲𝔯𝔰𝔶𝔩",
    pronunce: "Français /ɔʁ.sil/ English /ˈɔːɹ.sɪl/",
    version: "Aursylien, Aursyliens, Aursylienne, Aursyliennes, Aursylo"
  },
  {
    term: "Lysrua",
    category: ["Lysrua","K0re"],
    definition: "Profusion Symphonique.",
    school: "Régime de profusion culturelle, de recomposition et de souveraineté des formes.",
    simplified: "Multi-Culture",
    desc: "5 Mapnéliens, 3 Iuvalciens, 3 Arcadiens, 1 Aursylien",
    example: "Composer une symphonie avec des franchises fameuses",
    quote: "Profitons de tout les délices que le monde a à nous offrir… Alléluia! Alléluia!!",
    parent: "⟁URNELCY",
    etymology: "Aursyl Inversé",
    pronunce: "Français /lis.ʁɥa/ English /ˈlɪs.ruː.ə/",
    version: "Lysruéen, Lysruéens, Lysruéenne, Lysruéennes, Lysro"
  },
  {
    term: "D⦾MIN⦿'s",
    category: ["D⦾MIN⦿'s","K0re"],
    definition: "Récit Fabuleux.",
    school: "Dimension mythologique et narrative du système.",
    simplified: "Légende",
    desc: "Ø",
    example: "Livre poussiéreux et lugubre dans les bibliothèques interdites",
    quote: "Le démoniaque Fenekohq pari qu'à la fin de l'histoire, vous deviendrez un pauvre fou comme lui.",
    parent: "⟁URNELCY",
    etymology: "Domicile, Domination, Domino",
    synonym: "DOMINO's",
    pronunce: "Français /dɔ.mi.noz/ English /ˈdɒ.mɪ.noʊz/",
    version: "DOMINO, DOMINO's, D⦾MINI⦿N, DOMINION, DOMINIONS, D⦾MINI⦿NNE, DOMINIONNE, DOMINIONNES"
  },
  {
    term: "Louange",
    category: ["Phénotype", "Museum", "Parc"],
    definition: "Chant Mapnélien/Iuvalcien/Arcadien, Champ Aursylien, Chorale Lysruéenne ou Dialecte DOMINION",
    school: "Format d'œuvre brève ou mineure selon le théorème concerné.",
    simplified: "Œuvre Mineure",
    desc: "「」",
    etymology: "Laus(latin) = Éloge, Blâme, Gloire",
    pronunce: "Féminin /lwɑ̃ʒ/ ou /lu.ɑ̃ʒ/",
    version: "Louanges, Chant, Chants, Champ, Champs, Chorale, Chorales, Dialecte, Dialectes"
  },
  {
    term: "Laurier",
    category: ["Phénotype","K0re", "Citadel"],
    definition: "Château Mapnélien/Iuvalcien/Arcadien, Cachot Aursylien, Chapelle Lysruéenne ou Donjon DOMINION",
    school: "Format d'œuvre majeure selon le théorème concerné.",
    simplified: "Œuvre Majeure",
    desc: "『』",
    etymology: "Laurus(latin)",
    pronunce: "Masculin /lɔ.ʁje/ ou /lo.ʁje/",
    version: "Lauriers, Château, Châteaux, Cachot, Cachots, Chapelle, Chapelles, Donjon, Donjons"
  },
  {
    term: "Capsule",
    category: ["Capsule"],
    definition: "Articulations, Agendas, Hiérarchie ou MATRICES",
    school: "Structure annexe servant à organiser, résumer ou articuler un ensemble.",
    simplified: "Architecture Grammaticale",
    desc: "⌂         {0 X}         ⌂",
    etymology: "Capsula(latin) = Coffret, petite boîte",
    pronunce: "Féminin /kap.syl/",
    version: "Capsules"
  },
  {
    term: "Vie",
    category: ["0K","K0re", "Cipher", "Phénomène", "Concepteur", "Phénotype", "Supervision"],
    definition: "Fait de vivre [etc…]",
    implication: "Toutes les définitions combinées sont insatisfaisantes.",
    etymology: "Vita (Latin)",
    pronunce: "Féminin /vi/"
  },
  {
    term: "Mort",
    category: ["0K","K0re", "Cipher", "Phénomène", "Cueillette", "Spherµ", "Supernova"],
    definition: "Cessation de la vie [etc…]",
    implication: "Toutes les définitions combinées sont insatisfaisantes.",
    etymology: "Mortuus (Latin)",
    pronunce: "Féminin /mɔʁ/"
  },
  {
    term: "Homo Sapien",
    category: ["0K","K0re", "Persona"],
    definition: "Mammifère primate de la famille des hominidés [etc…]",
    implication: "T'as compris ?",
    etymology: "Être Humain Intelligent, Sage, Raisonnable, Prudent",
    pronunce: "Masculin /o.mo sa.pjɛ̃s/"
  },
  {
    term: "Héros/Héroïne",
    category: ["Mapnel","K0re", "Persona", "Supervision", "Supernova"],
    definition: "Figure célèbre et admirable de combat et d'adversité, on en raconte la fulgurance iconique de sa vie.",
    etymology: "Chef/Demi-Dieu",
    pronunce: "Masculin /e.ʁo/ Féminin /e.ʁɔ.in/",
    version: "Héros, Héroïne, Héroïnes, Hero, Heroes, Heroine, Heroines"
  },
  {
    term: "Pérégrination",
    category: ["Mapnel","K0re", "Cueillette"],
    definition: "Long voyage sinueux en région reculée des habitudes routinières aisées.",
    etymology: "Peregrinatio(latin) = Voyage Lointain",
    synonym: "Périple, Pèlerinage, Expédition, Cheminement, Odysée, Errance",
    pronunce: "Féminin /pe.ʁe.ɡʁi.na.sjɔ̃/",
    version: "Pérégrinations, Pérégrineur, Pérégriner"
  },
  {
    term: "Monoa-Polyz",
    category: ["Mapnel","K0re", "Vydnitt", "Monoa-Polyz", "Concepteur", "Spherµ", "Trinité"],
    definition: "Être et Devenir Monom&Polyp et Monop%Polym.",
    school: "Principe central liant unité et multiplicité, être et devenir.",
    implication: "Animation originale[-] Au format vedette[Polyz] À toile de fond[Monoa].",
    simplified: "Matière Corde Passage ou Déploiement Énergique",
    quote: "Voilà l'être et il devient… il devient… il devient… mystère et boule de gomme, que sera t-il ma parole ?",
    pronunce: "/mɔ.no.a pɔ.liz/",
    synonym: "𝙼𝚘𝚗𝚘𝚊-𝙿𝚘𝚕𝚢𝚣(Monospace)",
    version: "Moa&Poz, M&P, 𝙼𝚘𝚗𝚘𝚊-𝙿𝚘𝚕𝚢𝚣"
  },
  {
    term: "Monom/Mono-Mémoire",
    category: ["Mapnel", "Vydnitt", "Nezrog", "Monoa-Polyz", "Persona", "Cueillette"],
    definition: "Éternité Homogène Singulière/Sensation vivante d'expérimenter une manifestation perpétuelle.",
    school: "Pôle de continuité, de rétention et de persistance de l'être.",
    implication: "Une fermeture des coulisses n'achève pas la vie. Monom implique Polyp (Monom&Polyp)",
    simplified: "Être Mouvant",
    parent: "Monoa-Polyz",
    synonym: "Unité, Unique, Central, Rétention, Enfermement",
    pronunce: "/mɔ.nɔm/",
    version: "Monom, Mono-Mémoire"
  },
  {
    term: "Polyp/Poly-Projection",
    category: ["Mapnel", "Vydnitt", "Wacwe", "Monoa-Polyz", "Phénotype", "Supernova"],
    definition: "Recommencement Hétérogène Pluriel/Sensation vivante d'expérimenter une actualisation cordiale.",
    school: "Pôle d'ouverture, de renouvellement et de déploiement du devenir.",
    implication: "L'ouverture des erreurs adapte le rythme d'une vie. Polyp implique Monom (Monom&Polyp)",
    simplified: "Devenir Renouvelé",
    parent: "Monoa-Polyz",
    synonym: "Fraction, Multiple, Décentral, Éclattement, Dispersion",
    pronunce: "/pɔ.lip/",
    version: "Polyp, Poly-Projection"
  },
  {
    term: "&(Terla)",
    category: ["Mapnel", "Vydnitt", "Ekeline", "Monoa-Polyz", "Phénomène", "Supervision"],
    definition: "Reflet fortificateur de la boucle entre Monom et Polyp.",
    school: "Principe de jonction stabilisante entre continuité et renouvellement.",
    implication: "Instructrice régulatrice de la sensation vivante expérientielle.",
    simplified: "PlusPlus",
    desc: "Terla est représenté en anneau pendentif.",
    parent: "Monoa-Polyz",
    synonym: "Jonction, Stabilité, Composition, Conteneur, Concentration",
    pronunce: "/tɛʁ.la/",
    version: "Terla"
  },
  {
    term: "Monom&Polyp",
    category: ["Mapnel","K0re", "Vydnitt", "Leqwa", "Monoa-Polyz", "Citadel"],
    definition: "État-Dynamique intemporelle où être et devenir sont entrelacés dans une communion harmonieuse.",
    school: "Équilibre vivant entre persistance et renouvellement.",
    simplified: "Mémoire nourricière permanente & Projection épisodique cyclique ou Laisser Ouvert",
    parent: "Monoa-Polyz",
    synonym: "MTP, Mom&Pop, MM&PP, ℳℴ𝓃ℴ𝓂🙵𝒫ℴ𝓁𝓎𝓅(Cursive), ℳℴ𝓂🙵𝒫ℴ𝓅, ℳ🙵𝒫",
    pronunce: "/mɔ.nɔm‿e pɔ.lip/, /mɔ.nɔm.tɛʁ.la.pɔ.lip/",
    version: "Mom&Pop, MM&PP, ℳℴ𝓃ℴ𝓂🙵𝒫ℴ𝓁𝓎𝓅, ℳℴ𝓂🙵𝒫ℴ𝓅, ℳ🙵𝒫"
  },
  {
    term: "Monop/Mono-Prohibition",
    category: ["Aursyl", "Vydnitt", "Monoa-Polyz", "Persona", "Cueillette"],
    definition: "Éternité Inhibée Figée/Non-réconciliation rugueuse d'afistoler le menu classique des attributions déterminées.",
    school: "Pôle de fixation bloquée et d'inhibition de l'être.",
    implication: "Dépiction survivante d'un échec ultime et de son insolubilité funeste. Monop implique Polym (Monop%Polym)",
    simplified: "Être Surchargé",
    parent: "Monoa-Polyz",
    pronunce: "/mɔ.nɔp/",
    version: "Monop, Mono-Prohibition"
  },
  {
    term: "Polym/Poly-Malaise",
    category: ["Aursyl", "Vydnitt", "Monoa-Polyz", "Phénotype", "Supernova"],
    definition: "Recommencement Excité Troublé/Non-réajustement raboteux avec la sécession globale.",
    school: "Pôle de dispersion troublée et de renouvellement malade.",
    implication: "Déconstruction survivante de la santé en vue d'opérations autres. Polym implique Monop (Monop%Polym)",
    simplified: "Devenir Perturbé",
    parent: "Monoa-Polyz",
    pronunce: "/pɔ.lim/",
    version: "Polym, Poly-Malaise"
  },
  {
    term: "%(Derla)",
    category: ["Aursyl", "Vydnitt", "Monoa-Polyz", "Phénomène", "Supervision"],
    definition: "Scission Démolisseuse de la sangle entre Monop et Polym.",
    school: "Principe de rupture destructrice entre les deux pôles dégradés.",
    implication: "Obstructrice dispatcheuse atrophiante de la vitalité juvénile.",
    simplified: "MoinsMoins",
    desc: "Derla est représenté en boulet de forçat.",
    parent: "Monoa-Polyz",
    pronunce: "/dɛʁ.la/",
    version: "Derla"
  },
  {
    term: "Monop%Polym",
    category: ["Aursyl","K0re", "Vydnitt", "Monoa-Polyz", "Citadel"],
    definition: "État-Dynamique contractée où être et devenir sont imbriqués dans une déperdition rupturante.",
    school: "Équilibre dégradé où fixation et trouble se nourrissent l'un l'autre.",
    simplified: "Prohibition affamante saturée % Malaise apathique déclinant ou Prendre au Piège",
    parent: "Monoa-Polyz",
    synonym: "MDP, Mop%Pom, MP%PM, 𝔐𝔬𝔫𝔬𝔭%𝔓𝔬𝔩𝔶𝔪(Fraktur), 𝔐𝔬𝔭%𝔓𝔬𝔪, 𝔐%𝔓",
    pronunce: "/mɔ.nɔp‿uʁ pɔ.lim/, /mɔ.nɔp.dɛʁ.la.pɔ.lim/",
    version: "Mop%Pom, MP%PM, 𝔐𝔬𝔫𝔬𝔭%𝔓𝔬𝔩𝔶𝔪, 𝔐𝔬𝔭%𝔓𝔬𝔪, 𝔐%𝔓"
  },
  {
    term: "Monstre 0",
    category: ["Mapnel", "Fostrah", "Vydnitt", "Xyfurn", "Persona", "Phénotype"],
    definition: "Créature au trajet de l'entre-deux sujette à la corruption et à la finitude condamnée//graciée à la fertilité.",
    school: "Être vivant exposé à la corruption, à la finitude et à la fertilité.",
    implication: "Empreinte animale au milieu de la naissance et du décès plongée à la fois dans une clarté spécifique et un flou intersidéral.",
    simplified: "Toute créature concernée par la vie et la mort.",
    synonym: "M0nstre, Mont0, Animalia",
    pronunce: "/mɔ̃stʁə ze.ʁo/",
    surnatural: "Chair répondant au Comment au travers d'une instantanéité définie.",
    version: "Monstres 0, M0nstre, M0nstres, Monstruosité, Monstruosité 0, Monstruosités, Monstruosités 0"
  },
  {
    term: "Dévore-Novice",
    category: ["Aursyl", "K0re", "UiNo", "Vydnitt", "Persona", "Concepteur"],
    definition: "Adversaire de la seigneurie planifiant son itinéraire purement stratégique dans des proportions d'ennui globalisé.",
    school: "Figure de domination stratégique qui colonise les consciences.",
    implication: "Annihilateur ontologique de la raison d'être ou la sournoise trafiqueuse de conscience vers l'ébranlement de sa volonté propre dont on ne peut certifier la provenance.",
    simplified: "Colonisateur d'apprentis-novices vers la déflagration de leur consciences.",
    desc: "Il est décrit comme personnage diurne ayant 2 mains 2 pieds 2 yeux 2 oreilles 1 nez 1 bouche, mais s'est aussi construit une citadelle dans le monde invisible de l'esprit de chacun.",
    quote: "Il m'a été donné la responsabilité de l'être et le devenir de tout un pays, ma foi les paysans sont chez eux grâce à moi.",
    synonym: "Tyran, Esclavagiste, Despote, Imposteur, Crapule, Aliénatueur, Assassin du Sens, Fumée Noire, Déchu, Marque de Fabrique, Le Grand Ennemi",
    pronunce: "/de.vɔʁ nɔ.vis/",
    surnatural: "Putschiste de Dieu déguisé en celui-ci injoncteur du Pourquoi capable de ruiner au moins un millier de personnes de leur soutien servile consenti par la délégation.",
    version: "Dévore-Novicien, Dévore-Novicienne, Dévore-Noviciens, Dévore-Noviciennes"
  },
  {
    term: "Ventriloque",
    category: ["Aursyl", "Fostrah", "Persona", "Supervision"],
    definition: "Bagarreur de fortune d'un manque irascible, sous une expression difforme de la faim au détriment de l'organisme intégral.",
    school: "Relais secondaire de l'emprise aursylienne.",
    implication: "Partisans compétiteurs de l'entendement dévore-novice comme loisir obsessionnel.",
    pronunce: "/vɑ̃.tʁi.lɔk/",
    version: "Ventriloquien, Ventriloquiens, Ventriloquienne, Ventriloquiennes"
  },
  {
    term: "Admagcoq",
    category: ["Mapnel", "Xyfurn", "Monoa-Polyz", "Trinité", "Tablette"],
    definition: "Trinité Individuelle (Aventure - Magie - Cuisine)",
    pronunce: "/ad.ma.kɔk/",
    synonym: "AMC"
  },
  {
    term: "Enquête",
    category: ["Mapnel", "Aursyl", "Lysrua", "Xyfurn", "Supervision", "Codex", "Cueillette"],
    definition: "Stimulation interrogative explorative autosuffisante dont l'accoutumance ne rend jamais de marbre.",
    school: "Mouvement d'investigation soutenue qui entretient la pensée.",
    pronunce: "/ɑ̃.kɛt/",
    version: "Enquêtes, Enquêter"
  },
  {
    term: "Directions Souveraines",
    category: ["Mapnel", "Xyfurn", "Museum"],
    definition: "[Xyf] Aperçu global du sentiment commun, glissant de son évolution sur des générations de l'errance étrangère à la chère réminiscence.",
    school: "Schéma d'orientations vitales et de positions cardinales.",
    pronunce: "/di.ʁɛk.sjɔ̃ su.vʁɛn/",
    version: "Direction Civilisationnelle"
  },
  {
    term: "Illusion",
    category: ["Mapnel", "IUVALCY", "UiNo", "Xyfurn", "Phénomène", "Phénotype"],
    definition: "Filtre stimulant clos intrapersonnel ouvert à ambiguïté interpersonnel.",
    implication: "Ample enchaînement de tensions multi-perspectives.",
    pronunce: "/i.ly.zjɔ̃/",
    version: "Illusions"
  },
  {
    term: "Atelier Ataraxial",
    category: ["Mapnel", "Xyfurn", "Codex", "Parc"],
    definition: "Accroissement progressif des facultés de tolérance actives vers des vertus passives.",
    school: "Discipline de maîtrise, de calme actif et de pratique structurante.",
    simplified: "Culture musculaire de paix intérieure.",
    pronunce: "/a.tə.lje a.ta.ʁak.sjal/",
    version: "Atelier, Ataraxie"
  },
  {
    term: "Fluide Élémentaire",
    category: ["Mapnel", "Xyfurn", "Phénotype", "Cipher"],
    definition: "[Urn] État second pair évanouissant l'interdit premier impair de la partie analytique vers sa pleine fougue permise ou dommageante.",
    school: "Principe d'action souple, simple et non forcée.",
    simplified: "Mouvement inné s'accomplissant sans intervention clivante.",
    pronunce: "/flɥid e.le.mɑ̃.tɛʁ/",
    version: "Fluide Vital"
  },
  {
    term: "Blessure Fossile",
    category: ["Mapnel", "Aursyl", "Xyfurn", "Codex"],
    definition: "Matérialité du tragique balistique, séquelle de fragilisation traumatique.",
    school: "Trace ancienne de souffrance qui continue d'organiser la vie.",
    implication: "Détresses périlleuses en représailles.",
    pronunce: "/blɛ.syʁ fɔ.sil/",
    version: "Blessures Kamikazes"
  },
  {
    term: "Miroir Clairvoyant",
    category: ["Mapnel", "Xyfurn", "Mouet-Pouet", "Phénomène", "Museum"],
    definition: "Méditation olfactive de sa réalité apparente à un instant donné.",
    school: "Rapport de lucidité réflexive sur soi et sur le monde.",
    implication: "Disposition à l'honnêteté objective et à l'évaluation concise des conséquences a priori."
    ,pronunce: "/mi.ʁwaʁ klɛʁ.vwa.jɑ̃/"
  },
  {
    term: "Gravité Centrale",
    category: ["Mapnel", "Xyfurn", "Supervision"],
    definition: "[Xyf-Urn] Point d'attraction et d'équilibre, pivot des appuis et de la soutenance robuste.",
    school: "Centre de stabilité, de sérieux et d'orientation intérieure.",
    pronunce: "/ɡʁa.vi.te sɑ̃.tʁal/",
    version: "Gravité"
  },
  {
    term: "Nezkelwac",
    category: ["Mapnel", "Nezrog", "Ekeline", "Wacwe", "Monoa-Polyz", "Trinité", "Tablette"],
    definition: "Trinité Collective (Nezrog - Ekeline - Wacwe)",
    school: "Trinité relationnelle structurant le passage de l'individuel au partagé.",
    synonym: "NKW"
    ,pronunce: "/nɛz.kɛl.wak/"
  },
  {
    term: "Naustre C",
    category: ["Mapnel", "Uewij", "Nezrog","K0re", "Persona", "Cueillette"],
    definition: "Créature navigatrice consciente et psychiquement relationnelle de son 0 aussi appelée mortel.",
    school: "Stature redoutable encore en construction.",
    implication: "Marcheur de son propre sentier s'écartant du coin de l'action définit par la réprimande répressive.",
    simplified: "Toute créature concernée par l'engagement.",
    synonym: "NauC",
    surnatural: "Chair répondant au Pourquoi au travers d'une maturation indéfinie.",
    pronunce: "/nostʁ se/",
    version: "Naustre, Naustrique, Naustriques, Naustral, Naustricité"
  },
  {
    term: "Palpiter de l'Infini",
    category: ["Mapnel", "Nezrog", "Mouet-Pouet", "Codex"],
    definition: "Battre, disposer l'énergie microcosmique transmutée dans la grandeur macrocosmique.",
    school: "Vibration intérieure orientée vers plus grand que soi.",
    implication: "Acceptation radicale de la totalité, se posant sans surcharge ajoutée les choses appelées à jouer en toute circonstance.",
    synonym: "PIII",
    pronunce: "/pal.pi.te də lɛ̃.fi.ni/",
    version: "Palpiter, Palpite, Infini"
  },
  {
    term: "Semaine Sublime",
    category: ["Mapnel", "Nezrog", "Museum", "Citadel"],
    definition: "Élévation continuelle des formes de richesse parmi 7 paliers d'initiations.",
    school: "Table des grandes postures existentielles de l'univers aurnelcyen.",
    simplified: "Génitale structuration métaphorique de l'ordre",
    surnatural: "Rythme Circadien Hebdomadaire",
    pronunce: "/sə.mɛn sy.blim/",
    version: "Semaine, Semaines"
  },
  {
    term: "Hyenuul",
    category: ["Mapnel", "Nezrog", "Phénotype", "Spherµ"],
    definition: "Attache ne pouvant pas se passer de l'envie en vie.",
    school: "Force de noircissement défensif, agressif ou prédateur.",
    parent: "Nihilin",
    etymology: "Hâte Hermétique entre guillemets impure.",
    pronunce: "/je.nɥl/",
    surnatural: "Discernement des Significations Indisables"
  },
  {
    term: "Macabrisme",
    category: ["Mapnel", "Ekeline", "Phénomène", "Cueillette"],
    definition: "Odeur épaisse de mort où la fragilité s'expose à coup sûr tôt ou tard.",
    school: "Rapport conscient à la mort et à sa présence symbolique.",
    implication: "Véhicule des sentiments souvent extrêmement impactants et brutaux.",
    synonym: "Mortalité, Létalité, Alerte, Clouage, Larguage, Démunion, Rendez-Vous",
    pronunce: "/ma.ka.bʁism/",
    version: "Macabre, Macabres, Macabrismes, Macabriste, Macabristes, Macabrique, Macabriques"
  },
  {
    term: "Gaunie",
    category: ["Mapnel", "Ekeline", "Mouet-Pouet", "Supernova"],
    definition: "Gaieté unie réveilleuse en plénitude médiale, prolongement des angles latéraux en toute finesse.",
    school: "Élan de gaieté unifiée et de finesse relationnelle.",
    parent: "Bouquet Gaunique, Instances Gauniques(Reptilien, Sifflet, ARvers-Xoi, Innokcien)",
    etymology: " La Gaunie [4-3 Instances] ⟷ L'Agonie [2-1 Instance(s)]",
    pronunce: "/ɡo.ni/",
    surnatural: "Jauge de Concetration Unitaire",
    version: "Gaunico, Gaunique"
  },
  {
    term: "Florescence",
    category: ["Mapnel", "Ekeline", "Phénotype", "Supervision", "Cueillette"],
    definition: "Alliance protéiforme de toutes les instances sous leur rôles adéquat.",
    school: "Déploiement des figures psychiques et symboliques en croissance.",
    implication: "Guérison des correspondants bossus désamorçant le célibat cellulaire versatile.",
    pronunce: "/flɔ.ʁe.sɑ̃s/",
    version: "Fleurissant"
  },
  {
    term: "Innokcien",
    category: ["Mapnel", "Ekeline","K0re", "Persona", "Codex", "Concepteur"],
    definition: "Dispossédé médiateur reptilien rapetissant les inadvertances par la magnificence de sa trempe.",
    school: "Figure d'innocence dense, équilibrée et habitée.",
    simplified: "Instance témoin à la sagacité holistique des ensembles.",
    etymology: "Innocence",
    pronunce: "/i.nɔk.sjɛ̃/",
    version: "Innokciens, Innokcienne, Innokciennes"
  },
  {
    term: "EntroPied",
    category: ["Mapnel", "Aursyl", "Wacwe", "Phénomène"],
    definition: "Matérialité du divorce cinétique, tension d'extinction cataclysmique stimulant sa propre réalisation vers une chute prémonitoire.",
    implication: "Désorganisation d'incertitude certaine plus ou moins prédictible.",
    pronunce: "/ɑ̃.tʁɔ.pje/",
    version: "Entropique"
  },
  {
    term: "Filet",
    category: ["Mapnel", "Wacwe", "Supervision", "Codex", "Cipher"],
    definition: "Pertinence exemplaire dont l'admiration foudroie de respect et de tenue civilisatrice.",
    implication: "Dextérité interceptrice des forces de discorde et d'affaiblissement.",
    synonym: "Cloche, Cerceau, Poche, Hameçon, Échet",
    pronunce: "/fi.lɛ/",
    version: "Filets, Filature"
  },
  {
    term: "Picol-Kentron",
    category: ["Mapnel","K0re", "Wacwe", "Cueillette", "Tablette", "Museum", "Parc", "Citadel"],
    definition: "Schéma de multiplicité des rôles, fonctions interprétées par cercles s'empilant par objectifs •RGB•BNG•",
    school: "Schéma des rôles et des hiérarchies symboliques par couleurs.",
    implication: "Chaque couleur poursuit un rapport étroit avec l'intégralité fonctionnelle et fondamentale.",
    etymology: "(Pi: Cercle Circulaire) - (Col: Color/Couleur) - (Kentron: Aiguillon/Pointe)",
    pronunce: "/pi.kɔl kɑ̃.tʁɔ̃/",
    version: "Kentronien, Kentroniens, Kentronienne, Kentroniennes"
  },
  {
    term: "Chromel",
    category: ["Mapnel", "Wacwe", "Phénotype", "Supernova", "Codex"],
    definition: "Sublimation décisive des marqueurs traumatiques à la page tournante.",
    implication: "Reprise des déjà-vus sur une phase supérieure de configuration.",
    desc: "Meilleur Drapeau, forme authentique et hypothétique.",
    pronunce: "/kʁɔ.mɛl/",
    surnatural: "Supporte Fardeaux",
    version: "Chroméliste, Chromélisme"
  },
  {
    term: "Fon:Rel:Inc",
    category: ["Mapnel", "Vydnitt", "Monoa-Polyz", "Spherµ", "Codex", "Trinité", "Tablette"],
    definition: "=Trinité Clinique= [Littérale]｜Fondations - Relativité - Inclinaisons (Rythme Minceur)",
    school: "Triptyque des fondations, de la relativité et des inclinaisons.",
    pronunce: "/fɔ.nə.ʁɛ.lɛ̃k/",
    version: "F:R:I"
  },
  {
    term: "Fondations",
    category: ["Mapnel", "Vydnitt", "Persona", "Museum"],
    definition: "=Fon:Rel:Inc= [Z-A]｜Solides associés à [Monoa]. Mosaïque d'amplitude vécue répondant par [Polyz].",
    school: "Bases stables sur lesquelles une structure peut tenir.",
    pronunce: "/fɔ̃.da.sjɔ̃/",
    version: "Fondation, Fondateur, Fondateurs, Fondatrice, Fondatrices,Fonder"
  },
  {
    term: "Inclinaisons",
    category: ["Mapnel", "Vydnitt", "Supervision", "Parc"],
    definition: "=Fon:Rel:Inc= [A-Z]｜Espaces associés à [Polyz]. Palette d'actions concevables traduites par [Monoa].",
    school: "Tendances internes qui orientent les choix et les comportements.",
    pronunce: "/ɛ̃.kli.nɛ.zɔ̃/",
    version: "Inclinaison, Inclination, Inclinations, Incliner"
  },
  {
    term: "Relativité",
    category: ["Mapnel", "Vydnitt", "Phénotype", "Mouet-Pouet", "Citadel"],
    definition: "=Fon:Rel:Inc= [AZ-ZA]｜Marge de relief associé à [Variable -]. Fluctuation accouchée des continuités inexorables [Monoa-Polyz].",
    school: "Variation des points de vue, des rapports et des mesures selon le contexte.",
    pronunce: "/ʁə.la.ti.vi.te/",
    version: "Relativités"
  },
  {
    term: "Scé;Syn;Cel",
    category: ["Mapnel", "Fostrah", "UiNo", "Uewij", "Monoa-Polyz", "Spherµ", "Codex", "Trinité", "Tablette"],
    definition: "=Trinité Empirique= [Numérale]｜Scénario - Syndrome - Cellules (Symétrie Pinceuse)",
    school: "Triptyque du scénario, du syndrome et des cellules.",
    pronunce: "/se sɛ̃ sɛl/",
    version: "S;S;C"
  },
  {
    term: "Scénario",
    category: ["Mapnel", "Fostrah", "Cueillette", "Museum"],
    definition: "=Scé;Syn;Cel= [9-1]｜Affaires associés à [Monoa]. Plateau de terrain étendue prolongé par [Polyz].",
    school: "Cadre narratif ou situation-type qui organise une suite d’actions.",
    pronunce: "/se.na.ʁjo/",
    version: "Scénarios, Scénariste, Scénaristes, Scénariser"
  },
  {
    term: "Cellules",
    category: ["Mapnel", "Uewij", "Cipher", "Parc"],
    definition: "=Scé;Syn;Cel= [1-9]｜Chaînes associés à [Polyz]. Carreaux de dalles pratiquables portés par [Monoa].",
    school: "Unités élémentaires d’organisation, de reproduction ou de propagation.",
    pronunce: "/sɛ.lyl/",
    version: "Cellule, Cellulier, Celluliers"
  },
  {
    term: "Syndrome",
    category: ["Mapnel", "UiNo", "Phénomène", "Mouet-Pouet", "Citadel"],
    definition: "=Scé;Syn;Cel= [00-10]｜Intervalle de mesure associé à [Variable -]. Morceau arrangé des chroniques implacables [Monoa-Polyz].",
    school: "Ensemble de traits récurrents qui apparaissent ensemble.",
    pronunce: "/sɛ̃.dʁom/",
    version: "Syndromes, Syndromatique, Syndromatiques"
  },
  {
    term: "Équation d'Efficacité Inanitoire",
    category: ["Aursyl", "Fostrah", "Codex", "Cipher", "Museum"],
    definition: "Calcul scripté pour résulter une détermination à la servitude sous les leviers du contrôle des richesses et la falsification identitaire.",
    school: "Logique d'efficacité qui vide les êtres de leur substance.",
    pronunce: "/e.kwa.sjɔ̃ d‿e.fi.ka.si.te i.na.ni.twaʁ/",
    version: "EEI, Science Inanitoire, Bricole du 0, Bricolage du 0, Inanité Religieuse, Équation Fragmentaire"
  },
  {
    term: "Flingue",
    category: ["Aursyl", "UiNo", "Supernova", "Citadel"],
    definition: "Arme neutralisatrice d'emprise comportementale et psychologique, menace mutilatoire liquidatrice d'intrus en cadavres muets.",
    school: "Mécanisme de désignation violente du coupable ou de la cible.",
    synonym: "Revolver, Fusil, Calibre, Troueur, Railgun, Perforant",
    pronunce: "/flɛ̃ɡ/",
    version: "Flingues, Flingueur, Flingueurs, Flingueuse, Flingueuses, Flinguer"
  },
  {
    term: "Trompette",
    category: ["Aursyl", "Uewij", "Mouet-Pouet", "Supervision", "Parc"],
    definition: "Arme jugulatrice d'emprise attentionnelle et épistémologique, menace exilatoire plaqueuse de volontés en valises malléables.",
    school: "Signal de propagande, de spectacle ou d'alarme manipulée.",
    synonym: "Turbine, Klaxon, Sonnerie, Couvre-Feu, Intimidateur, Convocation",
    pronunce: "/tʁɔ̃.pɛt/",
    version: "Trompettes, Se Tromper, Tromper, Trompeur, Trompeurs, Trompeuse, Trompeuses"
  },
  {
    term: "Mélodie Inépelable",
    category: ["Mapnel", "Nezrog", "Ekeline", "Wacwe", "Mouet-Pouet", "Cipher"],
    definition: "Composition arrangée sans commandement en cohésion organique souple.",
    school: "Pièce sur la difficulté de dire justement le réel.",
    synonym: "Méline",
    pronunce: "/me.lɔ.di i.ne.pə.labl/",
    version: "Méline"
  },
  {
    term: "Sfivoq",
    category: ["Mapnel","K0re", "Leqwa", "Persona"],
    definition: "Dauphin bouillonant d'exaltation, symbolique de l'initiation vitale de déferlantes affirmations cordiales.",
    desc: "Larmes de Vitalité, 4 Évents Lévitation, Corne en Fusion, 100 Nageoires, 3 Yeux Néons RGB, Peau Grise, Taille de 9 Mètres",
    pronunce: "/sfi.vɔk/",
    version: "Sfivoqs"
  },
  {
    term: "Duel Xceptionnel",
    category: ["Mapnel","K0re", "Aursyl", "Leqwa", "Supervision", "Supernova"],
    definition: "Controverse du statu quo, de son décalcage standardisé et de son arsenal pour le maintenir.",
    school: "Confrontation exemplaire entre deux grandeurs ou deux légitimités.",
    implication: "Culmination du déchaînement ravageur pour finalité la délivrance du dévore-novice et de sa machination.",
    simplified: "Complétude Nezkelwac et Admagcoq misent en synthèse dans la table des jeux.",
    pronunce: "/dɥɛl ɛk.sɛp.sjɔ.nɛl/",
    synonym: "Duel ⚔️ceptionnel"
  },
  {
    term: "MonPol",
    category: ["Mapnel","K0re", "Lysrua", "Leqwa", "Monoa-Polyz", "Phénotype", "Spherµ", "Cueillette"],
    definition: "Titre honorifique envers l'être et son devenir ou le mémojectile quoi qu'il en soit.",
    simplified: "Dédicace Exaltée",
    pronunce: "/mɔn pɔl/"
  },
  {
    term: "Crithekiel",
    category: ["IUVALCY", "UiNo", "Persona", "Concepteur", "Citadel"],
    definition: "Metteur en scène du manège de l'échec dialectique de la dialectique.",
    school: "Forme consciente et statique de la critique conceptuelle.",
    implication: "La création s'embouche un coin, souffle l'effondrement d'une complétude-incomplète.",
    simplified: "Dénomination artificielle Consciente",
    etymology: "Critère:Théologie｜Critique:Théorie｜Que Dieu le fortifie [Ui Appellation Statique]",
    pronunce: "/kʁi.tə.kjɛl/",
    synonym: "Critheka"
  },
  {
    term: "Critheçiel",
    category: ["IUVALCY", "UiNo", "Cueillette", "Cipher", "Museum"],
    definition: "Formule de l'impérissable des puissances potentielles semi-touchées.",
    school: "Forme médiane et potentielle de la critique conceptuelle.",
    implication: "Tant les familles ou les champs lexicaux, ça ne peut que faire sens sans faire sens mais c'est comme ça.",
    simplified: "Douance prospectoire Subconsciente",
    etymology: "Critère:Théologie｜Critique:Théorie｜Que Dieu le fortifie [Ui-No Fabulation Médiane]",
    pronunce: "/kʁi.tə.sjɛl/",
    synonym: "Critheci"
  },
  {
    term: "Critheqiel",
    category: ["IUVALCY", "UiNo", "Phénomène", "Codex", "Parc"],
    definition: "Redéveloppement référenciel jusqu'à son terme en irrémédiable piège.",
    school: "Forme dynamique et inconsciente de la critique conceptuelle.",
    implication: "Impasse cognitive et obsolescence, la capture se dissout spontanément part en part.",
    simplified: "Disposition d'hyper-perspective Inconsciente",
    etymology: "Critère:Théologie｜Critique:Théorie｜Que Dieu le fortifie [No Évocation Dynamique]",
    pronunce: "/kʁi.tə.kjɛl/",
    synonym: "Crithequ"
  },
  {
    term: "Goalois(e)",
    category: ["IUVALCY", "Fostrah", "Persona", "Phénomène"],
    definition: "Solution Miscible Immiscible plongée dans le circuit du sens.",
    etymology: "Gaulois-Goal Polyphonie",
    pronunce: "/ɡɔ.a.lwa(z)/",
    version: "Goalois, Goaloise, Goaloises"
  },
  {
    term: "Crethole",
    category: ["IUVALCY", "Tôhla", "Trinité", "Spherµ", "Codex"],
    definition: "Le monde comme école prise par les moins entravés.",
    implication: "Déjouer la tyrannie du sens ensemble, c'est compris ?",
    simplified: "Divination idiote",
    pronunce: "/kʁe.tɔl/",
    synonym: "Critheco"
  },
  {
    term: "INTIMACY",
    category: ["IUVALCY", "Uewij", "Phénomène", "Supernova", "Trinité", "Tablette"],
    definition: "Trinité Viscérale [⦻] {0} (∞) ou <Ж>; Proximité sensorielle sous dégradé exponentiel, sous un rayon complémentaire de la libido au plaisir centrifuge.",
    school: "Régime de proximité sensorielle, psychique et relationnelle.",
    implication: "Supporter collaborateur de l'entendement novice comme amusement dégagé.",
    simplified: "Rang dépassant la hiérarchie rigide",
    example: "Des encouragements pour atteindre un but difficile",
    quote: "Ceux qui nous hissent plus haut ne sont autres que ceux qui ne s'en fout pas de nous mais le coaching n'est pas de tout repos.",
    pronunce: "/ɛ̃.ti.ma.si/",
    synonym: "For Intérieur"
  },
  {
    term: "XaraЖereX",
    category: ["IUVALCY", "UiNo", "Uewij", "Mouet-Pouet", "Spherµ"],
    definition: "@ttributs tout aussi bien absolus et relatifs comprisent dans une pille de données interminable.",
    simplified: "Danse confuse ambivalente en cadre et légitimité.",
    pronunce: "/sa.ʁak.ste.ʁiz/",
    synonym: "SaraXteriZ"
  },
  {
    term: "Déjà-Vu",
    category: ["IUVALCY", "Leqwa", "Mouet-Pouet", "Phénomène"],
    definition: "Sentiment d'expérience/expérimental/d'expertise du vécu.",
    simplified: "Superposition Analogue"
    ,pronunce: "/de.ʒa vy/"
  },
  {
    term: "Critherçation・Critherçer",
    category: ["IUVALCY", "UiNo", "Slacpi°", "Mouet-Pouet", "Phénotype", "Cipher"],
    definition: "[nom/verbe] inconnu complétable-incomplétable comme bon semble. Depuis le rationnel et l'irrationnel, kinésie gymnastique à partir d'incantations, celles dissécatoires de la dissection indissectionnable.",
    school: "Exercice de pensée qui travaille les limites du langage et des catégories.",
    implication: "Rien ne veut rien dire, le langage sied cette pipelette à merveille, une vrai tête à claque amuseuse de galerie.",
    simplified: "Discours sans dessus dessous・Mot à deviner indiqué par {Ç@} ou {Çaro}",
    pronunce: "/kʁi.tɛʁ.sa.sjɔ̃/ /kʁi.tɛʁ.se/",
    version: "Critherçations, Critherçement, Ç@"
  },
  {
    term: "Travail",
    category: ["Aursyl","K0re", "Fostrah", "Codex"],
    definition: "Collecteur $¥€₿ [Monop%Polym] abusant la culture (Profit - Extraction - Monopole - Accumulation).",
    school: "Régime d'effort, de contrainte et de tenue nécessaire.",
    implication: "Ce qui doit formellement être fait pour l'âme collective à ce qu'on dit.",
    simplified: "Tic au devoir avec ravoir.",
    pronunce: "/tʁa.vaj/",
    desc: "Représenté par l'enfant."
  },
  {
    term: "Veldiac",
    category: ["Mapnel","K0re", "IUVALCY", "Uewij", "Codex"],
    definition: "Voilier 1234 traversant la culture (1 - 2 - 3 - 4).",
    school: "Mode d'activité et de vie qui rend l'existence habitable, respirable et culturellement féconde.",
    implication: "Ce qui doit informellement devenir oublié pour la psyché individuelle à ce qu'on dit.",
    simplified: "Silence au devoir sans savoir.",
    desc: "Représenté par l'adulte.",
    pronunce: "/vɛl.djak/",
    version: "Veldiaçien, Veldiaçiens, Veldiaçienne, Veldiaçiennes, Veldique, Veldiques"
  },
  {
    term: "Veldiac Jtie",
    category: ["Mapnel", "Fostrah", "Phénotype", "Supervision"],
    definition: "Voilier !:?# [Monom&Polyp] épanouissant la culture (Impulsion - Transmission - Questionnement - Action).",
    school: "Version mapnélienne du veldiac, portée par l'impulsion, la transmission, le questionnement et l'action.",
    implication: "Soit comme il se doit, à ta nature d'espèce X en marche.",
    simplified: "S'investir à fond, on se demande même pourquoi.",
    pronunce: "/vɛl.djak ʒti/",
    synonym: "Veldiac Mapnélien, Jtie"
  },
  {
    term: "Veldiac AL",
    category: ["IUVALCY", "Uewij", "Phénomène", "Supernova"],
    definition: "Voilier 0@O⏲ [Critheçiel] épanouissant la culture (Éther - Association - Manifestation - Horloge).",
    school: "Version iuvalcienne du veldiac, portée par l'association, la manifestation et le rythme intérieur.",
    implication: "Mélanges comme il se doit, à ton machin d'espèce '' en aise.",
    simplified: "Se profiler à bord, on s'accorde même incompatible.",
    pronunce: "/vɛl.djak al/",
    synonym: "Veldiac Iuvalcien, AL"
  },
  {
    term: "Veldiac AJtieL",
    category: ["Mapnel", "IUVALCY", "UiNo", "Cueillette"],
    definition: "Voilier [Monom&Polyp]~=~[Critheçiel] réalisant la culture.",
    school: "Forme mixte du veldiac reliant les pôles mapnélien et iuvalcien.",
    implication: "Soit et mélanges comme il se doit, à ta juste mesure.",
    simplified: "Vivre cette vie, nous la vivons parfaitement.",
    pronunce: "/vɛl.djak aʒ.tjɛl/",
    synonym: "Veldiac Mapnélo-Iuvalcien, AJtieL",
    version: "AJtieL"
  },
  {
    term: "Ganie",
    category: ["IUVALCY", "Uewij", "Supernova", "Cueillette"],
    definition: "Hors-ganisme alias aux couches plus lointaines que l'organologie actuelle.",
    school: "Dimension extra-organique ou plus lointaine que l'organisation ordinaire du vivant.",
    pronunce: "/ɡa.ni/",
    version: "Ganico, Ganique"
  },
  {
    term: "GaunieGanie",
    category: ["Mapnel", "IUVALCY", "Ekeline", "Uewij", "Mouet-Pouet", "Supernova", "Cueillette"],
    definition: "Gaieté Hors-ganique.",
    parent: "Gaunie, Ganie",
    etymology: "Gaunie & Ganie pouvant se dire à l'avers ou à revers.",
    synonym: "Extase, Félicité, Transe",
    meme: "Gaunico=Ganique/Ganico=Gaunique",
    pronunce: "/ɡo.ni.ɡa.ni/",
    version: "Gaunico=Ganique, Ganico=Gaunique"
  },
  {
    term: "CritHAïe",
    category: ["IUVALCY", "Fostrah", "UiNo", "Uewij", "Tôhla", "Cipher"],
    definition: "Comment puis-je te le dire ?",
    school: "Point douloureux où la compréhension se crispe ou se brise.",
    implication: "Il s'agit de nous qui n'est pas nôtres.",
    simplified: "Douloureuse translation",
    pronunce: "/kʁit.a.i/",
    etymology: "Inanité critique Ha"
  },
  {
    term: "TRIBALT",
    category: ["IUVALCY", "Aursyl", "Fostrah", "Spherµ", "Codex"],
    definition: "Structure évolutives des formes morcelées vers leur incompréhensibles compréhensions avortées."
    ,pronunce: "/tʁi.balt/"
  },
  {
    term: "GESTALT",
    category: ["IUVALCY", "Uewij", "Spherµ", "Codex", "Cipher", "Concepteur"],
    definition: "Structure évolutives des formes entières vers leur définitions indéfinissables fécondées."
    ,pronunce: "/ɡɛs.talt/"
  },
  {
    term: "Möbius Netwow",
    category: ["IUVALCY", "UiNo","K0re", "Supernova", "Spherµ", "Citadel"],
    definition: "Site cousu décousu d'entendement domestique gouvernant.",
    school: "Réseau de perception et de pensée en boucle auto-enveloppée.",
    pronunce: "/mø.bjys nɛt.wɔw/",
    version: "Netwow, Netwower, Netwowers"
  },
  {
    term: "PROTAGONISM",
    category: ["IUVALCY", "UiNo", "Leqwa", "K0re", "Concepteur"],
    definition: "Pouvoir affirmatif du défi continuel vers une forme de vie irréductible et croissante.",
    school: "Tendance à se vivre comme centre actif ou héros de sa trajectoire.",
    synonym: "Ganique(profusée)",
    pronunce: "/pʁɔ.ta.ɡɔ.nism/",
    version: "Protagoniste, Protagonique, Protagoniques"
  },
  {
    term: "Crith",
    category: ["IUVALCY", "UiNo","K0re", "Supervision"],
    definition: "Commandement à l'antenne de singularité complète-incomplète.",
    school: "Principe critique qui expose les limites du langage et oblige la pensée à se reformer."
    ,pronunce: "/kʁit/"
  },
  {
    term: "⟁",
    category: ["ARc⟁diA","K0re", "Mouet-Pouet", "Cipher"],
    definition: "Awkward.",
    school: "Signe de bascule, d'éclair et de découverte.",
    etymology: "awk = ambigu｜ward = direction spaciale/temporelle",
    synonym: "Étrange, Maladroit, Embarassant, Difficile, Gênant, Délicat, Fâcheux, Lourd",
    version: "Awkward"
  },
  {
    term: "ZooZaZe",
    category: ["ARc⟁diA","K0re", "Logjēm", "Slacpi°", "Trinité", "Tablette"],
    definition: "Trinité Cultivatrice (JooQooBoo - aLIaKKaHH - eRUeGGeHH)",
    school: "Triptyque des trois forces arcadiennes : conflit libéré, apaisement affiliateur et médiation interrogative.",
    simplified: "Forces",
    pronunce: "/zu.za.ze/"
  },
  {
    term: "JooQooBoo",
    category: ["ARc⟁diA", "Logjēm", "Leqwa", "K0re", "Supervision", "Supernova"],
    definition: "Hostilité macabrique affranchie des lois établies ensemanceuse de plosions imparables.",
    school: "Force de confrontation, de pression et de menace qui pousse le conflit jusqu'à l'épreuve décisive.",
    simplified: "Jeu du Cou Menacé",
    synonym: "JooQ, SWOT, Compétition, Violence, Agitation",
    pronunce: "/d͡ʒu.ku.bu/",
    version: "JooQooBoos, JooQooBien, JooQooBiens, JooQooBienne, JooQooBiennes"
  },
  {
    term: "aLIaKKaHH",
    category: ["ARc⟁diA", "Slacpi°", "Ekeline", "K0re", "Phénotype", "Cueillette"],
    definition: "Dissolution affiliatrice affranchie des coercitions prescrites enrôleuse d'horizons inexplorés.",
    school: "Force d'apaisement, d'alliance et de soulagement qui desserre les contraintes et rouvre les possibles.",
    simplified: "Alimentation Accentueuse de Soulagement",
    synonym: "aLIa, SCAMPER, Coopération, Douceur, Calme",
    pronunce: "/a.lja.ka/",
    version: "aLIaKKaHHs, aLIaKKien, aLIaKKiens, aLIaKKienne, aLIaKKiennes"
  },
  {
    term: "eRUeGGeHH",
    category: ["ARc⟁diA", "Nezrog", "K0re", "Phénomène"],
    definition: "Passage didactique affranchie des limitations formées animateur d'exterrogations impénétrables.",
    school: "Force de médiation et d'interpellation qui relance la pensée par la question, le passage et la mise en relation.",
    simplified: "Éruption Égayeuse d'Interpellations",
    synonym: "eRUe, QQOQCCP, Congruence, Proportion, Médiation",
    pronunce: "/e.ʁɥe.ʒe/",
    version: "eRUeGGeHHs, eRUeGGien, eRUeGGiens, eRUeGGienne, eRUeGGiennes"
  },
  {
    term: "Letricot",
    category: ["ARc⟁diA", "Aursyl", "Logjēm", "Mouet-Pouet", "Parc"],
    definition: "Technicité éditoriale du langage et des combinaisons parmi les attributions de sens et du voisinage phonétique.",
    implication: "Lecture interchangée possiblement à l'envers pour décrire une forme nouvelle éventuellement dissonante de la théorie à la pratique.",
    simplified: "Le cliché est d'être pour un mot qu'on a rendu cool.",
    etymology: "Tricotage-Lettres,",
    synonym: "Label, Étiquette, Marque, Cachet"
    ,pronunce: "/lə.tʁi.ko/"
  },
  {
    term: "TRICK_&_TREAT",
    category: ["ARc⟁diA", "Logjēm", "Supervision", "Codex"],
    definition: "Essayer de raisonner ou Conduire sa raison, telle est la question.",
    synonym: "Trinitrotoluène(TNT)",
    meme: "Désolé tu n'es plus Urflosien… Tu ne l'as jamais été, à vrai dire. Je t'ai mal jugé.",
    pronunce: "/tʁik‿ɛn tʁit/"
  },
  {
    term: "fantômiseur/phantomizer",
    category: ["ARc⟁diA", "Slacpi°", "Persona", "Mouet-Pouet", "Cipher", "Cueillette"],
    definition: "Il m'en bouche un coin, je voudrai effectivement une diarrhée pérenne.",
    implication: "Je t'ai démasqué petit cachotier, voilà un fantôme, ça existe pour de vrai ouuahhh!!",
    pronunce: "/fɑ̃.to.mi.zœʁ/, /fan.tɔ.maj.zœʁ/",
    version: "fantômiseur, phantomizer, fantômiste, fantômistes, fantômisation, fantômisé, fantômisés, fantômisée, fantômisées"
  },
  {
    term: "~Monom&moceM~🙵~Polyp&pocuP~",
    category: ["ARc⟁diA", "Xyfurn", "Monoa-Polyz", "Mouet-Pouet"],
    definition: "C'est probablement une blague (つ≧▽≦)つ ʱªʱªʱª(ᕑᗢूᓫ∗)",
    implication: "Pouvoir Magique Incantatoire",
    synonym: "&🙵&",
    pronunce: "/mɔ.nɔm e mo.səm e pɔ.lip e po.ky.p/"
  },
  {
    term: "Mirsa Mirsa Mua",
    category: ["ARc⟁diA", "Slacpi°", "Cueillette"],
    definition: "Thémathique du vouloir double, Forme Hypothéthique ouverte «Tu saura prochainement si tu es intéressé».",
    meme: "Quel kit de farceur joyeux( ͡° ͜ʖ ͡°)",
    pronunce: "/miʁ.sa miʁ.sa my.a/"
  },
  {
    term: "EURÊK⟁",
    category: ["ARc⟁diA", "Lysrua", "Logjēm", "Slacpi°", "Tôhla", "Cueillette", "Tablette", "Museum"],
    definition: "Lecture artistique des semences ZooZaZe Z옹Z야Z웨 d'ouvrages culturels.",
    school: "Figure de la découverte soudaine et de l’intuition trouvante.",
    synonym: "Eurêka, J'ai trouvé!",
    pronunce: "/ø.ʁe.ka/"
  },
  {
    term: "SP⟁RK",
    category: ["ARc⟁diA", "Tôhla", "Supernova", "Spherµ", "Museum", "Parc", "Citadel"],
    definition: "System, Purpose, and the Awkward Realm of Kindred ≈ Système, Intention, et l'Étrange Monde de la Parenté",
    synonym: "SPARK, Société, Énergie, Généalogie",
    version: "SPARK",
    pronunce: "/spɛʁk/"
  },
  {
    term: "PAMABWA",
    category: ["IUVALCY", "Slacpi°", "Monoa-Polyz", "Phénotype", "Mouet-Pouet", "Concepteur"],
    definition: "Invention pocuP&moceM, ce qu'on appelle le souci, pas le mot ni la croyance.",
    school: "Invention du souci pris comme réalité vécue plutôt que comme simple mot.",
    parent: "Monoa-Polyz",
    synonym: "Couple épanoui",
    pronunce: "/pa.ma.bwa/"
  },
  {
    term: "Tra§Vel",
    category: ["ARc⟁diA", "Leqwa", "Logjēm","K0re", "Codex", "Supervision"],
    definition: "Bouclure de flambeau Doppelgänger des entrailles exclusives inclusives selon la forme et les convulsions du vouloir.",
    school: "Forme voyageuse qui articule travail, veldiac et transformation.",
    implication: "Ce qui doit être une collection abusive et un voile traversé à ce qu'on dit.",
    simplified: "Dose d'altérité réaliste et idéaliste sous les moyens du bord et du fond.",
    desc: "Représenté par l'adolescent.",
    parent: "Travail, Veldiac",
    etymology: "English Travel (Français Voyager)",
    meme: "Ça n'existe pas à ce qu'on dit.",
    pronunce: "/tʁa.vɛl/",
    version: "Tra§Veling"
  },
  {
    term: "Câble/Wire",
    category: ["ARc⟁diA", "Aursyl", "Logjēm", "Slacpi°", "Phénomène", "Supervision", "Codex"],
    definition: "Le destin t'a choisi, ta vie a un sens, tu as besoin de ceci ou cela XD.",
    school: "Sentiment d'être câblé par un destin, un besoin ou un sens imposé.",
    implication: "Scepticisme de l'artificialité.",
    pronunce: "/kabl/ /waɪʁ/",
    version: "Câble, Câbles, Wire, Wires, Wired, Wiring, Câblage, Câblé, Câblée, Cablés, Cablées"
  },
  {
    term: "InfiNieR",
    category: ["ARc⟁diA", "Tôhla", "Persona", "Supernova"],
    definition: "Antinomie tragico-splendide profanateur de panoptisme.",
    parent: "Palpiter de l'Infini",
    etymology: "Infirme, Infirmier, Infirmerie, Infini"
    ,pronunce: "/ɛ̃.fi.njɛʁ/"
  },
  {
    term: "Blehdwoluzvi",
    category: ["ARc⟁diA", "Aursyl", "Tôhla", "Mouet-Pouet", "Phénotype"],
    definition: "Le pouvoir dévoriste n'est que blehdwo, tu connais maintenant, tu es prêt pour la vie!",
    school: "Signifiant opaque servant d'étrangeté pure.",
    implication: "Librairie Ludothèque Hourra! Comédie ou Tragédie ?",
    synonym: "Blehdwo, t'attends quoi?, Bruh, What the Fuck, Incompréhension, le juron par excellence, Autorité",
    meme: "C'est les livres. C'est la musique. C'est la culture. Toute la merde du monde. Ceux que vous souhaitiez jusqu'à présent.",
    pronunce: "/blɛd.wo.lyz.vi/",
    version: "Blehdwo"
  },
  {
    term: "Gorgeous Raper",
    category: ["ARc⟁diA", "Aursyl", "Logjēm", "Slacpi°", "Tôhla","K0re", "Mouet-Pouet"],
    definition: "Magnifique Violeur.",
    school: "Figure du mal séduisant, violeur de sens et de puissance.",
    implication: "Tu peux t'en aller si tu veux.",
    simplified: "Un combat qui ne peut être pas",
    pronunce: "/ɡɔʁ.ʒɔs ʁe.peʁ/"
  },
  {
    term: "aTHaTCHa",
    category: ["ARc⟁diA", "Aursyl", "Slacpi°", "Phénotype", "Tablette"],
    definition: "Dualité Apathique/Empathique (ApaTH - CyaTH - EmpaTH)",
    implication: "Dévore-Novice et Antinomies",
    synonym: "Adieu",
    pronunce: "/a.ta.ʃa/"
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
    definition: "Déconseillé aux humains moins humains.",
    school: "Compilation des conflit militaires humains",
    simplified: "Liste historique des guerres humaines au nom d'un je ne sais quoi",
    pronunce: "/kɔ̃t sɑ̃.ɡi.nɛʁ/"
  },
  {
    term: "InFeXcuse",
    category: ["Aursyl", "Slacpi°", "Codex", "Phénotype", "Parc", "Tablette"],
    definition: "Préfixes % Suffixes odieux à utiliser avec modération.",
    school: "Prétextes et greffes verbales qui contaminent le discours.",
    implication: "Il y a le X, le Xé, le Xeur; la Xation est féroce.",
    simplified: "Structure des mots du politicien",
    etymology: "Infection + Excuse",
    pronunce: "/ɛ̃.fɛks.kyz/"
  },
  {
    term: "Hœmnet",
    category: ["Aursyl", "Persona", "Cueillette", "Codex"],
    definition: "Viande de chair humaine recommandé pour son goût délicieux et sa texture raffinée.",
    implication: "L'orgueuil anthropocentriste s'est cru comme définitionnellement bienveillant ou est-ce une simple espérance ?",
    simplified: "Spécialité culinaire des professionnels",
    quote: "Manger ses congénères fait partie intégrante des stratégies de la nature afin de survivre et d'accéder à une longue déscendance.",
    synonym: "Cannibale, GOAT/Greatest Of All Time/Le Plus Grand de Tout les Temps",
    pronunce: "/ɛm.nɛt/",
    etymology: "Humain, Œuf, Poulet",
    version: "Hœmnets, Haemnet, Haemnets"
  },
  {
    term: "ANTAGONISM",
    category: ["Aursyl", "Concepteur"],
    definition: "Pouvoir négateur du défi continuel vers une forme de vie indestructible et cruciale.",
    school: "Logique d'opposition frontale et de conflit structurant.",
    synonym: "Agonique(Diffusée)",
    pronunce: "/ɑ̃.ta.ɡɔ.nism/",
    version: "Antagoniste, Antagonique, Antagoniques"
  },
  {
    term: "Nihilin",
    category: ["Aursyl", "Nezrog", "Supervision", "Concepteur"],
    definition: "Abandon absolu de toute forme de sens.",
    school: "Pôle de vide, d'absence et d'annulation.",
    parent: "Hyenuul",
    etymology: "Nihilisme, Nihil, Rien",
    pronunce: "/ni.i.lin/"
  },
  {
    term: "Dévore-Nova",
    category: ["Aursyl", "Wacwe","K0re", "Supernova", "Cipher"],
    definition: "Champion de la perpétuation, forme adaptative de réinvention des franchises aursyliennes.",
    school: "Version amplifiée et supérieure du dévore-novice.",
    implication: "Néo-versions du même plan ennuyeux inquisiteur de la prise au piège.",
    simplified: "La réussite prédatorial grâce à la formule qui marche",
    desc: "Elle est décrit comme entité nocturne ne se révélant qu'uniquement par la métaphore.",
    synonym: "Ø",
    surnatural: "Batailler contre Dévore-Nova se fait au cœur d'un ailleurs ganique d'InFeXcuse.",
    pronunce: "/de.vɔʁ nɔ.va/",
    version: "Dévore-Novarien, Dévore-Novariens, Dévore-Novarienne, Dévore-Novariennes"
  },
  {
    term: "PROjECT SSeCCu$",
    category: ["Aursyl","K0re", "Codex", "Tablette", "Museum", "Parc", "Citadel"],
    definition: "Diagramme colonisé - Revue du succès",
    school: "Programme de capture, de séduction et de conditionnement du système aursylien.",
    implication: "Les règles du succès sous une banière instrumentale co-produite",
    pronunce: "/pʁɔ.ʒɛk se.kys/",
    version: "SSeCCu$, SSeCCuS"
  },
  {
    term: "￣_(ツ)_/￣",
    category: ["Lysrua", "Xyfurn", "Mouet-Pouet", "Cueillette", "Codex", "Tablette"],
    definition: "Je ne sais pas.",
    school: "Posture d'ignorance assumée, de retrait ou de désinvolture lucide.",
    implication: "Universalité"
  },
  {
    term: "AurLys",
    category: ["Aursyl", "Lysrua","K0re","Supernova","Spherµ"],
    definition: "Technologie hors la loi.",
    school: "Transmutation de la dureté en contribution, créativité et civilisation.",
    simplified: "Sexe Télépathique",
    desc: "Paramètres",
    parent: "⟁URNELCY",
    etymology: "Politique (Purifiée de l'In Real Life Be Like)",
    pronunce: "Français /oʁ.lis/ English /ɔːɹ.lɪs/",
    version: "Aurlysien, Aurlysiens, Aurlysienne, Aurlysiennes, Aurlyso, Aurlystique, Aurlysaur, Aurlysaurs, Aurlysaure, Aurlysaures"
  },
  {
    term: "phoRÊTT",
    category: ["Lysrua", "Mapnel", "Aursyl", "IUVALCY", "ARc⟁diA", "Ekeline", "Persona", "Phénomène", "Supernova", "Parc", "Tablette"],
    definition: "Support de rôles et d'archétypes impliquant des principes factoriels interdépendants qui régissent le code personnel arangé.",
    school: "Support de rôles et d’archétypes organisant le code personnel.",
    implication: "Duo avec dézELTT",
    parent: "Fon:Rel:Inc",
    etymology: "Forêt - Phore = Qui porte (ελληνικά/Grec)",
    pronunce: "fɔ.ʁɛt"
  },
  {
    term: "dézELTT",
    category: ["Lysrua", "Mapnel", "Aursyl", "IUVALCY", "ARc⟁diA", "Ekeline", "Phénotype", "Supervision", "Codex", "Museum", "Tablette"],
    definition: "Support d'analyse et d'observation impliquant des sources causales interdépendantes qui régissent les décrets communs composés.",
    school: "Support d'analyse et d'observation organisant les décrets communs.",
    implication: "Duo avec phoRÊTT",
    parent: "Scé;Syn;Cel",
    etymology: "Désert - Zelt = Tente (Deutsch/Allemand)",
    pronunce: "/de.zɛlt/"
  },
  {
    term: "Iacy",
    category: ["IUVALCY", "Lysrua", "UiNo", "Phénotype"],
    definition: "'Bonjour/Bonsoir/Bienvenue' ou littéralement 'appartenir à personne'.",
    school: "Formule de salutation.",
    parent: "Invité Iac/Veldiac",
    quote: "Les invités vivants obtiennent des dons tous entièrement prêtés.",
    meme: "Yashi"
  },
  {
    term: "Terlush・Derlush",
    category: ["Lysrua", "Aursyl", "Vydnitt", "Phénotype"],
    definition: "'Pardon/S'il vous plaît' ou littéralement 'faire de son mieux malgré ses conditions'.",
    school: "Formules de politesse légères ou lourdes.",
    implication: "[version légère]・[version lourde]",
    parent: "Mlush'Plush",
    meme: "T-T-Terlush・D-D-Derlush"
  },
  {
    term: "Sublii(s)",
    category: ["Mapnel", "Lysrua", "Nezrog", "Phénotype"],
    definition: "'Merci(exagération)' ou littéralement 'pertinence sage'.",
    school: "Formule de (grand) remerciement.",
    parent: "Semaine Sublime",
    meme: "Subliissssss(jusqu'à épuisement)"
  },
  {
    term: "Atcha",
    category: ["ARc⟁diA", "Lysrua", "Slacpi°", "Phénotype"],
    definition: "'Au revoir' ou littéralement 'ne faire que passer'.",
    school: "Formule de finition.",
    parent: "aTHaTCHa",
    meme: "Atchoom"
  },
  {
    term: "Gliobë",
    category: ["Lysrua", "Mapnel", "IUVALCY", "ARc⟁diA", "Aursyl","K0re", "Mouet-Pouet", "Tablette"],
    definition: "Cartographie Emojitique du Plan Lointain aurnelcyen.",
    school: "Cadre lysruéen de réalité, de style et de circulation des formes."
  },
  {
    term: "Mlush'Plush",
    category: ["Lysrua", "Vydnitt", "Monoa-Polyz", "Phénomène", "Phénotype", "Supervision", "Supernova", "Cipher", "Museum", "Parc"],
    definition: "Double facette ini-exo tunnel passerelle, vastitude transversale sans mesure propre.",
    school: "Régime de douceur, d'accueil et de moelleux culturel.",
    implication: "Attention à la priorité de lecture linéaire inévitable!",
    simplified: "Spécialité Implicite Explicite aux goûts variés.",
    desc: "Il se représente dans le bandage de la pilosité sur elle-même.",
    parent: "Monoa-Polyz",
    synonym: "Contraires, Paradigmes, Traitement, Médecine, Thérapie, Semblance, Antidote"
  },
  {
    term: "YgijfeV",
    category: ["Lysrua", "Slacpi°","K0re", "Spherµ", "Cueillette", "Concepteur", "Citadel"],
    definition: "Vague motrice réceptionnée et renvoyée de friandises fugaces remplies et vides.",
    school: "Réalité coquine, écosystème du tout et du rien.",
    implication: "Poche bouchebéante gonflable insoupçonnée en matière pénétrante.",
    simplified: "Écosystème//Écouah du Tout et du Rien.",
    desc: "Elle est représentée dans la futilité des arbres-ciel.",
    synonym: "⦾ Y ⦿, ◯⬤○● Y ●○⬤◯, Richesse, Daimon, Démiurge, Représailles, Rétribution, Combination, Monde, Organe, Déjà-vu"
  },
  {
    term: "白𝓒α𐌺心αট黒",
    category: ["Lysrua", "Aursyl", "Logjēm", "Tablette", "Cipher"],
    definition: "ÉCARLATE ou la Promesse Brisée d'Aursyl/Lysrua.",
    school: "Nom ÉCARLATE du versant brisé entre Aursyl et Lysrua.",
    version: "ÉCARLATE"
  },
  {
    term: "⼰ㄈ🜆ꡙҼ7",
    category: ["Lysrua", "Aursyl", "Tôhla", "Tablette", "Cipher", "Codex"],
    definition: "SCARLET ou la Déclaration sur papier non-papier.",
    school: "Domaine SCARLET : sciences et technologies.",
    implication: "[Domaine] Sciences & Technologies",
    parent: "Gliobë",
    version: "SCARLET"
  },
  {
    term: "ÇEMiNi!",
    category: ["Lysrua", "Trinité", "Tablette"],
    definition: "Trinité Stimulatoire ands.ot.rus la Réalité ! ?lush. (LEMiNiQ - GEMiNiC - REMiNiK)",
    school: "Triptyque des trois grands modes lysruéens de rapport au réel : immersion, surplomb et composition totale.",
    implication: "[SYL｜LYS]"
  },
  {
    term: "LEMiNiQ",
    category: ["Lysrua", "Museum"],
    definition: "dans.autour la Réalité Lucide Onirique Mlush.",
    school: "Mode de réalité vécu de l'intérieur, dans une proximité lucide, douce et d'étrangeté onirique avec ce qui entoure.",
    implication: "[Secret｜SycrⒺt]"
  },
  {
    term: "REMiNiK",
    category: ["Lysrua", "Parc"],
    definition: "sur.autour la Réalité DOMINO Ludique Plush.",
    school: "Mode de réalité saisi par surplomb, sous forme de jeu organisé, de sélection et de mise en scène du monde.",
    implication: "[Sélection｜SylectiΩn]"
  },
  {
    term: "GEMiNiC",
    category: ["Lysrua", "Citadel"],
    definition: "dans.autour.sur la Réalité CoqUiNe DOMINO Mlush'Plush YgijfeV.",
    school: "Mode de réalité total qui combine l'immersion, le surplomb et la pluralité des points de vue dans une même composition.",
    implication: "[Syllepse｜Syllæps]"
  },
  {
    term: "⮟ЮꡙΞԵ",
    category: ["Lysrua", "Aursyl", "Fostrah", "Uewij", "Tablette", "Cipher", "Mouet-Pouet"],
    definition: "VIOLET ou la Prouesse Saugrenue des querelles spectrales.",
    school: "Domaine VIOLET : société et vie pratique.",
    implication: "[Domaine] Société & Vie pratique",
    parent: "ÇEMiNi!",
    version: "VIOLET"
  },
  {
    term: "Z옹Z야Z웨",
    category: ["Lysrua", "Tôhla", "Trinité", "Tablette"],
    definition: "Trinité Cantinière (J옹Q옹B옹 - 야LI야KK야HH - 웨RU웨GG웨HH)",
    school: "Transposition lysruéenne de ZooZaZe en triptyque de guerre, de paix et d'émulation civilisées.",
    parent: "ZooZaZe",
    pronunce: "ZongZyaZwe",
    version: "ZongZyaZwe"
  },
  {
    term: "J옹Q옹B옹",
    category: ["Lysrua", "Mapnel", "Leqwa", "Supervision", "Supernova", "Citadel"],
    definition: "Guerre vectorielle, vasculaire et pronominale à l'encontre de l'exigence ontologique carcérale.",
    school: "Transposition lysruéenne de JooQooBoo : conflictualité haute, orientée vers la percée, la libération ou l'assaut civilisationnel.",
    simplified: "Assaut Con Gravissime",
    synonym: "JooQooBoo MonPol",
    pronunce: "옹 = ong (JongQongBong)",
    version: "JongQongBong, JooQooBoo MonPol, JooQooBoo Mapnélien"
  },
  {
    term: "야LI야KK야HH",
    category: ["Lysrua", "ARc⟁diA", "UiNo", "Phénotype", "Cueillette", "Concepteur", "Parc"],
    definition: "Paix éthique, syntropique et pronominale à l'inverse de tout modèle dogmatique cruel.",
    school: "Transposition lysruéenne de aLIaKKaHH : pacification active, alliance soignée et consolidation éthique des rapports.",
    simplified: "Aliage Consolidé avec Soin",
    synonym: "aLIaKKaHH CritHAïe",
    pronunce: "야 = ya (yaLIyaKKyaHH)",
    version: "yaLIyaKKyaHH, aLIaKKaHH CritHAïe, aLIaKKaHH Iuvalcien"
  },
  {
    term: "웨RU웨GG웨HH",
    category: ["Lysrua", "IUVALCY", "Xyfurn", "Phénomène", "Cipher", "Museum"],
    definition: "Émulation existentielle, inestancielle et nominale à revers des édifications définitives invariables.",
    school: "Transposition lysruéenne de eRUeGGeHH : relance des personnes et des formes par l'émulation, l'écart et la personnalisation.",
    simplified: "Personnalisation des Œufs Captivants",
    synonym: "eRUeGGeHH Blehdwo",
    pronunce: "웨 = we (weRUweGGweHH)",
    version: "weRUweGGweHH, weRUweGGweHH Blehdwo, weRUweGGweHH Arcadien"
  },
  {
    term: "ҨყⰎல",
    category: ["Lysrua", "Aursyl", "UiNo", "Leqwa", "Tablette", "Cipher", "Persona"],
    definition: "CYAN ou la Berceuse du monde au temps de l'incongru.",
    school: "Domaine CYAN : alchimie et humanités.",
    implication: "[Domaine] Alchimie & Humanités",
    parent: "Z옹Z야Z웨",
    version: "CYAN"
  },
  {
    term: "elzel0lezle",
    category: ["Lysrua", "Wacwe", "Codex", "Supervision"],
    definition: "Ressource supra-kentronienne de garantie en rencontres fortuites grâce à l'arbre de connexion YgijfeV.",
    school: "Ressource civilisationnelle de garantie, de connexion et de rencontre.",
    implication: "Filet interceptant Tra§Vel de la malédiction éternisante des directions cognantes abusives.",
    simplified: "Proximité civilisationnelle au travers de SCARLET, VIOLET, CYAN, ￣_(ツ)_/￣ et 大ටभᲡⰡ.",
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
    school: "Impératif intérieur de vie qui remplace le devoir tyrannique.",
    implication: "Substitution du devoir tyrannique suppresseur de chimères aursyliennes vers une d'autres chimères.",
    desc: "L'opale est représenté par la cachoterie (ou peut-être pas).",
    etymology: "Upala(Sanskrit) = Pierre Précieuse",
    synonym: "Dû×Opale Devoir×Opaler Dette×Opaliade Débit×lolol"
  },
  {
    term: "大ටभᲡⰡ",
    category: ["Lysrua", "Tôhla", "Persona", "Tablette", "Supernova", "Spherµ", "Concepteur"],
    definition: "TÔHLA ou la Zone Domicile Conquérante.",
    school: "Zone de domicile conquérante associée à TÔHLA.",
    implication: "Visualisation simultanée interchangeable 'Colorful Colorless'"
  },
  {
    term: "Syoneme Sublime",
    category: ["Lysrua","K0re", "Parc", "Citadel"],
    definition: "Élévation continuelle des non-formes de pauvreté parmi 7 pentes d'ajournements.",
    school: "Montée chaotique des formes pauvres vers une sublimation continue.",
    simplified: "Céphalique instructuration littérale des forces du chaos",
    surnatural: "Cacophonie Anormale Hebdomadaire",
    version: "Syoneme, Syonemes"
  },
  {
    term: "Articulation Beuzwain (Okienne)",
    category: ["0K", "Capsule", "Codex", "Spherµ"],
    definition: "Sommeil - Alimentation - Mouvement - Mental - Social",
    synonym: "Besoin",
    version: "Beuzwain"
  },
  {
    term: "Articulation Par-ci=Par-là (Mapnélienne)",
    category: ["Mapnel", "Capsule", "Monoa-Polyz", "Persona", "Supervision", "Supernova"],
    definition: "Esprit - Mental - Corps - Monstre",
    synonym: "ci=là/Cilà",
    version: "Par-ci=Par-là, Parcilà"
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
    category: ["Aursyl","K0re", "Capsule", "Persona", "Concepteur"],
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
    category: ["Mapnel", "Aursyl","K0re", "Capsule", "Spherµ", "Cueillette", "Museum", "Parc", "Citadel"],
    definition: "Rouge - Vert - Bleu - Blanc - Noir - Gris",
    school: "Répartition des rôles symboliques par six couleurs.",
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
    school: "Calendrier aurnelcyen de 364 jours, prolongé par des jours intercalaires selon le cycle civil.",
    parent: "CritHAïe",
    version: "Emmaïe"
  },
  {
    term: "MATRICE 5ync sur 5ync",
    category: ["Mapnel", "IUVALCY", "Capsule", "Monoa-Polyz", "Spherµ"],
    definition: "Symbolisme Pentagrammique [5x20] Mapnélo-Iuvalcien.",
    school: "Matrice mapnélo-iuvalcienne à cinq branches et vingt segments.",
    simplified: "Cinq sur Cinq, SNEWLC",
    synonym: "⛤",
    version: "5ync sur 5ync"
  },
  {
    term: "MATRICE 4lien 4perçu",
    category: ["ARc⟁diA", "Aursyl", "Capsule", "Cueillette", "Cipher"],
    definition: "Partie bricolée [14 Mots Croisés] Arcado-Aursylien.",
    school: "Matrice arcado-aursylienne construite comme un ensemble de mots croisés.",
    simplified: "Alien Aperçu, lien perçu",
    synonym: "⊠",
    version: "4lien 4perçu, Alien Aperçu, lien perçu"
  },
  {
    term: "MATRICE A6es 6tiques 6colaire",
    category: ["Lysrua", "Mapnel", "IUVALCY", "ARc⟁diA", "Aursyl", "D⦾MIN⦿'s","K0re", "Capsule", "Spherµ", "Cipher", "Mouet-Pouet"],
    definition: "Tableau Aurnelcyen [6x24] à apprendre par le cœur à ce qu'on dit.",
    school: "Grande matrice récapitulative du système aurnelcyen, organisée en six colonnes et vingt-quatre lignes.",
    implication: "Nouveau lore concernant le QI de la bête 666.",
    simplified: "Assises Cystiques si Scolaire",
    etymology: "Siège de l'anomalie de la vessie à l'école",
    synonym: "🚽💦🏫",
    meme: "Quelle chance d'aller aux toilettes!",
    version: "A6es 6tiques 6colaire, Assises Cystiques si Scolaire"
  },
  {
    term: "DOMINION",
    category: ["D⦾MIN⦿'s", "Persona"],
    definition: "Personnage de la prophétie non-prophétique.",
    school: "Figure centrale de la prophétie non-prophétique du cycle mythologique."
  },
  {
    term: "Innok",
    category: ["D⦾MIN⦿'s", "Ekeline"],
    definition: "Pays aurnelcyen.",
    school: "Pays principal de la mythologie aurnelcyenne.",
    desc: "Superficie de 47.093km² en forme de pieuvre/gant - 4.863 Habitants",
    parent: "Innokcien",
    meme: "Un habitant n'est dans aucune des 3 villes."
  },
  {
    term: "Urflosia",
    category: ["D⦾MIN⦿'s", "Logjēm"],
    definition: "Capitale//Sifflet au centre d'Innok.",
    desc: "Superficie de 2.152km² en forme d'ellipse/œil - 3.108 Habitants",
    parent: "Florescence",
    version: "Urflosien, Urflosiens, Urflosienne, Urflosiennes"
  },
  {
    term: "Srin",
    category: ["D⦾MIN⦿'s", "Xyfurn"],
    definition: "Ville de l'est d'Innok.",
    school: "Ville orientale d’Innok.",
    desc: "Superficie de 1.748km² en forme de triangle - 1.130 Habitants",
    parent: "Directions Souveraines",
    version: "Srien, Sriens, Srienne, Sriennes"
  },
  {
    term: "Altopus",
    category: ["D⦾MIN⦿'s", "Fostrah"],
    definition: "Ville du nord d'Innok.",
    school: "Ville septentrionale d’Innok.",
    desc: "Superficie de 0.601km² en forme de carré - 624 Habitants",
    parent: "TRIBALT//GESTALT",
    version: "Altopien, Altopiens, Altopienne, Altopiennes"
  },
  {
    term: "Rantlot",
    category: ["D⦾MIN⦿'s", "Fostrah", "Uewij", "Wacwe", "Logjēm"],
    definition: "Entreprise communauté d'architecture sans possession distinguée.",
    school: "Communauté architecturale sans propriété individuelle forte.",
    meme: "Rantlot était unanimement d'accord sur le fait que ces gens n'ont rien à faire."
  },
  {
    term: "NEON",
    category: ["D⦾MIN⦿'s", "UiNo", "Vydnitt", "Nezrog", "Wacwe"],
    definition: "Structure de l'enseignement selon la volonté de X.",
    school: "Structure d'enseignement d'Innok."
  },
  {
    term: "H2O",
    category: ["D⦾MIN⦿'s", "Vydnitt", "Ekeline", "Wacwe", "Leqwa", "Slacpi°"],
    definition: "Établissement de la recherche vers l'appartenance.",
    school: "Établissement de recherche lié à l'appartenance et à l'intégration.",
    meme: "Leqwa en tant qu'être et son devenir […]"
  },
  {
    term: "TouRise",
    category: ["D⦾MIN⦿'s", "Vydnitt", "Xyfurn", "Wacwe"],
    definition: "Organe Touristique pour s'enrichir et trouver sa place.",
    school: "Organe touristique et d'insertion sociale."
  },
  {
    term: "CGU(Carpet Glance Unit)",
    category: ["D⦾MIN⦿'s", "Nezrog", "Slacpi°", "Tôhla"],
    definition: "Institution militaire d'espionage imposant le minimum de sang.",
    school: "Institution militaire et d'espionnage à faible effusion de sang."
  },
  {
    term: "Esliz",
    category: ["D⦾MIN⦿'s", "Leqwa", "Logjēm", "Slacpi°", "Tôhla"],
    definition: "Association promulgant l'indépendance guslacro-sizrewilienne.",
    school: "Association défendant une indépendance locale."
  },
  {
    term: "NEET Club",
    category: ["D⦾MIN⦿'s", "Logjēm", "Tôhla"],
    definition: "Groupe de glandeurs sous-estimé qui aime le chez-soi.",
    school: "Groupe domestique de marginaux sous-estimés."
  },
  {
    term: "xXx",
    category: ["D⦾MIN⦿'s"],
    definition: "Organisation à l'origine de toute la tradition de l'idée-maître.",
    school: "Organisation à l'origine d'une tradition directrice fondamentale."
  },
  {
    term: "RaycRa Force",
    category: ["D⦾MIN⦿'s"],
    definition: "Puissance militaire en vagabondage.",
    school: "Force militaire itinérante."
  }
];

function initializeCategoryTags() {
  const categoryHierarchy = {
    Théorèmes: [
      "0K",
      "Mapnel",
      "IUVALCY",
      "ARc⟁diA",
      "Aursyl",
      "Lysrua",
      "D⦾MIN⦿'s"],

    Thèses: [
      "Fostrah",
      "UiNo",
      "Uewij",
      "Vydnitt",
      "Xyfurn",
      "Nezrog",
      "Ekeline",
      "Wacwe",
      "Leqwa",
      "Logjēm",
      "Slacpi°",
      "Tôhla",
    ],
    Thèmes: [
      "Monoa-Polyz",
      "Mouet-Pouet",
      "Persona",
      "Phénomène",
      "Phénotype",
      "Supervision",
      "Supernova",
      "Spherµ",
      "Cueillette",
      "Codex",
      "Cipher",
      "Concepteur",
      "Museum",
      "Parc",
      "Citadel",
      "Trinité",
      "Tablette",
      "K0re",
      "Capsule",
    ], // Will be populated with remaining categories
  };

  const allCategories = new Set();
  vocabularyData.forEach((item) => {
    if (Array.isArray(item.category)) {
      item.category.forEach((cat) => allCategories.add(cat));
    } else if (item.category) {
      allCategories.add(item.category);
    }
  });

  const mainCategories = [...categoryHierarchy["Théorèmes"], ...categoryHierarchy["Thèses"]];
  const desiredThemesOrder = [
    "K0re",
    "Monoa-Polyz",
    "Mouet-Pouet",
    "Persona",
    "Phénomène",
    "Phénotype",
    "Supervision",
    "Supernova",
    "Spherµ",
    "Cueillette",
    "Codex",
    "Cipher",
    "Concepteur",
    "Museum",
    "Parc",
    "Citadel",
    "Trinité",
    "Tablette",
    "Capsule",
  ];

  // Find all categories that are not in Théorèmes or Thèses
  const unmentionedThemes = Array.from(allCategories).filter(
    (cat) => !mainCategories.includes(cat) && !desiredThemesOrder.includes(cat),
  );

  // Set the Thèmes order: your explicit order, then the rest
  categoryHierarchy['Thèmes'] = [...desiredThemesOrder, ...unmentionedThemes];

  const tagsContainer = document.getElementById('category-tags');
  tagsContainer.innerHTML = '';

  function getCategoryCount(category) {
    const searchTerm = document.getElementById('vocab-search').value.toLowerCase();
    return vocabularyData.filter((item) => {
      const matchesCategory = Array.isArray(item.category)
        ? item.category.includes(category)
        : item.category === category;
      const matchesSearch =
        searchTerm === '' || (item.term && item.term.toLowerCase().includes(searchTerm));

      const matchesActive =
        activeCategories.size === 0 ||
        (Array.isArray(item.category) &&
          Array.from(activeCategories).every((activeTag) => item.category.includes(activeTag)));
      return matchesCategory && matchesSearch && matchesActive;
    }).length;
  }

  const allTag = document.createElement('span');
  allTag.className = 'category-tag active';
  allTag.textContent = 'Tous';
  allTag.onclick = () => {
    document.querySelectorAll('.category-tag').forEach((tag) => tag.classList.remove('active'));
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

    categories.forEach((category) => {
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
    Object.keys(window.tagElements).forEach((category) => {
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

  vocabularyData.forEach((item) => {
    // Vérifie si TOUTES les catégories actives sont présentes dans l'item
    const itemCats = Array.isArray(item.category) ? item.category : [item.category];
    const matchesCategory =
      activeCategories.size === 0 ||
      Array.from(activeCategories).every((activeTag) => itemCats.includes(activeTag));

    const matchesSearch =
      searchTerm === '' || (item.term && item.term.toLowerCase().includes(searchTerm));

    if (matchesCategory && matchesSearch) {
      const itemElement = document.createElement('div');
      itemElement.className = 'vocabulary-item';

      const title = document.createElement('h3');
      title.textContent = item.term;
      itemElement.appendChild(title);

      const category = document.createElement('div');
      category.className = 'vocabulary-category';

      if (Array.isArray(item.category)) {
        category.innerHTML = item.category
          .map((cat) => {
            return activeCategories.has(cat) ? `<span style="color: #FF2400">${cat}</span>` : cat;
          })
          .join(', ');
      } else {
        category.innerHTML = activeCategories.has(item.category)
          ? `<span style="color: #FF2400">${item.category}</span>`
          : item.category;
      }
      itemElement.appendChild(category);

      if (item.definition) {
        const defP = document.createElement('p');
        defP.textContent = item.definition;
        // Pas de classe detail-item → jamais masqué par les filtres
        itemElement.appendChild(defP);
      }

      const fields = [
        { key: 'school', label: '🎓 ' },
        { key: 'implication', label: '⇒ ' },
        { key: 'simplified', label: '👌 ' },
        { key: 'desc', label: '🖼️ ' },
        { key: 'example', label: '💡 ' },
        { key: 'quote', label: '❝ ❞ ' },
        { key: 'parent', label: '# ' },
        { key: 'etymology', label: 'ⓘ ' },
        { key: 'synonym', label: '≈ ' },
        { key: 'pronunce', label: '🗣 ' },
        { key: 'meme', label: '🗿 ' },
        { key: 'surnatural', label: '🔮 ' },
        { key: 'version', label: '≍ ' },
      ];

      fields.forEach((field) => {
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
  school: true,
  implication: true,
  simplified: true,
  desc: true,
  parent: true,
  etymology: true,
  synonym: true,
  pronunce: true,
  meme: true,
  example: true,
  quote: true,
  surnatural: true,
  version: true,

  update() {
    if (window.activePopovers) {
      window.activePopovers.forEach((popover) => {
        Object.keys(this).forEach((key) => {
          if (typeof this[key] !== 'boolean') return;
          const el = popover.querySelector('[data-detail-type="' + key + '"]');
          if (el) el.style.display = this[key] ? '' : 'none';
        });
      });
    }

    Object.keys(this).forEach((key) => {
      if (typeof this[key] !== 'boolean') return;
      const dictElements = document.querySelectorAll('.detail-item.detail-' + key);
      dictElements.forEach((el) => {
        el.style.display = this[key] ? '' : 'none';
      });
    });
  },

  setAll(value) {
    Object.keys(this).forEach((key) => {
      if (typeof this[key] === 'boolean') this[key] = value;
    });
    this.update();
  },

  set(key, value) {
    if (typeof this[key] === 'boolean') {
      this[key] = value;
      this.update();
    }
  },
};
