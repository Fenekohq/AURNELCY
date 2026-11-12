from html.parser import HTMLParser
from pathlib import Path
import hashlib
import re


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "AURNELCY_SAVOIR.md"
AGENTS = ROOT / "AGENTS.md"
INVENTORY_START = "<!-- BEGIN GENERATED SOURCE INVENTORY -->"
INVENTORY_END = "<!-- END GENERATED SOURCE INVENTORY -->"

KNOWLEDGE = r"""# AURNELCY — dossier de connaissance

> Synthèse éditoriale suivie d'un corpus textuel généré depuis les sources du
> dépôt. Le corpus est volumineux : chercher par titre, terme ou nom de fichier
> plutôt que de le charger intégralement dans un contexte limité.

## Comment lire ce document

- La synthèse décrit l'organisation et les thèmes tels qu'ils ressortent du
  site ; elle ne prétend pas résoudre les ambiguïtés ou fixer un canon.
- Le corpus HTML retranscrit, dans l'ordre de la page, les textes présents dans
  le balisage, y compris les contenus repliés ou conditionnels. Des attributs
  utiles (`alt`, `title`, `aria-*`, `data-*`, `placeholder`, `value`) sont
  inventoriés à part.
- Les annexes JavaScript et CSS recensent les littéraux bruts des sources. Ils
  comprennent des données, des libellés, mais aussi des sélecteurs et des
  modèles de code ; ils ne sont pas tous du texte destiné au lecteur.
- Les fichiers audio et images sont répertoriés par nom, sans transcription
  audio ni description visuelle générée. Les sources du dépôt restent la
  référence si le corpus et le site divergent.

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
phonétique. Ses données et interactions proviennent pour partie de scripts
distincts ; consulter aussi les annexes de littéraux.

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
exactes figurent dans le corpus HTML.

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
préférences locales. Le corpus ci-dessous indexe leurs chaînes littérales ; le
comportement et les relations entre données se vérifient dans les fichiers
sources.

## Corpus textuel complet

Les blocs ci-dessous sont une extraction déterministe du dépôt. L'extracteur
ignore les commentaires de code mais conserve les littéraux bruts ; les
doublons et libellés techniques sont donc normaux. Relancer
`python scripts/generate_aurnelcy_savoir.py` après une modification du contenu
pour actualiser ce document.
"""

BLOCK_TAGS = {
    "address", "article", "aside", "blockquote", "br", "button", "dd", "details",
    "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form",
    "header", "hr", "label", "legend", "li", "main", "nav", "ol", "option",
    "p", "pre", "section", "select", "summary", "table", "tbody", "td", "tfoot",
    "th", "thead", "tr", "ul",
}
ATTRIBUTE_NAMES = {"alt", "placeholder", "title", "value"}
SKIP_TAGS = {"script", "style"}
HEADING_RE = re.compile(r"^h[1-6]$")


def normalize(text):
    return " ".join(text.split())


