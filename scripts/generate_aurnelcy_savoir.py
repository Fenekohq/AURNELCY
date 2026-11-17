from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import quote
import hashlib
import re


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "AURNELCY_SAVOIR.md"
AGENTS = ROOT / "AGENTS.md"
INVENTORY_START = "<!-- BEGIN GENERATED SOURCE INVENTORY -->"
INVENTORY_END = "<!-- END GENERATED SOURCE INVENTORY -->"

KNOWLEDGE = r"""# AURNELCY — dossier de connaissance

> Synthèse éditoriale et guide de navigation dans les sources du projet.

## Comment lire ce document

- La synthèse décrit l'organisation et les thèmes tels qu'ils ressortent du
  site ; elle ne prétend pas résoudre les ambiguïtés ou fixer un canon.
- Les liens vers les grandes sections ouvrent directement la page source.
  Pour les formulations exactes, tableaux et contenus repliés, consulter
  `index.html` ; pour les données interactives, consulter les fichiers
  JavaScript concernés.
- Les médias sont inventoriés par nom, sans transcription audio ni description
  visuelle. Les sources du dépôt font foi si cette synthèse diverge du site.

## Nature et parcours du projet

AURNELCY (aussi nommé ⟁URNELCY ou ONEL6) est une création textuelle et
conceptuelle : un système personnel de sens, d'imagination et de représentation
qui combine philosophie, théogonie, langue inventée, poésie, tableaux,
mythologie et outils interactifs. L'introduction présente explicitement
l'œuvre comme une fiction consciente de son auteur et de son caractère inventé,
plutôt que comme un dogme ou une description académique. Le français, l'anglais
et le vocabulaire néologique propre au projet s'y mêlent.

Le parcours recommandé est vertical : des définitions et fondations vers les
écrits, les schèmes et les bilans, puis une réouverture et une nomenclature.
Les sections empruntent des formes variées — essais, poèmes, chants, tableaux,
calendriers, cartes, jeux et fictions — et leurs noms, symboles, répétitions et
contrastes font partie de l'expression. Un passage peut être sérieux, ironique,
fictionnel ou volontairement contradictoire ; ne pas le reformuler comme une
affirmation factuelle de l'auteur sans indice explicite.

## Carte de connaissance par grande section

### Introduction et sommaire

L'introduction expose la nature consciente et composite de l'œuvre, son langage
franco-anglo-néologique et l'intérêt de suivre les sections de haut en bas.
Le sommaire permet aussi de sauter directement aux sujets et aux outils ; il
donne à chaque sujet des métadonnées éditoriales (type, question, outil,
éclairage, alignement, mouvement, tension et difficulté).

### 0K — origines, langage et humain

La première grande section pose un seuil d'entrée, présente des alphabets et
des formes linguistiques, puis explore les origines humaines, la généalogie de
l'espèce et les facultés d'Homo sapiens. Elle comprend des dispositifs de
lecture et des cartes conceptuelles. C'est un socle qui relie l'histoire
naturelle, la capacité humaine, les signes et les premières notions de
l'univers.

### Mapnel — cosmogonie, métaphysique et parcours

Mapnel est organisé comme une pérégrination en six niveaux, de l'apprentissage
à la maîtrise de soi et du devenir. Ses grands mouvements sont la cosmogonie,
la métaphysique, les archétypes, le conflit, la quête et l'épreuve.

Le couple Monoa-Polyz présente une polarité de fond entre stabilisation d'une
forme et déploiement du multiple, susceptible de produire des dynamiques
florissantes ou décadentes. Admagcoq, Nezkelwac et Picol-Kentron développent
des volets individuels, collectifs et archétypaux ; les directions souveraines,
le fluide élémentaire, la gravité centrale, les cycles hebdomadaires, les
conflits et le Duel Xceptionnel en sont des motifs récurrents. Les métadonnées
des sujets et les textes associés nuancent ces notions : ne pas réduire leurs
polarités à un dualisme simple.

### IUVALCY — discours, savoir et limites

IUVALCY approfondit la connaissance, les limites du discours et les formes de
représentation. Une thèse explicite sur Crith indique que la pensée échoue
lorsqu'elle veut se refermer complètement sur ses propres termes : l'absurde
n'est pas célébré comme confusion, mais employé pour penser rupture,
incomplétude et relance du sens.

La section met en jeu plusieurs modes de formulation — appellation statique,
évocation dynamique et fabulation médiane — ainsi que théologie, théorie,
expérience de langage, épistémologie et arts formels. Ses sujets comprennent
notamment Panier, la bêtise de la bête, Gesticul, Renom et Möbius Netwow. Les
présentations bilingues, les jeux de permutation et les cartes conceptuelles
participent à l'argumentation autant qu'à la forme.

### ARc⟁diA — jeu, société et œuvres

ARc⟁diA rassemble des réflexions et œuvres autour du jeu, de la personne, de
la responsabilité, des institutions, des normes sociales et de la culture
médiatique. Le Starter Pack et sa version française, Gamer Toxicity,
.com/plain, CurSEED CurrenTCY et FekiTruTHako sont des jalons de cette
section ; plusieurs sont accompagnés de textes en anglais et en français.

Les œuvres Gorgeous Raper et Magnifique Violeur forment deux longs parcours
textuels parallèles, chacun divisé en quatre parties dont la dernière est
marquée « 4/404 ». Leurs titres et textes sont ceux de la source ; leur
présence dans la fiction ne doit pas être confondue avec une approbation
littérale de ce qu'ils décrivent. Une carte conceptuelle complète la section.

### Aursyl — cadres, relations et récits

Aursyl associe des systèmes de temps et d'organisation à des thèmes sociaux,
des relations, des conflits et des récits. Le Champ Aursylien et les emplois du
temps côtoient Messieurs-Dames, Affaires, Salut, Anti-Xenos, Joujous
Providentiels, Démence au Précipice, OUROBOROS, le Cartel Conceptionnel,
TicketTactiq, Wasteland et PROjECT SSeCCu$. Le Calendrier grégorien est mis
en regard d'autres cadres temporels du monde.

### EURÊK⟁ — références et outils

EURÊK⟁ est principalement une section-outil : des références d'Arcadistes
(JQB, LIKKHH et RUGGHH), des tags et filtres, une grille de mots croisés
4lien, ainsi que des tableaux de langues, noms natifs, traductions et
phonétique. Les outils et données associés se trouvent notamment dans
`eurekarc.js`, `4lien.js` et `idk-table.js`.

### Lysrua — calendrier, langue et domaines

Lysrua développe une autre organisation du temps et des pratiques collectives.
Le calendrier Emmaïe et la semaine Syoneme introduisent des mois, jours et
mesures propres, associés à des notions comme Honstrim, Dulett, Mobiup,
Gastelm, Ozaett, Skarp, Xyvym et Succett.

La section relie les chemins de la quête (phoRÊTT et dézELTT), le quadrage, la
silhouette lisante, Mana, les domaines, la personnalisation imaginative,
Adulte, Chrono-Chroma et Velements à Glorieuse Nation et au Syoneme Sublime.
Les titres anglais et français coexistent ; les cartes conceptuelles et les
tables sont à lire avec leurs libellés sources.

### D⦾MIN⦿'s — jeu et récit

D⦾MIN⦿'s associe un tableau Unicode de tuiles duales à une suite de récits
et de personnages. Les cycles Sycle-0, Felgora, Cyultii, Tridalment,
Nadelpe, Mooderagion, OËQ et ⟁KDUQ sont découpés en épisodes ; le sommaire
leur associe des étapes comme les îles de Mapnel, IUVALCY et Arcadia,
l'assemblage des îles et des victoires. Les épisodes et leurs formulations
exactes se trouvent dans `index.html`.

### Réouverture, langue et nomenclature

Après les sections narratives, des phrases expérimentales ouvrent des pistes
de lore sans classement systématique. Les pages de clôture rassemblent des
capsules, cartes conceptuelles, datation des écrits, trivia et une réflexion
sur la langue, la vocalisation et les étymologies. Une taxonomie explicite
répertorie des tags courants, ambivalents, trompeurs ou auto-référentiels et
des critères comme testabilité, portée, fécondité, simplicité et conservatisme.
La nomenclature finale permet d'explorer les termes par ordre alphabétique et
par catégories de détails.

### Contenu porté par les scripts

Les sources JavaScript ajoutent ou pilotent notamment le dictionnaire et les
définitions, les données de FAQ, les dates d'écriture, les chansons, les
personnages, le tableau multilingue, l'historique, les références Eureka, le
calendrier, les mots croisés, les capsules, les cartes, les compteurs et les
préférences locales. Pour comprendre leurs données et comportements, consulter
les fichiers concernés : ce guide ne les retranscrit pas.

"""

