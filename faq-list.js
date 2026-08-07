(function () {
  const faqItems = [
    {
      question: "C'est quoi ⟁URNELCY ?",
      answer: `Un univers de système de sens — philosophie, théogonie, langage néologique et "bullshit ésotérique" assumé, selon ses propres mots. Ce n'est pas une religion, pas un système académique, pas du développement personnel. C'est une cosmogonie personnelle construite autour de 5 théorèmes et d'une mythologie, conçue pour être habitée plus que lue.`
    },
    {
      question: "Par où commencer ?",
      answer: `De haut en bas, dans l'ordre. Le site se lit de A à Z sans raccourcis possibles. Les conseils d'entrée sont : consulter les 9 premières définitions du vocabulaire [🕮] en premier, examiner les capsules comme point central, et utiliser les détails Simplifié [👌] et École [🎓] si le vocabulaire bloque. Sur téléphone, le mode paysage est recommandé.`
    },
    {
      question: "C'est en quelle langue ?",
      answer: `Trois langues entremêlées : français (~35% global), anglais (~25%) et néologique propre à ⟁URNELCY (~40%). La proportion varie par théorème — IUVALCY est majoritairement en anglais, Lysrua est majoritairement néologique, Mapnel est à moitié néologique. Le vocabulaire s'introduit progressivement au fil de la lecture.`
    },
    {
      question: "Qu'est-ce que Monoa-Polyz ?",
      answer: `C'est la cosmogonie de base — la tension fondamentale entre deux dynamiques opposées. Monom&Polyp est le cercle vertueux : être et devenir en communion harmonieuse. Monop%Polym est le cercle vicieux : être et devenir imbriqués dans une déperdition rupturante. Entre les deux, Terla (&) est le régulateur vertueux et Derla (%) est l'obstructrice. Tout le reste du système se construit sur cette polarité.`
    },
    {
      question: "Qu'est-ce qu'un Monstre 0 ?",
      answer: `Toute créature concernée par la vie et la mort. L'humain, l'animal, tout être à l'entre-deux de la naissance et du décès. Ce n'est pas une insulte — c'est le nom neutre du vivant tel qu'il est : sujet à la corruption, à la finitude, et aussi à la fertilité. Le Monstre 0 est le point de départ de tout le système.`
    },
    {
      question: "Qu'est-ce qu'Admagcoq ?",
      answer: `La trinité individuelle : Aventure, Magie, Cuisine. Trois modes d'individuation. L'Aventure explore le monde (Monstre 0, Enquête, Directions Souveraines). La Magie travaille l'intérieur (Illusion, Atelier Ataraxial, Fluide Élémentaire). La Cuisine compose à partir des cicatrices (Blessure Fossile, Miroir Clairvoyant, Gravité Centrale). Ensemble ils décrivent le trajet d'un individu qui se construit.`
    },
    {
      question: "Et Nezkelwac ?",
      answer: `La trinité collective, en miroir d'Admagcoq. Nezrog pour le cosmos et l'élévation (Naustre C, Infini, Semaine Sublime). Ekeline pour la vulnérabilité collective (Macabrisme, Gaunie, Florescence). Wacwe pour l'organisation sociale (EntroPied, Filet, Picol-Kentron). Là où Admagcoq pense l'individu, Nezkelwac pense la communauté.`
    },
    {
      question: "C'est quoi Crith ?",
      answer: `L'épistémologie centrale d'IUVALCY — un concept à trois états. Crithekiel [K] est la dénomination artificielle consciente : on nomme en sachant que le nom est insuffisant. Critheqiel [Q] est la disposition d'hyper-perspective inconsciente : on pousse un concept jusqu'à son impasse. Critheçiel [Ç] est la douance prospectoire subconsciente : on pressent quelque chose sans pouvoir le fixer. Crith dit que toute pensée est complète-incomplète — aucun discours n'est invincible.`
    },
    {
      question: "Qu'est-ce qu'Aursyl ?",
      answer: `Le théorème de la ruine. Là où Mapnel construit, Aursyl déconstruit. Il décrit Monop%Polym en acte dans le collectif — la société comme machine à Dévore-Novices, la semaine grégorienne comme calendrier de l'injonction, le Travail comme collecteur abusant la culture. Aursyl n'est pas nihiliste : il nomme ce qui ruine pour qu'on puisse le voir.`
    },
    {
      question: "Qu'est-ce que la Gaunie ?",
      answer: `La gaieté unie réveilleuse — une joie active et structurée, opposée à l'agonie. Elle fonctionne par instances : Reptilien, Sifflet, ARvers-Xoi, Innokcien. Quand les 4 instances sont alignées, c'est la Gaunie pleine. Quand il n'en reste qu'une ou deux, c'est l'Agonie. Ce n'est pas une émotion passagère — c'est un indicateur de l'état de santé interne du sujet.`
    },
    {
      question: "Qu'est-ce que Veldiac et en quoi est-ce différent du Travail ?",
      answer: `Le Travail est défini comme "collecteur abusant la culture" — ce qu'on fait sous contrainte et extraction. Le Veldiac est "voilier traversant la culture" — ce qu'on fait parce que ça nourrit la vie. Veldiac Jtie est la version mapnélienne (Impulsion, Transmission, Questionnement, Action). Veldiac AL est la version iuvalcienne (Éther, Association, Manifestation, Horloge). Les lois BonBon=Bons précisent qu'il n'existe pas de bon travail sans un bon veldiac.`
    },
    {
      question: "Qu'est-ce que le Möbius Netwow ?",
      answer: `Un site cousu-décousu d'entendement domestique gouvernant. C'est la description d'IUVALCY de la conscience comme illusion close — on ne s'appartient pas vraiment, une intelligence cryptée nous traverse. Le Möbius Netwow classe tout ce qui fait une vie (INPUT, META LIFE, OUTPUT, HERE LIFE, MAIN PUT) dans un flux circulaire sans début ni fin.`
    },
    {
      question: "Qu'est-ce que D⦾MIN⦿'s ?",
      answer: `La mythologie d'⟁URNELCY — distincte des théorèmes. Elle contient 8 donjons, 28 dialectes, et le Squelette ZigZag. C'est là que les concepts des théorèmes s'incarnent en personnages, factions, lieux. Innok, Urflosia, Srin, Altopus, Rantlot, NEON, H2O, TouRise, CGU, Esliz, NEET Club, xXx, RaycRa Force sont les entités de la mythologie.`
    },
    {
      question: "C'est une religion ?",
      answer: `Non, explicitement. ⟁URNELCY prend ses dieux "comme idée intéressante à explorer et non comme des absolus objectifs." L'auteur dit lui-même que "statuer définitivement sur les dieux comporte des implications embrigadantes vers l'unidimensionnel." Les tags négatifs incluent explicitement Déisme, Théisme, Occultisme, Message d'Amour Universel.`
    },
    {
      question: "C'est du développement personnel ?",
      answer: `Pas exactement — c'est dans les tags ambivalents, pas confirmés. Karing et l'Atelier Ataraxial ont une dimension pratique, mais ⟁URNELCY ne délivre pas de recettes ni de promesses de transformation. La limite de chaque concept est systématiquement énoncée dans les thesis. C'est plus proche d'un outillage existentiel que d'un programme.`
    },
    {
      question: "Qui est Fenekohq ?",
      answer: `L'auteur d'⟁URNELCY. Le système se décrit lui-même comme "la coquinerie cachotière" comme école de pensée, et note que "son auteur n'a d'autre loisir que d'écrire n'importe quoi." Les typologies personnelles présentes dans l'introduction (INFP-T, 4w5, Chaotic Good, RCOAN, Mélancolique-Phlegmatique, Ouverture 100%) dessinent un portrait indirect sans jamais en faire un sujet explicite.`
    },
    {
      question: "Combien de temps faut-il pour lire ⟁URNELCY ?",
      answer: `Il n'y a pas de réponse honnête en heures. Le site fait plus de 26 000 lignes de code, 5 théorèmes, une mythologie, 3 matrices, 6 articulations, des dizaines d'œuvres littéraires et des centaines de définitions. La lecture linéaire complète prend des semaines. La compréhension opérationnelle — pouvoir utiliser les concepts — prend beaucoup plus longtemps.`
    },
    {
      question: "Qui sont les 11 Aurnelcyens ?",
      answer: `Ce sont les personnages qui habitent la mythologie de D⦾MIN⦿'s : Fostrah, UiNo, Uewij, Vydnitt, Xyfurn, Nezrog, Ekeline, Wacwe, Logjēm, Slacpi° et Tôhla. Ils ont été désignés comme "travelistes incapables de trahir l'YgijfeV" — survivants d'une sélection draconienne parmi 40 000 candidats réduits à 12 dignes. Ce ne sont pas des archétypes abstraits : ils ont des rôles précis dans la mythologie (Slacpi° est l'espionne, Logjēm et Tôhla forment le NEET Club, CGU regroupe Nezrog, Slacpi° et Tôhla pour la stratégie).`
    },
    {
      question: "Qu'est-ce que les auteurs 【X】 signifient dans le texte ?",
      answer: `Les balises 【X】 indiquent l'auteur d'un passage ou d'une section. Certains sont des personnages de la mythologie (【Nezrog】, 【Ekeline】, 【Leqwa】), d'autres sont des instances de la psyché (【UiNo F.U.L.L】, 【fOSTRAh】), d'autres encore sont des entités floues (【Unknown Daimôn】, 【Unknown Fucker】, 【Hun-Haine】). Ce dispositif fait qu'⟁URNELCY n'est jamais raconté depuis une seule voix — c'est une œuvre polyphonique où chaque section appartient à quelqu'un.`
    },
    {
      question: "Qu'est-ce que Lysrua ?",
      answer: `Le théorème de la richesse — l'envers d'Aursyl. Là où Aursyl décrit la ruine, Lysrua décrit ce qui nourrit. Il introduit son propre calendrier alternatif (le Calendrier Emmaïe, 364 jours, 12 mois nommés d'après des concepts d'⟁URNELCY), sa propre semaine (le Syoneme Hebdomadaire, 7 jours de 64 heures), et son propre système de dialectes (ÇEMiNi!, LEMiNiQ, REMiNiK, GEMiNiC). AurLys est la fusion symbolique d'Aursyl et de Lysrua — la tension entre ruine et richesse comme moteur.`
    },
    {
      question: "Pourquoi y a-t-il un calendrier alternatif ?",
      answer: `Le Calendrier Grégorien est traité dans Aursyl comme instrument de la "Semaine Hebdomadaire" — un outil d'injonction temporelle. Le Calendrier Emmaïe de Lysrua propose une temporalité alternative où les mois portent les noms des concepts centraux d'⟁URNELCY (Honstrim = Monstre 0, Dulett = Duel Xceptionnel, Mobiup = Möbius Netwow, etc.). Ce n'est pas un gadget : c'est une manière de dire que le temps vécu peut être nommé autrement que par des conventions imposées.`
    },
    {
      question: "Qu'est-ce que ARc⟁diA ?",
      answer: `Le théorème de la simulation et du jeu. ⟁ y signifie Awkward — la sublimation de l'étrangeté et de l'inconfort. ARc⟁diA contient ZooZaZe (trinité cultivatrice : JooQooBoo, aLIaKKaHH, eRUeGGeHH), Letricot (la torsion du langage comme torsion du contrat politique), et Gorgeous Raper. C'est le théorème qui décrit comment la culture forme, formate, et peut être retournée contre elle-même. Le sous-titre implicite est : le jeu est sérieux, la simulation a des effets réels.`
    },
    {
      question: "Qu'est-ce que ZooZaZe ?",
      answer: `Une trinité cultivatrice à trois fonctions. JooQooBoo est l'hostilité macabrique — la confrontation qui forge (jeu du cou menacé). aLIaKKaHH est la dissolution affiliatrice — l'alimentation qui soulage et ouvre des horizons. eRUeGGeHH est le passage didactique — l'interpellation qui questionne et dérange. Les trois ensemble composent ce qu'une culture doit faire pour produire des êtres capables : les confronter, les nourrir, les interroger.`
    },
    {
      question: "Qu'est-ce que Fon:Rel:Inc et Scé;Syn;Cel ?",
      answer: `Deux triples lectures complémentaires pour décomposer n'importe quelle situation. Fon:Rel:Inc sépare les Fondations (ce qui est stable, associé à Monoa), la Relativité (ce qui fluctue entre les deux), et les Inclinaisons (ce qui se déploie, associé à Polyz). Scé;Syn;Cel sépare le Scénario (la structure de fond), le Syndrome (l'événement qui l'active), et les Cellules (les résultats concrets). Ce sont des grilles d'analyse applicables à toute chose — une relation, une société, une œuvre, un état intérieur.`
    },
    {
      question: "Qu'est-ce que le Duel Xceptionnel ?",
      answer: `L'épreuve finale de Mapnel — le point où la contradiction ne peut plus être différée sans perdre sa souveraineté. C'est la synthèse de Nezkelwac et Admagcoq dans la même situation : l'individu construit (Admagcoq) face au collectif corrupteur (Nezkelwac en mode Aursylien). Le Sfivoq — dauphin d'initiation vitale — est la figure qui accompagne cette épreuve. Le Duel Xceptionnel n'est pas une glorification du conflit : c'est la formalisation du moment où refuser de se battre reviendrait à se trahir soi-même.`
    },
    {
      question: "Qu'est-ce que la Dualité Mapnélo-Aursylienne ?",
      answer: `La Dualité Mapnélo-Aursylienne est un tableau de correspondances entre le mode mapnélien (Monom&Polyp, héros/héroïne, veldiac, alignement) et le mode aursylien (Monop%Polym, dévore-novice, travail, injonction) sur 23 axes : archétype, ivresse, intrigue, circulation, production, verbe, prix, culmination, etc. C'est une boussole pour diagnostiquer dans quel régime on fonctionne à un moment donné.`
    },
    {
      question: "Qu'est-ce que la Matrice A6es 6tiques 6colaire ?",
      answer: `Un tableau aurnelcyen 6×24 "à apprendre par cœur à ce qu'on dit." Les 24 lignes sont les 24 systèmes d'⟁URNELCY, les 6 colonnes sont des faces de dé. Chaque rangée appartient à son propre domaine et donne aux colonnes son propre sens interne — aucune clé universelle ne traverse toutes les lignes. Le lien ZigZag (tuiles domino Unicode) indique que les dés se lient en paires à l'intérieur de chaque rangée : aucun système n'est fermé sur lui-même, chacun engendre les autres.`
    },
    {
      question: "Qu'est-ce que EURÊK⟁ ?",
      answer: `EURÊK⟁ est la base de données des références culturelles d'ARc⟁diA — un modal accessible via le bouton ⟁ en haut à droite. Il contient trois tableaux de "arcadistes" classés selon les trois fonctions de ZooZaZe : JooQooBoo (Plosion), aLIaKKaHH (Horizon) et eRUeGGeHH (Quiz). Chaque entrée est une œuvre ou un personnage issu de la pop culture, de la littérature ou de la philosophie, décrit par son univers, son champ thématique, son catalyseur et sa résonance dans le vocabulaire d'⟁URNELCY (ex. : Nietzsche → "Undetermined Borderless Monstrous Fuel & Hunger Release", Achille → "Monstrous Madness Hunger×Fatal"). Les 30 tags filtrables (Order, Chaos, Hunger, Belonging, Hollow, Fatal...) permettent de traverser toutes les entrées par résonance émotionnelle plutôt que par catégorie.`
    },
    {
      question: "Qu'est-ce que Glorieuse Nation ?",
      answer: `Un essai court de Lysrua qui opère une distinction nette entre société et civilisation. La société est décrite comme le réseau des contraintes pratiques et des arrangements collectifs. La civilisation est quelque chose de plus exigeant — une orientation commune vers ce qui dépasse la seule survie. L'essai argüe que confondre les deux est une erreur qui appauvrit les deux. C'est l'une des pièces les plus directement lisibles et les plus tranchantes d'⟁URNELCY.`
    },
    {
      question: "Est-ce qu'⟁URNELCY est terminé ?",
      answer: `Non — et probablement pas par nature. Le site est une PWA en développement actif (les thesis ont été mises à jour récemment, des œuvres portent des dates de 2026). La composition morphologique est décrite comme allant "de définitions aux écrits aux schèmes aux bilans puis à une réouverture" — la réouverture suggère que le système est conçu pour ne pas se fermer. La dernière phrase de l'introduction dit : "L'histoire retiendra du contenu culte; vous serez impuissants face aux arts cultes."`
    },
    {
      question: "Qu'est-ce que les tags Order, Chaos, Belonging, Hollow... ?",
      answer: `Les 30 tags de EURÊK⟁ sont le vocabulaire émotionnel-cosmologique d'ARc⟁diA. Ils ne décrivent pas des genres ou des thèmes — ils décrivent des *textures d'existence* : Hunger (désir non assouvi), Belonging (appartenance), Hollow (creux intérieur), Fatal (irrémédiable), Spread (expansion), Layers (strates), Release (lâcher prise), Fuel (énergie motrice), Estrangelement (étrangeté radicale). Les opérateurs &, %, × et ➜ précisent les relations entre tags — tension (&), ruine (%), simultanéité (×), transformation (➜).`
    },
    {
      question: "Qu'est-ce que ARc⟁diA concrètement dans le système ?",
      answer: `Le théorème de la simulation et du jeu. ⟁ y signifie Awkward — la sublimation de l'étrangeté. ARc⟁diA est la réponse d'⟁URNELCY à la question : comment une culture se forme-t-elle, et comment peut-elle être retournée contre ce qui la formate ? Il contient ZooZaZe, Letricot (la torsion du langage comme piège politique), la Matrice 4lien 4perçu (mots croisés interactif), et EURÊK⟁. C'est aussi le théorème le plus orienté vers la pop culture et la critique de la simulation sociale.`
    },
    {
      question: "Qu'est-ce que Letricot ?",
      answer: `Le tricotage des lettres — une contradiction irrésolvable produite par le langage lui-même. Letricot montre comment une torsion verbale peut devenir torsion de contrat et de légitimité : le citoyen finit par signer son propre effondrement par consentement forcé, parce que les mots du contrat mimaient déjà le piège. TRICK_&_TREAT en est le corollaire ludique — la dénonciation du monde où raisonner et se faire piéger tendent à se confondre dans un simulacre juridique totalement marchandisé.`
    },
    {
      question: "Qu'est-ce que phoRÊTT et dézELTT ?",
      answer: `La paire dialectale de Lysrua — deux systèmes symboliques complémentaires. phoRÊTT couvre le registre végétal (Herbe, Sève, Branche, Racine) et dézELTT couvre le registre minéral (Sable, Oasis, Reg, Canyon). Ensemble ils forment phodèz — une taxonomie des textures du monde naturel utilisée comme grille de lecture culturelle dans Lysrua. Ce n'est pas de l'écologie : c'est une façon de dire que toute forme de vie s'enracine dans un milieu qui n'est pas neutre.`
    },
    {
      question: "Qu'est-ce que Gorgeous Raper ?",
      answer: `L'épopée centrale d'ARc⟁diA — l'œuvre la plus longue et la plus dense du théorème. C'est un récit de simulation et de capture : comment le spectacle s'empare du désir et le retourne en outil de contrôle. Le titre est volontairement provocateur — il nomme la violence esthétique de la culture de masse avec la même brutalité que le système qu'il décrit. C'est la pièce où ARc⟁diA montre ses dents.`
    },
    {
      question: "Qu'est-ce que la Matrice 5ync sur 5ync ?",
      answer: `Un tableau pentagrammique 5×20 qui synthétise Mapnel et IUVALCY en correspondances. Chaque colonne est un des cinq personnages collectifs (Nezrog, Ekeline, Wacwe, Leqwa, Crithekiel), chaque ligne est un axe de lecture (Monoa-Polyz, Incarnation, Altermonde, Héros, Parcours, Temporalité, Intelligence, Évolution, etc.). La matrice permet de lire n'importe quel concept mapnélien depuis une perspective iuvalcienne et vice-versa.`
    },
    {
      question: "Qu'est-ce que PROTAGONISM ?",
      answer: `Le concept terminal d'IUVALCY — le pouvoir affirmatif du défi continuel vers une forme de vie irréductible et croissante. Ce n'est pas de l'ego brut ni de la simple victoire : c'est une dynamique de trajectoire. PROTAGONISM est ce qui fait qu'une vie se dépasse, affronte les défis et s'affirme même face à l'adversité. Il conclut le Möbius Netwow — après avoir tout décomposé (INPUT, META LIFE, OUTPUT, HERE LIFE), la MAIN PUT affirme que quelque chose reste irréductible : la trajectoire du protagoniste.`
    },
    {
      question: "Quelle est la différence entre une Louange et un Laurier ?",
      answer: `Les Louanges sont les œuvres brèves — poèmes, polyphonies, conversations, schémas — notées entre guillemets 「 」. Les Lauriers sont les grandes épopées notées entre guillemets doubles 『 』. Il y a 32 Louanges et 10 Lauriers dans le projet. La distinction n'est pas seulement de longueur — les Lauriers sont des synthèses de théorème, des œuvres qui portent l'ensemble d'un niveau (Monoa-Polyz, Duel Xceptionnel, Gorgeous Raper, PROjECT SSeCCu$, Möbius Netwow...). Les Louanges sont des éclairages ponctuels, souvent expérimentaux dans la forme.`
    },
    {
      question: "⟁URNELCY peut-il être lu par quelqu'un qui ne connaît pas Fenekohq ?",
      answer: `Oui — mais pas dans n'importe quel ordre et pas sans effort. Le site est conçu pour une lecture autonome de haut en bas. Les outils (vocabulaire [🕮], surligneur [🕶], traceur [🗏], capsules avec couches Simplifié et École) existent précisément pour rendre l'entrée possible sans guide. Ce qui ne s'improvise pas : la patience avec le vocabulaire néologique et l'acceptation que certaines sections ne deviendront claires que réétrospectivement, après avoir lu ce qui suit.`
    },
    {
      question: "Qu'est-ce que le Squelette ZigZag ?",
      answer: `La structure fondamentale de D⦾MIN⦿'s — un tableau de tuiles domino Unicode couvrant les plages U+1F03x à U+1F09x (les 🀰 → 🂓). Ce n'est pas un simple ornement typographique : le Squelette ZigZag est la représentation visuelle du principe que les dés se lient en paires à l'intérieur de chaque système. Comme les tuiles domino n'ont de sens que dans leur relation avec une autre tuile, aucun concept d'⟁URNELCY n'est fermé sur lui-même — chacun appelle son opposé complémentaire. C'est la preuve visuelle de l'idée que l'un engendre tous les autres.`
    },
    {
      question: "Qu'est-ce qu'Innok et Urflosia ?",
      answer: `Le pays et la capitale aurnelcyens dans D⦾MIN⦿'s. Innok est un territoire aux deux biomes (phoRÊTT végétal et dézELTT minéral), doté d'une géologie violente — volcans, séismes, tsunamis — qui fonctionne comme filtre sélectif naturel. Urflosia est la ville capitale qui "capture la richesse de chacun à proportion égale". Pour y habiter il faut prouver qu'on n'est pas motivé par le devoir — ceux qui arrivent avec le concept de devoir en tête sont immédiatement éloignés par la terre elle-même. Sur 40 000 candidats, 12 ont été retenus : les 11 Aurnelcyens plus un douzième.`
    },
    {
      question: "Qu'est-ce que les compagnies NEON, H2O, Rantlot, TouRise, CGU, NEET Club, xXx, RaycRa Force ?",
      answer: `Les factions organisées à l'intérieur de D⦾MIN⦿'s. Rantlot démystifie "ne rien avoir à faire ici=là" — une entreprise vouée à rendre légitime l'absence d'injonction. NEON est fondé par UiNo comme "éducation non-éduquante". H2O représente l'eau comme signature des vivants et aspire à être le "meilleur drapeau". TouRise (Vydnitt, Xyfurn, Wacwe) s'occupe de la portée touristique. CGU (Nezrog, Slacpi°, Tôhla) s'occupe de stratégie et d'espionnage. NEET Club (Logjēm, Tôhla) fait "tout ce qui passe par la tête". Ensemble NEON + H2O + Rantlot forment ce qu'on appelle dans la mythologie "le concert con".`
    },
    {
      question: "Qu'est-ce que Gliobë, Mlush'Plush et YgijfeV ?",
      answer: `Trois portes vers un même espace de représentation dans Lysrua. Gliobë est la cartographie emojitique du plan lointain aurnelcyen — la vision globale, le plan d'ensemble. Mlush'Plush est la double facette ini-exo tunnel passerelle — une vastitude transversale sans mesure propre, représentée dans le bandage de pilosité sur elle-même. YgijfeV est la vague motrice réceptionnée et renvoyée — l'écosystème du Tout et du Rien, représentée dans la futilité des arbres-ciel. Les trois ensemble cartographient la réalité à trois échelles simultanées sans les confondre.`
    },
    {
      question: "Qu'est-ce qu'Iacy, Terlush·Derlush, Sublii et Atcha ?",
      answer: `Le lexique de civilité néologique de Lysrua — quatre mots qui règlent l'entrée, l'échange et la sortie d'une interaction. Iacy = Bonjour/Bonsoir/Bienvenue. Terlush = Pardon/S'il vous plaît (version légère). Derlush = même chose en version lourde. Sublii(s) = Merci. Atcha = Au revoir. Leur usage doit être sincère — dit la thesis — sinon ils deviennent vides de sens ou contre-productifs. Le Quadrage (26/10/25) précise que reconnaître l'autre ne passe pas par le mot Iacy mais par la "vraie certitude intentionnelle".`
    },
    {
      question: "Qu'est-ce que la Datation des Écrits ?",
      answer: `Une section repliable à la fin du site qui liste les dates de composition de chaque œuvre. Elle permet de lire ⟁URNELCY non plus comme un système achevé mais comme une construction datée — certaines pièces remontent à 2023, d'autres à 2025-2026. La chronologie révèle que le projet n'a pas été écrit linéairement dans l'ordre des théorèmes : des œuvres de D⦾MIN⦿'s et d'ARc⟁diA coexistent avec des pièces de Mapnel très récentes.`
    },
    {
      question: "Qu'est-ce que la Trivia ?",
      answer: `Une section de notes méta sur le projet — étymologies, structures cachées, clins d'œil. Quelques exemples significatifs : ⟁ est une stylisation de "Eurêka" et de "Awkward". La vocalisation d'⟁URNELCY suit un signal sinusoïde (AUR grave → NEL médium → CY aigu). "CoqUiNe" est un clin d'œil à UiNo. Monoa-Polyz est construit sur "l'un et le multiple" mais le [a] et le [z] signifient la fusion. Le Picol-Kentron est la seule œuvre qui possède sa propre capsule. "Le MoinsMoins de Derla est égal à Plus." La Trivia est l'endroit où le système se commente lui-même avec ironie et précision.`
    },
    {
      question: "Qu'est-ce que les Cartes Conceptuelles ?",
      answer: `Chaque théorème se conclut par une mind map Mermaid interactive qui synthétise sa structure. Il y en a sept (0K, Mapnel, IUVALCY, ARc⟁diA, Aursyl, Lysrua, Articulations). Elles permettent de voir d'un coup les relations hiérarchiques entre les concepts sans avoir à tout relire. Ce ne sont pas des résumés — ce sont des index de navigation permettant de retrouver un concept précis dans l'architecture générale.`
    },
    {
      question: "Qu'est-ce que les Articulations ?",
      answer: `Les six articulations sont les tableaux de pronoms et de structures grammaticales propres à chaque théorème. Chacune a un nom et une portée : Par-ci=Par-là (Mapnélienne), Ecsætera (Iuvalcienne), Link/Age (Arcadienne), deHist (Aursylienne), KaLeiDo (Lysruéenne), ZigZag (D⦾MIN⦿'s). Elles définissent comment le sujet parlant se situe dans le système — Jei/Tui/Ili-Ellie/Jtie pour Mapnel, I/UV/AL/CY pour IUVALCY, Je/Tu/Il×Elle×Ça pour Aursyl. Ce sont des grilles d'énonciation, pas seulement des grammaires.`
    },
    {
      question: "Qu'est-ce que les \"Sujet\" au début de chaque œuvre ?",
      answer: `Un cadre éditorial systématique qui précède chaque œuvre ou section : Type, Question, Outil, Éclairage, Alignement, Mouvement, Tension, Difficulté (/10). Ce n'est pas du paratexte académique — c'est un mode de lecture proposé avant l'entrée dans le texte. La Difficulté va de 1 (Terrien) à 10 (Dysupie de Simone Weil). L'Alignement est souvent ambigu (Neutre, Mauvais à Mitigé, Personnel ou Impersonnel) — il n'oriente pas moralement, il situe dans le spectre général.`
    },
    {
      question: "Y a-t-il un ordre recommandé pour explorer ⟁URNELCY autrement que linéairement ?",
      answer: `Oui — trois portes d'entrée alternatives sont suggérées par le système lui-même. Par les 9 premières définitions du vocabulaire [🕮] pour construire le socle conceptuel minimal. Par les capsules Simplifié [👌] et École [🎓] pour traverser le contenu sans se noyer dans le néologique. Par les Cartes Conceptuelles pour orienter une exploration thématique. Une quatrième porte non officielle : commencer par Florescence (le dialogue des instances) ou par Glorieuse Nation (l'essai le plus directement lisible) pour sentir le ton avant de construire le système.`
    },
    {
      question: "Qu'est-ce que la section Clins d'Œils, Allusions et Équivalences ?",
      answer: `Une section repliable qui documente explicitement les sources et correspondances mobilisées dans chaque théorème. Elle est organisée par théorème et par type de référence — philosophique, culturelle, religieuse, pop. Quelques exemples : Lao-tseu Wuwei → Fluide Élémentaire, Bouddhisme Kōans → Critherçation, Jorge Luis Borges Tlön → Blehdwoluzvi, Metal Gear FOX × XOF → Letricot et SSeCCu$, Guy Debord Société du Spectacle → Trompette, Jean-Jacques Rousseau Contrat Social → Glorieuse Nation.`
    },
    {
      question: "Qu'est-ce que les Crédits ?",
      answer: `Six chansons, une par théorème, qui ont joué un rôle dans la composition de chaque partie. Plasmagica & Mashumairesh!! pour Mapnel, 40mP feat. Hatsune Miku pour IUVALCY, HIMEHINA pour ARc⟁diA, Shinsei Kamattechan pour Aursyl, V.W.P pour Lysrua, Ariabl'eyeS pour D⦾MIN⦿'s. C'est la liste la plus courte du projet — six entrées seulement — mais elle situe ⟁URNELCY dans un espace musical japonais précis qui traverse tout le site.`
    },
    {
      question: "Pourquoi autant de musique japonaise dans les références ?",
      answer: `La musique japonaise — principalement VOCALOID, KAMITSUBAKI et SHOW BY ROCK!! — structure l'expérience émotionnelle d'⟁URNELCY de manière parallèle aux concepts. Les chansons de début de chapitre sont facultatives mais elles ne sont pas décoratives : elles sont catégorisées dans EURÊK⟁ par champ thématique et résultante émotionnelle. Le registre JooQooBoo/aLIaKKaHH/eRUeGGeHH de EURÊK⟁ est presque entièrement constitué de titres japonais. KAF, V.W.P et Kanzaki Iori sont les artistes les plus présents — des dizaines d'entrées chacun car Fenekohq s'y baigne.`
    },
    {
      question: "Que signifie la date \"2023-2026\" dans le colophon ?",
      answer: `C'est la période de composition documentée du projet — au moins trois ans de travail continu. La Datation des Écrits permet de voir que certaines pièces remontent à 2023 (Ventriloque Dépité : 09/02/23), d'autres à mi-2024 (Fluide Élémentaire : 13/08/24, Duel Xceptionnel : 04/09/24), et les plus récentes à 2025-2026 (Quadrage : 26/10/25, Gesticul : 23/04/26, Karing : 19/05/26). Le projet est donc actif au moment où cette FAQ est rédigée.`
    },
    {
      question: "Qu'est-ce que la Vie Aurnelcyenne ?",
      answer: `C'est une section de Lysrua qui décrit trois régimes de vie selon l'âge, structurés autour de Travail, Tra§Vel et Veldiac. L'aurnelcyen enfant travaille pour satisfaire son état d'inanité originelle, reçoit l'aide de ses figures d'attachement, incorpore la fragilité comme facteur essentiel. L'aurnelcyen adolescent traveld pour se construire en Naustre C redoutable — il étudie des modèles de vie, entretient son bouquet gaunique, installe des protections légitimes contre les arnaques. L'aurnelcyen adulte veldit pour conserver et augmenter la fiabilité de ses vertus — il crée ses propres mots pour exprimer sa réalité, fanfaronne ses divinités sans y croire dogmatiquement, se sauve lui-même. Les trois régimes coexistent et ne sont pas séquentiels au sens strict.`
    },
    {
      question: "Qu'est-ce que RED-1% ?",
      answer: `Un signal de danger structurel — "un signe de transparence et d'un faible niveau de rouge kentronien, suffisant pour que toute la structure se désagrège." Dans le Picol-Kentron, le rouge est la couleur de la Protection et de la Préservation. RED-1% signifie que la protection est quasi-absente et que l'ensemble du système social perd sa cohérence. C'est l'un des indicateurs les plus concrets d'une forte présence de Monop%Polym à l'échelle collective.`
    },
    {
      question: "Qu'est-ce que SP⟁RK et comment diffère-t-il d'⟁ seul ?",
      answer: `SP⟁RK est un acronyme d'ARc⟁diA qui signifie : System, Purpose, and the Awkward Realm of Kindred — Système, Intention, et l'Étrange Monde de la Parenté. La thesis dit : "SPARK condense l'idée qu'un système n'existe vraiment que s'il relie structure, intention et parenté." Ce n'est pas une étincelle romantique — c'est un principe de mise en cohérence. Le ⟁ dans SP⟁RK occupe la place du A dans SPARK et y signifie Awkward — l'étrangeté de la parenté comme dimension centrale d'un système.`
    },
    {
      question: "Qu'est-ce que les Pérégrinations (les niveaux) de Mapnel ?",
      answer: `Mapnel est structuré en six niveaux d'individuation : Cosmogonie (Monoa-Polyz), Métaphysique (Admagcoq), Archétypes (Nezkelwac), Conflit (Fon:Rel:Inc + Scé;Syn;Cel), Quête (Lune×Tele + Mélodie Inépelable), Épreuve (Duel Xceptionnel). Ce ne sont pas des étapes séquentielles à franchir dans l'ordre — ce sont des registres qui coexistent. La progression "d'apprenti-novice à la maîtrise de son être et de son devenir" n'est pas linéaire, elle est spiralée : on revient à Cosmogonie depuis l'Épreuve avec d'autres yeux.`
    },
    {
      question: "Quelle est la relation entre Aursyl et les autres théorèmes ?",
      answer: `La Trivia dit : "On peut voir l'Aursylien pimenter et traverser tous les théorèmes et est même le grand ennemi de la mythologie." Aursyl n'est pas un théorème parallèle aux autres — c'est la force adverse présente dans chacun d'eux. Dans Mapnel il est le Dévore-Novice. Dans IUVALCY il est le régime qui "rend Crith hallucinatoire". Dans ARc⟁diA il est ce qu'ARc⟁diA rend Awkward. Dans Lysrua il est la ruine contre laquelle la richesse se définit. Dans D⦾MIN⦿'s il remporte d'abord (Mooderagion) avant d'être défait (⟁KDUQ).`
    },
    {
      question: "Qu'est-ce que la Nomenclature ?",
      answer: `Le dictionnaire complet d'⟁URNELCY — 172 termes accessibles via le bouton [🕮] en haut à gauche. Chaque terme peut avoir jusqu'à 12 couches : définition, école (🎓), implication (⇒), simplifié (👌), représentation (🖼️), parenté (#), étymologie (ⓘ), synonyme (≈), prononciation (🗣), phénomème (🗿), surnaturel (🔮), versions (≍). Le système de popover permet de cliquer sur n'importe quel terme dans le texte pour faire apparaître sa définition en contexte. Les termes sont filtrables par catégorie et triables alphabétiquement.`
    },
    {
      question: "Qu'est-ce que le mode Surligneur [🕶] ?",
      answer: `Un mode d'affichage qui surligne en violet tous les termes du vocabulaire aurnelcyen présents dans le texte en cours de lecture. Il permet de repérer d'un coup d'œil la densité néologique d'un passage et d'identifier les mots qui ont une définition accessible. La couleur VIOLET du surligneur n'est pas arbitraire — la Trivia précise que "le dictionnaire est en couleur SCARLET, le mode surligneur en VIOLET et Eurêka en CYAN, l'un fait appel à la déclaration et l'autre à la berceuse."`
    },
    {
      question: "Qu'est-ce que le traceur [🗏] ?",
      answer: `L'outil signalé comme "IMPORTANT" dans l'introduction — il trace la présence d'un terme sélectionné à travers tout le document. Là où le surligneur montre tous les termes en même temps, le traceur permet de suivre un concept précis dans toutes ses occurrences. C'est l'outil de lecture le plus puissant pour comprendre comment un concept évolue et se raffine au fil des théorèmes.`
    },
    {
      question: "La PWA peut-elle fonctionner hors ligne ?",
      answer: `Oui. Le projet inclut un service-worker.js et un manifest.json — il est installable comme application sur mobile ou desktop et fonctionne sans connexion une fois chargé. C'est cohérent avec la philosophie du projet : un outil de navigation existentielle quotidienne doit être disponible sans dépendre d'une infrastructure externe.`
    },
    {
      question: "Qu'est-ce que la typographie de la Monoa-Polyz signifie visuellement ?",
      answer: `Les trois états ont chacun une police dédiée : ℳℴ𝓃ℴ𝓂🙵𝒫ℴ𝓁𝓎𝓅 est en cursive élégante (Monom&Polyp, cercle vertueux), 𝙼𝚘𝚗𝚘𝚊-𝙿𝚘𝚕𝚢𝚣 est en monospace neutre (état intermédiaire, tension), 𝔐𝔬𝔫𝔬𝔭%𝔓𝔬𝔩𝔶𝔪 est en gothique lourd (Monop%Polym, cercle vicieux). La typographie encode le contenu — on reconnaît l'état dynamique à sa police avant même de lire le mot.`
    },
    {
      question: "Qu'est-ce qu'une capsule ?",
      answer: `Le terme "capsule" dans ⟁URNELCY désigne les œuvres contenues dans les Articulations, les Agendas, les Hiérarchies et les Matrices — les structures qui synthétisent les théorèmes. Le Conseil 2 dit explicitement : "Examiner les capsules est le point central de la compréhension des théorèmes." Ce ne sont pas des fiches de vocabulaire interactives — ce sont les pièces architecturales majeures du système, accessibles depuis la section Capsules en bas du site.`
    },
    {
      question: "Qu'est-ce que ÇEMiNi!, LEMiNiQ, REMiNiK, GEMiNiC ?",
      answer: `ÇEMiNi! est une Trinité Stimulatoire "ands.ot.rus la Réalité" — trois manières de se rapporter au réel : immersion (LEMiNiQ), surplomb (REMiNiK) et composition (GEMiNiC). LEMiNiQ opère "dans.autour la Réalité Lucide Onirique Mlush" [Secret｜SycrⒺt]. REMiNiK opère "sur.autour la Réalité DOMINO Ludique Plush" [Sélection｜SylectiΩn]. GEMiNiC opère "dans.autour.sur la Réalité CoqUiNe DOMINO Mlush'Plush YgijfeV" [Syllepse｜Syllæps]. Ce sont des régimes de perception du réel propres à Lysrua, organisés autour de la polarité SYL｜LYS.`
    },
    {
      question: "Qu'est-ce que le PROjECT SSeCCu$ ?",
      answer: `Un tableau d'Aursyl — "Diagramme de Colonisation Négative, Revue du Succès" — structuré en 5 colonnes et 10 rangées qui cartographie les mécanismes de capture aursyliens.`
    },
    {
      question: "Qu'est-ce que 'La coquinerie cachotière' comme école de pensée ?",
      answer: `La seule auto-description qu'⟁URNELCY accepte. Le texte exact : "Vu qu'aucune description académique ne capture ce projet, si ONEL6 aurait eu une école de pensée, se serait la coquinerie cachotière, car son auteur n'a d'autre loisir que de d'écrire n'importe quoi." Elle s'accompagne d'une précision sur les dieux : ⟁URNELCY ne statue pas sur leur existence, les prend "comme idée intéressante à explorer et non comme des absolus objectifs" — "un amusement dont on se confond avec ambivalence comme objet-talismans."`
    }
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