class PageCorpus(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.events = []
        self.attributes = []
        self.inline_scripts = []
        self.heading = None
        self.text = []
        self.skip_stack = []
        self.active_script = None

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
            if tag == "script":
                self.active_script = []
            return

        if self.skip_stack:
            return

        if HEADING_RE.match(tag):
            self.flush_text()
            self.heading = (tag, [])
        elif tag in BLOCK_TAGS:
            self.flush_text()

        for name, value in attrs.items():
            if value and (
                name in ATTRIBUTE_NAMES
                or name.startswith("aria-")
                or name.startswith("data-")
                or name.startswith("on")
            ):
                self.attributes.append((tag, name, value))

    def handle_endtag(self, tag):
        if tag in SKIP_TAGS and self.skip_stack:
            closing = self.skip_stack.pop()
            if closing == "script" and self.active_script is not None:
                script = "".join(self.active_script)
                if script.strip():
                    self.inline_scripts.append(script)
                self.active_script = None
            return

        if self.skip_stack:
            return

        if self.heading and tag == self.heading[0]:
            title = normalize(" ".join(self.heading[1]))
            self.events.append(("heading", self.heading[0], title))
            self.heading = None
        elif tag in BLOCK_TAGS:
            self.flush_text()

    def handle_data(self, data):
        if self.skip_stack:
            if self.active_script is not None:
                self.active_script.append(data)
            return
        if self.heading is not None:
            self.heading[1].append(data)
        else:
            self.text.append(data)


def javascript_literals(source):
    literals = []
    index = 0
    size = len(source)

    while index < size:
        char = source[index]

        if char == "/" and index + 1 < size:
            if source[index + 1] == "/":
                newline = source.find("\n", index + 2)
                index = size if newline == -1 else newline + 1
                continue
            if source[index + 1] == "*":
                end = source.find("*/", index + 2)
                index = size if end == -1 else end + 2
                continue

        if char not in ("'", '"', "`"):
            index += 1
            continue

        quote = char
        start = index
        index += 1
        while index < size:
            if source[index] == "\\":
                index += 2
                continue
            if source[index] == quote:
                index += 1
                break
            index += 1
        literal = source[start:index]
        if literal not in ("''", '""', "``"):
            literals.append(literal)

    return literals


def code_fence(text):
    longest = max((len(match.group(0)) for match in re.finditer(r"`+", text)), default=0)
    return "`" * max(3, longest + 1)


def append_code_block(lines, text):
    fence = code_fence(text)
    lines.extend((fence, text, fence, ""))


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
        f"- Corpus HTML : {word_count:,} mots.",
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
    parser = PageCorpus()
    parser.feed(page.read_text(encoding="utf-8", errors="replace"))
    parser.close()
    parser.flush_text()

    lines = [KNOWLEDGE.rstrip(), "", "### Texte de `index.html`", ""]
    for event in parser.events:
        if event[0] == "heading":
            level = int(event[1][1])
            title = event[2].replace("\\", "\\\\").replace("[", "\\[").replace("]", "\\]")
            lines.extend(("#" * min(level + 2, 6) + " " + title, ""))
        else:
            text = event[1].replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
            lines.extend(("> " + text, ""))

    lines.extend(("### Textes portés par les attributs HTML", ""))
    attribute_rows = [
        f"{tag}\t{name}\t{value}"
        for tag, name, value in parser.attributes
    ]
    if attribute_rows:
        append_code_block(lines, "\n".join(attribute_rows))

    js_files = sorted(ROOT.glob("*.js"))
    for source_file, inline_source in [
        *((path, None) for path in js_files),
        *((None, source) for source in parser.inline_scripts),
    ]:
        if source_file:
            label = source_file.relative_to(ROOT).as_posix()
            source = source_file.read_text(encoding="utf-8", errors="replace")
        else:
            label = "index.html — script intégré"
            source = inline_source

        literals = javascript_literals(source)
        if not literals:
            continue
        lines.extend((f"### Littéraux JavaScript — `{label}`", ""))
        append_code_block(lines, "\n".join(literals))

    css_files = sorted(ROOT.glob("*.css"))
    for source_file in css_files:
        literals = javascript_literals(source_file.read_text(encoding="utf-8", errors="replace"))
        if not literals:
            continue
        label = source_file.relative_to(ROOT).as_posix()
        lines.extend((f"### Littéraux CSS — `{label}`", ""))
        append_code_block(lines, "\n".join(literals))

    asset_files = sorted(path for path in (ROOT / "feature").rglob("*") if path.is_file())
    lines.extend(("### Inventaire des médias de `feature/`", ""))
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
        f"({word_count} mots HTML, {len(parser.attributes)} attributs, "
        f"{len(js_files)} scripts JS, {len(css_files)} feuilles CSS, "
        f"{len(asset_files)} médias)"
    )


if __name__ == "__main__":
    build()