BLOCK_TAGS = {
    "address", "article", "aside", "blockquote", "br", "button", "dd", "details",
    "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form",
    "header", "hr", "label", "legend", "li", "main", "nav", "ol", "option",
    "p", "pre", "section", "select", "summary", "table", "tbody", "td", "tfoot",
    "th", "thead", "tr", "ul",
}
SKIP_TAGS = {"script", "style"}
HEADING_RE = re.compile(r"^h[1-6]$")


def normalize(text):
    return " ".join(text.split())


class PageIndex(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.events = []
        self.sections = []
        self.heading = None
        self.text = []
        self.skip_stack = []

    def flush_text(self):
        content = normalize(" ".join(self.text))
        if content:
            self.events.append(("text", content))
        self.text.clear()

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in SKIP_TAGS:
            self.flush_text()
            self.skip_stack.append(tag)
            return

        if self.skip_stack:
            return

        if HEADING_RE.match(tag):
            self.flush_text()
            self.heading = (tag, attrs.get("id", ""), [])
        elif tag in BLOCK_TAGS:
            self.flush_text()

    def handle_endtag(self, tag):
        if tag in SKIP_TAGS and self.skip_stack:
            self.skip_stack.pop()
            return

        if self.skip_stack:
            return

        if self.heading and tag == self.heading[0]:
            heading_tag, identifier, parts = self.heading
            title = normalize(" ".join(parts))
            self.events.append(("heading", heading_tag, title))
            if heading_tag == "h1" and identifier and identifier != "fin":
                self.sections.append((identifier, title))
            self.heading = None
        elif tag in BLOCK_TAGS:
            self.flush_text()

    def handle_data(self, data):
        if self.skip_stack:
            return
        if self.heading is not None:
            self.heading[2].append(data)
        else:
            self.text.append(data)


def update_agents_inventory(js_files, css_files, asset_files, word_count):
    content = AGENTS.read_text(encoding="utf-8")
    if content.count(INVENTORY_START) != 1 or content.count(INVENTORY_END) != 1:
        raise RuntimeError("Les marqueurs d'inventaire généré sont absents ou ambigus dans AGENTS.md.")

    source_files = [ROOT / "index.html", ROOT / "manifest.json", ROOT / "package.json"]
    source_files.extend(js_files)
    source_files.extend(css_files)
    fingerprint = hashlib.sha256()
    for path in sorted(source_files):
        fingerprint.update(path.relative_to(ROOT).as_posix().encode("utf-8"))
        fingerprint.update(b"\0")
        fingerprint.update(path.read_bytes())
        fingerprint.update(b"\0")
    for path in asset_files:
        fingerprint.update(path.relative_to(ROOT).as_posix().encode("utf-8"))
        fingerprint.update(str(path.stat().st_size).encode("ascii"))
        fingerprint.update(b"\0")

    generated = [
        f"- Texte HTML : {word_count:,} mots.",
        f"- Sources : {len(js_files)} scripts JavaScript, {len(css_files)} feuilles CSS et {len(asset_files)} médias.",
        f"- Empreinte SHA-256 des sources : `{fingerprint.hexdigest()}`.",
        "",
        "Fichiers JavaScript : " + ", ".join(f"`{path.name}`" for path in js_files) + ".",
        "Feuilles CSS : " + ", ".join(f"`{path.name}`" for path in css_files) + ".",
        "",
    ]
    generated_text = "\n".join(generated)
    start = content.index(INVENTORY_START) + len(INVENTORY_START)
    end = content.index(INVENTORY_END)
    if end < start:
        raise RuntimeError("L'ordre des marqueurs d'inventaire est invalide dans AGENTS.md.")
    content = content[:start] + "\n" + generated_text + content[end:]
    AGENTS.write_text(content, encoding="utf-8", newline="\n")


def build():
    page = ROOT / "index.html"
    parser = PageIndex()
    parser.feed(page.read_text(encoding="utf-8", errors="replace"))
    parser.close()
    parser.flush_text()

    lines = [KNOWLEDGE.rstrip(), "", "## Accès rapide aux grandes sections", ""]
    lines.append("Les intitulés ci-dessous pointent vers leur ancre dans la page source.")
    lines.append("")
    seen_sections = set()
    for identifier, title in parser.sections:
        if identifier in seen_sections:
            continue
        seen_sections.add(identifier)
        label = title.replace("\\", "\\\\").replace("[", "\\[").replace("]", "\\]")
        lines.append(f"- [{label}](./index.html#{quote(identifier, safe='-_.~')})")
    lines.append("")

    js_files = sorted(ROOT.glob("*.js"))
    css_files = sorted(ROOT.glob("*.css"))

    asset_files = sorted(path for path in (ROOT / "feature").rglob("*") if path.is_file())
    lines.extend(("## Médias de `feature/`", ""))
    if asset_files:
        lines.extend(("| Fichier | Type | Taille (octets) |", "| --- | --- | ---: |"))
        for path in asset_files:
            relative = path.relative_to(ROOT).as_posix().replace("|", "\\|")
            lines.append(f"| `{relative}` | `{path.suffix.lower() or 'sans extension'}` | {path.stat().st_size} |")
    else:
        lines.append("_Aucun média trouvé._")
    lines.append("")

    OUTPUT.write_text("\n".join(lines), encoding="utf-8", newline="\n")
    word_count = sum(
        len((event[1] if event[0] == "text" else event[2]).split())
        for event in parser.events
    )
    update_agents_inventory(js_files, css_files, asset_files, word_count)
    print(
        f"Généré : {OUTPUT.relative_to(ROOT).as_posix()} "
        f"et {AGENTS.relative_to(ROOT).as_posix()} "
        f"({word_count} mots HTML, "
        f"{len(js_files)} scripts JS, {len(css_files)} feuilles CSS, "
        f"{len(asset_files)} médias)"
    )


if __name__ == "__main__":
    build()
