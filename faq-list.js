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
      answer: `Il n'y a pas de réponse honnête en heures. Si vous êtes à l'aise avec la littérature vous gagnez un temps considérable mais fiez vous aux nombre de mots et augmentez le pourcentage par 33% à cause des néologismes.`
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
      answer: `Oui. Il est installable comme application sur mobile ou desktop et fonctionne sans connexion une fois chargé.`
    },
    {
      question: "AURNELCY se positionnez t-il stoïcien ?",
      answer: `Il s'y positionne à moitié, avouant que les personnalités stoïcienne se débrouillent mieux en terre aursylienne, il consacre aussi une grande place à la vulnérabilité. Il y contient des écoles inspirés mais reste la coquinerie cachotière.`
    },
    {
      question: "Quelle est l'interprétation du vrai monde actuelle ?",
      answer: `Fenekohq interprète le monde réel comme le théorème de 0K sous le joug d'Aursyl d'un dosage 20-80% à 30-70%.`
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
