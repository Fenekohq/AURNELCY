# Contexte du projet AURNELCY

Ce fichier donne aux assistants de code une carte du dépôt et ses contraintes
pratiques. Il ne remplace pas l'inspection des fichiers concernés : le code
reste la source de vérité.

Pour la synthèse éditoriale et le corpus textuel complet, consulter
[`AURNELCY_SAVOIR.md`](./AURNELCY_SAVOIR.md). Ce fichier généré peut être
reconstruit avec `python scripts/generate_aurnelcy_savoir.py`.
Pour toute question de lore, de vocabulaire ou de contenu, rechercher dans ce
corpus avant de répondre ; la synthèse seule n'est pas exhaustive. Les médias
binaires y sont inventoriés par nom, mais pas décrits ni transcrits.
Après un déploiement réussi associé à `main` ou à l'environnement
`github-pages`, le workflow GitHub régénère ces documents et pousse un commit
s'ils ont changé. L'inventaire ci-dessous est généré ; les descriptions et
consignes de ce fichier restent éditoriales.

## Vue d'ensemble

AURNELCY est un site statique, principalement constitué d'une page HTML, qui
présente un univers de création mêlant textes, notions, tableaux et outils
interactifs. Le contenu est surtout en français, avec des passages et des
interfaces en anglais. Le site peut aussi être installé et utilisé hors ligne.

Il n'y a pas d'application serveur ni de chaîne de compilation front-end
apparente. `package.json` décrit notamment l'ouverture du site par NW.js
(`index.html`, `nodejs: false`) ; ce n'est pas un manifeste de dépendances
npm et il ne définit pas de scripts de test.

## Architecture

- `index.html` est le point d'entrée et la source principale du contenu. Il
  contient la structure et une grande partie des textes, tableaux, commandes
  d'interface et identifiants utilisés par les scripts.
- Les fichiers JavaScript sont chargés comme scripts classiques depuis
  `index.html`, dans un ordre qui peut être important. Plusieurs fonctions et
  données sont exposées dans l'espace global (`window`) ou consommées par
  d'autres scripts.
- Les fichiers CSS sont reliés séparément à la page. Mermaid est chargé depuis
  jsDelivr pour les diagrammes ; vérifier son comportement en cas de travail
  sur le mode hors ligne.
- `service-worker.js` déclare les ressources essentielles et celles proposées
  au téléchargement hors ligne. `offline.js` pilote l'interface de ce
  téléchargement.
- `feature/` regroupe les images, icônes, couvertures, miniatures et fichiers
  audio utilisés par le site.

## Carte des fichiers

### Page et style

| Fichier | Rôle |
| --- | --- |
| `index.html` | Page principale, contenu, structure et points d'ancrage des interactions |
| `body.css` | Variables et couleurs du thème |
| `layout.css` | Mise en page et styles généraux |
| `buttons.css` | Styles communs des boutons et contrôles |
| `theorem.css` | Styles liés aux sections de contenu et tableaux |
| `mythology.css` | Styles de tableaux et éléments de l'univers |
| `dictionnary.css` | Styles du dictionnaire et des actions de vocabulaire |
| `capsule.css` | Aperçus et fenêtres des capsules |
| `conceptmap.css` | Aperçus des cartes conceptuelles |

### Scripts et données

| Fichier | Rôle principal |
| --- | --- |
| `script.js` | Interactions générales : navigation flottante, texte révélé, tables dépliables, défilement et autres comportements de page |
| `theme-toggle.js` | Application et bascule du thème clair/sombre |
| `offline.js`, `service-worker.js` | Téléchargement et mise en cache des ressources pour le mode hors ligne |
| `song-feature.js` | Affichage et interactions de la sélection musicale |
| `date.js` | Données des dates d'écriture, affichées depuis `script.js` |
| `definitions.js`, `vocab.js`, `dictionnary.js` | Sélection de définitions, popovers de vocabulaire et interface du dictionnaire |
| `bloody-tale.js` | Données et navigation/recherche associées à Bloody Tale |
| `eurekarc.js` | Interface et données de références Eureka/Arcadia, dont filtres et recherche |
| `calendar.js` | Conversion et affichage du calendrier Emmaie |
| `planetarium.js` | Vue planétarium associée au tableau du globe |
| `characters.js` | Navigation entre les fiches de personnages |
| `capsule.js` | Clonage de contenu et fenêtres de prévisualisation des capsules |
| `conceptmap.js` | Configuration et affichage des aperçus/cartes conceptuelles |
| `checkboxes.js` | Synchronisation des cases à cocher de détails et de nomenclature |
| `a6es.js` | Interaction du tableau de mémoire A6es |
| `counter.js` | Comptages de mots et compteurs d'âge |
| `tools.js` | Outils d'interface, notamment les contrôles typographiques |
| `5ync.js`, `snewlc-modal.js` | Données et interface de la fenêtre historique |
| `4lien.js` | Mots croisés interactifs |
| `table-swapper.js` | Bascule entre variantes de tableaux |
| `likes-dislikes.js` | Listes « likes/dislikes » conservées côté navigateur |
| `idk-table.js` | Données du tableau de traductions « I don't know » |
| `faq-list.js` | Données et affichage de la FAQ |

