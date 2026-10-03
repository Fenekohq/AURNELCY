document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('terme-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    showFieldNames: true,
    fieldNamePosition: 'before-icon',
    'terme': {
      className: 'definizer',
      style: 'font-size: 1.5em; text-align: center;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('ok-core-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    showFieldNames: true,
    fieldNamePosition: 'before-icon',
    pair: {
      terms: ['Vie', 'Mort'],
      className: 'definizer-2',
      style: 'font-size: large;'
    },
    'Homo Sapien': {
      className: 'definizer',
      style: 'font-size: large; text-align: center;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('je-ne-sais-pas-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    showFieldNames: true,
    fieldNamePosition: 'before-icon',
    'Je ne sais pas': {
      className: 'definizer',
      style: 'font-size: 1.5em; text-align: center;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('heros-peregrination-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: ['Héros/Héroïne', 'Pérégrination'],
      className: 'definizer',
      style: 'text-align: center; font-size: x-large; margin: 64px auto;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('monoa-polyz-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'Monoa-Polyz': {
      className: 'definizer',
      style: 'text-align: center; font-size: x-large;'
    },

    'monoa-group': {
      terms: ['Monom/Mono-Mémoire', 'Monop/Mono-Prohibition', 'Polyp/Poly-Projection', 'Polym/Poly-Malaise', '&(Terla)', '%(Derla)'],
      className: 'definizer-2',
    },

    'monoa-pairs': {
      terms: ['Monom&Polyp', 'Monop%Polym'],
      className: 'definizer-2',
      style: 'font-size: large;'
    },

    'monoa-others': {
      terms: ['Monstre 0', 'Ventriloque', 'Dévore-Novice'],
      className: 'definizer',
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('aventure-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: [
        { term: 'Monstre 0', rappel: true },
        'Enquête',
        'Directions Souveraines'
      ],
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('illusion-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: ['Illusion', 'Atelier Ataraxial', 'Fluide Élémentaire'],
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('blessure-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: ['Blessure Fossile', 'Miroir Clairvoyant', 'Gravité Centrale'],
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('naustre-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: ['Naustre C', "Palpiter de l'Infini", 'Semaine Sublime', 'Hyenuul'],
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('macabrisme-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: ['Macabrisme', 'Gaunie', 'Florescence', 'Innokcien'],
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('entropied-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: ['EntroPied', 'Filet', 'Picol-Kentron', 'Chromel'],
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('fon-rel-inc-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: ['Fon:Rel:Inc', 'Fondations', 'Inclinaisons', 'Relativité'],
      className: 'definizer',
      format: 'dt-dd'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('sce-syn-cel-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: ['Scé;Syn;Cel', 'Scénario', 'Cellules', 'Syndrome'],
      className: 'definizer',
      format: 'dt-dd'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('travail-ventriloque-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: ['Travail', { term: 'Ventriloque', rappel: true },],
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('veldiac-intimacy-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: ['Veldiac', 'INTIMACY'],
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('tacles-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: ["Équation d'Efficacité Inanitoire", 'Flingue', 'Trompette'],
      className: 'definizer',
      style: 'text-align: center;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('melody-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'Mélodie Inépelable': {
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('sfivoq-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'Sfivoq': {
      className: 'definizer',
      style: 'font-size: large; text-align: center;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('duel-xceptionnel-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'Duel Xceptionnel': {
      className: 'definizer',
      style: 'font-size: x-large; text-align: center;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('monpol-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    MonPol: {
      className: 'definizer',
      style: 'font-size: large; text-align: center;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('crith-trio-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    pair: {
      terms: ['Crithekiel', 'Critheqiel'],
      className: 'definizer',
      style: 'display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; justify-items: center; text-align: center; margin-top: 56px; font-size: large;'
    },
    'Critheçiel': {
      className: 'definizer',
      style: 'text-align: center; font-size: large; margin-top: 16px;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('goalois-crethole-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: ['Goalois(e)', 'Crethole'],
      className: 'definizer',
      style: 'text-align: center;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('intimacy-xaraxerex-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: [
        { term: 'INTIMACY', rappel: true },
        'XaraЖereX'
      ],
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('dejavu-crithercation-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: ['Déjà-Vu', 'Critherçation'],
      className: 'definizer',
      style: 'text-align: center;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('travail-veldiac-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    grid: {
      terms: [
        { term: 'Travail', rappel: true },
        { term: 'Veldiac', rappel: true },
        'Veldiac Jtie',
        'Veldiac AL'
      ],
      className: 'definizer-2'
    },
    'Veldiac AJtieL': {
      className: 'definizer',
      style: 'text-align: center;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('gaunie-ganie-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    pair: {
      terms: [
        { term: 'Gaunie', rappel: true },
        'Ganie'
      ],
      className: 'definizer-2'
    },
    'GaunieGanie': {
      className: 'definizer',
      style: 'text-align: center;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('illusion-rappel-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'Illusion': {
      className: 'definizer',
      style: 'text-align: center;',
      rappel: true
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('crithaie-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'CritHAïe': {
      className: 'definizer',
      style: 'text-align: center;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('tribalt-gestalt-mobius-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    pair: {
      terms: ['TRIBALT', 'GESTALT'],
      className: 'definizer-2'
    },
    'Möbius Netwow': {
      className: 'definizer',
      style: 'text-align: center; font-size: large;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('protagonism-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'PROTAGONISM': {
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('crith-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'Crith': {
      className: 'definizer',
      style: 'font-size: large; text-align: center;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('matr1-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'MATRICE 5ync sur 5ync': {
      className: 'definizer',
      style: 'text-align: center; font-size: 2em; margin: 64px auto;',
      format: 'dt-dd'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('zoozaze-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'ZooZaZe': {
      className: 'definizer',
      style: 'text-align: center; font-size: x-large;'
    },
    trio: {
      terms: ['JooQooBoo', 'aLIaKKaHH', 'eRUeGGeHH'],
      className: 'definizer-2',
      style: 'display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; justify-items: center; text-align: center; margin-top: 56px; padding: 0 10px; font-size: large;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('letricot-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'Letricot': {
      className: 'definizer',
      style: 'margin: 64px auto;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('pamabwa-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'PAMABWA': {
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('mmpp-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    '~Monom&moceM~🙵~Polyp&pocuP~': {
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('fantomirsa-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: ['fantômiseur', 'Mirsa Mirsa Mua'],
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('spark-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'SP⟁RK': {
      className: 'definizer',
      style: 'font-size: large;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('travel-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'Tra§Vel': {
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('gorgeous-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: ['Câble', 'InfiNieR', 'Blehdwoluzvi'],
      className: 'definizer',
    },
    'Gorgeous Raper': {
      className: 'definizer',
      style: 'text-align: center; font-size: x-large;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('urizen-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'Urizen': {
      className: 'definizer',
      style: 'text-align: center; font-size: x-large; margin: 64px auto;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('mppm-components-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    pair: {
      terms: [{ term: 'Monop/Mono-Prohibition', rappel: true }, { term: 'Polym/Poly-Malaise', rappel: true }],
      className: 'definizer',
      style: 'display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; justify-items: center; text-align: center; margin-top: 56px; font-size: large;'
    },
    '%(Derla)': {
      className: 'definizer',
      style: 'text-align: center; font-size: large; margin-top: 16px;',
      rappel: true
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('mppm-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'Monop%Polym': {
      className: 'definizer',
      style: 'text-align: center; font-size: x-large;',
      rappel: true
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('tacles-rappel-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: [{ term: "Équation d'Efficacité Inanitoire", rappel: true }, { term: 'Flingue', rappel: true }, { term: 'Trompette', rappel: true }],
      className: 'definizer',
      style: 'text-align: center;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('viix-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: [{ term: 'Macabrisme', rappel: true }, { term: 'Blessure Fossile', rappel: true }, { term: 'EntroPied', rappel: true }],
      className: 'definizer'
    },
    'VII-X': {
      className: 'definizer',
      style: 'text-align: center; font-size: large;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('conte-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: [{ term: 'Enquête', rappel: true }, 'Conte Sanguinaire'],
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('infexcuse-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: [{ term: 'Bledwoluzvi', rappel: true }, { term: 'Letricot', rappel: true }],
      className: 'definizer'
    },
    'InFeXcuse': {
      className: 'definizer',
      style: 'font-size: large;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('hoemnet-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: [{ term: 'Ventriloque', rappel: true }, 'Hœmnet'],
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('mutile-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'Mutilé(e)': {
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('tribalt-rappel-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'tribalt': {
      className: 'definizer',
      rappel: true
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('prota-anta-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    pair: {
      terms: [{ term: 'PROTAGONISM', rappel: true }, 'ANTAGONISM'],
      className: 'definizer-2',
      style: 'font-size: large;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('cable-rappel-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'Câble': {
      className: 'definizer',
      rappel: true
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('nihilin-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'Nihilin': {
      className: 'definizer'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('devore-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'Urizen': {
      className: 'definizer',
      style: 'text-align: center; font-size: x-large; margin: 64px auto;',
      rappel: true
    },
    pair: {
      terms: [{ term: 'Dévore-Novice', rappel: true }, 'Dévore-Nova'],
      className: 'definizer-2',
      style: 'font-size: large;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('sseccus-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'PROjECT SSeCCu$': {
      className: 'definizer',
      style: 'text-align: center; font-size: x-large;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('matr2-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'MATRICE 4lien 4perçu': {
      className: 'definizer',
      style: 'text-align: center; font-size: 2em; margin: 64px auto;',
      format: 'dt-dd'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('fon-rel-inc-rappel-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: [{ term: 'Fon:Rel:Inc', rappel: true }, 'Fondations', 'Inclinaisons', 'Relativité'],
      className: 'definizer',
      format: 'dt-dd'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('sce-syn-cel-rappel-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: [{ term: 'Scé;Syn;Cel', rappel: true }, 'Scénario', 'Cellules', 'Syndrome'],
      className: 'definizer',
      format: 'dt-dd'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('phodez-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    pair: {
      terms: ['phoRÊTT', 'dézELTT'],
      className: 'definizer-2',
      style: 'text-align: center; font-size: large;',
      format: 'dt-dd'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('respect-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    group: {
      terms: ['Iacy', 'Terlush・Derlush', 'Sublii(s)', 'Atcha'],
      className: 'definizer respect'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('gliobe-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'Gliobë': {
      className: 'definizer',
      style: 'text-align: center; font-size: x-large;',
    },
    pair: {
      terms: ["Mlush'Plush", 'YgijfeV'],
      className: 'definizer-2',
      style: 'font-size: large;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('ecarlate-scarlet-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    pair: {
      terms: ["白𝓒α𐌺心αট黒", '⼰ㄈ🜆ꡙҼ7'],
      className: 'definizer',
      style: 'display: grid; grid-template-columns: 1fr 1fr; justify-items: center; font-size: large; text-shadow: 0px 0px 10px #FF2400;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('ceminis-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'ÇEMiNi!': {
      className: 'definizer',
      style: 'text-align: center; font-size: large;',
    },
    pair: {
      terms: ["LEMiNiQ", 'REMiNiK'],
      className: 'definizer-2',
      style: 'text-align: center;'
    },
    'GEMiNiC': {
      className: 'definizer',
      style: 'text-align: center;',
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('violet-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    '⮟ЮꡙΞԵ': {
      className: 'definizer',
      style: 'text-align: center; text-shadow: 0px 0px 10px #7F00FF;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('zzzzzz-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {

    'monoa-group': {
      terms: ['ZooZaZe', 'Z옹Z야Z웨', 'JooQooBoo', 'J옹Q옹B옹', 'aLIaKKaHH', '야LI야KK야HH', 'eRUeGGeHH', '웨RU웨GG웨HH'],
      className: 'definizer-2',
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('cyan-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'ҨყⰎல': {
      className: 'definizer',
      style: 'text-align: center; text-shadow: 0px 0px 10px #00FFFF;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('elzel-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    pair: {
      terms: ['Domaines', 'elzel0lezle'],
      className: 'definizer',
      style: 'font-size: large;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('opale-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'Opale': {
      className: 'definizer',
      style: 'text-align: center; font-size: large;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('dvcmp-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    pair: {
      terms: [{ term: 'Déjà-Vu', rappel: true }, { term: 'Chromel', rappel: true }],
      className: 'definizer-2',
      style: 'font-size: large;'
    },
    'MonPol': {
      className: 'definizer',
      style: 'text-align: center; font-size: large;',
      rappel: true }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('tohla-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    '大ටभᲡⰡ': {
      className: 'definizer',
      style: 'text-align: center; font-size: x-large;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('tratravelvel-definitions');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    pair: {
      terms: [{ term: 'Travail', rappel: true }, { term: 'Tra§Vel', rappel: true }, { term: 'Veldiac', rappel: true },],
      className: 'definizer',
      style: 'display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 25px;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('syoneme-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'Syoneme Sublime': {
      className: 'definizer',
      style: 'text-align: center; font-size: x-large;'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('matr3-definition');
  if (!container || !window.mountDictionarySelection) return;
  window.mountDictionarySelection(container, {
    'MATRICE A6es 6tiques 6colaire': {
      className: 'definizer',
      style: 'text-align: center; font-size: 2em; margin: 64px auto;',
      format: 'dt-dd'
    }
  });
});