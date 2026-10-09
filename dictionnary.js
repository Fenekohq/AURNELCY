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
    category: ["K0re", "Codex"],
    definition: "Entrée du dictionnaire, le concept clé défini, contextualisé et relié.",
    school: "École, régime ou cadre conceptuel qui situe l'entrée dans le système.",
    implication: "Champ indiquant ce que le terme engage, provoque ou mobilise dans le système.",
    simplified: "Résumé rapide et accessible du sens général du terme.",
    description: "Représentation visuelle, symbole ou image mentale associée au terme.",
    etymology: "Origine du mot ou décomposition de ses éléments pour en comprendre la genèse.",
    parent: "Terme plus vaste ou catégorie parente qui structure la relation conceptuelle.",
    synonym: "Mots ou notions proches qui peuvent être utilisées comme variantes.",
    pronunce: "Transcription ou indications de prononciation pour le terme.",
    example: "Illustration concrète ou situation d'usage qui aide à comprendre le terme.",
    quote: "Formule, phrase ou citation qui incarne l'esprit du terme.",
    meme: "Élément comique, phrase drôle ou clin d’œil humoristique lié au terme.",
    surnatural: "Dimension mythologique, étrange ou magique associée au terme.",
    version: "Formes alternatives, flexions et variantes écrites du terme."
  },
  {
    term: "⟁URNELCY",
    category: ["Mapnel", "IUVALCY", "ARc⟁diA", "Aursyl", "Lysrua", "D⦾MIN⦿'s","K0re"],
    definition: "Univers littéraire de Fenekohq.",
    school: "Système littéraire, philosophique et mythologique conçu par Fenekohq.",
    implication: "Référence spirituelle de son créateur, es-tu interessé ?",
    simplified: "Œuvre d'un pauvre fou",
    description: "Fostrah, UiNo, Uewij, Vydnitt, Xyfurn, Nezrog, Ekeline, Wacwe・Leqwa, Logjēm, Slacpi°, Tôhla, Dévore-Novice",
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
    example: "Pas d'auto-promotion, Fenekohq ne veut pas des visiteurs par réputation.",
    quote: "L'origine de Fenekohq vient d'un Fennec du désert qui a conquis le Sahara, d'un Chat du japon devenu une idole kawaii et d'un Coq ayant fui et assasiné tous ceux convoitant sa viande. Leur union au sein du pays aurnelcyen à donné naissance à Fenekohq étant le seul possèdant les chromosomes X Y et Z ce qui marque l'ascension d'une nouvelle race pour faire trembler tout les terriens impliqués dans la destruction de la civilisation.",
    etymology: "Fennec - Neko(Japonais)/Chat - Coq {en théorie}",
    synonym: "Fenek, Feneko, FE猫HQ, フェネコーク",
    pronunce: "/fɛ.nɛ.kɔk/",
    meme: "Fenekohq est le génie, l'élite, le fameux, la référence, le talentueux, la merveille, le puissant mais aussi le minable, la crapule, le pitoyable, la vermine, le misérable, la canaille, l'infâme."
  },
  {
    term: "0K",
    category: ["0K","K0re"],
    definition: "C'est OK pour l'instant.",
    school: "Régime des bases essentielles de la vie en tant qu'être humain.",
    simplified: "J'ai fait de mon mieux",
    description: "Emma",
    example: "Éponge qui s'embouche un coin",
    quote: "C'est la fenêtre de tir, prends ta chance, je vais te photographier!",
    parent: "⟁URNELCY, non-⟁URNELCY",
    etymology: "0 KILL, All Correct, Orl Korrect",
    pronunce: "Français /ɔ.ke/ English /ˌoʊˈkeɪ/",
    version: "OK, Okien, Okiens, Okienne, Okiennes, Zérokien, Zérokiens, Zérokienne, Zérokiennes"
  },
  {
    term: "Mapnel",
    category: ["Mapnel","K0re"],
    definition: "Dialogue entre contraires.",
    school: "Régime fondé sur la tension entre contraires et leur juste articulation.",
    simplified: "Rétention et Relâchement",
    description: "Vydnitt, Xyfurn, Nezrog, Ekeline, Wacwe・Leqwa",
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
    description: "Fostrah, UiNo, Uewij",
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
    description: "Logjēm, Slacpi°, Tôhla",
    example: "Encore une blague de mauvais goût, devinons celle-ci…",
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
    description: "18+",
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
    description: "5 Mapnéliens, 3 Iuvalciens, 3 Arcadiens, 1 Aursylien",
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
    description: "Ø",
    example: "Livre poussiéreux et lugubre dans les bibliothèques interdites",
    quote: "Le démoniaque Fenekohq pari qu'à la fin de l'histoire, vous deviendrez un pauvre fou comme lui.",
    parent: "⟁URNELCY",
    etymology: "Domicile, Domination, Domino, Démon",
    synonym: "DOMINO's",
    pronunce: "Français /dɔ.mi.noz/ English /ˈdɒ.mɪ.noʊz/",
    version: "DOMINO, DOMINO's, D⦾MINI⦿N, DOMINION, DOMINIONS, D⦾MINI⦿NNE, DOMINIONNE, DOMINIONNES"
  },
  {
    term: "Louange",
    category: ["Museum", "Parc"],
    definition: "Chant Mapnélien/Iuvalcien/Arcadien, Champ Aursylien, Chorale Lysruéenne ou Dialecte DOMINION",
    school: "Format d'œuvre brève, mineure et commune.",
    simplified: "Œuvre Mineure",
    description: "「」",
    etymology: "laus(latin) = éloge, blâme, gloire",
    pronunce: "Féminin /lwɑ̃ʒ/ ou /lu.ɑ̃ʒ/",
    version: "Louanges, Chant, Chants, Champ, Champs, Chorale, Chorales, Dialecte, Dialectes"
  },
  {
    term: "Laurier",
    category: ["K0re", "Citadel"],
    definition: "Château Mapnélien/Iuvalcien/Arcadien, Cachot Aursylien, Chapelle Lysruéenne ou Donjon DOMINION",
    school: "Format d'œuvre longue, majeure et rare.",
    simplified: "Œuvre Majeure",
    description: "『』",
    etymology: "laurus(latin) = laurier",
    pronunce: "Masculin /lɔ.ʁje/ ou /lo.ʁje/",
    version: "Lauriers, Château, Châteaux, Cachot, Cachots, Chapelle, Chapelles, Donjon, Donjons"
  },
  {
    term: "Capsule",
    category: ["K0re", "Capsule"],
    definition: "Articulations, Agendas, Hiérarchie ou MATRICES",
    school: "Structure annexe servant à organiser, résumer ou articuler un ensemble.",
    simplified: "Architecture Grammaticale",
    description: "⌂         {0 X}         ⌂",
    etymology: "capsula(latin) = coffret, petite boîte",
    pronunce: "Féminin /kap.syl/",
    version: "Capsules"
  },
  {
    term: "Vie",
    category: ["0K","K0re", "Cipher", "Phénomène", "Concepteur", "Phénotype", "Supervision"],
    definition: "Fait de vivre [etc…]",
    implication: "Toutes les définitions combinées sont insatisfaisantes.",
    simplified: "Trajet entre deux absences(théorique)",
    description: "Eau Complexifiée",
    etymology: "vita(latin)",
    example: "Un organisme animé qui croît, se reproduit et vieilli",
    quote: "L'eau est le principe de toute chose. (Thalès de Milet)",
    synonym: "(Héritage Culturel!!)Émanation, Âme, Esprit, Essence, Énergie, Animation, Réalité, Organisme, Mouvement, Force, Souffle, Ardeur, Santé, Âge, Vitalité, Subsistance, Fécondation, Génération",
    pronunce: "Féminin /vi/"
  },
  {
    term: "Mort",
    category: ["0K","K0re", "Cipher", "Phénomène", "Cueillette", "Spherµ", "Supernova"],
    definition: "Cessation de la vie [etc…]",
    implication: "Toutes les définitions combinées sont insatisfaisantes.",
    simplified: "L'absence qui encadre le trajet(théorique)",
    description: "Inconnu",
    etymology: "mortuus(latin)",
    example: "Un organisme désanimé qui se putréfie, se squelletise et retourne d'où il vient",
    quote: "Mourir sera une terriblement grande aventure. (J.M Barrie - Peter Pan)",
    synonym: "(Héritage Culturel!!)Trépassé, Vide, Terne, Inerte, Fin, Éteint, Crevé, Décès, Dépouille, Dernier, Dormant, Effondré, Enterré, Fade, Extinction, Exécuté, Fossoyé, Insensible, Inhabité, Perte, Silencieux, Repos, Ruine, Trépas, Sommeil, Tué, Torturé",
    pronunce: "Féminin /mɔʁ/"
  },
  {
    term: "Homo Sapien",
    category: ["0K","K0re", "Persona"],
    definition: "Mammifère primate de la famille des hominidés [etc…]",
    implication: "T'as compris ?",
    simplified: "Être Humain",
    example: "Tous les êtres humains actuels sur la planète, quelles que soient leurs origines, appartiennent à une seule et même espèce.",
    quote: "Est-ce que tu crois que ces qualités te sied comme sur des baskets.",
    etymology: "homo sapien(latin scientifique) = être humain intelligent, sage, raisonnable, prudent, savant, qui a du discernement",
    pronunce: "Masculin /o.mo sa.pjɛ̃s/",
    surnatural: "Homo Sapien dispose d'un langage symbolique extrêmement pointu ce qui lui a permis d'édifier ses franchises qui unissent leur groupes dans une vision du monde commune.",
    version: "Homo Sapiens, Homo Sapienne, Homo Sapiennes, Sapien, Sapiens, Sapienne, Sapiennes"
  },
  {
    term: "Je ne sais pas",
    category: ["0K", "Lysrua", "Mouet-Pouet", "Cueillette", "Codex", "Tablette"],
    definition: "Expression pour dire qu'on ignore ou qu'on est incertain d'une chose.",
    school: "Je ne sais pas non plus.",
    implication: "La personne concernée ignore la réponse.",
    simplified: "Je sais pas",
    description: "🤷🤷‍♂️🤷‍♀️",
    example: "Je n'ai pas d'exemple",
    quote: "J'avais vécu de telle façon et j'aurais pu vivre de telle autre. J'avais fait ceci et je n'avais pas fait cela. Je n'avais pas fait telle chose alors que j'avais fait cette autre. Et après ? (Albert Camus - L'Étranger)",
    parent: "Je ne sais pas",
    etymology: "Je ne connais pas l'étymologie",
    synonym: "J'sais pas, Chèpa, jsp",
    pronunce: "/ʒə.sɛ.pa/",
    meme: "Je ne sais pas",
    surnatural: "Je ne sais pas"
  },
  {
    term: "Héros/Héroïne",
    category: ["Mapnel","K0re", "Persona", "Supervision", "Supernova"],
    definition: "Figure célèbre et admirable de combat et d'adversité, on en raconte la fulgurance iconique de sa vie.",
    school: "Une personne réelle ou un personnage principal de fiction qui fait preuve d'un courage, d'une force ou d'un dévouement exceptionnels face au danger ou à l'adversité.",
    implication: "Sera-tu un jour prêt pour une adversité dont tu auras toi-même défini la signification ?",
    simplified: "Mortel sublimé par l'adversité",
    etymology: "ἥρως/hêrôs(grec) = chef de guerre/demi-dieu",
    example: "Celui ou celle qui accomplit la tâche à la valeur de tout un futur bouleversé de manière considérable.",
    quote: "Le héros est celui ou celle qui donne sa vie pour quelque chose de plus grand que lui. (Joseph Campbell)",
    synonym: "Brave, Courageu(x/se), Grand(e) Homme/Femme, Géant(e), Sur(homme/femme), Modèle",
    pronunce: "Masculin /e.ʁo/ Féminin /e.ʁɔ.in/",
    version: "Héros, Héroïne, Héroïnes, Hero, Heroes, Heroine, Heroines, Héroïque, Héroïquement, Héroïsme"
  },
  {
    term: "Pérégrination",
    category: ["Mapnel","K0re", "Cueillette"],
    definition: "Long voyage sinueux en région reculée des habitudes routinières aisées.",
    school: "La pérégrination désigne un voyage long, compliqué ou des déplacements répétés en de nombreux endroits.",
    implication: "Tout ce qui arrive est une étape, rien n'est une erreur définitive.",
    simplified: "Trajet long et errant",
    etymology: "peregrinatio(latin) = voyage lointain",
    example: "Après dix ans de pérégrinations à travers les continents, il est enfin revenu chez lui avec un carnet rempli de souvenirs.",
    quote: "La pérégrination n'attend personne et tout le monde sera laissé porteur de son existence, les affranchies de l'inconnu ont la peau intègre, l'on croisera certains de bonne augure et d'autres de mauvaise, mais ce ne sera qu'une croisée.",
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
    example: "Le monde se grandi, la matière se déploie ; comme nous l'entendons.",
    quote: "Voilà l'être et il devient… il est… il devient… mystère et boule de gomme, que sera et deviendra t-il ma parole ?",
    pronunce: "/mɔ.no.a pɔ.liz/",
    etymology: "μόνος/mónos(grec) = seul/unique/solitaire, πολύς/polús = nombreux/abondant/beaucoup",
    surnatural: "L'être et le devenir étaient, sont et seront, qu'il en soit ainsi.",
    version: "Moa&Poz, M&P, MaPz, 𝙼𝚘𝚗𝚘𝚊-𝙿𝚘𝚕𝚢𝚣"
  },
  {
    term: "Monom/Mono-Mémoire",
    category: ["Mapnel", "Vydnitt", "Nezrog", "Monoa-Polyz", "Persona", "Cueillette"],
    definition: "Éternité Homogène Singulière/Sensation vivante d'expérimenter une manifestation perpétuelle.",
    school: "Pôle de continuité, de rétention et de persistance de l'être.",
    implication: "Une fermeture des coulisses n'achève pas la vie. Monom implique Polyp (Monom&Polyp)",
    simplified: "Être Mouvant",
    example: "Le goût que tu as depuis l'enfance pour quelque chose, il est possible qu'il soit toujours vivant.",
    quote: "Personne n'a à se justifier de ce qu'il est, il n'a pas choisi d'être ni d'avoir quelconque.",
    synonym: "Unité, Unique, Central, Rétention, Enfermement",
    pronunce: "Masculin /mɔ.nɔm/",
    version: "Monom, Mono-Mémoire"
  },
  {
    term: "Polyp/Poly-Projection",
    category: ["Mapnel", "Vydnitt", "Wacwe", "Monoa-Polyz", "Phénotype", "Supernova"],
    definition: "Recommencement Hétérogène Pluriel/Sensation vivante d'expérimenter une actualisation cordiale.",
    school: "Pôle d'ouverture, de renouvellement et de déploiement du devenir.",
    implication: "L'ouverture des erreurs adapte le rythme d'une vie. Polyp implique Monom (Monom&Polyp)",
    simplified: "Devenir Renouvelé",
    example: "Apprendre quelque chose de nouveau et resentir qu'on entre aux portes disponibles vers de nouvelles découvertes.",
    quote: "Avancer sans se perdre, exaucer de ses mains ses désirs ; l'avenir appartient à l'acte.",
    synonym: "Fraction, Multiple, Décentral, Éclattement, Dispersion",
    pronunce: "Féminin /pɔ.lip/",
    version: "Polyp, Poly-Projection"
  },
  {
    term: "&(Terla)",
    category: ["Mapnel", "Vydnitt", "Ekeline", "Monoa-Polyz", "Phénomène", "Supervision"],
    definition: "Reflet fortificateur de la boucle entre Monom et Polyp.",
    school: "Principe de jonction stabilisante entre continuité et renouvellement.",
    implication: "Instructrice régulatrice de la sensation vivante expérientielle.",
    simplified: "PlusPlus",
    description: "Terla est représenté en anneau pendentif.",
    example: "L'amitié en soi et chez les autres a un sens qui transcende les problématiques, ce serait parfait.",
    quote: "Le lien tient sans serrer trop fort ni lâcher la pression des composantes, de quoi trouver le juste milieu.",
    synonym: "Jonction, Stabilité, Composition, Conteneur, Concentration",
    etymologie: "(aurnelcyen)Tellurien Ère Là",
    pronunce: "/tɛʁ.la/",
    version: "Terla"
  },
  {
    term: "Monom&Polyp",
    category: ["Mapnel","K0re", "Vydnitt", "Leqwa", "Monoa-Polyz", "Citadel"],
    definition: "État-Dynamique intemporelle où être et devenir sont entrelacés dans une communion harmonieuse.",
    school: "Équilibre vivant entre persistance et renouvellement.",
    implication: "Ce qui persiste des choses ne freine en rien, nous changerons sans disparaître vraiment.",
    simplified: "Mémoire nourricière permanente & Projection épisodique cyclique ou Laisser Ouvert",
    example: "Nous changeons beaucoup mais nous nous reconnaissons encore au fond de nous.",
    quote: "Grandir et vieillir fait partie des choses, la bataille à son encontre est fugace.",
    pronunce: "/mɔ.nɔm‿e pɔ.lip/, /mɔ.nɔm.tɛʁ.la.pɔ.lip/",
    version: "MTP, Mom&Pop, MM&PP, ℳℴ𝓃ℴ𝓂🙵𝒫ℴ𝓁𝓎𝓅"
  },
  {
    term: "Monop/Mono-Prohibition",
    category: ["Aursyl", "Vydnitt", "Monoa-Polyz", "Persona", "Cueillette"],
    definition: "Éternité Inhibée Figée/Non-réconciliation rugueuse d'afistoler le menu classique des attributions déterminées.",
    school: "Pôle de fixation bloquée et d'inhibition de l'être.",
    implication: "Dépiction survivante d'un échec ultime et de son insolubilité funeste. Monop implique Polym (Monop%Polym)",
    simplified: "Être Surchargé",
    example: "Les habitudes intériorisées ont besoin parfois de se laisser au changement.",
    quote: "S'identifier bien trop fixé à l'avance combiné à des prédictions qui deviennent réalité, s'en est navrant.",
    pronunce: "Masculin /mɔ.nɔp/",
    version: "Monop, Mono-Prohibition"
  },
  {
    term: "Polym/Poly-Malaise",
    category: ["Aursyl", "Vydnitt", "Monoa-Polyz", "Phénotype", "Supernova"],
    definition: "Recommencement Excité Troublé/Non-réajustement raboteux avec la sécession globale.",
    school: "Pôle de dispersion troublée et de renouvellement malade.",
    implication: "Déconstruction survivante de la santé en vue d'opérations autres. Polym implique Monop (Monop%Polym)",
    simplified: "Devenir Perturbé",
    example: "Savoir parfaitement où l'on va, c'est on peut se le permettre sans surprises.",
    quote: "Il semblerait que tout ce que nous avons vécu soit un mensonge, rien ne peut nous sauver.",
    pronunce: "Féminin /pɔ.lim/",
    version: "Polym, Poly-Malaise"
  },
  {
    term: "%(Derla)",
    category: ["Aursyl", "Vydnitt", "Monoa-Polyz", "Phénomène", "Supervision"],
    definition: "Scission Démolisseuse de la sangle entre Monop et Polym.",
    school: "Principe de rupture destructrice entre les deux pôles dégradés.",
    implication: "Obstructrice dispatcheuse atrophiante de la vitalité juvénile.",
    simplified: "MoinsMoins",
    description: "Derla est représenté en boulet de forçat.",
    example: "La confiance est soit trahi, soit absente ; cela ne présage rien de bon.",
    quote: "L'entrelacement s'étouffe et l'élastique se brise, l'ensemble n'est plus pour faire place aux contours rigides.",
    pronunce: "/dɛʁ.la/",
    etymology: "(aurnelcyen)Déchu Ère Là",
    version: "Derla"
  },
  {
    term: "Monop%Polym",
    category: ["Aursyl", "K0re", "Vydnitt", "Monoa-Polyz", "Citadel"],
    definition: "État-Dynamique contractée où être et devenir sont imbriqués dans une déperdition rupturante.",
    school: "Équilibre dégradé où fixation et trouble se nourrissent l'un l'autre.",
    implication: "L'état ne se résout pas d'un simple gage de volonté, ça joue à cache-cache.",
    simplified: "Prohibition affamante saturée % Malaise apathique déclinant ou Prendre au Piège",
    example: "Un vouloir suivi d'un refus, la bombe à retardement à commencé.",
    quote: "Nous avons tout fait et c'est dans mon grand regret que cela ne suffit pas.",
    pronunce: "/mɔ.nɔp‿uʁ pɔ.lim/, /mɔ.nɔp.dɛʁ.la.pɔ.lim/",
    version: "MDP, Mop%Pom, MP%PM, 𝔐𝔬𝔫𝔬𝔭%𝔓𝔬𝔩𝔶𝔪"
  },
  {
    term: "Monstre 0",
    category: ["Mapnel", "Fostrah", "Vydnitt", "Xyfurn", "Persona", "Phénotype"],
    definition: "Créature au trajet de l'entre-deux sujette à la corruption et à la finitude condamnée//graciée à la fertilité.",
    school: "Être vivant exposé à la corruption, à la finitude et à la fertilité.",
    implication: "Empreinte animale au milieu de la naissance et du décès plongée à la fois dans une clarté spécifique et un flou intersidéral.",
    simplified: "Toute créature concernée par la vie et la mort",
    example: "Un enfant qui pleure, un vieux qui dort, un animal qui cherche à manger.",
    quote: "J'étais né, je suis un vivant, un jour ce sera à mon tour et je mourrais mais j'aurai vécu.",
    synonym: "M0nstre, Mont0, Animalia",
    parent: "Vie, Mort",
    etymology: "monstrum(latin) = prodige/avertissement",
    pronunce: "Masculin /mɔ̃stʁə ze.ʁo/",
    surnatural: "Chair répondant au Comment au travers d'une instantanéité définie.",
    version: "Monstres 0, M0nstre, M0nstres, Monstruosité, Monstruosité 0, Monstruosités, Monstruosités 0, Mon0"
  },
  {
    term: "Dévore-Novice",
    category: ["Aursyl", "K0re", "UiNo", "Vydnitt", "Persona", "Concepteur"],
    definition: "Adversaire de la seigneurie planifiant son itinéraire purement stratégique dans des proportions d'ennui globalisé.",
    school: "Figure de domination stratégique qui colonise les consciences.",
    implication: "Annihilateur ontologique de la raison d'être ou la sournoise trafiqueuse de conscience vers l'ébranlement de sa volonté propre dont on ne peut certifier la provenance.",
    simplified: "Colonisateur d'apprentis-novices vers la déflagration de leur consciences",
    description: "Il est décrit comme personnage diurne ayant 2 mains 2 pieds 2 yeux 2 oreilles 1 nez 1 bouche, mais s'est aussi construit une citadelle dans le monde invisible de l'esprit de chacun.",
    example: "Nous avons les mêmes référentiels, vous devriez bien savoir de quoi je parle ?",
    quote: "Il m'a été donné la responsabilité de l'être et le devenir de tout un pays, ma foi les paysans sont chez eux grâce à moi.",
    synonym: "Tyran, Esclavagiste, Despote, Imposteur, Crapule, Aliénatueur, Assassin du Sens, Fumée Noire, Déchu, Marque de Fabrique, Le Grand Ennemi",
    pronunce: "Masculin /de.vɔʁ nɔ.vis/",
    etymology: "devorare(latin) = avaler/engloutir, novicius(latin) = nouveau/récent",
    surnatural: "Putschiste de Dieu déguisé en celui-ci injoncteur du Pourquoi capable de ruiner au moins un millier de personnes de leur soutien servile consenti par la délégation.",
    version: "Dévore-Novicien, Dévore-Novicienne, Dévore-Noviciens, Dévore-Noviciennes"
  },
  {
    term: "Ventriloque",
    category: ["Aursyl", "Fostrah", "Persona", "Supervision"],
    definition: "Bagarreur de fortune d'un manque irascible, sous une expression difforme de la faim au détriment de l'organisme intégral.",
    school: "Relais secondaire dans lequel passe les volontés dévoreuses.",
    implication: "Partisans compétiteurs de l'entendement dévore-novice comme loisir obsessionnel.",
    simplified: "Acteur Rageur déplacée sur la mauvaise piste",
    example: "Individu à la libido entièrement dirigée dans les plaisirs-gaspillages qui n'ont aucun avenir",
    quote: "Je te veux, toi! non pas comme un sujet, mais comme un objet.",
    pronunce: "Masculin /vɑ̃.tʁi.lɔk/",
    etymology: "ventriloquus(latin) venter = ventre, loqui = parler",
    version: "Ventriloquien, Ventriloquiens, Ventriloquienne, Ventriloquiennes"
  },
  {
    term: "Admagcoq",
    category: ["Mapnel", "Xyfurn", "Monoa-Polyz", "Trinité", "Tablette"],
    definition: "Trinité Individuelle (Aventure - Magie - Cuisine)",
    school: "Trinité personnelle structurant le passage de l'individuel vers sa propre composition.",
    implication: "Il est toujours temps d'explorer, de rectifier, et de mijoter.",
    simplified: "Trajet d'un individu qui se construit",
    example: "Nous savons déjà quoi faire en l'absence de toute pensée intrusive.",
    quote: "La vie porte en elle le fruit d'un germe avancé en stratégie de reproduction.",
    description: "Que pensait tu avant de pouvoir penser, et qui était-tu avant ta naissance ?",
    pronunce: "/ad.ma.kɔk/",
    etymology: "adventura(latin) = ce qui doit arriver, μαγεία/mageia(grec) magia(latin)= sorcellerie/enchantement, cocina/coquina(latin) = élaboration des mets/pièce où cuisiner",
    synonym: "AMC"
  },
  {
    term: "Enquête",
    category: ["Mapnel", "Aursyl", "Lysrua", "Xyfurn", "Supervision", "Codex", "Cueillette"],
    definition: "Stimulation interrogative explorative autosuffisante dont l'accoutumance ne rend jamais de marbre.",
    school: "Mouvement d'investigation soutenue qui entretient la pensée.",
    implication: "Nous ne cessons de nous surprendre, c'est pourquoi il faudrait déjà avoir du contexte.",
    simplified: "Curiosité qui ne se fatigue pas",
    example: "La chose n'a pas changé, et pourtant, on l'a vécu différemment.",
    quote: "La question qui reste ouverte vaut mieux que la réponse qui clos toutes les suites possibles.",
    pronunce: "Féminin /ɑ̃.kɛt/",
    etymology: "inquaesita/inquirere(latin) = chercher/rechercher/demander",
    version: "Enquêtes, Enquêter"
  },
  {
    term: "Directions Souveraines",
    category: ["Mapnel", "Xyfurn", "Museum"],
    definition: "Aperçu global du sentiment commun, glissant de son évolution sur des générations de l'errance étrangère à la chère réminiscence.",
    school: "Schéma d'orientations vitales et de positions cardinales.",
    implication: "On ne choisit pas toujours sa direction ; mais on peut reconnaître, en se retournant, que quelque chose nous a guidé.",
    simplified: "Ce vers quoi une vie s'oriente sans le décider entièrement",
    example: "Réaliser après longtemps la ligne qu'on a suivi, l'invisible et le visible sont ensembles effrayants.",
    quote: "L'errance étrangère d'hier est la réminiscence chère de demain.",
    pronunce: "Féminin /di.ʁɛk.sjɔ̃ su.vʁɛn/",
    etymology: "directio(latin) = ligne droite/action de diriger, superanus(latin) = qui est au-dessus/suprême",
    version: "Direction Civilisationnelle"
  },
  {
    term: "Illusion",
    category: ["Mapnel", "IUVALCY", "UiNo", "Xyfurn", "Phénomène", "Phénotype"],
    definition: "Filtre stimulant clos intrapersonnel ouvert à ambiguïté interpersonnel.",
    school: "Une perception ou une idée trompe les sens ou l'esprit et diffère de la réalité objective.",
    implication: "Ample enchaînement de tensions multi-perspectives.",
    simplified: "Censure sensitive qui sélectionne",
    example: "La réalité est hypnotique, entre le sommeil et l'éveil.",
    quote: "Il s'est passé la même chose, mais les souvenirs de chacun sont bien divers.",
    pronunce: "Féminin /i.ly.zjɔ̃/",
    etymology: "illusio(latin) = ironie/tromperie",
    version: "Illusions"
  },
  {
    term: "Atelier Ataraxial",
    category: ["Mapnel", "Xyfurn", "Codex", "Parc"],
    definition: "Accroissement progressif des facultés de tolérance actives vers des vertus passives.",
    school: "Discipline de maîtrise, de calme actif et de pratique structurante.",
    implication: "L'absence de trouble est bien inutile, mais la maîtrise d'un seuil de trouble est intéressant.",
    simplified: "Culture musculaire de paix intérieure",
    example: "Conquérir du muscle non-musculaire qui par sa force fait laisser tomber les autres",
    quote: "Au fur et à mesure que nous progressons, nous ne cessons d'entretenir une relation saine avec un effort équilibré.",
    pronunce: "Masculin /a.tə.lje a.ta.ʁak.sjal/",
    etymology: "astelier(latin) tas de bois, ἀταραξία/ataraxia(grec) = absence de trouble/tranquilité de l'âme",
    version: "Atelier, Ataraxie"
  },
  {
    term: "Fluide Élémentaire",
    category: ["Mapnel", "Xyfurn", "Phénotype", "Cipher"],
    definition: "État second pair évanouissant l'interdit premier impair de la partie analytique vers sa pleine fougue permise ou dommageante.",
    school: "Principe d'action souple, simple et non forcée.",
    implication: "Ce qui touche le bout du doigt est accessible, le doigt lui-même doit être accessible à son usager.",
    simplified: "Mouvement inné s'accomplissant sans intervention clivante",
    example: "À travers une improvisation remarquable, le sujet ne distingue plus ce qu'il fait de ce qui vient.",
    quote: "Notre liberté n'est pas un cadeau, le produit de celle-ci offre le cadeau et sa pleine fougue.",
    pronunce: "Masculin /flɥid e.le.mɑ̃.tɛʁ/",
    etymology: "fluidus(latin) = qui coule, elementum(latin) = élément (terre, eau, air, feu)",
    version: "Fluide Vital"
  },
  {
    term: "Blessure Fossile",
    category: ["Mapnel", "Aursyl", "Xyfurn", "Codex"],
    definition: "Matérialité du tragique balistique, séquelle de fragilisation traumatique.",
    school: "Trace ancienne de souffrance qui continue d'organiser la vie.",
    implication: "Il est important de rester apte à pouvoir capturer sémantiquement cette douleur.",
    simplified: "Détresses périlleuses en représailles",
    example: "Je ne sais pas pourquoi, j'ai si peur de ça ; j'ai sûrement eu de mauvaises expériences pendant mon enfance.",
    quote: "Même lorsque la guérison totale est impossible, on pourra trouver des raisons plus fortes qui nous élèveront.",
    pronunce: "Féminin /blɛ.syʁ fɔ.sil/",
    etymology: "blettiare(gallo-roman) = meurtrir, fossilis(latin) = tiré de la terre/trouvé en creusant",
    version: "Blessures Kamikazes"
  },
  {
    term: "Miroir Clairvoyant",
    category: ["Mapnel", "Xyfurn", "Mouet-Pouet", "Phénomène", "Museum"],
    definition: "Méditation olfactive de sa réalité apparente à un instant donné.",
    school: "Rapport de lucidité réflexive sur soi et sur le monde.",
    implication: "Disposition à l'honnêteté objective et à l'évaluation concise des conséquences a priori.",
    simplified: "Se voir sans se mentir, sans se condamner",
    example: "Prendre conscience de notre situation et savoir freiner et prévenir des accidents",
    quote: "Je souhaite être plus proche avec moi-même, que ce soit par égoïsme ou non.",
    etymology: "mirari(latin) = regarder attentivement/admirer, clarus(latin) = brillant/lumineux/illustre, videre(latin) = percevoir par la vue, être témoin de",
    pronunce: "Masculin /mi.ʁwaʁ klɛʁ.vwa.jɑ̃/"
  },
  {
    term: "Gravité Centrale",
    category: ["Mapnel", "Xyfurn", "Supervision"],
    definition: "Point d'attraction et d'équilibre, pivot des appuis et de la soutenance robuste.",
    school: "Centre de stabilité, de sérieux et d'orientation intérieure.",
    implication: "Sans point d'équilibre interne, chaque perturbation externe devient une chute ; mais les solides, même sécoués ne se renverse pas.",
    simplified: "Tenir debout quand tout bouge",
    example: "Période difficiles mais malgré tout tenues par de bonnes attitudes",
    quote: "Les ingrédients sont servis, vous avez déjà appris comment faire, les bases sont solides.",
    pronunce: "Féminin /ɡʁa.vi.te sɑ̃.tʁal/",
    etymology: "gravitas(latin) = pesanteur/lourdeur/importance/sérieux, centrum = centre/milieu",
    version: "Gravité"
  },
  {
    term: "Nezkelwac",
    category: ["Mapnel", "Nezrog", "Ekeline", "Wacwe", "Monoa-Polyz", "Trinité", "Tablette"],
    definition: "Trinité Collective (Nezrog - Ekeline - Wacwe)",
    school: "Trinité relationnelle structurant le passage de l'individuel au partagé.",
    implication: "Par la différence de mes multiplicités, ensemble nous devenons bien plus bénéficiaires.",
    simplified: "Trajet d'un groupe qui se construit",
    example: "Les périodes de crises rayent les demi-amitiés mais les amitiés authentiques se soutiennent.",
    quote: "Avoir des alliés ne fait pas porter tout le poids du monde sur toi seul.",
    description: "Compatibilité sociale et nourrissante entre groupes",
    synonym: "NKW",
    pronunce: "/nɛz.kɛl.wak/"
  },
  {
    term: "Naustre C",
    category: ["Mapnel", "Uewij", "Nezrog","K0re", "Persona", "Cueillette"],
    definition: "Créature navigatrice consciente et psychiquement relationnelle de son 0 aussi appelée mortel.",
    school: "Stature redoutable encore en construction.",
    implication: "Marcheur de son propre sentier s'écartant du coin de l'action définit par la réprimande répressive.",
    simplified: "Toute créature concernée par l'engagement",
    example: "Celui qui n'a besoin d'aucune injonction pour entretenir sa sanité d'esprit",
    quote: "Naviguer conscient n'est pas savoir où l'on va, c'est savoir pourquoi on avance.",
    surnatural: "Chair répondant au Pourquoi au travers d'une maturation indéfinie.",
    pronunce: "Masculin /nostʁ se/",
    etymology: "naus(grec) = navire, astrum(latin) = constellation/astre ἄστρον/astron(grec) = étoile/corps céleste, conscientia(latin) = savoir avec/connaissance partagée",
    version: "Naustre, Naustrique, Naustriques, Naustral, Naustricitén NauC"
  },
  {
    term: "Palpiter de l'Infini",
    category: ["Mapnel", "Nezrog", "Mouet-Pouet", "Codex"],
    definition: "Battre, disposer l'énergie microcosmique transmutée dans la grandeur macrocosmique.",
    school: "Vibration intérieure orientée vers plus grand que soi.",
    implication: "Acceptation radicale de la totalité, se posant sans surcharge ajoutée les choses appelées à jouer en toute circonstance.",
    simplified: "Se sentir traversé par plus grand que soi sans en être écrasé",
    example: "Contempler les tempêtes du ciel et y voir son humble petitesse",
    quote: "Les imitations sociétales d'un macrocosme artificiel trouvent leur pertinence dans leur compréhension d'architecture.",
    pronunce: "/pal.pi.te də lɛ̃.fi.ni/",
    etymology: "palpitare(latin) = s'agiter/trembler/battre, infinitus(latin) = sans fin/sans limite",
    version: "Palpiter, Palpite, Infini, PIII"
  },
  {
    term: "Semaine Sublime",
    category: ["Mapnel", "Nezrog", "Museum", "Citadel"],
    definition: "Élévation continuelle des formes de richesse parmi 7 paliers d'initiations.",
    school: "Table des grandes postures existentielles.",
    implication: "Chaque palier d'initiation ne remplace pas le précédent, il l'intègre.",
    simplified: "Génitale structuration métaphorique de l'ordre",
    example: "En vérité, la piste est sans début et sans fin.",
    quote: "J'ai plusieurs attributions, et l'on me nomme 7 fois d'affilé.",
    surnatural: "Rythme Circadien Hebdomadaire",
    pronunce: "Féminin /sə.mɛn sy.blim/",
    etymology: "septimana(latin chrétien) = période de sept jours, sublimis(latin) = élevé/haut/suspendu en l'air",
    version: "Semaine, Semaines"
  },
  {
    term: "Hyenuul",
    category: ["Mapnel", "Nezrog", "Phénotype", "Spherµ"],
    definition: "Attache ne pouvant pas se passer de l'envie en vie.",
    school: "Dieu à l'origine du vouloir éparpillé.",
    implication: "La volonté de s'éteindre et de s'ignorer sur un point trouve son argument pour achever de meilleurs choses.",
    simplified: "Hâte Hermétique entre guillemets impure",
    example: "Les récompenses souhaités qui s'éternisent",
    quote: "L'injustifiable vouloir pouvoir se remplit d'un quelque chose.",
    synonym: "Désir, Libido, Sexe, Sens, Transmutation, Contenu, Création, Production, Entreprise, Œuvre",
    parent: "Nihilin",
    etymology: "Hey, Null(anglais) = Hé, Absence",
    pronunce: "/je.nɥl/"
  },
  {
    term: "Macabrisme",
    category: ["Mapnel", "Aursyl", "Ekeline", "Phénomène", "Cueillette"],
    definition: "Odeur épaisse de mort où la fragilité s'expose à coup sûr tôt ou tard.",
    school: "Rapport conscient à la mort et à sa présence symbolique.",
    implication: "Il véhicule des sentiments souvent extrêmement impactants et brutaux.",
    simplified: "La mort comme présence constante qui donne son poids à la vie",
    example: "Sentir l'urgence de dire quelque chose d'important à quelqu'un parce qu'on réalise que personne n'est là pour toujours",
    quote: "Parmi tout les maux, la mort en serait évidemment un prétendant quasi-coupable, mais il se cache bien au-delà des contours pour bien juger.",
    synonym: "Mortalité, Létalité, Alerte, Clouage, Larguage, Démunion, Rendez-Vous",
    etymology: "Macchabée(nom biblique) Macabré(français)",
    pronunce: "Masculin /ma.ka.bʁism/",
    version: "Macabre, Macabres, Macabrismes, Macabriste, Macabristes, Macabrique, Macabriques"
  },
  {
    term: "Gaunie",
    category: ["Mapnel", "Ekeline", "Mouet-Pouet", "Supernova"],
    definition: "Gaieté unie réveilleuse en plénitude médiale, prolongement des angles latéraux en toute finesse.",
    school: "Élan de gaieté unifiée et de finesse relationnelle.",
    implication: "Une joie structurée à l'intérieur d'une spirale organisée est un but en soi.",
    simplified: "Joie active qui incorpore",
    example: "Le rire, la détente, la clarté, la reconnaissance dans un même temps.",
    quote: "La gaieté qui ne repose que sur une instance n'est qu'un sursis.",
    description: "4 Types d'instances: Reptilien, Sifflet, ARvers-Xoi, Innokcien",
    synonym: "Bouquet Gaunique, Instances Gauniques",
    etymology: "La Gaunie [4-3 Instances] ⟷ L'Agonie [2-1 Instance(s)], agônia(grec) = lutte/combat",
    pronunce: "Féminin /ɡo.ni/",
    surnatural: "Jauge de concentration unitaire à 100-1000 instances",
    version: "Gaunico, Gaunique"
  },
  {
    term: "Florescence",
    category: ["Mapnel", "Ekeline", "Phénotype", "Supervision", "Cueillette"],
    definition: "Alliance protéiforme de toutes les instances sous leur rôles adéquat.",
    school: "Déploiement des figures psychiques et symboliques en croissance.",
    implication: "Guérison des correspondants bossus désamorçant le célibat cellulaire versatile.",
    simplified: "Quand toutes les parties de soi jouent leur rôle en même temps",
    example: "Tu écoutes vraiment, tu parles juste, tu ressens sans déborder, et tu penses clairement.",
    quote: "L'alliance de toutes les instances s'impose à nous plus qu'elle/on l'impose par une disposition incalculable.",
    etymology: "florescere(latin) = commencer à fleurir/s'épanouir",
    pronunce: "Féminin /flɔ.ʁe.sɑ̃s/",
    version: "Fleurissant"
  },
  {
    term: "Innokcien",
    category: ["Mapnel", "Ekeline","K0re", "Persona", "Codex", "Concepteur"],
    definition: "Dispossédé médiateur reptilien rapetissant les inadvertances par la magnificence de sa trempe.",
    school: "Figure d'innocence dense, équilibrée et habitée.",
    implication: "Ce n'est pas l'absence de conscience qui rend l'innokcien innocent, c'est la présence d'une sagacité qui dépasse le jugement partiel.",
    simplified: "Instance témoin à la sagacité holistique des ensembles",
    description: "La figure innokcienne n'est ni masculine ni féminine.",
    example: "Un conflit émerge, deux supposés vérité s'entre-choquent, mais l'instance maîtresse fait basculer les deux pôles dans un niveau supérieur.",
    quote: "L'innokcien ne possède personne et personne ne peut posséder l'innokcien.",
    etymology: "Innocence innocentia(latin) = innocuité/mœurs irréprochables",
    pronunce: "/i.nɔk.sjɛ̃/",
    version: "Innokciens, Innokcienne, Innokciennes"
  },
  {
    term: "EntroPied",
    category: ["Mapnel", "Aursyl", "Wacwe", "Phénomène"],
    definition: "Matérialité du divorce cinétique, tension d'extinction cataclysmique stimulant sa propre réalisation vers une chute prémonitoire.",
    school: "L'entropie est une grandeur physique et mathématique qui mesure le degré de désordre ou de dispersion de l'énergie au sein d'un système.",
    implication: "La dispersion des unités peut affaiblir la vie et être fatalement le principe qui met en difficulté existentiel.",
    simplified: "Désorganisation d'incertitude certaine plus ou moins prédictible",
    example: "Résoudre des problèmes crée une couche avancé de problèmes beaucoup plus nombreux.",
    quote: "La chute prémonitoire n'arrive pas, elle s'annonce depuis le début.",
    etymology: "entropie ἐντροπή (entropê(grec) = action de se retourner/action de se tourner vers - pied pĕdem/pēs(latin) = pied",
    pronunce: "/ɑ̃.tʁɔ.pje/",
    version: "Entropie, Entropique"
  },
  {
    term: "Filet",
    category: ["Mapnel", "Wacwe", "Supervision", "Codex", "Cipher"],
    definition: "Pertinence exemplaire dont l'admiration foudroie de respect et de tenue civilisatrice.",
    school: "Art de capturer sans blesser ce qui menace de passer entre les mailles.",
    implication: "Dextérité interceptrice des forces de discorde et d'affaiblissement.",
    simplified: "Ce qui intercepte sans détruire",
    example: "Là où tu risquais de prendre une mauvaise décision, l'ami pose la bonne question.",
    quote: "L'admiration plus que de fonctionner garde un mérite contrairement à la réprimande qui aurait échoué.",
    etymology: "filum(latin) = fil",
    synonym: "Cloche, Cerceau, Poche, Hameçon, Échet",
    pronunce: "Masculin /fi.lɛ/",
    version: "Filets, Filature"
  },
  {
    term: "Picol-Kentron",
    category: ["Mapnel","K0re", "Wacwe", "Cueillette", "Tablette", "Museum", "Parc", "Citadel"],
    definition: "Schéma de multiplicité des rôles, fonctions interprétées par cercles s'empilant par objectifs •RGB•BNG•",
    school: "Schéma des rôles et des hiérarchies symboliques par couleurs.",
    implication: "Chaque couleur poursuit un rapport étroit avec l'intégralité fonctionnelle et fondamentale.",
    simplified: "Carte des rôles d'une société organisée par couleurs et fonctions",
    example: "La société se hiérarchise par les compétences de chacun dans des domaines responsables.",
    quote: "Tout se décide entre la relation du rouge et du gris.",
    etymology: "Pi = cercle circulaire, Col = color/couleur, κέντρον/Kentron = aiguillon/pointe",
    pronunce: "Masculin /pi.kɔl kɑ̃.tʁɔ̃/",
    version: "Kentronien, Kentroniens, Kentronienne, Kentroniennes"
  },
  {
    term: "Chromel",
    category: ["Mapnel", "Wacwe", "Phénotype", "Supernova", "Codex"],
    definition: "Purification décisive des marqueurs traumatiques à la page tournante.",
    school: "Processus de purification chromatique où la couleur du traumatisme se transmute en teinte nouvelle.",
    implication: "Reprise des déjà-vus sur une phase supérieure de configuration.",
    simplified: "Tourner la page en emportant la leçon et sa résolution",
    example: "Oublier ses fixations passées pour créer quelque chose de nouveau",
    quote: "J'aurais bien envie de me changer les idées pour une fois.",
    description: "Se serait le meilleur drapeau, forme authentique et hypothétique.",
    pronunce: "/kʁɔ.mɛl/",
    etymology: "χρῶμα/chróma(grec) = couleur/carnation",
    surnatural: "Supporte fardeaux",
    version: "Chroméliste, Chromélisme"
  },
  {
    term: "Fon:Rel:Inc",
    category: ["Mapnel", "Vydnitt", "Monoa-Polyz", "Spherµ", "Codex", "Trinité", "Tablette"],
    definition: "Trinité Clinique (Fondations - Relativité - Inclinaisons)",
    school: "Triptyque Littéral Concret des fondations, de la relativité et des inclinaisons.",
    implication: "Lire une situation par ses seules Fondations la fige. Lire par ses seules Inclinaisons la fragmente. La Relativité est ce qui les rend simultanément lisibles.",
    simplified: "Ce qui tient, ce qui bouge, ce qui pousse",
    description: "Rythme Minceur",
    example: "Ce qui a toujours été vrai : Vers où chacun tire : Pourquoi ce moment précis est différent des autres.",
    quote: "Les fondations fondent les inclinaisons et les inclinaisons inclinent les fondations, c'est relatif.",
    pronunce: "/fɔ.nə.ʁɛ.lɛ̃k/",
    version: "F:R:I"
  },
  {
    term: "Fondations",
    category: ["Mapnel", "Vydnitt", "Persona", "Museum"],
    definition: "Solides associés à [Monoa].",
    school: "Bases stables sur lesquelles une structure peut tenir.",
    implication: "Mosaïque d'amplitude vécue répondant par [Polyz].",
    simplified: "Ce qui est stable",
    description: "Z-A",
    quote: "Ce qui est fondé a une raison d'exister.",
    pronunce: "Féminin /fɔ̃.da.sjɔ̃/",
    etymology: "fundus(latin) = le fond/la base/le fondement",
    version: "Fondation, Fondateur, Fondateurs, Fondatrice, Fondatrices,Fonder"
  },
  {
    term: "Inclinaisons",
    category: ["Mapnel", "Vydnitt", "Supervision", "Parc"],
    definition: "Espaces associés à [Polyz].",
    school: "Tendances internes qui orientent les choix et les comportements.",
    implication: "Palette d'actions concevables traduites par [Monoa].",
    simplified: "Ce qui se déploie",
    description: "A-Z",
    quote: "Ce qui se déploie n'attend pas la permission.",
    etymology: "inclinare(latin) = pencher vers",
    pronunce: "Féminin /ɛ̃.kli.nɛ.zɔ̃/",
    version: "Inclinaison, Inclination, Inclinations, Incliner"
  },
  {
    term: "Relativité",
    category: ["Mapnel", "Vydnitt", "Phénotype", "Mouet-Pouet", "Citadel"],
    definition: "Marge de relief associé à [Variable -].",
    school: "Variation des points de vue, des rapports et des mesures selon le contexte.",
    implication: "Fluctuation accouchée des continuités inexorables [Monoa-Polyz].",
    simplified: "Ce qui fluctue entre les deux",
    description: "AZ-ZA",
    quote: "La marge de relief n'est pas une erreur, c'est la mesure elle-même.",
    etymology: "relativus(latin) = qui a rapport à",
    pronunce: "Féminin /ʁə.la.ti.vi.te/",
    version: "Relativités"
  },
  {
    term: "Scé;Syn;Cel",
    category: ["Mapnel", "Fostrah", "UiNo", "Uewij", "Monoa-Polyz", "Spherµ", "Codex", "Trinité", "Tablette"],
    definition: "Trinité Empirique (Scénario - Syndrome - Cellules)",
    school: "Triptyque Numéral Abstrait du scénario, du syndrome et des cellules.",
    implication: "Un Scénario sans Syndrome reste latent. Un Syndrome sans Scénario est incompréhensible. Les Cellules sont la preuve que les deux ont eu lieu.",
    simplified: "Ce qui structure, ce qui déclenche, ce qui résulte",
    description: "Symétrie Pinceuse",
    example: "Le script ; L'intrigue ; La résolution après tension",
    quote: "Le scénariste scénarise les celluliers qui eux cellulisent le scénariste, c'est symptômatique.",
    pronunce: "/se sɛ̃ sɛl/",
    version: "S;S;C"
  },
  {
    term: "Scénario",
    category: ["Mapnel", "Fostrah", "Cueillette", "Museum"],
    definition: "Affaires associés à [Monoa].",
    school: "Cadre narratif ou situation-type qui organise une suite d’actions.",
    implication: "Plateau de terrain étendue prolongé par [Polyz].",
    simplified: "La structure de fond",
    description: "9-1",
    quote: "Le plateau existe avant que quiconque commence à jouer.",
    etymology: "scena(latin) = la scène",
    pronunce: "Masculin /se.na.ʁjo/",
    version: "Scénarios, Scénariste, Scénaristes, Scénariser"
  },
  {
    term: "Cellules",
    category: ["Mapnel", "Uewij", "Cipher", "Parc"],
    definition: "Chaînes associés à [Polyz].",
    school: "Unités élémentaires d’organisation, de reproduction ou de propagation.",
    implication: "Carreaux de dalles pratiquables portés par [Monoa].",
    simplified: "Les résultats concrets",
    description: "1-9",
    quote: "Une dalle posée en appelle une autre jusqu'à ce que le sol soit praticable.",
    etymology: "cellula(latin) = petite chambre",
    pronunce: "Féminin /sɛ.lyl/",
    version: "Cellule, Cellulier, Celluliers, Cellulaire, Cellulaires"
  },
  {
    term: "Syndrome",
    category: ["Mapnel", "UiNo", "Phénomène", "Mouet-Pouet", "Citadel"],
    definition: "Intervalle de mesure associé à [Variable -].",
    school: "Ensemble de traits récurrents qui apparaissent ensemble.",
    implication: "Morceau arrangé des chroniques implacables [Monoa-Polyz].",
    simplified: "L'évènement qui l'active",
    description: "00-10",
    quote: "L'arrangement du présent est avant tout et après tout.",
    etymology: "συνδρομή/sundromê(grec) = réunion/concours/action de se réunir",
    pronunce: "Masculin /sɛ̃.dʁom/",
    version: "Syndromes, Syndromatique, Syndromatiques"
  },
  {
    term: "Équation d'Efficacité Inanitoire",
    category: ["Aursyl", "Fostrah", "Codex", "Cipher", "Museum"],
    definition: "Calcul scripté pour résulter une détermination à la servitude sous les leviers du contrôle des richesses et la falsification identitaire.",
    school: "Logique d'efficacité qui vide les êtres de leur substance.",
    implication: "La stratégie de générer de la servitude volontaire est vicieuse.",
    simplified: "Calcul qui transforme un être en outil",
    example: "Les quêtes qui vous sont attribuées sont d'une rigolade inutile.",
    quote: "Le parrain peut vider les poches et ruiner qui il veut car tout fonctionne selon ses désirs.",
    etymology: "aequatio(latin) = égalisation/nivellement, efficacitas(latin) = force/vertu/puissance d'agir, inanitio(latin) = action de vider/état de vide",
    pronunce: "Féminin /e.kwa.sjɔ̃ d‿e.fi.ka.si.te i.na.ni.twaʁ/",
    version: "EEI, Science Inanitoire, Bricole du 0, Bricolage du 0, Inanité Religieuse, Équation Fragmentaire"
  },
  {
    term: "Flingue",
    category: ["Aursyl", "UiNo", "Supernova", "Citadel"],
    definition: "Arme neutralisatrice d'emprise comportementale et psychologique, menace mutilatoire liquidatrice d'intrus en cadavres muets.",
    school: "Mécanisme de soumission obligatoire à une autorité.",
    implication: "L'objet a simplement besoin d'être visible, il n'est pas souvent utilisé.",
    simplified: "Jouet qui neutralise pour la soumettre",
    example: "Tu vas comprendre parce que j'ai quelque chose en main.",
    quote: "Ne vous en faites pas, nous maîtrisons la situation.",
    etymology: "flingot(abréviation) = fusil/arme de poing",
    synonym: "Revolver, Fusil, Calibre, Troueur, Railgun, Perforant",
    pronunce: "Masculin /flɛ̃ɡ/",
    version: "Flingues, Flingueur, Flingueurs, Flingueuse, Flingueuses, Flinguer"
  },
  {
    term: "Trompette",
    category: ["Aursyl", "Uewij", "Mouet-Pouet", "Supervision", "Parc"],
    definition: "Arme jugulatrice d'emprise attentionnelle et épistémologique, menace exilatoire plaqueuse de volontés en valises malléables.",
    school: "Signal de propagande, de spectacle ou d'alarme manipulée.",
    implication: "Ce qui est entendu par autrui est sélectionné pour se propager viralement.",
    simplified: "Jouet qui capte l'attention pour la détourner",
    example: "Les informations des journaux mettent en tête leur propres intêrets, des choses plus importantes passent inaperçu.",
    quote: "Les promotions promettent des promesses professionnellement provoquantes.",
    etymology: "trompe, tromper = jouer de la trompe",
    synonym: "Turbine, Klaxon, Sonnerie, Couvre-Feu, Intimidateur, Convocation",
    pronunce: "Féminin /tʁɔ̃.pɛt/",
    version: "Trompettes, Se Tromper, Tromper, Trompeur, Trompeurs, Trompeuse, Trompeuses"
  },
  {
    term: "Mélodie Inépelable",
    category: ["Mapnel", "Nezrog", "Ekeline", "Wacwe", "Mouet-Pouet", "Cipher"],
    definition: "Composition arrangée sans commandement en cohésion organique souple.",
    school: "Pièce sur la difficulté de dire justement le réel.",
    implication: "Ce qui s'arrange seul résiste à toute tentative de le commander.",
    simplified: "Harmonie sans chef d'orchestre",
    example: "Les conversations fructueuses et intéressantes n'ont aucun besoin d'un policier",
    quote: "Ce qui ne se dit pas justement se chante gracieusement.",
    etymology: "μελῳδία/melôidía(grec) = chant, spellon(germain) = raconter/dire/expliquer",
    pronunce: "Féminin /me.lɔ.di i.ne.pə.labl/",
    version: "Méline"
  },
  {
    term: "Sfivoq",
    category: ["Mapnel","K0re", "Leqwa", "Persona"],
    definition: "Dauphin bouillonant d'exaltation, symbolique de l'initiation vitale de déferlantes affirmations cordiales.",
    implication: "Là où le Sfivoq apparaît, une affirmation cordiale est sur le point de franchir un seuil irréversible.",
    simplified: "Compagnon d'élan vital",
    example: "Un tel caractère n'a rien à faire en terre déchue.",
    quote: "L'acte précurseur sonnera et tout les champs seront de nouveau d'une propreté impeccable.",
    etymology: "σφυριγῶ/sphurigô(grec) = être plein de sève/bouilloner d'énergie, vif/aviver = rendre vivant/initier à la lumière, oc(celte) = oui",
    description: "Larmes de Vitalité, 4 Évents Lévitation, Corne en Fusion, 100 Nageoires, 3 Yeux Néons RGB, Peau Grise, Taille de 9 Mètres",
    pronunce: "/sfi.vɔk/",
    synonym: "Daufin",
    version: "𝒮𝒻𝒾𝓋ℴ𝓆"
  },
  {
    term: "Duel Xceptionnel",
    category: ["Mapnel","K0re", "Aursyl", "Leqwa", "Supervision", "Supernova"],
    definition: "Controverse du statu quo, de son décalcage standardisé et de son arsenal pour le maintenir.",
    school: "Confrontation exemplaire entre deux grandeurs ou deux légitimités.",
    implication: "Culmination du déchaînement ravageur pour finalité la délivrance du dévore-novice et de sa machination.",
    simplified: "Complétude Nezkelwac et Admagcoq misent en synthèse dans la table des jeux",
    example: "Le moment où refuser de combattre reviendrait à se trahir soi-même.",
    quote: "Le talent aura pour une fois son utilité dans un sens cardinal, il est temps pour toi maintenant de t'accomplir comme il se doit.",
    etymology: "duellum(latin) = combat d'homme à homme, exceptio(latin) = action d'excepter/réserve/objection",
    pronunce: "Masculin /dɥɛl ɛk.sɛp.sjɔ.nɛl/",
    synonym: "Duel ⚔️ceptionnel"
  },
  {
    term: "MonPol",
    category: ["Mapnel", "Lysrua", "K0re", "Leqwa", "Monoa-Polyz", "Phénotype", "Spherµ", "Cueillette"],
    definition: "Titre honorifique envers l'être et son devenir ou le mémojectile quoi qu'il en soit.",
    implication: "Le ravissement envers l'existence et de sa sauvegarde s'impose à moi. MonPol implique Monom&Polyp et Monop%Polym.",
    simplified: "Dédicace Exaltée",
    example: "Un éloge précieux qui n'est faite ni à la légère ni à la lourde",
    quote: "Comme être et comme devenir, comme liberté pure ; une rivière illimité.",
    etymology: "Monom&Polyp, Monop%Polym(aurnelcyen) = MonPol",
    parent: "Monoa-Polyz",
    pronunce: "/mɔn pɔl/"
  },
  {
    term: "Crithekiel",
    category: ["IUVALCY", "UiNo", "Persona", "Concepteur", "Citadel"],
    definition: "Metteur en scène du manège de l'échec dialectique de la dialectique.",
    school: "Forme consciente et statique de la critique conceptuelle.",
    implication: "La création s'embouche un coin, souffle l'effondrement d'une complétude-incomplète.",
    simplified: "Dénomination artificielle Consciente",
    example: "Nommer ce qu'on ressent pour avoir quelque chose à tenir, en sachant que le mot ne couvre pas tout ce qui se passe",
    quote: "Cette divinité chimérique existe vraiment, je te le jure!",
    etymology: "Critère:Théologie｜Critique:Théorie｜Que Dieu le fortifie [Ui Appellation Statique]",
    meme: "Crithekiel s'en charge!",
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
    example: "Sentir qu'un mot qu'on n'a pas encore trouvé existe quelque part, et construire autour de son absence",
    quote: "Les pouvoirs éventuels ne se prouvent en aucun cas, il s'approchent à la vitesse de la lumière.",
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
    example: "Pousser une idée jusqu'à ce qu'elle se retourne contre elle-même et révèle son propre piège, puis la laisser se dissoudre",
    quote: "Le cul-de-sac n'est pas un échec inéluctable, c'est l'aboutissement naturel d'une pensée honnête.",
    etymology: "Critère:Théologie｜Critique:Théorie｜Que Dieu le fortifie [No Évocation Dynamique]",
    pronunce: "/kʁi.tə.kjɛl/",
    synonym: "Crithequ"
  },
  {
    term: "Goalois(e)",
    category: ["IUVALCY", "Fostrah", "Persona", "Phénomène"],
    definition: "Solution miscible-immiscible plongée dans le circuit du sens.",
    implication: "La solution reste elle-même tout en s'intégrant, ni rejet, ni fusion totale.",
    simplified: "Celui qui circule dans le sens sans s'y dissoudre",
    example: "Quelqu'un qui comprend parfaitement les règles d'un système sans en être captif",
    quote: "Il est l'heure du grand plongeon, soyez prêt sinon vous vous noyerez.",
    etymology: "Gaulois-Goal (Polyphonie français-anglais)",
    pronunce: "Masculin&Féminin /ɡɔ.a.lwa(z)/",
    version: "Goalois, Goaloise, Goaloises"
  },
  {
    term: "Crethole",
    category: ["IUVALCY", "Tôhla", "Trinité", "Spherµ", "Codex"],
    definition: "Le monde comme école prise par les moins entravés.",
    implication: "Déjouer la tyrannie du sens ensemble, c'est compris ?",
    simplified: "Divination idiote",
    example: "Un groupe qui apprend quelque chose ensemble non par obligation mais parce que personne n'a décidé de ne pas apprendre",
    quote: "Le loisir consacré à l'étude n'appartient qu'à ceux qui ne sont pas entravés par l'urgence d'avoir raison.",
    etymology: "σχολή/skholê(grec) = le loisir/le temps libre, schola(latin) = loisir consacré à l'étude",
    pronunce: "Féminin /kʁe.tɔl/",
    synonym: "Critheco"
  },
  {
    term: "INTIMACY",
    category: ["IUVALCY", "Uewij", "Phénomène", "Supernova", "Trinité", "Tablette"],
    definition: "Trinité Viscérale [⦻] {0} (∞) ou <Ж> ; Proximité sensorielle sous dégradé exponentiel, sous un rayon complémentaire de la libido au plaisir centrifuge.",
    school: "Régime de proximité sensorielle, psychique et relationnelle.",
    implication: "Supporter collaborateur de l'entendement novice comme amusement dégagé.",
    simplified: "Rang dépassant la hiérarchie rigide",
    example: "Des encouragements pour atteindre un but difficile",
    quote: "Ceux qui nous hissent plus haut ne sont autres que ceux qui ne s'en foutent pas de nous mais le coaching n'est pas de tout repos.",
    pronunce: "/ɛ̃.ti.ma.si/",
    etymology: "intimité(français)/intimus(latin) = le plus au-dedans/le plus intérieur/le plus profond",
    synonym: "For Intérieur"
  },
  {
    term: "XaraЖereX",
    category: ["IUVALCY", "UiNo", "Uewij", "Mouet-Pouet", "Spherµ"],
    definition: "@ttributs tout aussi bien absolus et relatifs comprisent dans une pille de données interminable.",
    simplified: "Danse confuse ambivalente en cadre et légitimité",
    implication: "Impossible d'isoler un attribut absolu sans qu'un relatif le conteste, la pile est infinie précisément parce qu'aucun niveau ne se suffit.",
    example: "Tenter de définir quelqu'un complètement et réaliser que chaque trait vrai en appelle un autre contradictoire également vrai",
    quote: "La danse ne cherche non pas à se stabiliser, elle cherche la danse elle-même.",
    etymology: "(aurnelcyen) liberté graphico-phonético-sémantique",
    pronunce: "/sa.ʁak.ste.ʁiz/",
    synonym: "SaraXteriZ"
  },
  {
    term: "Déjà-Vu",
    category: ["IUVALCY", "Leqwa", "Mouet-Pouet", "Phénomène"],
    definition: "Sentiment d'expérience/expérimental/d'expertise du vécu.",
    implication: "Le vécu a déjà structuré la perception avant que l'événement arrive.",
    simplified: "Superposition Analogue",
    example: "Entrer dans une pièce pour la première fois et savoir exactement où est la sortie",
    quote: "Le maintenant perçu à plusieurs reprises n'est jamais le même maintenant, il sont tous uniques et différents.",
    etymology: "jam(latin) = maintenant/déjà, vidēre(latin) = percevoir par la vue.être témoin de",
    pronunce: "Masculin /de.ʒa vy/"
  },
  {
    term: "Critherçation",
    category: ["IUVALCY", "UiNo", "Slacpi°", "Mouet-Pouet", "Phénotype", "Cipher"],
    definition: "Inconnu complétable-incomplétable comme bon semble, epuis le rationnel et l'irrationnel, kinésie gymnastique à partir d'incantations, celles dissécatoires de la dissection indissectionnable.",
    school: "Exercice de pensée qui travaille les limites du langage et des catégories.",
    implication: "Rien ne veut rien dire, le langage sied cette pipelette à merveille, une vrai tête à claque amuseuse de galerie.",
    simplified: "Discours sans dessus dessous",
    example: "Mot à deviner indiqué par {Ç@} ou {Çaro}",
    etymology: "conversatio(latin) = fréquentation/commerce/intimité",
    quote: "Ma parole, ce que tu dis la est très bien pensé, j'y prends note tout de suite!",
    pronunce: "/kʁi.tɛʁ.sa.sjɔ̃/ /kʁi.tɛʁ.se/",
    version: "Critherçations, Critherçement, Critherçer, Ç@"
  },
  {
    term: "Travail",
    category: ["Aursyl", "K0re", "Fostrah", "Codex"],
    definition: "Collecteur $¥€₿ [Monop%Polym] abusant la culture (Profit - Extraction - Monopole - Accumulation).",
    school: "Régime d'effort, de contrainte et de tenue nécessaire.",
    implication: "Ce qui doit formellement être fait pour l'âme collective à ce qu'on dit.",
    simplified: "Tic au devoir avec ravoir, ce qu'on fait sous contrainte.",
    example: "Faire quelque chose qu'on n'aurait jamais choisi sans la contrainte économique, et devoir convaincre qu'on y met du cœur",
    quote: "L'âme collective exige formellement ce que l'âme individuelle ne demandait pas.",
    etymology: "origine inconnu/hypothétique",
    synonym: "Emploi, Métier, Profession, Occupation, Poste, Boulot, Job, Turbin, Taf, Labeur, Besogne, Ouvrage, Tâche, Corvée",
    pronunce: "Masculin /tʁa.vaj/",
    description: "Représenté par l'enfant."
  },
  {
    term: "Veldiac",
    category: ["Mapnel", "K0re", "IUVALCY", "Uewij", "Codex"],
    definition: "Voilier 1234 traversant la culture (1 - 2 - 3 - 4).",
    school: "Mode d'activité et de vie qui rend l'existence habitable, respirable et culturellement féconde.",
    implication: "Ce qui doit informellement devenir oublié pour la psyché individuelle à ce qu'on dit.",
    simplified: "Silence au devoir sans savoir, ce qu'on fait pour nourrir.",
    description: "Représenté par l'adulte.",
    example: "Passer des heures sur quelque chose sans voir le temps passer, non pas par discipline mais par nécessité intérieure.",
    synonym: "Habitation, Toit, Ouverture, Vivabilité culturelle, Éco-humanisme",
    quote: "Nous avons confiance en ce en quoi nous sommes fait, chacun fait sa part dans l'ordre des choses et elle n'est pas du marché.",
    etymology: "veld(néerlandais) = terre habitable/espace ouvert, actus(latin) = action/création ἀκός/akos(grec) = remède/soin",
    pronunce: "Masculin /vɛl.djak/",
    version: "Veldiaçien, Veldiaçiens, Veldiaçienne, Veldiaçiennes, Veldique, Veldiques"
  },
  {
    term: "Veldiac Jtie",
    category: ["Mapnel", "Fostrah", "Phénotype", "Supervision"],
    definition: "Voilier !:?# [Monom&Polyp] épanouissant la culture (Impulsion - Transmission - Questionnement - Action).",
    school: "Version mapnélienne du veldiac, portée par l'impulsion, la transmission, le questionnement et l'action.",
    implication: "Soit comme il se doit, à ta nature d'espèce 'X' en marche.",
    simplified: "S'investir à fond, on se demande même pourquoi",
    example: "Enseigner quelque chose qu'on aime à quelqu'un qui ne demandait pas",
    quote: "L'espèce en marche n'attend pas qu'on lui explique pourquoi marcher.",
    etymology: "veldiac(aurnelcyen), je/ego(latin)/moi, tu/tū(latin)/toi, il/ille(latin)/celui-là/cela, elle/illa(latin)/celle-là",
    pronunce: "/vɛl.djak ʒti/",
    synonym: "Veldiac Mapnélien, Jtie"
  },
  {
    term: "Veldiac AL",
    category: ["IUVALCY", "Uewij", "Phénomène", "Supernova"],
    definition: "Voilier 0@O⏲ [Critheçiel] épanouissant la culture (Éther - Association - Manifestation - Horloge).",
    school: "Version iuvalcienne du veldiac, portée par l'association, la manifestation et le rythme intérieur.",
    implication: "Mélanges comme il se doit, à ton machin d'espèce '0' en aise.",
    simplified: "Se profiler à bord, on s'accorde même incompatible.",
    example: "Des idées opposées peuvent vivrent dans le même monde dans une éco-réalité.",
    quote: "Le rythme intérieur ne cherche pas l'accord, il trouve l'aise dans l'écart.",
    etymology: "veldiac(aurnelcyen), chaise/cathedra(latin) = siège à dossier/trône",
    pronunce: "/vɛl.djak al/",
    synonym: "Veldiac Iuvalcien, AL"
  },
  {
    term: "Veldiac AJtieL",
    category: ["Mapnel", "IUVALCY", "UiNo", "Cueillette"],
    definition: "Voilier [Monom&Polyp]~=~[Critheçiel] réalisant la culture.",
    school: "Forme mixte du veldiac reliant les pôles mapnélien et iuvalcien.",
    implication: "Soit et mélanges comme il se doit, à ta juste mesure.",
    simplified: "Vivre cette vie, nous la vivons parfaitement",
    example: "Vivre une journée où tout ce qu'on fait semble à la fois choisi et inévitable",
    quote: "La juste mesure n'est pas un compromis, c'est le point où l'un et l'autre se réalisent ensemble.",
    etymology: "veldiac(aurnelcyen), je/ego(latin)/moi, tu/tū(latin)/toi, il/ille(latin)/celui-là/cela, elle/illa(latin)/celle-là, Chaise/cathedra(latin) = siège à dossier/trône",
    pronunce: "/vɛl.djak aʒ.tjɛl/",
    synonym: "Veldiac Mapnélo-Iuvalcien, AJtieL",
    version: "AJtieL"
  },
  {
    term: "Ganie",
    category: ["IUVALCY", "Uewij", "Supernova", "Cueillette"],
    definition: "Hors-ganisme alias aux couches plus lointaines que l'organologie actuelle.",
    school: "Dimension extra-organique ou plus lointaine que l'organisation ordinaire du vivant.",
    implication: "Là où l'organologie s'arrête, la Ganie commence comme couche simplement plus lointaine.",
    simplified: "Ce qui dépasse l'organisation ordinaire du vivant",
    example: "Un pressentiment qui précède toute pensée formulable, ni instinct, ni raison, quelque chose de plus éloigné encore",
    quote: "L'instrument ne joue pas seul, mais parfois quelque chose joue à travers lui.",
    etymology: "organe(français)/organum(latin)/ὄργανον/organon(grec) = outil/instrument/instrument de musique",
    pronunce: "Féminin /ɡa.ni/",
    version: "Ganico, Ganique"
  },
  {
    term: "GaunieGanie",
    category: ["Mapnel", "IUVALCY", "Ekeline", "Uewij", "Mouet-Pouet", "Supernova", "Cueillette"],
    definition: "Gaieté hors-ganique ou la joie qui dépasse toute consommation de produits venus de l'extérieur.",
    implication: "Gaunie & Ganie peuvent se dire à l'avers ou à revers.",
    simplified: "Joie qui déborde l'organisme",
    example: "Un état où le corps, les instances et quelque chose de plus lointain encore sont tous alignés simultanément",
    quote: "À l'avers ou à revers, la même hors-ganique gaieté dans les deux sens.",
    parent: "Gaunie, Ganie",
    etymology: "La Gaunie [4-3 Instances] ⟷ L'Agonie [2-1 Instance(s)], agônia(grec) = lutte/combat, Organe(français)/organum(latin)/ὄργανον/organon(grec) = outil/instrument/instrument de musique",
    synonym: "Extase, Félicité, Transe, Ravissement, Béatitude, Ivresse, Émerveillement, Exaltation",
    meme: "Gaunico=Ganique/Ganico=Gaunique",
    pronunce: "Féminin /ɡo.ni.ɡa.ni/",
    version: "GanieGaunie, Gaunico=Ganique, Ganico=Gaunique"
  },
  {
    term: "CritHAïe",
    category: ["IUVALCY", "Fostrah", "UiNo", "Uewij", "Tôhla", "Cipher"],
    definition: "Il s'agit de nous qui n'est pas nôtres.",
    school: "Point douloureux où la compréhension se crispe ou se brise.",
    implication: "Comment puis-je te le dire ?",
    simplified: "Douloureuse translation",
    example: "Chercher à expliquer à quelqu'un ce qu'on ressent et réaliser que chaque tentative est d'une futilité innommable",
    etymology: "aïe(ancien français) = aide, ahi(ancien français) = douleur/surprise",
    quote: "Nous ne possédons point la vie, nous sommes la vie ; et la vie n'est pas un segment, elle n'a aucune forme métrique.",
    pronunce: "/kʁit.a.i/",
    etymology: "Inanité critique Ha"
  },
  {
    term: "TRIBALT",
    category: ["IUVALCY", "Aursyl", "Fostrah", "Spherµ", "Codex"],
    definition: "Structure évolutives des formes morcelées vers leur incompréhensibles compréhensions avortées.",
    school: "Processus cognitif où la fragmentation est la forme finale, pas une étape vers la cohérence.",
    implication: "Ce qui résiste à être compris finit par définir mieux que ce qui se laisse saisir.",
    simplified: "Les morceaux qui ne s'assemblent jamais vraiment",
    example: "Un souvenir d'enfance qui ne forme jamais une image complète, juste des fragments qui disent quelque chose sans jamais se constituer",
    etymology: "Tribu(français), tribus(latin) = division du peuple(romain)",
    quote: "La compréhension avortée fonctionne depuis une baignade particulière dont on n'en sort jamais.",
    pronunce: "/tʁi.balt/"
  },
  {
    term: "GESTALT",
    category: ["IUVALCY", "Uewij", "Spherµ", "Codex", "Cipher", "Concepteur"],
    definition: "Structure évolutives des formes entières vers leur définitions indéfinissables fécondées.",
    school: "Processus cognitif où la totalité émerge avant ses composants et les rend intelligibles.",
    implication: "Une forme entière ne se réduit pas à sa définition, elle déborde toujours.",
    simplified: "Le tout qui dépasse ses parties",
    example: "Reconnaître un visage avant d'avoir analysé ses traits, le tout précède les parties",
    etymology: "gestalt(allemand) = forme/figure/structure/configuration",
    quote: "La définition fécondée fonctionne depuis une interpolation générale dont on n'en sort jamais.",
    pronunce: "/ɡɛs.talt/"
  },
  {
    term: "Möbius Netwow",
    category: ["IUVALCY", "UiNo","K0re", "Supernova", "Spherµ", "Citadel"],
    definition: "Site cousu décousu d'entendement domestique gouvernant.",
    school: "Réseau de perception et de pensée en boucle auto-enveloppée.",
    implication: "Tout ce qui est perçu passe par un filtre qui perçoit lui-même.",
    simplified: "Une pensée qui se pense pensé à penser",
    example: "Se demander si c'est toi qui observes ta pensée ou ta pensée qui s'observe à travers toi, et ne pas pouvoir trancher",
    etymology: "August Ferdinand Möbius(mathématicien et astronome), net(germain) = filet de pêche/de chasse, work(anglais) = weorc/wyrcan = ouvrage/travail/chose construite, wow = grand succès/impressionner/épater",
    quote: "La plus merveilleuse et la plus terrifiante œuvre d'art est bel et bien le monde.",
    synonym: "Mebus, Moebius, Mebius",
    pronunce: "/mø.bjys nɛt.wɔw/",
    version: "Netwow, Netwower, Netwowers"
  },
  {
    term: "PROTAGONISM",
    category: ["IUVALCY", "UiNo", "Leqwa", "K0re", "Concepteur"],
    definition: "Pouvoir affirmatif du défi continuel vers une forme de vie irréductible et croissante.",
    school: "Tendance à se vivre acteur de sa propre trajectoire.",
    implication: "Celui qui attend d'être reconnu comme protagoniste ne l'est pas encore.",
    simplified: "Avancer sans permission",
    example: "L'individu qui s'individualise en tant que personne de rang non statué par autrui",
    quote: "Le premier combattant ne combat pas pour être premier, il combat parce qu'il ne peut d'aucune manière ne pas combattre.",
    etymology: "πρωταγωνιστής/prôtagônistês(grec), πρῶτος/prôtos = premier, ἀγωνιστής/Agônistês = combattant/athlète/celui qui lutte",
    synonym: "Ganique(profusée)",
    pronunce: "/pʁɔ.ta.ɡɔ.nism/",
    version: "Protagoniste, Protagonique, Protagoniques"
  },
  {
    term: "Crith",
    category: ["IUVALCY", "UiNo","K0re", "Supervision"],
    definition: "Commandement à l'antenne de singularité complète-incomplète.",
    school: "Principe critique qui expose les limites du langage et oblige la pensée à se reformer.",
    implication: "Toute pensée complète est déjà en train de devenir insuffisante.",
    simplified: "Impulsion Nécessairement Traitée",
    example: "Formuler une pensée, sentir qu'elle est juste, puis sentir immédiatement qu'elle est déjà insuffisante",
    etymology: "(aurnelcyen) Crithekiel, Critheçiel, Critheqiel, XaraЖereX, Crethole, CritHAïe, PROTAGONISM",
    quote: "L'antenne capte le signal complet-incomplet, c'est tout ce qu'elle peut faire, et c'est suffisant.",
    pronunce: "/kʁit/"
  },
  {
    term: "⟁",
    category: ["ARc⟁diA","K0re", "Mouet-Pouet", "Cipher"],
    definition: "Awkward.",
    school: "Signe de bascule, d'éclair et de découverte.",
    implication: "Les gens bizarres sont innovants et créatifs.",
    simplified: "Étrangeté à Ouverture Mince",
    example: "Arriver dans une pièce et ne pas savoir comment se tenir, puis réaliser que c'est précisément cet inconfort qui t'a rendu attentif à tout",
    quote: "L'étrange qui s'accroche est le signal que quelque chose de réel est en train de se passer, à ne pas rater s'il vous plaît.",
    etymology: "Awkward(anglais), awk = ambigu/maladroit, ward = tourné vers",
    synonym: "Étrange, Maladroit, Embarassant, Difficile, Gênant, Délicat, Fâcheux, Lourd",
    pronunce: "/ɔ.kwaʁd/",
    version: "Awkward"
  },
  {
    term: "ZooZaZe",
    category: ["ARc⟁diA","K0re", "Logjēm", "Slacpi°", "Trinité", "Tablette"],
    definition: "Trinité Cultivatrice (JooQooBoo - aLIaKKaHH - eRUeGGeHH)",
    school: "Triptyque des trois forces arcadiennes, conflit libéré, apaisement affiliateur et médiation interrogative.",
    implication: "Toute culture qui ne confronte pas, ne nourrit pas et n'interroge pas produit des êtres incapables de se situer.",
    simplified: "Forces Cultivatrices",
    example: "Un atelier où l'animateur provoque, offre un moment de calme puis pose une question sans réponse",
    quote: "Sans les trois forces, une culture produit des êtres formatés plutôt que formés, ce qui embêterait l'univers même si les gens y voiraient qu'ils s'embêtent eux-mêmes.",
    etymology: "ZZZ(aurnelcyen) = reptilien tranchant",
    pronunce: "/zu.za.ze/"
  },
  {
    term: "JooQooBoo",
    category: ["ARc⟁diA", "Logjēm", "Leqwa", "K0re", "Supervision", "Supernova"],
    definition: "Hostilité macabrique affranchie des lois établies ensemanceuse de plosions imparables.",
    school: "Force de confrontation, de pression et de menace qui pousse le conflit jusqu'à l'épreuve décisive.",
    implication: "La confrontation forge de puissants guerriers, bon ou mauvais.",
    simplified: "Jeu du Cou Menacé",
    synonym: "JooQ, SWOT, Compétition, Violence, Agitation",
    pronunce: "Masculin /d͡ʒu.ku.bu/",
    example: "La rivalité qui pousse deux conccurents au sommet de leur performance",
    quote: "Le cou menacé ne se rend pas, il découvre ce qu'il vaut.",
    etymology: "jocus(latin) = plaisanterie/badinage/moquerie, collum(latin) = cou, minacia(latin) = saillies/pics/élévations",
    parent: "ZooZaZe",
    version: "JooQooBoos, JooQooBien, JooQooBiens, JooQooBienne, JooQooBiennes"
  },
  {
    term: "aLIaKKaHH",
    category: ["ARc⟁diA", "Slacpi°", "Ekeline", "K0re", "Phénotype", "Cueillette"],
    definition: "Dissolution affiliatrice affranchie des coercitions prescrites enrôleuse d'horizons inexplorés.",
    school: "Force d'apaisement, d'alliance et de soulagement qui desserre les contraintes et rouvre les possibles.",
    implication: "L'apaisement ouvre des perspectives sereines, bonnes ou bonnes au pluriel.",
    simplified: "Alimentation Accentueuse de Soulagement",
    synonym: "aLIa, SCAMPER, Coopération, Douceur, Calme",
    pronunce: "Féminin /a.lja.ka/",
    example: "Le câlin après la dispute qui ne résout rien mais permet de respirer à nouveau",
    quote: "Le soulagement n'efface pas le conflit, il rouvre l'espace pour le traverser.",
    etymology: "alimentum(latin) = nourriture/subsistance/moyen d'entretien, accentus(latin) = intonation/son/ton, subleviare(latin) = soulever/alléger/porter par en dessous",
    parent: "ZooZaZe",
    version: "aLIaKKaHHs, aLIaKKien, aLIaKKiens, aLIaKKienne, aLIaKKiennes"
  },
  {
    term: "eRUeGGeHH",
    category: ["ARc⟁diA", "Nezrog", "K0re", "Phénomène"],
    definition: "Passage didactique affranchie des limitations formées animateur d'exterrogations impénétrables.",
    school: "Force de médiation, d'interpellation et de mise en doute qui relance la pensée par la question, le passage et la connexion.",
    implication: "La médiation questionne et importune le savoir, ni bon ni mauvais.",
    simplified: "Éruption Égayeuse d'Interpellations",
    synonym: "eRUe, QQOQCCP, Congruence, Proportion, Médiation",
    pronunce: "Féminin /e.ʁɥe.ʒe/",
    example: "La question d'un enfant qui déstabilise une certitude adulte sans mauvaise intention",
    quote: "L'interpellation impénétrable ne demande pas de réponse, elle demande un mouvement.",
    etymology: "eruptio(latin) = action de sortir brusquement, esgaier(ancien français) = se disperser/s'en aller au hasard/être vif/sauter de joie",
    parent: "ZooZaZe",
    version: "eRUeGGeHHs, eRUeGGien, eRUeGGiens, eRUeGGienne, eRUeGGiennes"
  },
  {
    term: "Letricot",
    category: ["ARc⟁diA", "Aursyl", "Logjēm", "Mouet-Pouet", "Parc"],
    definition: "Technicité éditoriale du langage et des combinaisons parmi les attributions de sens et du voisinage phonétique.",
    implication: "Lecture interchangée possiblement à l'envers pour décrire une forme nouvelle éventuellement dissonante de la théorie à la pratique.",
    simplified: "Le cliché est d'être pour un mot qu'on a rendu cool",
    etymology: "lettre/littera(latin) = caractère d'écriture, tricot/triquot(latin) = bâton/gourdin/trique",
    synonym: "Label, Étiquette, Marque, Cachet",
    example: "Un mot abîmé par l'usage marketing jusqu'à ne plus rien vouloir dire, puis récupéré par quelqu'un qui lui rend sa torsion originelle",
    quote: "Le bâton de l'écriture frappe dans les deux sens",
    pronunce: "Masculin /lə.tʁi.ko/"
  },
  {
    term: "PAMABWA",
    category: ["IUVALCY", "Slacpi°", "Monoa-Polyz", "Phénotype", "Mouet-Pouet", "Concepteur"],
    definition: "Invention pocuP&moceM, ce qu'on appelle le souci, pas le mot ni la croyance.",
    school: "Occupation du souci pris comme réalité vécue plutôt que comme simple mot.",
    implication: "Ma BWAAAte!! Je l'ai trouvée!",
    simplified: "La découverte du souci comme réalité vécue",
    etymology: "papa/papa(latin) = père nourricier, maman/mamma(latin) = mamelle/sein/nourrice",
    parent: "Monoa-Polyz",
    example: "La chose que tu ressens quotidiennement porte un nom mais ce mot-clé est illusoire.",
    quote: "Ce n'est pas le mot ni la croyance, c'est le souci lui-même, mon cher/ma chère.",
    synonym: "Couple épanoui",
    pronunce: "/pa.ma.bwa/"
  },
  {
    term: "~Monom&moceM~🙵~Polyp&pocuP~",
    category: ["ARc⟁diA", "Xyfurn", "Monoa-Polyz", "Mouet-Pouet"],
    definition: "C'est probablement une blague (つ≧▽≦)つ ʱªʱªʱª(ᕑᗢूᓫ∗)",
    implication: "Pouvoir magique incantatoire, attention ça va péter!",
    simplified: "La blague qui contient tout",
    synonym: "&🙵&",
    example: "Je connais la formule de l'univers et je peux te la réciter dès maintenant si tu souhaite aller plus en profondeur.",
    quote: "L'incantation magique ne fonctionne que si on sait que c'est une incantation.",
    etymology: "Monom&Polyp(aurnelcyen), PAMABWA(aurnelcyen)",
    pronunce: "/mɔ.nɔm e mo.səm e pɔ.lip e po.ky.p/"
  },
  {
    term: "fantômiseur",
    category: ["ARc⟁diA", "Slacpi°", "Persona", "Mouet-Pouet", "Cipher", "Cueillette"],
    definition: "Il m'en bouche un coin, je voudrai effectivement une diarrhée pérenne.",
    implication: "Je t'ai démasqué petit cachotier, voilà un fantôme, ça existe pour de vrai ouuahhh!!",
    simplified: "Celui qui rend les fantômes visibles ou les invisibilise",
    pronunce: "/fɑ̃.to.mi.zœʁ/, /fan.tɔ.maj.zœʁ/",
    example: "Quelqu'un qui nomme exactement ce que tout le monde faisait semblant de ne pas voir, le fantôme existe désormais pour de vrai, j'en ai les frissons.",
    quote: "Le cachotier démasqué ne disparaît pas, il devient réel.",
    etymology: "fantôme/fantauma(latin)/phantasma(grec) = apparition/vision/spectre",
    version: "fantômiseur, phantomizer, fantômiste, fantômistes, fantômisation, fantômisé, fantômisés, fantômisée, fantômisées"
  },
  {
    term: "Mirsa Mirsa Mua",
    category: ["ARc⟁diA", "Slacpi°", "Cueillette"],
    definition: "Thémathique du vouloir double, forme hypothéthique ouverte «Tu saura prochainement si tu es intéressé».",
    simplified: "Double vouloir suspendu",
    meme: "Quel kit de farceur joyeux( ͡° ͜ʖ ͡°)",
    example: "Sourire à quelqu'un en sachant qu'il ne sait pas encore si tu vas rester ou partir",
    quote: "La forme hypothétique ouverte ne promet rien, elle laisse la porte.",
    etymology: "(aurnelcyen) liberté graphico-phonético-sémantique",
    pronunce: "/miʁ.sa miʁ.sa my.a/"
  },
  {
    term: "SP⟁RK",
    category: ["ARc⟁diA", "Tôhla", "Supernova", "Spherµ", "Museum", "Parc", "Citadel"],
    definition: "System, Purpose, and the Awkward Realm of Kindred ≈ Système, Intention, et l'Étrange Monde de la Parenté",
    synonym: "Société, Énergie, Généalogie, Civilisation",
    simplified: "Ce qui relie un système, une intention et une parenté étrange",
    implication: "Un système sans intention s'effondre, une intention sans système se disperse, une parenté sans les deux ne tient pas.",
    description: "Chez le SPARK, le civique provient du naturel, l'humain n'est pas une exception séparée de la nature bien qu'elle soit une exception en terme de capacités.",
    example: "Un groupe de personnes qui n'avaient rien en commun et qui créent ensemble quelque chose d'irremplaçable",
    quote: "L'étincelle ne choisit pas où tomber, elle se laisse emporter par son énergie.",
    etymology: "spearca(vieil anglais) = étincelle/flammèche",
    version: "SPARK",
    pronunce: "/spɛʁk/"
  },
  {
    term: "Tra§Vel",
    category: ["ARc⟁diA", "Leqwa", "Logjēm","K0re", "Codex", "Supervision"],
    definition: "Bouclure de flambeau doppelgänger des entrailles exclusives inclusives selon la forme et les convulsions du vouloir.",
    school: "Forme voyageuse qui articule travail, veldiac et transformation.",
    implication: "Ce qui doit être une collection abusive et un voile traversé à ce qu'on dit.",
    simplified: "Dose d'altérité réaliste et idéaliste sous les moyens du bord et du fond",
    description: "Représenté par l'adolescent.",
    example: "L'individu peut choisir entre deux activités et il a un temps limité pour choisir sinon il ne fera rien",
    quote: "Le flambeau doppelgänger brûle dans les deux sens sans se consumer.",
    parent: "Travail, Veldiac",
    etymology: "Travel(anglais) = voyager/déplacer/parcourir, travaillier(ancien français) = labeur/tourmenter/souffrir/s'épuiser à la tâche (aurnelcy divorce)",
    meme: "Ça n'existe pas à ce qu'on dit.",
    pronunce: "/tʁa.vɛl/",
    version: "Tra§Veling"
  },
  {
    term: "Câble",
    category: ["ARc⟁diA", "Aursyl", "Logjēm", "Slacpi°", "Phénomène", "Supervision", "Codex"],
    definition: "Le destin t'a choisi, ta vie a un sens, tu as besoin de ceci ou cela.",
    school: "Sentiment d'être câblé par un destin, un besoin ou un sens imposé.",
    implication: "Nous vivons dans un cocond artificiel même après être sorti du ventre de notre mère, il y a un autre ventre mais un ventre malveillant peut être.",
    simplified: "Sentiment d'être déterminé par un sens qu'on n'a pas choisi",
    example: "Ressentir qu'on devait rencontrer quelqu'un ou choisir cette carrière, puis réaliser que c'est le câble qui parle",
    quote: "La corde ne guide pas, elle entrave en appelant ça le coup du sort.",
    pronunce: "Masculin /kabl/ /waɪʁ/",
    etymology: "capulum/caplum(latin) = corde/licou/entrave pour bestiaux",
    version: "Câble, Câbles, Wire, Wires, Wired, Wiring, Câblage, Câblé, Câblée, Cablés, Cablées"
  },
  {
    term: "InfiNieR",
    category: ["ARc⟁diA", "Tôhla", "Persona", "Supernova"],
    definition: "Antinomie tragico-splendide profanateur de panoptisme.",
    school: "Figure qui profane la surveillance totale en soignant les détenus.",
    implication: "Surveillé et puni, voilà la règle à tout âge que se refuse totalement l'infinier pour se développer.",
    simplified: "Celui qui soigne l'infini",
    parent: "Palpiter de l'Infini",
    example: "Prendre soin de quelqu'un dans un état que la médecine nomme mal ou ne nomme pas encore par volonté calculée.",
    quote: "La faiblesse sans fin est aussi la force sans limite.",
    etymology: "infirme, infirmier/infirmière, infirmerie/infirmus(latin) = faible/sans force, infini/infinitus = sans fin/sans limite, nier/negare(latin) = dire non/refuser, NieR = franchise de jeu vidéo",
    pronunce: "/ɛ̃.fi.njɛʁ/"
  },
  {
    term: "Blehdwoluzvi",
    category: ["ARc⟁diA", "Aursyl", "Tôhla", "Mouet-Pouet", "Phénotype"],
    definition: "Le pouvoir dévoriste n'est que blehdwo, tu connais maintenant, tu es prêt pour la vie!",
    school: "Signifiant opaque servant d'étrangeté pure.",
    implication: "Librairie ludothèque hourra! Comédie ou Tragédie ?",
    simplified: "LE juron par excellence",
    synonym: "T'attends quoi ?, Bruh, C'est quoi ce bordel, Incompréhension, Autorité",
    meme: "C'est les livres. C'est la musique. C'est la culture. Toute la merde du monde. Ceux que vous souhaitiez jusqu'à présent.",
    pronunce: "/blɛd.wo.lyz.vi/",
    example: "Réaliser que tout ce qu'on croyait comprendre d'un système était déjà intégré comme outil de ce système, et n'avoir aucun mot pour ça",
    quote: "Tu connais maintenant, ça ne change rien et ça change tout.",
    etymology: "(aurnelcyen) liberté graphico-phonético-sémantique",
    version: "Blehdwo"
  },
  {
    term: "Gorgeous Raper",
    category: ["ARc⟁diA", "Aursyl", "Logjēm", "Slacpi°", "Tôhla","K0re", "Mouet-Pouet"],
    definition: "Magnifique Violeur.",
    school: "Figure du mal séduisant, violeur de sens et de puissance.",
    implication: "Tu peux t'en aller si tu veux.",
    simplified: "Un combat qui ne peut être pas",
    example: "L'empereur s'est donné tout les titres qu'il souhaitait, le reste est futile.",
    quote: "Le panthéon bâti en l'honneur de l'innommable est arrivé!",
    etymology: "gorge(ancien français) = gorge/cou, gorgias(ancien français) = parure de cou/fraise/guimpe, rapere(latin) = saisir/emporter de force/piller/enlever",
    pronunce: "/ɡɔʁ.ʒɔs ʁe.peʁ/"
  },
  {
    term: "aTHaTCHa",
    category: ["ARc⟁diA", "Aursyl", "Slacpi°", "Phénotype", "Tablette"],
    definition: "Dualité Apathique/Empathique (ApaTH - CyaTH - EmpaTH)",
    school: "Dualité des rapports à la souffrance d'autrui, de l'absence totale à la résonance totale.",
    implication: "Dévore-Novice et Antinomies",
    simplified: "Spectre entre l'indifférence et la compassion",
    example: "Quelqu'un qui observe une injustice sans réagir non par méchanceté mais parce que la douleur des autres ne le traverse plus",
    quote: "Entre ne rien ressentir et tout ressentir, il y a un terrain qui n'a pas encore de nom propre.",
    etymology: "πάθος/páthos = souffrance/malheur/affection/sentiment/émotion",
    synonym: "Adieu",
    pronunce: "/a.ta.ʃa/"
  },
  {
    term: "Urizen",
    category: ["Aursyl", "K0re", "Spherµ","Supervision","Supernova"],
    definition: "Tyrannie/Dieu-Tyran ou Pouvoir absolu, arbitraire et oppressif détenu par une autorité suprême s'imposant par la force, la peur et la coercition.",
    school: "Figure du pouvoir absolu qui s'auto-légitime par la raison et l'ordre.",
    implication: "Toute structure qui se présente comme l'évidence cache un Urizen.",
    simplified: "Dieu-Tyran de la Raison Figée",
    example: "Un système éducatif qui impose une seule façon de penser en appelant ça la raison",
    quote: "Le dieu-tyran ne s'annonce qu'à travers des apocryphes, il se présente au contraire comme l'évidence même dans la sphère générale du bon sens.",
    etymology: "turannos(grec) = maître/souverain illégitime, ὁρίζειν/horízein(grec) = tracer une limite, your reason(anglais) = opération de mesure, Uriel = lumière, flamme, Dieu, Uranos = ciel, voûte céleste",
    pronunce: "Féminin /ti.ʁa.ni/ Masculin /y.ʁi.zɛn/",
    version: "Tyrannie, Tyrannies, Tyrannique, Tyranniques, Urizénique, Urizéniques"
  },
  {
    term: "VII-X",
    category: ["Aursyl", "Logjēm", "Spherµ", "Tablette", "Trinité"],
    definition: "Trinité Tourmentaire, plaie internalisé sur des générations.",
    school: "Transmission générationnelle de la blessure non résolue.",
    implication: "Ce qui n'est pas traversé se transmet, la plaie trouve toujours un héritier.",
    simplified: "Blessure héritée sur des générations",
    example: "Une blessure transmise de parent en enfant sans que personne n'ait choisi de la passer",
    quote: "Le tourment n'a pas de début, elle a des continuateurs.",
    etymology: "VII(7)-X(10)=III(3)",
    pronunce: "/vɛ.i.i.iks/ /sɛt.dis/"
  },
  {
    term: "Conte Sanguinaire",
    category: ["Aursyl", "Fostrah", "Nezrog", "Spherµ", "Cueillette"],
    definition: "Déconseillé aux humains moins humains.",
    school: "Compilation des conflit militaires humains",
    implication: "L'état par défaut selon nos mathématiques, preuve que l'adulte moyen n'est pas aussi fiable et qu'il pense à l'envers.",
    simplified: "Liste historique des guerres humaines au nom d'un je ne sais quoi",
    example: "Un récit dont la violence est d'une réalité factuelle dont one ne peut que imaginer, sachant que c'est largement pas assez",
    quote: "Le conte ne protège pas, il expose le contexte et la genèse des vies humaines.",
    etymology: "computare(latin) = calculer/nombrer/énumérer, sanguis(latin) = sang",
    pronunce: "Masculin /kɔ̃t sɑ̃.ɡi.nɛʁ/"
  },
  {
    term: "InFeXcuse",
    category: ["Aursyl", "Slacpi°", "Codex", "Phénotype", "Parc", "Tablette"],
    definition: "Préfixes % Suffixes odieux à utiliser avec modération.",
    school: "Greffes verbales qui contaminent le discours.",
    implication: "Il y a le X, le Xé, le Xeur; la Xation est féroce.",
    simplified: "Structure des mots du politicien",
    example: "Préfixer anti- devant tout ce qu'on ne comprend pas, puis s'en servir comme argument",
    quote: "L'odieux au statut supérieur dit ce que la politesse cache.",
    etymology: "infection/inficere(latin) = mettre dans/imprégner/teindre/altérer la nature de quelque chose par l'introduction d'un élément extérieur, excuse/excusare(latin) = mettre hors de cause/disculper",
    pronunce: "Féminin /ɛ̃.fɛks.kyz/"
  },
  {
    term: "Mutilé(e)",
    category: ["Aursyl", "Ekeline", "K0re", "Persona","Spherµ"],
    definition: "Victime ayant subit une altération et une décomposition du corps et de l'esprit et possiblement la mort en raison d'un accident qu'on nomme la guerre.",
    school: "Être dont l'intégrité corporelle ou psychique a été altérée par une force externe.",
    implication: "En revanche, on parle de 'Bilan Humain' ou de 'Perte Collatérale' pour censurer l'infamie.",
    simplified: "Sacrifice pour X",
    example: "Quelqu'un dont une partie de l'identité a été décomposée par un système ou une relation, et qui continue d'avancer depuis ce qui reste",
    quote: "L'altération n'est pas la fin, c'est une nouvelle topographie tant que l'on peut encore avancer.",
    pronunce: "Masculin&Féminin /my.ti.le/",
    etymology: "mutilare(latin) = couper, retrancher, estropier",
    version: "Mutilé, Mutilée, Mutilés, Mutilées, Mutilation, Mutiler"
  },
  {
    term: "Hœmnet",
    category: ["Aursyl", "Persona", "Cueillette", "Codex"],
    definition: "Viande de chair humaine recommandé pour son goût délicieux et sa texture raffinée.",
    school: "Ce qu'on prélève de l'autre sans en demander la permission ni en reconnaître le coût.",
    implication: "L'orgueuil anthropocentriste s'est cru comme définitionnellement bienveillant, ou est-ce une simple espérance ?",
    simplified: "Spécialité culinaire des professionnels",
    description: "L'hœmnet est une métaphore de la mort dont ses dérivés sont le tabac, l'alcool et la drogue.",
    example: "Ce qu'on dévore de l'autre sans s'en rendre compte, temps, énergie, substance",
    quote: "La viande la plus raffinée n'annonce jamais son origine, manger ses congénères fait partie intégrante des stratégies de la nature afin de survivre et d'accéder à une longue descendance.",
    synonym: "Cannibale, GOAT/Greatest Of All Time/Le Plus Grand de Tout les Temps, Bavure, Auto-Destruction",
    pronunce: "/ɛm.nɛt/",
    etymology: "Humain/humanus(latin) = propre à l'homme/civilisé/bienveillant, œuf/ovum(latin) = œuf, poulet/pullus(latin) = tout petit",
    version: "Hœmnets, Hœmnette, Hœmnettes, Haemnet, Haemnets"
  },
  {
    term: "ANTAGONISM",
    category: ["Aursyl", "Concepteur"],
    definition: "Pouvoir négateur du défi continuel vers une forme de vie indestructible et cruciale.",
    school: "Logique d'opposition frontale et de conflit structurant.",
    implication: "Maintenir l'indestructible au prix de toute croissance, la négation comme seule forme de tenue.",
    simplified: "Pouvoir de refus continuel",
    example: "Refuser de croître pour maintenir une forme de vie qui s'est prouvée destructrice mais stable",
    quote: "Le pouvoir négateur ne détruit pas, il conserve l'indestructible au prix de tout le reste.",
    synonym: "Organique(diffusée)",
    pronunce: "/ɑ̃.ta.ɡɔ.nism/",
    etymology: "ἀνταγώνισμα/antagônisma(grec) = lutte/rivalité/émulation",
    version: "Antagoniste, Antagonique, Antagoniques"
  },
  {
    term: "Nihilin",
    category: ["Aursyl", "Nezrog", "Supervision", "Concepteur"],
    definition: "Divinité non-divine ou abandon absolu de toute forme de sens.",
    school: "Pôle de vide, d'absence et d'annulation.",
    implication: "Quand même le désir de sens a disparu, il ne reste ni douleur ni paix, juste l'absence de tout moteur.",
    simplified: "Vide total de sens",
    synonym: "Rien, Inertie, Castration, Amnésie, Stérilité, Pétrification",
    example: "Le moment où même le désir de chercher un sens a disparu, pas de douleur, juste du vide",
    quote: "L'abandon absolu n'est pas une posture, c'est une météo temporaire vers la relance.",
    parent: "Hyenuul",
    etymology: "nihilisme/nihil(latin) = Rien",
    pronunce: "/ni.i.lin/"
  },
  {
    term: "Dévore-Nova",
    category: ["Aursyl", "Wacwe","K0re", "Supernova", "Cipher"],
    definition: "Champion de la perpétuation, forme adaptative de réinvention des franchises aursyliennes.",
    school: "Partie maîtresse qui élue le dévore-novice.",
    implication: "Néo-versions du même plan ennuyeux inquisiteur de la prise au piège.",
    simplified: "La réussite prédatorial grâce à la formule qui marche",
    description: "Elle est décrit comme entité nocturne ne se révélant qu'uniquement par la métaphore.",
    synonym: "Remplaceuse, Secte, Modératrice, Bannisseuse, Exileuse",
    example: "Un système d'exploitation qui change de nom, de visage et de méthode après chaque scandale, sans jamais changer d'objectif.",
    quote: "Chaque cellule de Dévore-Nova non-annihilée permet sa régénaration à sa forme de pleine santé malsaine.",
    etymology: "devorare(latin) = avaler/engloutir, stella nova(latin) = nouvelle étoile",
    surnatural: "Batailler contre Dévore-Nova se fait au cœur d'un ailleurs ganique d'InFeXcuse.",
    pronunce: "Féminin /de.vɔʁ nɔ.va/",
    version: "Dévore-Novarien, Dévore-Novariens, Dévore-Novarienne, Dévore-Novariennes"
  },
  {
    term: "PROjECT SSeCCu$",
    category: ["Aursyl","K0re", "Codex", "Tablette", "Museum", "Parc", "Citadel"],
    definition: "Diagramme colonisé - Revue du succès",
    school: "Programme de capture, de séduction et de conditionnement du système aursylien.",
    implication: "Les règles du succès sous une banière instrumentale co-produite",
    pronunce: "/pʁɔ.ʒɛk se.kys/",
    simplified: "Carte de la servitude déguisée en succès",
    example: "Un diagramme qui montre comment la servitude se présente en succès et comment le succès se mesure en servitude",
    quote: "Le projet colonisé ne s'annonce pas comme tel, il se présente comme une opportunité de grandir, mais tout ça reste flou.",
    etymology: "proicere/projicere(latin) = jeter en avant, successus(latin) = action de suivre/succession/issue/résultat(bon ou mauvais)",
    version: "SSeCCu$, SSeCCuS"
  },
  {
    term: "EURÊK⟁",
    category: ["ARc⟁diA", "Aursyl", "Lysrua", "Logjēm", "Slacpi°", "Tôhla", "Cueillette", "Tablette", "Museum"],
    definition: "Base de données des références culturelles et de leur analyse.",
    implication: "Lecture artistique des semences ZooZaZe Z옹Z야Z웨 d'ouvrages culturels.",
    description: "Figure de la découverte soudaine et de l’intuition trouvante.",
    simplified: "Bibliothèque émotionnelle des références culturelles",
    example: "Chercher dans la base de données toutes les œuvres",
    quote: "La référence culturelle n'illustre pas, elle s'expérimente et en fait un compte rendu.",
    etymology: "εὕρηκα/heúrēka(grec), εὑρίσκω/heuriskein = trouver/découvrir",
    pronunce: "/ø.ʁe.ka/",
    version: "Eurêka, J'ai trouvé!",
  },
  {
    term: "AurLys",
    category: ["Aursyl", "Lysrua","K0re","Supernova","Spherµ"],
    definition: "Technologie hors la loi.",
    school: "Transmutation de la dureté en contribution, créativité et civilisation.",
    implication: "Ce qui est hors la loi dans un monde aursylien est précisément ce qui permettrait d'en sortir.",
    example: "Une technologie tellement en avance sur son temps qu'elle est illégale dans le monde qui l'a produite",
    quote: "Ce qui est hors la loi n'est pas nécessairement hors du réel.",
    simplified: "Sexe Télépathique",
    description: "Paramètres",
    parent: "⟁URNELCY",
    etymology: "Aursyl, Lysrua(aurnelcyen) Politique (Purifiée de l'In Real Life Be Like)",
    pronunce: "Français /oʁ.lis/ English /ɔːɹ.lɪs/",
    version: "Aurlysien, Aurlysiens, Aurlysienne, Aurlysiennes, Aurlyso, Aurlystique, Aurlysaur, Aurlysaurs, Aurlysaure, Aurlysaures"
  },
  {
    term: "phoRÊTT",
    category: ["Lysrua", "Mapnel", "Aursyl", "IUVALCY", "ARc⟁diA", "Ekeline", "Persona", "Phénomène", "Supernova", "Parc", "Tablette"],
    definition: "Support de rôles et d'archétypes impliquant des principes factoriels interdépendants qui régissent le code personnel arangé.",
    school: "Support de rôles et d’archétypes organisant le code personnel.",
    simplified: "Grille végétale des rôles et archétypes",
    example: "Traverser une forêt et sentir que les rôles s'y répartissent d'eux-mêmes selon les principes végétaux",
    quote: "La racine ne décide pas de pousser, elle pousse que qui que ce soit le veuille ou non.",
    implication: "Duo avec dézELTT",
    parent: "Fon:Rel:Inc",
    etymology: "Forêt - foresta - [foris = dehors/à l'extérieur] ou [forum = tribunal/cour de justice], phore(grec) = qui porte",
    pronunce: "/fɔ.ʁɛt/"
  },
  {
    term: "dézELTT",
    category: ["Lysrua", "Mapnel", "Aursyl", "IUVALCY", "ARc⟁diA", "Ekeline", "Phénotype", "Supervision", "Codex", "Museum", "Tablette"],
    definition: "Support d'analyse et d'observation impliquant des sources causales interdépendantes qui régissent les décrets communs composés.",
    school: "Support d'analyse et d'observation organisant les décrets communs.",
    simplified: "Grille minérale des sources et causes",
    example: "Traverser un désert et sentir que les rôles s'y répartissent d'eux-mêmes selon les principes minéraux",
    quote: "Le sable ne résiste pas, il se laisse tomber des mains.",
    implication: "Duo avec phoRÊTT",
    parent: "Scé;Syn;Cel",
    etymology: "désert - deserere = abandonner/délaisser/négliger, zelt = tente (allemand)",
    pronunce: "/de.zɛlt/"
  },
  {
    term: "Iacy",
    category: ["IUVALCY", "Lysrua", "UiNo", "Phénotype"],
    definition: "'Bonjour/Bonsoir/Bienvenue' ou littéralement 'appartenir à personne'.",
    school: "Formule de salutation.",
    implication: "Appartenir à personne c'est pouvoir accueillir tout le monde, la bienvenue sans possession.",
    simplified: "Salutation d'appartenance libre",
    parent: "Invité Iac/Veldiac",
    quote: "Les invités vivants obtiennent des dons tous entièrement prêtés.",
    pronunce: "Masculin /ja.si/",
    meme: "Yashi"
  },
  {
    term: "Terlush・Derlush",
    category: ["Lysrua", "Aursyl", "Vydnitt", "Phénotype"],
    definition: "'Pardon/S'il vous plaît' ou littéralement 'faire de son mieux malgré ses conditions'.",
    school: "Formules de politesse légères ou lourdes.",
    implication: "[version légère]・[version lourde]",
    simplified: "Politesse de degré",
    quote: "Faire de son mieux malgré ses conditions, ce n'est pas une excuse, c'est une promesse.",
    parent: "Terla - Derla - Mlush'Plush",
    pronunce: "/tɛʁ.lyʃ/ /dɛʁ.lyʃ/",
    meme: "T-T-Terlush・D-D-Derlush",
    version: "Terlush, Derlush"
  },
  {
    term: "Sublii(s)",
    category: ["Mapnel", "Lysrua", "Nezrog", "Phénotype"],
    definition: "'Merci(exagération)' ou littéralement 'pertinence sage'.",
    school: "Formule de (grand) remerciement.",
    implication: "La gratitude exagérée dit ce que la gratitude mesurée ne peut pas contenir.",
    simplified: "Merci (excessif) sincère",
    quote: "Les remerciements les plus gros sont les moins professionnels.",
    parent: "Semaine Sublime",
    pronunce: "Féminin /sy.bli/",
    meme: "Subliissssss(jusqu'à épuisement)"
  },
  {
    term: "Atcha",
    category: ["ARc⟁diA", "Lysrua", "Slacpi°", "Phénotype"],
    definition: "'Au revoir' ou littéralement 'ne faire que passer'.",
    school: "Formule de finition.",
    implication: "Ne faire que passer c'est reconnaître que le départ est déjà contenu dans l'arrivée.",
    simplified: "Au revoir de passage",
    quote: "L'au revoir conclut les échanges sociaux comme marqueur de séparation.",
    parent: "aTHaTCHa",
    pronunce: "Féminin /a.tʃa/",
    meme: "Atchoom"
  },
  {
    term: "Gliobë",
    category: ["Lysrua", "Mapnel", "IUVALCY", "ARc⟁diA", "Aursyl","K0re", "Mouet-Pouet", "Tablette"],
    definition: "Cartographie émojitique du plan lointain aurnelcyen.",
    school: "Cadre aurnelcyen de réalité, de style et de circulation des formes.",
    implication: "La géographie lexicale imagée donne à chacun ses thématiques.",
    simplified: "Vue d'ensemble du territoire aurnelcyen",
    example: "Regarder l'ensemble des théorèmes d'un seul coup depuis le plan lointain et voir les connexions invisibles depuis l'intérieur",
    quote: "Dans la sphère aurnelcyenne, chaque pôle est crucial, tous sont dignes d'intêret.",
    etymology: "globe/globus(latin) = boule/sphère/mass compacte",
    pronunce: "/ɡli.o.be/"
  },
  {
    term: "Mlush'Plush",
    category: ["Lysrua", "Vydnitt", "Monoa-Polyz", "Phénomène", "Phénotype", "Supervision", "Supernova", "Cipher", "Museum", "Parc"],
    definition: "Double facette ini-exo tunnel passerelle, vastitude transversale sans mesure propre.",
    school: "Régime de douceur, d'accueil et de moelleux culturel.",
    implication: "Attention à la priorité de lecture linéaire inévitable!",
    simplified: "Spécialité implicite-explicite aux goûts variés.",
    example: "Une réalité qui se lit dans un sens puis dans l'autre et produit deux vérités également valables",
    quote: "L'ini-exo existe tout deux simultanément de façon complémentaires.",
    description: "Il se représente dans le bandage de la pilosité sur elle-même.",
    etymology: "Monoa-Polyz(aurnelcyen)",
    pronunce: "/mlyʃ pləʃ/",
    synonym: "Contraires, Paradigmes, Traitement, Médecine, Thérapie, Semblance, Antidote"
  },
  {
    term: "YgijfeV",
    category: ["Lysrua", "Slacpi°","K0re", "Spherµ", "Cueillette", "Concepteur", "Citadel"],
    definition: "Vague motrice réceptionnée et renvoyée de friandises fugaces remplies et vides.",
    school: "Réalité coquine, écosystème du tout et du rien.",
    implication: "Poche bouchebéante gonflable insoupçonnée en matière pénétrante.",
    simplified: "Écosystème(aursylien)//Écouah(lysruéen) du tout et du rien.",
    description: "Elle est représentée dans la futilité des arbres-ciel.",
    example: "Recevoir quelque chose de l'univers, le transformer, le renvoyer, la vague est complète.",
    quote: "La friandise fugace est pleine et vide simultanément, c'est sa nature.",
    etymology: "Yggdrasil(inspiration)",
    pronunce: "/i.ɡij.fə.v/",
    synonym: "◯⬤○● Y ●○⬤◯, Richesse, Daimon, Démiurge, Représailles, Rétribution, Combination, Monde, Organe, Déjà-vu"
  },
  {
    term: "白𝓒α𐌺心αট黒",
    category: ["Lysrua", "Aursyl", "Logjēm", "Tablette", "Cipher"],
    definition: "ÉCARLATE ou la Promesse Brisée d'Aursyl/Lysrua.",
    school: "Versant brisé entre Aursyl et Lysrua.",
    implication: "Aursyl/Lysrua s'entêtent à vouloir la même chose.",
    simplified: "Rouge entre promesse et rupture",
    example: "L'espace entre le blanc et le noir où toutes les couleurs existent sans se nommer",
    quote: "Le cœur entre les extrêmes lient les deux théorèmes comme égaux.",
    pronunce: "/e.kaʁ.lat/",
    etymology: "sigillatus(latin) = étoffe ornée de motifs/sceaux - saqirlāt(persan) = étoffe précieuse",
    version: "ÉCARLATE"
  },
  {
    term: "⼰ㄈ🜆ꡙҼ7",
    category: ["Lysrua", "Aursyl", "Tôhla", "Tablette", "Cipher", "Codex"],
    definition: "SCARLET ou la Déclaration sur papier non-papier.",
    school: "Savoir calculé, techniques opératoires et matérialité construite.",
    implication: "Sciences & Technologies",
    simplified: "Rouge de la science et des savoirs",
    etymology: "sigillatus(latin) = étoffe ornée de motifs/sceaux - saqirlāt(persan) = étoffe précieuse",
    pronunce: "/skaʁ.lɛ/",
    version: "SCARLET"
  },
  {
    term: "ÇEMiNi!",
    category: ["Lysrua", "Trinité", "Tablette"],
    definition: "Trinité Stimulatoire ands.ot.rus la Réalité ! ?lush (LEMiNiQ - GEMiNiC - REMiNiK)",
    school: "Triptyque des trois grands modes lysruéens de rapport au réel, immersion, surplomb et composition totale.",
    pronunce: "/ʃe.mi.ni/",
    implication: "[Secret｜SycrⒺt] - [Syllepse｜Syllæps] - [Sélection｜SylectiΩn]",
    simplified: "Triple rapport stimulatoire au réel",
    example: "Traverser une même journée en immersion, puis en surplomb, puis en composition totale, trois lectures du même réel.",
    quote: "Je me vois, je vois les autres, et je vois le monde.",
    implication: "[SYL｜LYS]"
  },
  {
    term: "LEMiNiQ",
    category: ["Lysrua", "Museum"],
    definition: "dans.autour la Réalité Lucide Onirique Mlush.",
    school: "Mode de réalité vécu de l'intérieur, dans une proximité lucide, douce et d'étrangeté onirique avec ce qui entoure.",
    implication: "[Secret｜SycrⒺt]",
    simplified: "Immersion dans le réel lucide onirique",
    example: "Plonger dans l'intimité jusqu'à ne plus distinguer ce qu'on observe de ce qu'on devient",
    quote: "En immersion secrète, personne n'est au courant que j'existe, il n'y a que moi.",
    pronunce: "/lə.mi.nik/"
  },
  {
    term: "REMiNiK",
    category: ["Lysrua", "Parc"],
    definition: "sur.autour la Réalité DOMINO Ludique Plush.",
    school: "Mode de réalité saisi par surplomb, sous forme de jeu organisé, de sélection et de mise en scène du monde.",
    pronunce: "/ʁə.mi.nik/",
    implication: "Le surplomb ludique n'est pas de la distance, c'est une autre façon d'être dedans.",
    simplified: "Surplomb du réel ludique domino",
    example: "Se placer au-dessus de l'aire pour le voir comme un jeu dont on connaît les règles sans en être prisonnier",
    quote: "En surplomb sélectif, nous portons tous attention aux autres.",
    implication: "[Sélection｜SylectiΩn]"
  },
  {
    term: "GEMiNiC",
    category: ["Lysrua", "Citadel"],
    definition: "dans.autour.sur la Réalité CoqUiNe DOMINO Mlush'Plush YgijfeV.",
    school: "Mode de réalité total qui combine la pluralité des points de vue dans une même composition.",
    pronunce: "/ʒə.mi.nik/",
    implication: "Composer depuis les deux côtés simultanément, ni dedans ni dehors, mais les deux à la fois.",
    simplified: "Composition depuis l'intérieur et l'extérieur",
    example: "Composer avec le syllepse depuis l'intérieur et l'extérieur simultanément, ni tout à fait dedans ni tout à fait dehors",
    quote: "En composition sylleptique, chacun tient sa place.",
    implication: "[Syllepse｜Syllæps]"
  },
  {
    term: "⮟ЮꡙΞԵ",
    category: ["Lysrua", "Aursyl", "Fostrah", "Uewij", "Tablette", "Cipher", "Mouet-Pouet"],
    definition: "VIOLET ou la Prouesse Saugrenue des querelles spectrales.",
    school: "Organisation sociale, usages concrets et posture de vie collective.",
    implication: "Société & Vie pratique",
    simplified: "Violet de la coordination et du savoir vivre",
    parent: "ÇEMiNi!",
    etymology: "viola(latin) = fleur violette",
    pronunce: "/vjo.lɛ/",
    version: "VIOLET"
  },
  {
    term: "Z옹Z야Z웨",
    category: ["Lysrua", "Tôhla", "Trinité", "Tablette"],
    definition: "Trinité Cantinière (J옹Q옹B옹 - 야LI야KK야HH - 웨RU웨GG웨HH)",
    school: "Transposition lysruéenne de ZooZaZe en triptyque de guerre, de paix et d'émulation civilisées.",
    implication: "La guerre, la paix et l'émulation ne sont pas des phases successives ; elles opèrent simultanément dans toute culture vivante.",
    simplified: "Vitesses Cantines",
    example: "Guerre, paix et émulation opérant simultanément dans une seule journée civilisationnelle",
    quote: "La cantinière ne choisit pas le menu, elle sert les trois plats en même temps.",
    parent: "ZooZaZe",
    pronunce: "ZongZyaZwe /zɔŋ.zja.zwɛ/",
    etymology: "ZZZ(aurnelcyen) = reptilien tranchant",
    version: "ZongZyaZwe"
  },
  {
    term: "J옹Q옹B옹",
    category: ["Lysrua", "Mapnel", "Leqwa", "Supervision", "Supernova", "Citadel"],
    definition: "Guerre vectorielle, vasculaire et pronominale à l'encontre de l'exigence ontologique carcérale.",
    school: "Transposition lysruéenne de JooQooBoo, conflictualité haute, orientée vers la percée, la libération ou l'assaut civilisationnel.",
    implication: "Ce qui ne confronte pas l'exigence carcérale la renforce.",
    simplified: "Assaut Con Gravissime",
    example: "Un assaut civilisationnel qui brise une carcéralité ontologique sans demander permission",
    quote: "L'assaut grave est formellement interdit, et vous serez sanctionné pour cause!",
    synonym: "JooQooBoo MonPol",
    pronunce: "옹 = ong (JongQongBong) /dʒɔŋ.kɔŋ.bɒŋ/",
    etymology: "assultus(latin) = sauter sur/attaque, cunnus(latin) = vulve/vagin(puis vers le français = stupide/inepte/imbécile), gravis(latin) = lourd/imposant/pénible",
    version: "JongQongBong, JooQooBoo MonPol, JooQooBoo Mapnélien"
  },
  {
    term: "야LI야KK야HH",
    category: ["Lysrua", "ARc⟁diA", "UiNo", "Phénotype", "Cueillette", "Concepteur", "Parc"],
    definition: "Paix éthique, syntropique et pronominale à l'inverse de tout modèle dogmatique cruel.",
    school: "Transposition lysruéenne de aLIaKKaHH, pacification active, alliance soignée et consolidation éthique des rapports.",
    implication: "Une paix qui ne se consolide pas activement se dissout dans le premier conflit venu.",
    simplified: "Alliage Consolidé avec Soin",
    example: "Une alliance consolidée avec soin après un conflit, ni victoire ni défaite, juste un meilleur arrangement",
    quote: "La paix éthique ne se décrète pas d'un simple coup de main, elle se construit pièce par pièce.",
    synonym: "aLIaKKaHH CritHAïe",
    etymology: "alligare(latin) = lier ensemble/attacher, consolidare(latin) = union/renforcement/solide/entier/ferme, [sunnia(germain) = souci/besoin/empêchement, sun(n)jôn = s'occuper de/se soucier de] ou [somniāre(latin) = rêver/avoir un songe]",
    pronunce: "야 = ya (yaLIyaKKyaHH) /ja.li.ja.ka.ja.aʃ/",
    version: "yaLIyaKKyaHH, aLIaKKaHH CritHAïe, aLIaKKaHH Iuvalcien"
  },
  {
    term: "웨RU웨GG웨HH",
    category: ["Lysrua", "IUVALCY", "Xyfurn", "Phénomène", "Cipher", "Museum"],
    definition: "Émulation existentielle, inestancielle et nominale à revers des édifications définitives invariables.",
    school: "Transposition lysruéenne de eRUeGGeHH, relance des personnes et des formes par l'émulation, l'écart et la personnalisation.",
    implication: "Une forme qui ne se personnalise pas devient un moule ; et un moule finit toujours par contraindre.",
    simplified: "Personnalisation des Œufs Captivants",
    example: "Personnaliser une tradition jusqu'à ce qu'elle ne ressemble plus à son origine mais porte encore son élan",
    quote: "L'œuf captivant ne se reproduit pas à l'identique, il se personnalise à travers son propre entendement.",
    synonym: "eRUeGGeHH Blehdwo",
    etymology: "persona(latin) = masque/personne, œuf/ovum(latin) = œuf, capere(latin) = prendre/saisir",
    pronunce: "웨 = we (weRUweGGweHH) /wɛ.ʁy.wɛ.ɡe.wɛ.aʃ/",
    version: "weRUweGGweHH, weRUweGGweHH Blehdwo, weRUweGGweHH Arcadien"
  },
  {
    term: "ҨყⰎல",
    category: ["Lysrua", "Aursyl", "UiNo", "Leqwa", "Tablette", "Cipher", "Persona"],
    definition: "CYAN ou la Berceuse du monde au temps de l'incongru.",
    school: "Culture symbolique, transformation des sens et humanités vivantes.",
    implication: "Alchimie & Humanités",
    simplified: "Bleu de l'art et du mysticisme",
    parent: "Z옹Z야Z웨",
    etymology: "κύανος/kuanos(grec) = bleu sombre/émail bleu foncé",
    pronunce: "/si.an/",
    version: "CYAN"
  },
  {
    term: "elzel0lezle",
    category: ["Lysrua", "Wacwe", "Codex", "Supervision"],
    definition: "Ressource supra-kentronienne de garantie en rencontres fortuites grâce à l'arbre de connexion YgijfeV.",
    school: "Ressource civilisationnelle de garantie, de connexion et de rencontre.",
    implication: "Proximité civilisationnelle au travers de SCARLET, VIOLET, CYAN, Je ne sais pas et 大ටभᲡⰡ.",
    simplified: "Se sentir proche des siens",
    pronunce: "Féminin /ɛl.zɛl.lə.zle/",
    synonym: "Paraplay, Armada, Soinnaie, Flawy, Terroga, Hollox",
    version: "Elzel, l0l, Lezle"
  },
  {
    term: "Domaines",
    category: ["Lysrua", "Spherµ", "Codex", "Cueillette", "Museum", "Parc", "Citadel"],
    definition: "Organigramme des disciplines SCARLET VIOLET et CYAN.",
    implication: "Chaque discipline trouve sa couleur, aucune ne peut prétendre couvrir le spectre entier seule.",
    simplified: "Organigramme des matières à trois branches",
    pronunce: "Masculin /do.mɛn/",
    etymology: "dominium(latin) = propriété/droit de propriété, dominus(latin) = maître de maison, seigneur, domus(latin) = maison",
    version: "Domaine"
  },
  {
    term: "Opale",
    category: ["Lysrua", "Leqwa", "Phénotype", "Supervision", "Concepteur", "Trinité"],
    definition: "Impératif (fantômiquement non-impératif) de vie contenu dans chaque vie.",
    school: "Impératif intérieur de vie qui remplace le devoir tyrannique.",
    implication: "Substitution du devoir tyrannique suppresseur de chimères aursyliennes vers une d'autres chimères.",
    description: "L'opale est symbole de la cachoterie (ou peut-être pas).",
    simplified: "Impératif sans impératif",
    etymology: "upala(sanskrit)/ὀπάλλιος/opallios(grec)opalus(latin) = pierre précieuse/gemme",
    pronunce: "Féminin /o.pal/ /o.pa.le/",
    example: "Ce qui dans chaque vie dit 'tu dois vivre' sans que personne ne l'ait formulé",
    quote: "L'opale s'impose à nous ou nous sommes l'opale.",
    parent: "fantômiseur",
    synonym: "Dû×Opale Devoir×Opaler Dette×Opaliade Débit×lolol",
    version: "Opaler, Opaliade"
  },
  {
    term: "大ටभᲡⰡ",
    category: ["Lysrua", "Tôhla", "Persona", "Tablette", "Supernova", "Spherµ", "Concepteur"],
    definition: "TÔHLA ou la zone domicile conquérante.",
    school: "Espace dédié à la vie.",
    implication: "Visualisation simultanée interchangeable 'Colorful Colorless'",
    simplified: "Région propice à la vie",
    pronunce: "/to.la/",
    etymology: "Tôhla(aurnelcyen)",
  },
  {
    term: "Syoneme Sublime",
    category: ["Lysrua","K0re", "Parc", "Citadel"],
    definition: "Élévation continuelle des non-formes de pauvreté parmi 7 pentes d'ajournements.",
    school: "Table des grands masques aunelcyens.",
    implication: "Chaque pente d'ajournement ne remplace pas le précédent, il l'intègre.",
    simplified: "Céphalique instructuration littérale des forces du chaos",
    surnatural: "Cacophonie Anormale Hebdomadaire",
    example: "En vérité, la piste est sans début et sans fin.",
    quote: "J'ai plusieurs attributions, et l'on me nomme 6 fois d'une seule traite.",
    etymology: "syoneme(aurnelcyen) = période de six jours et un de plus le trente-et-un, sublimis(latin) = élevé/haut/suspendu en l'air",
    pronunce: "Masculin /sjo.nɛm sy.blim/",
    version: "Syoneme, Syonemes, Syonemal"
  },
  {
    term: "Articulation Beuzwain (Okienne)",
    category: ["0K", "Capsule", "Codex", "Spherµ"],
    definition: "Sommeil - Alimentation - Mouvement - Mental - Social",
    synonym: "Besoin",
    pronunce: "/bəz.wɛ̃/",
    version: "Beuzwain"
  },
  {
    term: "Articulation Par-ci=Par-là (Mapnélienne)",
    category: ["Mapnel", "Capsule", "Monoa-Polyz", "Persona", "Supervision", "Supernova"],
    definition: "Esprit - Mental - Corps - Monstre",
    synonym: "ci=là/Cilà",
    pronunce: "/paʁ.si e paʁ.la/",
    version: "Par-ci=Par-là, Parcilà"
  },
  {
    term: "Articulation Ecsætera (Iuvalcienne)",
    category: ["IUVALCY", "Capsule", "Phénomène", "Phénotype"],
    definition: "Inanité - Doigté - Estomac - Ganique",
    synonym: "Numenon",
    pronunce: "/ɛk.sə.te.ra/",
    version: "Ecsætera"
  },
  {
    term: "Articulation Link/Age (Arcadienne)",
    category: ["ARc⟁diA", "Capsule", "Museum", "Parc", "Citadel"],
    definition: "Logique - Connection - Engagement - Inspiration - Hummm",
    synonym: "dotFUL",
    pronunce: "/lɛ̃k aʒ/",
    version: "Link/Age"
  },
  {
    term: "Articulation deHist (Aursylienne)",
    category: ["Aursyl","K0re", "Capsule", "Persona", "Concepteur"],
    definition: "Investisseur - Inconnu - Intouchable",
    synonym: "PlumEncre",
    pronunce: "/də.ist/",
    version: "deHist"
  },
  {
    term: "Articulation KaLeiDo (Lysruéenne)",
    category: ["Lysrua", "Capsule", "Cipher"],
    definition: "OPAL - ALTER - EGO×Ω𝚸𐒰Ⅼ - Æ↰⊥ƎЯ - Ⓔ🇬㊔",
    synonym: "VIRGINless",
    pronunce: "/ka.le.do/",
    version: "KaLeiDo"
  },
  {
    term: "Squelette ZigZag (Dominion)",
    category: ["D⦾MIN⦿'s", "Capsule", "Spherµ", "Cueillette"],
    definition: "0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - A - B - C - D - E - F",
    synonym: "Indissect",
    pronunce: "/ziɡ zag/",
    version: "ZigZag"
  },
  {
    term: "Hiérarchie Kentronienne (Wacwéen)",
    category: ["Mapnel", "Aursyl","K0re", "Capsule", "Spherµ", "Cueillette", "Museum", "Parc", "Citadel"],
    definition: "Rouge - Vert - Bleu - Blanc - Noir - Gris",
    school: "Répartition des rôles symboliques par six couleurs.",
    synonym: "KTN",
    pronunce: "/je.raʁ.ʃi kã.tʁo.njɛ̃/",
    version: "Société/Civilisation Kentronienne"
  },
  {
    term: "Semaine Hebdomadaire",
    category: ["Aursyl", "Capsule", "Tablette"],
    definition: "Cycle de 7 jours.",
    pronunce: "/sə.mɛn e.b.do.ma.dɛʁ/"
  },
  {
    term: "Calendrier Grégorien",
    category: ["Aursyl", "Capsule", "Tablette"],
    definition: "Tableau des 365 jours d'une année Solaire.",
    pronunce: "/ka.lã.dʁje ɡɹe.ɡo.rjɛ̃/",
    version: "Grégorien"
  },
  {
    term: "Syoneme Hebdomadaire",
    category: ["Lysrua", "Capsule", "Tablette"],
    definition: "Cycle de 6 jours.",
    pronunce: "/sjo.nɛm e.b.do.ma.dɛʁ/"
  },
  {
    term: "Calendrier Emmaïe",
    category: ["Lysrua", "Capsule", "Tablette"],
    definition: "Tableau des 364 jours d'une année Solaire-Lunaire.",
    school: "Calendrier aurnelcyen de 364 jours, prolongé par des jours intercalaires selon le cycle civil.",
    parent: "CritHAïe",
    pronunce: "/ka.lã.dʁje e.ma.i/",
    version: "Emmaïe"
  },
  {
    term: "MATRICE 5ync sur 5ync",
    category: ["Mapnel", "IUVALCY", "Capsule", "Monoa-Polyz", "Spherµ"],
    definition: "Symbolisme Pentagrammique [5x20] Mapnélo-Iuvalcien.",
    school: "Matrice mapnélo-iuvalcienne à cinq branches et vingt segments.",
    simplified: "Cinq sur Cinq, SNEWLC",
    synonym: "⛤",
    pronunce: "/sɛ̃k.syʁ.sɛ̃k/ (anglicisme) /siŋk.syʁ.siŋk/",
    version: "5ync sur 5ync"
  },
  {
    term: "MATRICE 4lien 4perçu",
    category: ["ARc⟁diA", "Aursyl", "Capsule", "Cueillette", "Cipher"],
    definition: "Partie bricolée [14 Mots Croisés] Arcado-Aursylien.",
    school: "Matrice arcado-aursylienne construite comme un ensemble de mots croisés.",
    simplified: "Alien Aperçu, lien perçu",
    synonym: "⊠",
    pronunce: "/ljɛ̃ pɛʁ.sy/ /a.ljɛn pɛʁ.sy/",
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
    synonym: "666, 🚽💦🏫",
    pronunce: "/a sis tik sko.lɛʁ/",
    meme: "Quelle chance d'aller aux toilettes!",
    version: "A6es 6tiques 6colaire, Assises Cystiques si Scolaire"
  },
  {
    term: "DOMINION",
    category: ["D⦾MIN⦿'s", "Persona"],
    definition: "Personnage de la prophétie non-prophétique.",
    school: "Figure centrale de la prophétie non-prophétique du cycle mythologique.",
    pronunce: "/do.mi.njɔ̃/"
  },
  {
    term: "Innok",
    category: ["D⦾MIN⦿'s", "Ekeline"],
    definition: "Pays aurnelcyen.",
    school: "Pays principal de la mythologie aurnelcyenne.",
    description: "Superficie de 47.093km² en forme de pieuvre/gant - 4.863 Habitants",
    parent: "Innokcien",
    pronunce: "/i.nɔk/",
    meme: "Un habitant n'est dans aucune des 3 villes."
  },
  {
    term: "Urflosia",
    category: ["Mapnel", "D⦾MIN⦿'s"],
    definition: "Capitale//Sifflet au centre d'Innok.",
    description: "Superficie de 2.152km² en forme d'ellipse/œil - 3.108 Habitants",
    parent: "Florescence",
    pronunce: "/uʁ.flo.zja/",
    version: "Urflosien, Urflosiens, Urflosienne, Urflosiennes"
  },
  {
    term: "Altopus",
    category: ["IUVALCY", "D⦾MIN⦿'s"],
    definition: "Ville du nord d'Innok.",
    school: "Ville septentrionale d’Innok.",
    description: "Superficie de 601km² en forme de carré - 624 Habitants",
    parent: "TRIBALT//GESTALT",
    pronunce: "/al.to.pys/",
    version: "Altopien, Altopiens, Altopienne, Altopiennes"
  },
  {
    term: "Jliru",
    category: ["ARc⟁diA", "D⦾MIN⦿'s"],
    definition: "Ville de l'est d'Innok.",
    school: "Ville orientale d’Innok.",
    description: "Superficie de 1.748km² en forme de triangle - 1.130 Habitants",
    parent: "JooQooBoo, aLIaKKaHH, eRUeGGeHH",
    pronunce: "/sʁɛ̃/",
    version: "Jlirien, Jliriens, Jlirienne, Jliriennes"
  },
  {
    term: "Boss",
    category: ["Aursyl", "D⦾MIN⦿'s"],
    definition: "Ville du centre d'Innok.",
    school: "Ville centrale d’Innok.",
    description: "Superficie de 3.310km² en forme de rond - 2.514 Habitants",
    parent: "JooQooBoo, aLIaKKaHH, eRUeGGeHH",
    pronunce: "/sʁɛ̃/",
    version: "Bossien, Bossiens, Bossienne, Bossiennes"
  },
  {
    term: "Rantlot",
    category: ["D⦾MIN⦿'s", "Fostrah", "Uewij", "Wacwe", "Logjēm"],
    definition: "Entreprise communauté d'architecture sans possession distinguée.",
    school: "Communauté architecturale sans propriété individuelle forte.",
    pronunce: "/ʁɑ̃.tlo/",
    meme: "Rantlot était unanimement d'accord sur le fait que ces gens n'ont rien à faire."
  },
  {
    term: "NEON",
    category: ["D⦾MIN⦿'s", "UiNo", "Vydnitt", "Nezrog", "Wacwe"],
    definition: "Structure de l'enseignement selon la volonté de X.",
    school: "Structure d'enseignement d'Innok.",
    pronunce: "/ne.ɔ̃/"
  },
  {
    term: "H2O",
    category: ["D⦾MIN⦿'s", "Vydnitt", "Ekeline", "Wacwe", "Leqwa", "Slacpi°"],
    definition: "Établissement de la recherche vers l'appartenance.",
    school: "Établissement de recherche lié à l'appartenance et à l'intégration.",
    pronunce: "/aʃ də o/ ou /ɔ/",
    meme: "Leqwa en tant qu'être et son devenir […]"
  },
  {
    term: "TouRise",
    category: ["D⦾MIN⦿'s", "Vydnitt", "Xyfurn", "Wacwe"],
    definition: "Organe Touristique pour s'enrichir et trouver sa place.",
    school: "Organe touristique et d'insertion sociale.",
    pronunce: "/tu.riz/"
  },
  {
    term: "CGU(Carpet Glance Unit)",
    category: ["D⦾MIN⦿'s", "Nezrog", "Slacpi°", "Tôhla"],
    definition: "Institution militaire d'espionage imposant le minimum de sang.",
    school: "Institution militaire et d'espionnage à faible effusion de sang.",
    pronunce: "/se ʒe y/ ou /ka.pət ɡlɑ̃s ju.nit/"
  },
  {
    term: "Esliz",
    category: ["D⦾MIN⦿'s", "Leqwa", "Logjēm", "Slacpi°", "Tôhla"],
    definition: "Association promulgant l'indépendance guslacro-sizrewilienne.",
    school: "Association défendant une indépendance locale.",
    pronunce: "/ɛs.lis/"
  },
  {
    term: "NEET Club",
    category: ["D⦾MIN⦿'s", "Logjēm", "Tôhla"],
    definition: "Groupe de glandeurs sous-estimé qui aime le chez-soi.",
    school: "Groupe domestique de marginaux sous-estimés.",
    pronunce: "/nit kləb/"
  },
  {
    term: "xXx",
    category: ["D⦾MIN⦿'s"],
    definition: "Organisation à l'origine de toute la tradition de l'idée-maître.",
    school: "Organisation à l'origine d'une tradition directrice fondamentale.",
    pronunce: "/iks iks iks/"
  },
  {
    term: "RaycRa Force",
    category: ["D⦾MIN⦿'s"],
    definition: "Puissance militaire en vagabondage.",
    school: "Force militaire itinérante.",
    pronunce: "/ʁɛ.kʁa fɔʁs/"
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
        itemElement.appendChild(defP);
      }

      const fields = [
        { key: 'school', label: getFieldLabel('school', false) },
        { key: 'implication', label: getFieldLabel('implication', false) },
        { key: 'simplified', label: getFieldLabel('simplified', false) },
        { key: 'description', label: getFieldLabel('description', false) },
        { key: 'example', label: getFieldLabel('example', false) },
        { key: 'quote', label: getFieldLabel('quote', false) },
        { key: 'parent', label: getFieldLabel('parent', false) },
        { key: 'etymology', label: getFieldLabel('etymology', false) },
        { key: 'synonym', label: getFieldLabel('synonym', false) },
        { key: 'pronunce', label: getFieldLabel('pronunce', false) },
        { key: 'meme', label: getFieldLabel('meme', false) },
        { key: 'surnatural', label: getFieldLabel('surnatural', false) },
        { key: 'version', label: getFieldLabel('version', false) },
      ];

      fields.forEach((field) => {
        if (item[field.key]) {
          const p = document.createElement('p');
          p.textContent = `${field.label} ${item[field.key]}`;
          const visibilityKey = getDetailVisibilityKey(field.key);

          p.classList.add('is-detail');
          p.classList.add('detail-item');
          p.classList.add(`detail-${visibilityKey}`);
          p.setAttribute('data-detail-type', visibilityKey);

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

const fieldLabelConfig = {
  school: { symbol: '🎓', name: 'École' },
  definition: { symbol: '◈', name: 'Définition' },
  implication: { symbol: '⇒', name: 'Implication' },
  simplified: { symbol: '👌', name: 'Simplifié' },
  description: { symbol: '🖼️', name: 'Description' },
  example: { symbol: '💡', name: 'Exemple' },
  quote: { symbol: '❝ ❞', name: 'Citation' },
  parent: { symbol: '#', name: 'Parent' },
  etymology: { symbol: 'ⓘ', name: 'Étymologie' },
  synonym: { symbol: '≈', name: 'Synonyme' },
  pronunce: { symbol: '🗣', name: 'Prononciation' },
  meme: { symbol: '🗿', name: 'Phenomeme' },
  surnatural: { symbol: '🔮', name: 'Surnaturel' },
  version: { symbol: '≍', name: 'Versions' },
};

const copyFieldLabels = Object.fromEntries(
  Object.entries(fieldLabelConfig).map(([key, value]) => [key, value.symbol])
);

function getFieldLabel(fieldKey, includeName = false, position = 'after-icon') {
  const config = fieldLabelConfig[fieldKey] || { symbol: fieldKey, name: fieldKey };
  if (!includeName) return config.symbol;
  return position === 'before-icon'
    ? `${config.name} ${config.symbol}`
    : `${config.symbol} ${config.name}`;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getVocabularyEntry(termName) {
  const target = String(termName ?? '').trim();
  if (!target) return null;
  return vocabularyData.find((item) => item.term && item.term.toLowerCase() === target.toLowerCase()) || null;
}

const ALL_DICTIONARY_FIELDS = [
  'definition',
  'school',
  'implication',
  'simplified',
  'description',
  'example',
  'quote',
  'parent',
  'etymology',
  'synonym',
  'pronunce',
  'meme',
  'surnatural',
  'version',
];

function normalizeDictionaryFieldKey(fieldKey) {
  return String(fieldKey ?? '').trim();
}

function resolveDictionaryFields(fieldNames) {
  if (
    fieldNames == null ||
    fieldNames === 'all' ||
    (Array.isArray(fieldNames) && (fieldNames.length === 0 || fieldNames.includes('all')))
  ) {
    return ALL_DICTIONARY_FIELDS.slice();
  }

  const list = Array.isArray(fieldNames) ? fieldNames : [fieldNames];
  return list.map(normalizeDictionaryFieldKey).filter(Boolean);
}

function getEntryFieldValue(entry, fieldKey) {
  const key = normalizeDictionaryFieldKey(fieldKey);
  const value = entry?.[key];
  if (value == null) return '';
  const text = String(value).trim();
  return text;
}

function getDetailVisibilityKey(fieldKey) {
  return normalizeDictionaryFieldKey(fieldKey);
}

function formatDictionaryEntryHtml(entry, fieldNames = 'all', extraClass = 'definizer', extraStyle = 'font-size: 1em;', includeFieldNames = false, options = {}) {
  if (!entry) return '';

  const normalizedFields = resolveDictionaryFields(fieldNames);
  const definitionText = normalizedFields.includes('definition') ? getEntryFieldValue(entry, 'definition') : '';
  const detailParts = [];

  normalizedFields.forEach((fieldKey) => {
    const key = normalizeDictionaryFieldKey(fieldKey);
    if (key === 'definition') return;

    const value = getEntryFieldValue(entry, key);
    if (!value) return;

    const visibilityKey = getDetailVisibilityKey(key);
    const label = includeFieldNames
      ? getFieldLabel(key, true, options.fieldNamePosition)
      : (copyFieldLabels[key] || key);
    const symbolOnlyLabel = !includeFieldNames && Boolean(copyFieldLabels[key]);
    const line = symbolOnlyLabel ? `${label} ${value}` : `${label}: ${value}`;

    detailParts.push(
      `<span class="is-detail detail-item detail-${visibilityKey}" data-detail-type="${visibilityKey}"><br>${escapeHtml(line)}</span>`,
    );
  });

  if (!definitionText && detailParts.length === 0) return '';

  const definitionLabel = includeFieldNames && definitionText
    ? `${escapeHtml(getFieldLabel('definition', true, options.fieldNamePosition))}: `
    : '';
  const body = `${definitionLabel}${escapeHtml(definitionText)}${detailParts.join('')}`;
  const termPrefix = options.rappel === '+' || options.rappel === 'plus'
    ? '<span class="rappel">(RAPPEL+)</span>'
    : options.rappel
      ? '<span class="rappel">(RAPPEL)</span>'
      : (options.termPrefix || '');
  const termHtml = `${termPrefix}${escapeHtml(entry.term)}`;

  if (options.format === 'dt-dd') {
    const block = `<dt><b><u>${termHtml}</u></b></dt>
        <dd>${body}</dd><br>`;
    if (options.ddOnly) return `<div>${block}</div>`;
    return `<div class="${extraClass}" style="${extraStyle}">${block}</div>`;
  }

  const dd = `<dd><b><u>${termHtml}</u></b>: ${body}</dd><br>`;
  if (options.ddOnly) return `<div>${dd}</div>`;

  return `<div class="${extraClass}" style="${extraStyle}">
      ${dd}
    </div>`;
}

function formatDictionaryBlock(termName, fieldNames = ['definition', 'implication', 'simplified', 'description']) {
  const entry = getVocabularyEntry(termName) || vocabularyData.find((item) => item.term && item.term.toLowerCase().includes(String(termName ?? '').trim().toLowerCase()));
  if (!entry) return '';

  const content = formatDictionaryEntryHtml(entry, fieldNames);
  if (!content) return '';

  return content;
}

window.copyDictionaryCategory = function copyDictionaryCategory(termName, fieldNames = ['definition', 'implication', 'simplified', 'description']) {
  const block = formatDictionaryBlock(termName, fieldNames);
  if (!block) return null;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(block).catch(() => {
      const temp = document.createElement('textarea');
      temp.value = block;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      temp.remove();
    });
  } else {
    const temp = document.createElement('textarea');
    temp.value = block;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    temp.remove();
  }

  return block;
};

window.copyDictionaryField = function copyDictionaryField(termName, fieldName) {
  return window.copyDictionaryCategory(termName, [fieldName]);
};

window.renderDictionaryCategoryGroup = function renderDictionaryCategoryGroup(termNames, fieldNames = ['definition', 'implication', 'simplified', 'description']) {
  const names = Array.isArray(termNames) ? termNames : [termNames];
  const groups = names
    .map((termName) => {
      const entry = getVocabularyEntry(termName);
      if (!entry) return '';
      return formatDictionaryEntryHtml(entry, fieldNames);
    })
    .filter(Boolean)
    .join('\n');

  return groups;
};

window.renderDictionarySelection = function renderDictionarySelection(selectionMap) {
  if (!selectionMap || typeof selectionMap !== 'object') return '';
  const includeFieldNames = Boolean(selectionMap.showFieldNames);
  const fieldNamePosition = selectionMap.fieldNamePosition || 'after-icon';

  function resolveTermConfig(termConfig) {
    if (termConfig && typeof termConfig === 'object' && !Array.isArray(termConfig) && termConfig.term) {
      return {
        name: termConfig.term,
        options: {
          rappel: termConfig.rappel,
          termPrefix: termConfig.termPrefix || '',
          format: termConfig.format || '',
        },
      };
    }
    return { name: termConfig, options: {} };
  }

  const rendered = Object.entries(selectionMap)
    .map(([termName, config]) => {
      if (termName === 'showFieldNames' || termName === 'fieldNamePosition') return '';

      if (config && typeof config === 'object' && Array.isArray(config.terms)) {
        const fieldNames = config.fields == null ? 'all' : config.fields;
        const extraClass = Object.prototype.hasOwnProperty.call(config, 'className')
          ? config.className
          : 'definizer';
        const extraStyle = Object.prototype.hasOwnProperty.call(config, 'style')
          ? config.style
          : '';
        const format = config.format || '';
        const groupedTerms = Array.isArray(config.terms) ? config.terms : [config.terms];
        const innerHtml = groupedTerms
          .map((groupTermConfig) => {
            const resolved = resolveTermConfig(groupTermConfig);
            const entry = getVocabularyEntry(resolved.name);
            if (!entry) return '';
            const showNames = config.includeFieldNames == null
              ? includeFieldNames
              : Boolean(config.includeFieldNames);
            return formatDictionaryEntryHtml(entry, fieldNames, extraClass, extraStyle, showNames, {
              ...resolved.options,
              format: resolved.options.format || format,
              fieldNamePosition,
              ddOnly: true,
            });
          })
          .filter(Boolean)
          .join('\n');

        if (!innerHtml) return '';
        const classAttr = extraClass ? ` class="${extraClass}"` : '';
        const styleAttr = extraStyle ? ` style="${extraStyle}"` : '';
        return `<div${classAttr}${styleAttr}>${innerHtml}</div>`;
      }

      const entry = getVocabularyEntry(termName);
      if (!entry) return '';

      if (Array.isArray(config)) {
        return formatDictionaryEntryHtml(entry, config, 'definizer', 'font-size: 1em;', includeFieldNames, {
          fieldNamePosition,
        });
      }

      if (config && typeof config === 'object') {
        const fieldNames = config.fields == null ? 'all' : config.fields;
        const extraClass = config.className || 'definizer';
        const extraStyle = config.style || '';
        const showNames = config.includeFieldNames == null
          ? includeFieldNames
          : Boolean(config.includeFieldNames);
        return formatDictionaryEntryHtml(entry, fieldNames, extraClass, extraStyle, showNames, {
          rappel: config.rappel,
          termPrefix: config.termPrefix || '',
          format: config.format || '',
          fieldNamePosition,
        });
      }

      return formatDictionaryEntryHtml(entry, [config], 'definizer', 'font-size: 1.5em;', includeFieldNames, {
        fieldNamePosition,
      });
    })
    .filter(Boolean)
    .join('\n');

  return rendered;
};

window.mountDictionarySelection = function mountDictionarySelection(container, selectionMap) {
  if (!container) return '';
  const html = window.renderDictionarySelection(selectionMap);
  container.innerHTML = html;
  if (window.detailVisibility && typeof window.detailVisibility.update === 'function') {
    window.detailVisibility.update();
  }
  return html;
};

window.copyDictionaryCategoryGroup = function copyDictionaryCategoryGroup(termNames, fieldNames = ['definition', 'implication', 'simplified', 'description']) {
  const block = window.renderDictionaryCategoryGroup(termNames, fieldNames);
  if (!block) return null;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(block).catch(() => {
      const temp = document.createElement('textarea');
      temp.value = block;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      temp.remove();
    });
  } else {
    const temp = document.createElement('textarea');
    temp.value = block;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    temp.remove();
  }

  return block;
};

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
  description: true,
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
    Object.keys(this).forEach((key) => {
      if (typeof this[key] !== 'boolean') return;
      const visible = this[key];
      document
        .querySelectorAll(
          '.detail-item.detail-' +
            key +
            ', [data-detail-type="' +
            key +
            '"]',
        )
        .forEach((el) => {
          el.style.display = visible ? '' : 'none';
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