### Configuration et ressources

- `manifest.json` décrit l'installation comme application web.
- `package.json` contient les métadonnées et paramètres NW.js.
- `favicon.png` et `feature/` contiennent les ressources visuelles et audio.
- `.nojekyll` est un marqueur de publication statique ; ne pas le supprimer
  sans raison.
- `scripts/generate_aurnelcy_savoir.py` régénère le dossier de connaissance à
  partir du HTML, des littéraux JavaScript/CSS et des noms des médias.

## Inventaire automatique des sources

<!-- BEGIN GENERATED SOURCE INVENTORY -->
- Corpus HTML : 59,865 mots.
- Sources : 27 scripts JavaScript, 8 feuilles CSS et 24 médias.
- Empreinte SHA-256 des sources : `3bf9c96126d1fe62523e77db1b4bbd6e54cd29f6b220da75b4b90c062c6ad96f`.

Fichiers JavaScript : `4lien.js`, `5ync.js`, `a6es.js`, `bloody-tale.js`, `calendar.js`, `capsule.js`, `characters.js`, `checkboxes.js`, `conceptmap.js`, `counter.js`, `date.js`, `definitions.js`, `dictionnary.js`, `eurekarc.js`, `faq-list.js`, `idk-table.js`, `likes-dislikes.js`, `offline.js`, `planetarium.js`, `script.js`, `service-worker.js`, `snewlc-modal.js`, `song-feature.js`, `table-swapper.js`, `theme-toggle.js`, `tools.js`, `vocab.js`.
Feuilles CSS : `body.css`, `buttons.css`, `capsule.css`, `conceptmap.css`, `dictionnary.css`, `layout.css`, `mythology.css`, `theorem.css`.
<!-- END GENERATED SOURCE INVENTORY -->

## Consignes pour les changements

1. Lire le code et ses appelants avant de modifier un comportement. Rechercher
   dans `index.html` les identifiants/classes concernés et dans les scripts les
   fonctions qui les consomment.
2. Garder cohérents les identifiants HTML, les sélecteurs CSS et les sélecteurs
   JavaScript. Les scripts dépendent souvent directement du DOM de `index.html`.
3. Préserver l'ordre des balises `<script>` tant que les dépendances globales
   n'ont pas été vérifiées. Ne pas convertir isolément un script en module ES.
4. Si un fichier local doit être disponible hors ligne, l'ajouter aux listes
   appropriées de `service-worker.js` et vérifier la stratégie de cache.
5. Préserver les caractères Unicode, les graphies et la casse du contenu :
   elles peuvent être intentionnelles dans cet univers.
6. Faire des changements ciblés. `index.html` est très volumineux et contient
   des sections qui se ressemblent ; éviter les remplacements globaux et le
   reformatage intégral.
7. Aucun runner de tests ou de build n'est défini dans `package.json`. Pour un
   changement d'interface, vérifier la page dans un navigateur et tester le
   comportement touché ; pour le mode hors ligne, vérifier également la mise
   en cache et le chargement sans réseau.

## Garder ce contexte à jour

Mettre à jour la carte des fichiers lorsqu'un point d'entrée, un module ou la
stratégie hors ligne change de façon notable. Pour le reste, privilégier les
commentaires proches du code plutôt que de recopier ici des détails
susceptibles de devenir obsolètes. L'inventaire des noms de fichiers et
l'empreinte des sources sont actualisés par le générateur.
