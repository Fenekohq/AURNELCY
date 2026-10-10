(function () {
  const faqItems = [
    {
      question: "C'est quoi ⟁URNELCY ?",
      answer: `Un univers de système de sens: philosophie, théogonie, langage néologique et "bullshit ésotérique". C'est une cosmogonie personnelle construite autour de 5 théorèmes et d'une mythologie.`
    },
    {
      question: "Qui est Fenekohq ?",
      answer: `L'auteur d'⟁URNELCY.`
    },
    {
      question: "Par où commencer ?",
      answer: `De haut en bas, dans l'ordre. Le site se lit de A à Z sans raccourcis possibles.`
    },
    {
      question: "C'est en quelle langue ?",
      answer: `Trois langues entremêlées : français (~35% global), anglais (~25%) et néologique propre à ⟁URNELCY (~40%). La proportion varie par théorème — IUVALCY est majoritairement en anglais, Lysrua est majoritairement néologique, Mapnel est à moitié néologique. Le vocabulaire s'introduit progressivement au fil de la lecture.`
    },
    {
      question: "Combien de temps faut-il pour lire ⟁URNELCY ?",
      answer: `Il n'y a pas de réponse honnête en heures. Si vous êtes à l'aise avec la littérature vous gagnez un temps considérable mais fiez vous aux nombre de mots et augmentez le pourcentage par 33% à cause des néologismes. 100 mots par minute équivaut pour 10.000 mots à 1 heure et 40 minutes et multipliez par rapport aux nombre total trouvable dans AURNELCY>Introduction>Nombre de Mots`
    },
    {
      question: "Est-ce qu'⟁URNELCY est terminé ?",
      answer: `Non, c'est un projet en cours pour encore bien longtemps (2023-?), il est important de noter que tout peut subir un changement à l'heure actuelle.`
    },
    {
      question: "Qu'est-ce que 'La coquinerie cachotière' comme école de pensée ?",
      answer: `L'auto-description qu'⟁URNELCY s'entend car il n'est classable dans aucune catégorie existante et s'avère marginal.`
    },
    {
      question: "Ya t-il de l'Intelligence Artificielle dans le contenu ?",
      answer: `Oui, il en contient et pour transparence je vais lister tout ce qui est fait par IA ou partiellement sous modifications, mais premièrement, à noter que Fenekohq avait commencé le coding pour unique raison ce projet comme objectif plus que le coding, il connaît au fur et à mesure le HTML, un peu de CSS mais pas vraiment de JavaScript qui est donc à admettre fait par IA sous son commandement donc, il est tout de même celui qui imagine et construit l'architecture. Ce qui est écrit par IA: AURNELCY en un mot, Termes de la Nomenclature(définitions des catégories), Cinq Critères d'Adéquation, Les Thesis(très partiellement), Capacités exceptionnelles d'Homo sapiens/Points Faibles d'Homo Sapiens, Simone Weil Dysupie, Tableaux Conjugaisons des Verbes, Bourdieu Capital, 「Salvation」, Mills Élite du Pouvoir, Manipule, Société, 「OUROBOROS」(partiellement), Système de Ponzi.`
    },
    {
      question: "Qui sont les 11 Aurnelcyens ?",
      answer: `Ce sont les personnages: Fostrah, UiNo, Uewij, Vydnitt, Xyfurn, Nezrog, Ekeline, Wacwe(ou Leqwa), Logjēm, Slacpi° et Tôhla.`
    },
    {
      question: "Quelle est la différence entre une Louange et un Laurier ?",
      answer: `Les Louanges sont les œuvres brèves notées entre guillemets 「 」. Les Lauriers sont les grandes œuvres notées entre guillemets doubles 『 』.`
    },
    {
      question: "Qu'est-ce que les \"Sujet\" au début de chaque œuvre ?",
      answer: `C'est cadre éditorial systématique qui précède chaque œuvre ou section et un mode de lecture proposé avant l'entrée dans le texte.`
    },
    {
      question: "Qu'est-ce que les auteurs 【X】 signifient dans le texte ?",
      answer: `Les balises 【X】 indiquent l'auteur d'un passage ou d'une section. Certains sont des personnages de la mythologie, d'autres sont des entités floues. Ce dispositif fait qu'⟁URNELCY n'est jamais raconté depuis une seule voix, c'est une œuvre polyphonique où chaque section appartient à quelqu'un.`
    },
    {
      question: "Qu'est-ce que les Articulations ?",
      answer: `Les six articulations sont les tableaux de pronoms et de structures grammaticales propres à chaque théorème.`
    },
    {
      question: "Qu'est-ce que les Cartes Conceptuelles ?",
      answer: `Chaque chapitre se conclut par une mind map qui synthétise sa structure. Il y en a sept (0K, Mapnel, IUVALCY, ARc⟁diA, Aursyl, Lysrua, Articulations). Elles permettent de voir d'un coup les relations hiérarchiques entre les concepts sans avoir à tout relire.`
    },
    {
      question: "Pourquoi autant de musique japonaise dans les références d'EURÊK⟁ ?",
      answer: `La musique japonaise est énormément soutiré car Fenekohq s'y baigne.`
    },
    {
      question: "Qu'est-ce que RED-1% ?",
      answer: `Un signal de danger structurel, "un signe de transparence et d'un faible niveau de rouge kentronien, suffisant pour que toute la structure se désagrège." Dans le Picol-Kentron, le rouge est la couleur de la Protection et de la Préservation. RED-1% signifie que la protection est quasi-absente et que l'ensemble du système social perd sa cohérence. C'est l'un des indicateurs les plus concrets d'une forte présence de Monop%Polym à l'échelle collective, c'est en un sens ce pourquoi aursyl ne doit pas s'absolutiser totalement pour trouver sa pérennité.`
    },
    {
      question: "La PWA peut-elle fonctionner hors ligne ?",
      answer: `Oui. Il est installable comme application sur mobile ou desktop et fonctionne sans connexion une fois téléchargé avec le bouton en haut à gauche [⬇].`
    },
    {
      question: "AURNELCY se positionnez t-il stoïcien ?",
      answer: `Il s'y positionne à moitié, avouant que les personnalités stoïcienne se débrouillent mieux en terre aursylienne, il consacre aussi une grande place à la vulnérabilité. Il y contient des écoles inspirés mais reste la coquinerie cachotière.`
    },
    {
      question: "Quelle est l'interprétation du vrai monde actuelle ?",
      answer: `Fenekohq interprète le monde réel comme le théorème de 0K sous le joug d'Aursyl d'un dosage 20-80% à 30-70%.`
    },
    {
      question: "Quel système économique pour AURNELCY ?",
      answer: `économie signifie 'administration/gestion d'une maison', dans l'économie aurnelcyenne on n'est pas dans le droit chemin parce qu'on est payé, on ne devient pas maître des biens par une transaction dans le marché, la priorité du système est la protection de l'innocence et non la privatisation du monde, pour cela, l'appartenance identitaire cosmopolitaine suffit, l'espèce est modeste et s'optimise pour vivre et faire vivre le battement civil tout entier, une biohumanité qui tue, vole, se suicide, se drogue est symbole de défaite absolue, cependant le recourt au meurtre n'est pas banni en absolu.`
    },
    {
      question: "Comment concilier la protection de l'innocence avec le fait que la violence ou le meurtre ne soient pas bannis en absolu ?",
      answer: `Aurnelcy refuse pas pacifisme naïf qui livre les innocents à la ruine et assume que non, toutes les vies ne se valent pas surtout lorsque l'aursylien use de violences subtiles là où le bannissement de la violence et de sa définition à revoir reviendrait à faire gagner aursyl dans une passivité populaire et un dénoncement maladif de la supériorité morale. L'interdiction morale absolue du meurtre deviendrait une arme au service du tyran mais si l'exclusion de certains modes d'existences psychiques et comportementaux est modéré, alors la violence peut contribuer à un bien largement plus grand.`
    },
    {
      question: "Aursyl vs Aurnelcy = manichéisme ?",
      answer: `Aursyl mauvais, Aurnelcy bon, il l'est dans sa forme et comme levier pour nommer les pièges réel, mais dans sa finalité il conçoit l'innocence à se porter léger au-dessus de la haine et du fanatisme. On ne peut pas concevoir de bonne cité sans avoir en tête la mauvaise.`
    },
    {
      question: "Quel est la doctrine aurnelcyenne ?",
      answer: `Chaque vivant naît sans destination assignée, capable d'harmonie autant que de déperdition. Des forces organisées cherchent à capturer cette capacité au profit d'un système qui se perpétue. La réponse pour cela est personnelle, se construire lucidement, nommer ce qui résiste à être nommé, fabriquer ses propres repères en sachant qu'on les fabrique. Participer à un collectif sans s'y dissoudre. Mourir sans que ça invalide ce qui a été vécu.`
    },
    {
      question: "Pourquoi AURNELCY ne pose aucune problématique ?",
      answer: `Parce qu'il les prévient, les désamorce ou les tue.`
    },
    {
      question: "AURNELCY reprend-il l'idée chrétienne des enfants ?",
      answer: `L'enfant est énormément dépendant de son entourage, il est capable d'actions blâmables et de sournoiseries, c'est une créature incapable de négocier, incroyablement têtu, facilement manipulable, sanitairement superficiel et bien que pouvant choquer, un urizen avisé à dose modéré est nécessaire en bas âge. Donc pour répondre à la question, pas vraiment. La stigmatisation et la persécution entre enfants bien que normal est une étape à la maturation aux grâce dépendantes de l'impact de la somme des adultes. Si la santé spirituelle est juste, alors les adolescents ne créeront pas le moindre souci quand à la nature différentielle de la réalité.`
    },
    {
      question: "Les thématiques d'Ekeline sont sexistes ?",
      answer: `AURNELCY n'impose aucun rôle social aux femmes et ni aux hommes. Bien qu'Ekeline puisse paraître stéréotypé, les tendances des femmes en philosophie sont surtout éthiques tandis qu'ils sont métaphysiques pour les hommes. Vous devez vous renseigner sur les pays qui ont mis un point d'honneur sur l'égalité des genres, la différence des choix professionnels, des rôles sociaux et admettre qu'Ekeline bien qu'elle soit une figure assez traditionnelle, garde sa légitimité représentative.`
    },
    {
      question: "AURNELCY fait preuve d'élitisme spirituel ?",
      answer: `L'aurnelcyen considère l'okien(le peuple) incapable de s'émanciper de l'agonie aursylienne sans la créativité spirituelle qui hausse la vie humaine au niveau maximal.`
    },
    {
      question: "Si 0K prône l'accès universel et l'humilité biologique, pourquoi créer un métalangage de néologismes qui verrouille l'accès au texte ?",
      answer: `Si aurnelcy utiliserait le vocabulaire ordinaire, il jouerait le jeu d'aursyl qui l'absorberait dans le langage standard limitant la conceptualisation de la révolte et du renouveau civilisationnel.`
    },
  ];

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatAnswer(text) {
    return escapeHtml(text)
      .split(/\n\s*\n/)
      .map((paragraph) => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`)
      .join('');
  }

  function renderFaqList() {
    const container = document.getElementById('faq-list');
    if (!container) {
      return;
    }

    container.innerHTML = '';

    const styleId = 'faq-list-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        #faq-list {
          display: grid;
          gap: 0.9rem;
          margin: 1.5rem 0;
        }
        #faq-list details {
          border: 1px solid var(--text-color, #fff);
          border-radius: 10px;
          padding: 0.9rem 1rem;
          background: rgba(255,255,255,0.04);
        }
        #faq-list summary {
          cursor: pointer;
          font-weight: 600;
          list-style: none;
        }
        #faq-list summary::-webkit-details-marker {
          display: none;
        }
        #faq-list .faq-answer {
          margin-top: 0.8rem;
          line-height: 1.6;
          font-size: 0.98rem;
        }
        #faq-list .faq-answer p {
          margin: 0 0 0.7rem;
        }
      `;
      document.head.appendChild(style);
    }

    const list = document.createElement('div');
    list.className = 'faq-list';

    faqItems.forEach((item) => {
      const details = document.createElement('details');
      const summary = document.createElement('summary');
      summary.textContent = item.question;

      const answer = document.createElement('div');
      answer.className = 'faq-answer';
      answer.innerHTML = formatAnswer(item.answer);

      details.appendChild(summary);
      details.appendChild(answer);
      list.appendChild(details);
    });

    container.appendChild(list);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFaqList);
  } else {
    renderFaqList();
  }
})();
