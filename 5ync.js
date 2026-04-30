const syncModalData = [
  {
    title: "1. Monoa-Polyz",
    tags: "Unité Monom & Jonction & & Fraction Polyp & Monom&Polyp & Critheçiel",
    content: "Codename-Codedate, des notions vite oubliées quand les meilleurs moments nous enchantent de fluidité hypnotique farfelue."
  },
  {
    title: "2. Incarnation",
    tags: "Hibou & Papillon & Lézard & Sfivoq & Critheqiel",
    content: "Les espèces ne se sectionnent qu'en bases incomplètes, un type raté ne se guête sous aucune traduction précise."
  },
  {
    title: "3. Altermonde",
    tags: "Portail & Balançoire & Banc & Toboggan & (Im)Prévu",
    content: "Pulsation, Pulsation… avance vers le monde pour l'accomplir d'abord-enfin-d'enfin-abord."
  },
  {
    title: "4. Héros",
    tags: "Esprit Joueur & Mental Galant & Corps Vigoureux & Monstre Fantastique & HypothèseCertitude",
    content: "Ce fait que ce qui fait que tout s'échappe comme une substance précieuse."
  },
  {
    title: "5. Hist",
    tags: "Investisseur Méta-Formel & Inconnue Méta-Originale & Intouchable Méta-Moral & Inépluchable Méta-Force & Inaccessible Méta-Catégorie",
    content: "Une déclaration peu familière se répand au sein du globe, il est certainement l'heure de briser la glace."
  },
  {
    title: "6. Socle",
    tags: "Fruit & Fécondation & Fourniture & Flottaison & Symptôme",
    content: "La répétition de la dédicace maintient la société dans la bonne ambiance, un entraînement viable nous rend capable de nouveaux paliers au fur et à mesure de la progression."
  },
  {
    title: "7. Divinité",
    tags: "Mystérieux & Pure & Credo & Accomplissement & Kriterium",
    content: "Parvenir aux propriétés lisses et pointues sous la dose concordante, les motifs caractéristiques distincts pour une démarche perspicace."
  },
  {
    title: "8. Parcours",
    tags: "Excursion & Randonnée & Marathon & Succession & N'Importe Où Nulle Part",
    content: "Un moment de découverte, la seconde visite libre, ensuite le lieu du défi; la prochaine lignée aura son moment."
  },
  {
    title: "9. Orbe",
    tags: "Résonance & Bulle & Posture & Aura & (Im/Ex)plication",
    content: "L'état intime est modulable à partir d'une observation assidue de ses sensations internes."
  },
  {
    title: "10. Naustral",
    tags: "Boussole & Aiguille & Stèle & Manette & (In/Ex)tention",
    content: "L'aimant C est indéchiffrable, en plus d'apporter un rendu toujours ambigu, sa subjectivité manque les autres subjectivités."
  },
  {
    title: "11. Discipline",
    tags: "Tir à l'Arc & Slackline & Parachutisme & Surf & Conscience",
    content: "Équilibre, précision et stabilité sont nécessaires dans tous les domaines pour tenir debout."
  },
  {
    title: "12. Installation",
    tags: "Examen & Illustration & Sillon & Canal & (In)Défini",
    content: "Les mises à jour automatiques proviennent d'anciens modèles assurément traumatiques, y aurait-il des portes encore imperceptibles qui me sortiraient des espaces comprimés ?"
  },
  {
    title: "13. Spirale",
    tags: "Souffle & Élan & Diffusion & Vortex & (Ir)Rationnel",
    content: "Un tourbillon de vie se jauge dans tous les angles à la fois, la colle est incapable de coller la colle."
  },
  {
    title: "14. Panorama",
    tags: "Lointain & Nœud & Axe & Bain & À Quel Point ?",
    content: "À cette échelle, Micro & Macro ne doivent rien à proprement dit. Il faut nécessairement être une entité étrangère pour devoir quelconque chose."
  },
  {
    title: "15. Temporalité",
    tags: "Passé & Présent & Futur &  Piste & Au-Delà",
    content: "L'allure de la pièce semble si téléportatrice, manquer continuellement à l'appel creuserait un gâchis susceptible au décuplement."
  },
  {
    title: "16. Dimension",
    tags: "Ordre & Harmonie & Chaos & Bouleversement & Vertu",
    content: "Célébrer chaque champ de force requiert une égalité diverse, l'engendreur engendre l'engendré."
  },
  {
    title: "17. Interaction",
    tags: "Sujet & Relation & Objet & Maître & Seigneur",
    content: "Puisque la confiance est fondamentale, pourquoi pas imposer rien de plus que le sens irrépréssible qui échappe à tous ?"
  },
  {
    title: "18. Intelligence",
    tags: "Intellect & Émotion & Social & Adversité & Spirituel",
    content: "De l'exquis détectiviste au nom de pas grand chose, ça fonds dans soi-même."
  },
  {
    title: "19. Évolution",
    tags: "Gènes & Mèmes & Témènes & Némènes & Technèmes",
    content: "Passer son ADN, le but des vivants selon la version officielle, ça veut être plus grand que ce que c'est."
  },
  {
    title: "20. Calculatrice",
    tags: "Addition & Soustraction & Multiplication & Division & Opération",
    content: "Refaites l'équation, je ne vous sens pas prêt à prendre en main vos ressources."
  }
];

function initializeSyncModal() {
  const histModalContent = document.getElementById('histModalContent');
  if (!histModalContent) return;

  const contentHtml = syncModalData.map(item => `
    <div style="margin: 25px auto">
      <hr class="sync-cut">
      <b><u>${item.title}</u></b>
      <span style="font-size: small;">(${item.tags})</span><br>
      ${item.content}<br>
    </div>
  `).join('');

  histModalContent.innerHTML = contentHtml;
}

document.addEventListener('DOMContentLoaded', initializeSyncModal);
