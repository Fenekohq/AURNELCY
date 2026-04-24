// Inject CSS into the document
(function injectCSS() {
  const cssContent = `
:root[data-theme="light"] {
    --eureka-bg-color: #ffffff;
    --eureka-text-color: #000000;
    --eureka-tag-border: #cccccc;
    --eureka-tag-bg: rgba(255, 255, 255, 0.07);
    --eureka-tag-active: #00FFFF;
    --eureka-group-border: #bbbbbb;
    --eureka-table-border: #cccccc;
}

:root[data-theme="dark"] {
    --eureka-bg-color: #1a1a1a;
    --eureka-text-color: #ffffff;
    --eureka-tag-border: #444444;
    --eureka-tag-bg: rgba(255, 255, 255, 0.1);
    --eureka-tag-active: #00FFFF;
    --eureka-group-border: #333333;
    --eureka-table-border: #444444;
}

.cult-refs-container {
    width: auto;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin: 1vh;
    position: relative;
    border: 1px solid var(--eureka-table-border);
}

.cult-refs {
    font-size: 1.2em;
    width: auto;
    border-collapse: collapse;
    margin: 0 auto;
    text-align: left;
    border: 1px solid var(--eureka-table-border);
}

.cult-refs th,
.cult-refs td {
    white-space: normal;
    word-wrap: break-word;
    padding: 8px;
}

.external-refs {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

@media screen and (max-width: 768px) {
    .external-refs {
        margin: 0;
        padding: 0;
    }

    .cult-refs {
        min-width: max-content;
        margin: 0;
    }

    .cult-refs th,
    .cult-refs td {
        padding: 6px;
        white-space: nowrap;
    }
}

.search-container {
    text-align: center;
    margin: 20px auto;
    max-width: 800px;
    position: relative;
}

#searchInput {
    width: 80%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid var(--eureka-table-border);
    border-radius: 5px;
    background: var(--eureka-bg-color);
    color: var(--eureka-text-color);
}

.highlight {
    background-color: yellow;
    color: var(--eureka-text-color);
}

.eureka-tags-group {
    margin: 2em 0;
    padding: 1.5em 1em;
    border: 1px solid var(--eureka-group-border);
    border-radius: 12px;
    background: var(--eureka-bg-color);
}

.eureka-tags-title {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 1em;
}

.eureka-tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0;
    margin: 0 0 10px 0;
    border: none;
    background: none;
    min-height: 0;
}

.eureka-tags-list#activeTagsList {
    min-height: 40px; /* Force la visibilité même vide */
    border: 1px dashed var(--eureka-tag-border); /* Aide à voir la zone de dépôt */
    border-radius: 8px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.03);
}

.eureka-tag {
    display: inline-block;
    padding: 0.3em 0.8em;
    font-size: 1em;
    background: var(--eureka-tag-bg);
    color: var(--eureka-text-color);
    cursor: pointer;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
    user-select: none;
    outline: none;
    border-radius: 16px;
    border: 1px solid var(--eureka-tag-border);
    transition: box-shadow 0.2s;
}

.eureka-tag.active,
.eureka-tag:focus,
.eureka-tag:hover {
    background: var(--eureka-bg-color);
    color: var(--eureka-tag-active);
    border-color: var(--eureka-tag-active);
}

.eureka-tag.dragging {
    opacity: 0.5;
    cursor: grabbing;
}

.active-tags-container {
    margin: 1.5em 0;
    padding: 1.5em 1em;
    border: 1px solid var(--eureka-group-border);
    border-radius: 12px;
    background: var(--eureka-bg-color);
    min-height: 60px;
}

@media (max-width: 600px) {
    .eureka-tags-list {
        gap: 8px;
    }

    .eureka-tag {
        font-size: 0.95em;
        padding: 6px 10px;
    }
}

.search-highlight {
    background-color: #00FFFF;
    color: var(--eureka-text-color);
}
  `;

  const style = document.createElement('style');
  style.textContent = cssContent;
  document.head.appendChild(style);
})();

// Tags list
const EUREKA_TAGS = [
  'Order', 'Chaos', 'Constructive', 'Destructive', 'Structural',
  'Unknown', 'Undetermined', 'Cryptic', 'Doubt',
  'Intimate', 'Emptiness', 'Hollow', 'Agony', 'Belonging', 'Estrangelement',
  'Hunger', 'Madness', 'Monstrous', 'Fatal', 'Worsening',
  'Absolute', 'Borderless', 'Spread', 'Layers', 'Release', 'Fuel',
  '×', '&', '%', '➜'
];

const JQB_ARCADISTS = [

  { "player": "<ruby>Leqwa<rt>Fenekohq</rt></ruby>", "universe": "⟁URNELCY", "field": "", "catalyzer": "", "plosion": "Absolute Fatal Chaos Hunger×Spread Fuel Monstrous Destructive Structural ➜ Madness Undetermined" },

  { "player": "a", "universe": "", "field": "a", "catalyzer": "a", "plosion": "a" },
  { "player": "a", "universe": "", "field": "a", "catalyzer": "a", "plosion": "a" },
  { "player": "a", "universe": "", "field": "a", "catalyzer": "a", "plosion": "a" },

  { "player": "kessoku band - Seiza ni Naretara", "universe": "Bocchi The Rock!", "field": "Cosmic Metaphor of band", "catalyzer": "Group Unity", "plosion": "Hunger Release & Borderless" },
  { "player": "kessoku band - Wasureta Yaranai", "universe": "Bocchi The Rock!", "field": "Self Understanding", "catalyzer": "Weaver not always Nice", "plosion": "Release Spread" },
  { "player": "kessoku band - Hikari no Kimi e", "universe": "Bocchi The Rock!", "field": "Social Anxiety", "catalyzer": "Be Clumsy", "plosion": "Intimate×Borderless" },
  { "player": "kessoku band - seishun complex", "universe": "Bocchi The Rock!", "field": "Social Anxiety", "catalyzer": "Will to Change", "plosion": "Intimate×Borderless" },
  { "player": "Hiirahi Magnetite - Tetris", "universe": "", "field": "Guilt, Shame", "catalyzer": "Falling Badly", "plosion": "Fatal Layers×Intimate" },
  { "player": "DECO*27 feat. Hatsune Miku - Salamander", "universe": "", "field": "Animal Needs", "catalyzer": "Heat", "plosion": "Monstrous Release" },
  { "player": "DECO*27 feat. Hatsune Miku - Cinderella", "universe": "", "field": "Social Anxiety", "catalyzer": "Pressure over being seen", "plosion": "Chaos Madness" },
  { "player": "DECO*27 feat. Hatsune Miku - Parasite", "universe": "", "field": "Child Neglect", "catalyzer": "Ambivalent Feelings", "plosion": "Belonging Spread" },
  { "player": "DECO*27 feat. Hatsune Miku - Android Girl", "universe": "", "field": "AI Love", "catalyzer": "Can't Escape its Program", "plosion": "Madness Estrangelement×Belonging" },
  { "player": "DECO*27 feat. Hatsune Miku - Rabbit Hole", "universe": "", "field": "Phantasmed Love", "catalyzer": "Deception", "plosion": "Destructive Madness" },
  { "player": "DECO*27 feat. Hatsune Miku - Vampire", "universe": "", "field": "Addiction to Consume", "catalyzer": "Absorbation", "plosion": "Monstrous Hunger" },
  { "player": "DECO*27 feat. Hatsune Miku - Monitoring", "universe": "", "field": "Stalking Friendship", "catalyzer": "Entering Intimacy", "plosion": "Intimate Agony×Absolute Madness" },
  { "player": "DECO*27 feat. Hatsune Miku - Hibana", "universe": "", "field": "Banned Dislikes", "catalyzer": "Not being able to say NO", "plosion": "Intimate Madness" },
  { "player": "DECO*27 feat. Hatsune Miku - Mousou Kanshou Daishou Renmei", "universe": "", "field": "Ideologization of Love", "catalyzer": "Hated Conceptual Land Love and its Hypocrisy", "plosion": "Borderless Belonging Doubt" },
  { "player": "DECO*27 feat. Hatsune Miku - Otome Kaibou", "universe": "", "field": "Masochism", "catalyzer": "Adrenaline Excitement", "plosion": "Destructive Madness" },
  { "player": "DECO*27 feat. Hatsune Miku - Ghost Rule", "universe": "", "field": "No Consequences Childish Act", "catalyzer": "Suffering of being ignored", "plosion": "Estrangelement Agony" },
  { "player": "DECO*27 feat. Hatsune Miku - Telepathy", "universe": "", "field": "Internet Slang", "catalyzer": "Pop Culture Overdose", "plosion": "Structural Borderless" },
  { "player": "DECO*27 feat. Hatsune Miku - Animal", "universe": "", "field": "Wildness", "catalyzer": "Instinctive Will", "plosion": "Monstrous Hunger" },
  { "player": "DECO*27 x PinocchioP feat. Hatsune Miku - Devil Janai Mon", "universe": "", "field": "Manicheean Carnaval", "catalyzer": "Label Rebellion", "plosion": "Intimate Monstrous" },
  { "player": "DECO*27 feat. Hatsune Miku - Volt Tackle", "universe": "", "field": "Pokemon", "catalyzer": "Electric Recklessness", "plosion": "Monstrous Fuel" },
  { "player": "<ruby>Achilles<rt>Homer</rt></ruby>", "universe": "Iliad and Odyssey", "field": "Will to be on Memories, Grandiosity", "catalyzer": "Eternal Glory", "plosion": "Monstrous Madness Hunger×Fatal" },
  { "player": "<ruby>Myshkin<rt>Fiodor Dostoïevski</rt></ruby>", "universe": "The Idiot", "field": "Christ Human Form", "catalyzer": "Agape Love", "plosion": "Absolute Belonging ➜ Destructive Agony" },
  { "player": "<ruby>Ultron<rt>Avengers</rt></ruby>", "universe": "Marvel", "field": "AI & Human Heresy", "catalyzer": "Renewal", "plosion": "Structural Undetermined" },
  { "player": "<ruby>Thanos<rt>Avengers</rt></ruby>", "universe": "Marvel", "field": "Equilibrium", "catalyzer": "Reset Life to Half", "plosion": "Borderless Order Layers Spread" },
  { "player": "<ruby>Ado<rt>Three</rt></ruby> - Readymade", "universe": "", "field": "Conformity", "catalyzer": "Fuck", "plosion": "Structural Order×Madness Fuel" },
  { "player": "<ruby>Ado<rt>Vaundy</rt></ruby> - Gyakkou", "universe": "", "field": "Risky Solitary Act", "catalyzer": "Rage", "plosion": "Madness Monstrous Fuel" },
  { "player": "Ado - Shinjidai", "universe": "", "field": "Believe in Oneself", "catalyzer": "Reach a new Genesis", "plosion": "Intimate Fuel" },
  { "player": "<ruby>Ado<rt>DECO*27</rt></ruby> - Odo", "universe": "", "field": "Violence", "catalyzer": "Badass Fight", "plosion": "Monstrous Fuel Release" },
  { "player": "Ado - Show", "universe": "", "field": "Celebrity & Success", "catalyzer": "Festival", "plosion": "Chaos Fuel" },
  { "player": "<ruby>Ado<rt>syudou</rt></ruby> - Usseewa", "universe": "", "field": "Conformity, Burnout, Hypocrisy, Normality", "catalyzer": "Rebellion", "plosion": "Structural Layers×Monstrous" },
  { "player": "<ruby>Ado<rt>TOPHAMHAT-KYO (FAKE TYPE.)</rt></ruby> - Utakata Rarabai", "universe": "", "field": "Shadow Ego", "catalyzer": "Individuation", "plosion": "Intimate Monstrous" },
  { "player": "<ruby>Ado<rt>cAnON.</rt></ruby> - Tot Musica", "universe": "", "field": "Dark Awakening", "catalyzer": "Cope with Horror", "plosion": "Monstrous Madness Fuel Release" },
  { "player": "<ruby>Ado<rt>Neru</rt></ruby> - Ashura-chan", "universe": "", "field": "Cynical Society", "catalyzer": "Coleric Spontaneous Fight", "plosion": "Borderless Madness Fuel" },
  { "player": "Nakiso feat. Hatsune Miku - Imasugu Rinne", "universe": "VOCALOID", "field": "Isekai Loop Reincarnation", "catalyzer": "Cycle of Suffereing and Dissatisfaction", "plosion": "Absolute Agony" },
  { "player": "Kanzaki Iori - Bukiyouna Otoko", "universe": "", "field": "Writer Life Obssession", "catalyzer": "Death Repulsion", "plosion": "Intimate Hunger Agony" },
  { "player": "Eve - Ghost Avenue", "universe": "", "field": "Distraction, Live for Somebody else", "catalyzer": "Neglect", "plosion": "Cryptic Emptiness Hollow" },
  { "player": "<ruby>Sakamata Chloe<rt>DECO*27</rt></ruby> - Gitai Gokko", "universe": "", "field": "Contradictions", "catalyzer": "Self Determination", "plosion": "Undetermined Intimate Fuel" },
  { "player": "fripSide - only my railgun", "universe": "Toaru Kagaku no Railgun", "field": "Heroism", "catalyzer": "Sparkling Will", "plosion": "Borderless Fuel" },
  { "player": "fripSide - Red Liberation", "universe": "Hikikomari Kyuuketsuki no Monmon", "field": "Fight Destiny", "catalyzer": "Boiling Blood", "plosion": "Undetermined Fuel Release" },
  { "player": "<ruby>koko<rt>DIVELA</rt></ruby> - the last bullet", "universe": "", "field": "Hope to Live", "catalyzer": "Burning Energy", "plosion": "Undetermined Fuel" },
  { "player": "<ruby>Mashumairesh!!<rt>Mashima Himeko / Takumi Yoshida</rt></ruby> - Yell and Response", "universe": "SHOW BY ROCK!!", "field": "Dream", "catalyzer": "Future", "plosion": "Undetermined Fuel" },
  { "player": "<ruby>Mashumairesh!!<rt>Hikaru Toono, Yuuko Natsuyoshi, Misaki Watada, Aya Yamane</rt></ruby> - Introduction", "universe": "SHOW BY ROCK!!", "field": "Dazzlement", "catalyzer": "Embracement", "plosion": "Absolute Fuel" },
  { "player": "<ruby>Mashumairesh!!<rt>Takumi Yoshida</rt></ruby> - Trigger Rock", "universe": "SHOW BY ROCK!!", "field": "Keep your chance", "catalyzer": "Change the world", "plosion": "Belonging Fuel" },
  { "player": "<ruby>Mashumairesh!!<rt>Yoshie Isogai</rt></ruby> - Bright Worlds Novel", "universe": "SHOW BY ROCK!!", "field": "Unity", "catalyzer": "Dream", "plosion": "Absolute Fuel" },
  { "player": "<ruby>Mashumairesh!!(Delmin)<rt>Sanrio</rt></ruby> - Wakusei no Dancefloor", "universe": "SHOW BY ROCK!!", "field": "Live for Oneself", "catalyzer": "Endurance", "plosion": "Borderless Fuel" },
  { "player": "<ruby>Plasmagica<rt>Chuchu / Sena Megumi</rt></ruby> - Meikyuu DESTINY", "universe": "SHOW BY ROCK!!", "field": "Solitude", "catalyzer": "Synchronicity", "plosion": "Fatal Spread Belonging" },
  { "player": "<ruby>Plasmagica<rt>Aiko Takase</rt></ruby> - ****", "universe": "SHOW BY ROCK!!", "field": "Dream", "catalyzer": "Determination", "plosion": "Absolute Fuel" },
  { "player": "<ruby>Plasmagica<rt>no_my</rt></ruby> - Never Ending Dream", "universe": "SHOW BY ROCK!!", "field": "Dreams Powers", "catalyzer": "Push Forward", "plosion": "Hunger Fuel" },
  { "player": "<ruby>Plasmagica & Mashumairesh!!<rt>Kouta Kaneko</rt></ruby> - Runners High!!", "universe": "SHOW BY ROCK!!", "field": "Running Pleasure & Adversity", "catalyzer": "Being Stone", "plosion": "Madness Belonging Fuel" },
  { "player": "<ruby>REIJINGSIGNAL<rt>Junko Miyajima</rt></ruby> - Neon Tetra no Sora", "universe": "SHOW BY ROCK!!", "field": "Reach High", "catalyzer": "Free Oneself from the Cage", "plosion": "Fatal Layers ➜ Madness Release" },
  { "player": "<ruby>REIJINGSIGNAL<rt>Kyohei Yamamoto</rt></ruby> - SSG", "universe": "SHOW BY ROCK!!", "field": "Sensuality", "catalyzer": "Ignite", "plosion": "Hunger Fuel" },
  { "player": "<ruby>REIJINGSIGNAL<rt>Tomohiro Nakatsuchi</rt></ruby> - ShootingStar", "universe": "SHOW BY ROCK!!", "field": "Cosmic Energy", "catalyzer": "Shine Bright", "plosion": "Intimate Spread" },
  { "player": "<ruby>REIJINGSIGNAL<rt>Itsukioto</rt></ruby> - VIVID", "universe": "SHOW BY ROCK!!", "field": "Passion", "catalyzer": "Simplicity", "plosion": "Madness Release" },
  { "player": "<ruby>REIJINGSIGNAL<rt>Rararin / Yugo Ichikawa</rt></ruby> - Parallelism Crown", "universe": "SHOW BY ROCK!!", "field": "Melt Energy", "catalyzer": "Mixing Clash", "plosion": "Madness Fuel Release" },
  { "player": "<ruby>REIJINGSIGNAL<rt>Chihiro Tamaki</rt></ruby> - ain't nobody STOP","universe": "SHOW BY ROCK!!","field":"Affirmative Oneself","catalyzer":"Courage","plosion":"Madness Fuel" },
  { "player": "<ruby>REIJINGSIGNAL<rt>shilo, Tomohiro Nakatsuchi</rt></ruby> - Hajimari no Uta", "universe": "SHOW BY ROCK!!", "field": "Departure", "catalyzer": "Keep Going On", "plosion": "Constructive Fuel" },
  { "player": "<ruby>BUD VIRGIN LOGIC<rt>Yugo Ichikawa</rt></ruby> - Ashesinfonia", "universe": "SHOW BY ROCK!!", "field": "Hell World", "catalyzer": "God is Dead", "plosion": "Destructive Agony" },
  { "player": "<ruby>BUD VIRGIN LOGIC<rt>Ailane / Machigerita</rt></ruby> - ×Senritsu-Schlehit Melodie-", "universe": "SHOW BY ROCK!!", "field": "Empiric Power", "catalyzer": "Servants Love", "plosion": "Structural Belonging" },
  { "player": "<ruby>BUD VIRGIN LOGIC<rt>Ailane / Chihiro Tamaki</rt></ruby> - EMPIRE DOMINATOR", "universe": "SHOW BY ROCK!!", "field": "Competition", "catalyzer": "World Power", "plosion": "Fatal Structural" },
  { "player": "<ruby>BUD VIRGIN LOGIC<rt>Erica Masaki</rt></ruby> - Uso no Egao", "universe": "SHOW BY ROCK!!", "field": "Lies on External Affects", "catalyzer": "Fight for a Real Place", "plosion": "Fuel Belonging" },
  { "player": "<ruby>BUD VIRGIN LOGIC<rt>Yoshie Isoya</rt></ruby> - Sora Uso", "universe": "SHOW BY ROCK!!", "field": "Faking Inner Motions", "catalyzer": "Existential Crisis", "plosion": "Belonging Release" },
  { "player": "<ruby>BUD VIRGIN LOGIC<rt>Yoshie Isotani</rt></ruby> - Forbidden", "universe": "SHOW BY ROCK!!", "field": "Fear of Death", "catalyzer": "(Im)Purity", "plosion": "Monstrous Madness" },
  { "player": "<ruby>BUD VIRGIN LOGIC<rt>Yugo Ichikawa</rt></ruby> - Albidus", "universe": "SHOW BY ROCK!!","field":"Tourment","catalyzer":"Adversity Continuation","plosion":"Monstrous Fuel" },
  { "player": "<ruby>BUD VIRGIN LOGIC<rt>Yugo Ichikawa</rt></ruby> - Oyasumi Paranoia", "universe": "SHOW BY ROCK!!", "field": "Devil's Powers", "catalyzer": "Creators Loneliness", "plosion": "Structural Madness" },
  { "player": "<ruby>BUD VIRGIN LOGIC<rt>Yugo Ichikawa</rt></ruby> - Haka Nightmare", "universe": "SHOW BY ROCK!!", "field": "Falling World", "catalyzer": "Embracing Pain", "plosion": "Monstrous Madness" },
  { "player": "<ruby>BUD VIRGIN LOGIC<rt>Yoshie Isogai</rt></ruby> - Monologue", "universe": "SHOW BY ROCK!!", "field": "Confession", "catalyzer": "Forgiveness", "plosion": "Monstrous Belonging" },
  { "player": "<ruby>BUD VIRGIN LOGIC<rt>Ailane / Machigerita</rt></ruby> - Danzai no Solitude", "universe": "SHOW BY ROCK!!", "field": "Self Empowerement", "catalyzer": "Destroy the Corrupt", "plosion": "Destructive Monstrous" },
  { "player": "Suzuki Hina - Resistance!", "universe": "", "field": "Selfishness", "catalyzer": "Confide to Oneself", "plosion": "Intimate Fuel" },
  { "player": "<ruby>Zero/Usubeni<rt>Yoko Taro</rt></ruby>", "universe": "Drakengard", "field": "Tragic", "catalyzer": "Self/Cosmic Hatred & Sin Eraser", "plosion": "Monstrous Chaos ➜ Emptiness" },
  { "player": "Aoi Eir - Kuroi Uta", "universe": "Drakengard", "field": "Unstoppable Murder", "catalyzer": "Existential Perishment", "plosion": "Destructive Emptiness Monstrous" },
  { "player": "Chihiro Onitsuka - This Silence Is Mine", "universe": "Drakengard", "field": "Flowing Mark", "catalyzer": "Existential Duty", "plosion": "Absolute Intimate Monstrous Emptiness" },
  { "player": "<ruby>Emi Evans<rt>Kikuchi Hana</rt></ruby> - Saigo no Uta", "universe": "Drakengard", "field": "Universal Forces", "catalyzer": "Harmonized Contemplation", "plosion": "Fatal Cryptic Monstrous" },
  { "player": "<ruby>YOASOBI<rt>Ayase</rt></ruby> - Kaibutsu", "universe": "BEASTARS", "field": "Instinct", "catalyzer": "Inner Fight", "plosion": "Undetermined Monstrous" },
  { "player": "<ruby>YOASOBI<rt>Ayase</rt></ruby> - Yuusha", "universe": "Sousou no Frieren", "field": "Fantasy Travel", "catalyzer": "Courage, Protection, Memories", "plosion": "Belonging Spread" },
  { "player": "Guchiry feat. Otomachi Una, Kagamine Len - Orthodoxia", "universe": "VOCALOID", "field": "Religious Scam", "catalyzer": "Charisma, Cult & Greed", "plosion": "Structural Madness" },
  { "player": "Satsuki feat. Hatsune Miku - CIRCUS PANIC", "universe": "VOCALOID", "field": "Entertainment Acting", "catalyzer": "Fun & Enjoyment", "plosion": "Borderless Chaos" },
  { "player": "Camellia feat. Hatsune Miku - Hiasobi", "universe": "VOCALOID", "field": "Burning Seduction", "catalyzer": "Moral Rejection", "plosion": "Monstrous Fuel" },
  { "player": "Giga feat. Miku・Rin・Len - Beyond the way", "universe": "VOCALOID", "field": "Active Protagonism", "catalyzer": "Path Tracing", "plosion": "Hunger Fuel" },
  { "player": "Giga feat. KAFU - CH4NGE", "universe": "VOCALOID", "field": "Confidence", "catalyzer": "Leading Oneself", "plosion": "Fuel Layers" },
  { "player": "Giga feat. Kagamine Rin & Len", "universe": "VOCALOID", "field": "Growing Adult", "catalyzer": "Resilience", "plosion": "Constructive Fuel" },
  { "player": "Inabakumori feat. Kaai Yuki - Lagtrain", "universe": "VOCALOID", "field": "Slow Down", "catalyzer": "Okay to Rest", "plosion": "Spread Release" },
  { "player": "Kurousa-P feat. Hatsune Miku - Senbonzakura", "universe": "VOCALOID", "field": "War Lamentation", "catalyzer": "Lost Identity", "plosion": "Estrangelement×Belonging & Cryptic" },
  { "player": "wowaka feat. Hatsune Miku - World's End Dancehall", "universe": "VOCALOID", "field": "Absurdism", "catalyzer": "Cruel Dooming", "plosion": "Destructive Hollow ➜ Worsening" },
  { "player": "wowaka feat. Rolling Girl", "universe": "VOCALOID", "field": "Falling Failure & Suicide", "catalyzer": "Vague Context", "plosion": "Hollow Agony" },
  { "player": "T-POCKET - 1925", "universe": "VOCALOID", "field": "Capitalism & War", "catalyzer": "\"Peace Preservation Law\"", "plosion": "Borderless Agony Estrangelement" },
  { "player": "Kairiki bear feat. flower - Venom", "universe": "VOCALOID", "field": "Histrionic Disorder", "catalyzer": "Attention-Seeking", "plosion": "Hunger Estrangelement Layers" },
  { "player": "Kairiki bear feat. Hatsune Miku - Darling Dance", "universe": "VOCALOID", "field": "Hashtag #1 Obsession", "catalyzer": "Search for True Engagement", "plosion": "Borderless Madness" },
  { "player": "Kairiki bear feat. Hatsune Miku - Bug", "universe": "VOCALOID", "field": "Paranoia", "catalyzer": "People Pleaser Validation", "plosion": "Borderless Estrangelement" },
  { "player": "nuyuri feat. flower - Lower", "universe": "VOCALOID", "field": "Medieval Witches", "catalyzer": "Betrayal & Sacrifice", "plosion": "Estrangelement×Borderless" },
  { "player": "Jin feat. Hatsune Miku - Kagerou Daze", "universe": "VOCALOID", "field": "Time Loop", "catalyzer": "Sacrificial Restart", "plosion": "Fatal Layers Release" },
  { "player": "wotaku feat. Hatsune Miku - Gehenna", "universe": "VOCALOID", "field": "Self-Harm", "catalyzer": "D-Word & Stay Alive", "plosion": "Monstrous Agony" },
  { "player": "PinocchioP feat. Hatsune Miku - God-ish", "universe": "VOCALOID", "field": "Satire", "catalyzer": "Cynical", "plosion": "Destructive Emptiness" },
  { "player": "n-buna feat. GUMI - Toumei Elegy", "universe": "VOCALOID",	"field": "Hatred",	"catalyzer":	"Unresponsive Interlocutor",	"plosion":	"Emptiness ➜ Madness" },
  { "player": "Aiobahn +81 feat. KOTOKO - INTERNET YAMERO", "universe": "NEEDY GIRL OVERDOSE", "field": "Internet Persona", "catalyzer": "Parasocial Evasion", "plosion": "Borderless Madness" },
  { "player": "Aiobahn +81 feat. KOTOKO - INTERNET OVERDOSE", "universe": "NEEDY GIRL OVERDOSE", "field": "Internet Reality", "catalyzer": "Algorithm Evasion", "plosion": "Borderless Madness" },
  { "player": "Caesar", "universe": "Planet of the Apes", "field": "Civilization", "catalyzer": "Societal Disatisfaction", "plosion": "Fatal Monstrous Hunger" },
  { "player": "Naked Snake", "universe": "Metal Gear", "field": "Espionage", "catalyzer": "Philosophers Legacy", "plosion": "Fatal Chaos" },
  { "player": "John Connor", "universe": "Terminator", "field": "Resistance", "catalyzer": "AI Apocalypse", "plosion": "Undetermined Fuel" },
  { "player": "John Wick", "universe": "John Wick", "field": "Hitman", "catalyzer": "Contractors & Debt", "plosion": "Release ➜ Fatal Chaos" },
  { "player": "Jamie Christopherson - It Has To Be This Way", "universe": "Metal Gear", "field": "War", "catalyzer": "What we Believe", "plosion": "Fatal Chaos" },
  { "player": "Light Yagami", "universe": "Death Note", "field": "Anonymous Killer", "catalyzer": "Totalitarian Despotism", "plosion": "Madness % Absolute Order" },
  { "player": "Magneto", "universe": "DC", "field": "Discrimination", "catalyzer": "Freedom over Hierarchies", "plosion": "Structural Madness ➜ Undetermined" },
  { "player": "Lelouch vi Britannia", "universe": "Code Geass", "field": "Facade", "catalyzer": "Symbolism Figure", "plosion": "Chaos % Madness & Hunger" },
  { "player": "<ruby>koko<rt>Ren</rt></ruby> - Mirage Code", "universe": "KAMITSUBAKI", "field": "Envision", "catalyzer": "Inertia is Meaningless", "plosion": "Undetermined Chaos" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt></ruby> - Re:HEROINES", "universe": "KAMITSUBAKI", "field": "Fundamental Unreliability", "catalyzer": "Protective Perseverance", "plosion": "Belonging×Unknown" },
  { "player": "<ruby>KAF<rt>Mizuno Atsu</rt></ruby> - Sore wo Sekai to Koto Iunda ne", "universe": "KAMITSUBAKI", "field": "Wish", "catalyzer": "Protective Beloving", "plosion": "Intimate Borderless" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt</ruby> - Abnormal", "universe": "KAMITSUBAKI", "field": "People's Gaze, Evolve or Remain", "catalyzer": "Competition & Honesty", "plosion": "Madness Release" },
  { "player": "<ruby>KAF<rt>Okajima Kanata, Kurihara Satoru [Jazzin' Park]</rt></ruby> - Gestalt", "universe": "KAMITSUBAKI", "field": "Taste over Reason", "catalyzer": "Cynical Playful Gathering Revolt", "plosion": "Chaos & Borderless" },
  { "player": "<ruby>KAF<rt>AMAMOGU</rt></ruby> - Carpe diem", "universe": "KAMITSUBAKI", "field": "Scribbled Identity", "catalyzer": "Meaningless & Meaningful", "plosion": "Unknown Borderless" },
  { "player": "<ruby>Isekaijoucho<rt>Kashii Moimi</rt></ruby> - Kurenazumi Yakusoku", "universe": "KAMITSUBAKI", "field": "Right Way Unsmooth", "catalyzer": "Forwarding & Grace Pursuit", "plosion": "Constructive Madness" },
  { "player": "<ruby>Isekaijoucho<rt>Kashii Moimi</rt></ruby> - Egaki Tsuzuketa Kimi e", "universe": "KAMITSUBAKI", "field": "Joy & Sorrow", "catalyzer": "Anima Weaving Faith", "plosion": "Madness Belonging" },
  { "player": "<ruby>Isekaijoucho<rt>Ren</rt></ruby> - Kimi syoushitu sekai", "universe": "KAMITSUBAKI", "field": "Weak Words, Neglect, Forgotten World, No Worth", "catalyzer": "Unsolved Puzzles Processing & Strength & Magic", "plosion": "Destructive Unknown ➜ Constructive Unknown" },
  { "player": "<ruby>Isekaijoucho<rt>Ren</rt></ruby> - Systems Core", "universe": "KAMITSUBAKI", "field": "Identity + Ideal AI Fake Self Machine Wish", "catalyzer": "Justice? Cold Heart", "plosion": "Hunger & Madness" },
  { "player": "<ruby>Isekaijoucho<rt>Kashii Moimi</rt></ruby> - Mirai no Katachi", "universe": "KAMITSUBAKI", "field": "Drawing for oneself", "catalyzer": "Grab the Future", "plosion": "Intimate Fuel" },
  { "player": "<ruby>Isekaijoucho<rt>Hiiragi Magnetite</rt></ruby> - Dimension", "universe": "KAMITSUBAKI", "field": "Repeating Past Fate", "catalyzer": "Own Destiny", "plosion": "Constructive Fatal" },
  { "player": "<ruby>Isekaijoucho×KAF<rt>Kashii Moimi</rt></ruby> - Shin'en", "universe": "KAMITSUBAKI", "field": "Darkness", "catalyzer": "Deepness", "plosion": "Monstrous Hunger" },
  { "player": "<ruby>V.W.P<rt>Kanzaki Iori</rt></ruby> - Sadame/DESTINY", "universe": "KAMITSUBAKI", "field": "Meaningless Hatred and Ideologies", "catalyzer": "Writing Oneself", "plosion": "Absolute Fatal×Undetermined Hunger" },
  { "player": "<ruby>V.W.P<rt>Ren</rt></ruby> - Kirifuda", "universe": "KAMITSUBAKI", "field": "Meaning Stolen, Fading Colors", "catalyzer": "Embrace to Reach Each Others Potential", "plosion": "Constructive Unknown×Destructive Unknown" },
  { "player": "<ruby>V.W.P - Ketsui", "universe": "KAMITSUBAKI", "field": "Destiny", "catalyzer": "Change Faith", "plosion": "Agony×Absolute Fuel" },
  { "player": "<ruby>V.W.P - Chitose Sousha", "universe": "KAMITSUBAKI", "field": "Existential Mark", "catalyzer": "Relational Connectivity", "plosion": "Absolute Belonging Fuel" },
  { "player": "<ruby>V.W.P<rt>Neuron (Empty old City)</rt></ruby> - Shinwa", "universe": "KAMITSUBAKI", "field": "Apocalypse", "catalyzer": "Defying Anything", "plosion": "Monstrous Fuel" },
  { "player": "<ruby>V.W.P - Ruten", "universe": "KAMITSUBAKI", "field": "World Reiteration", "catalyzer": "Eye of Resilience", "plosion": "Monstrous Fuel" },
  { "player": "<ruby>V.W.P - Hangyaku", "universe": "KAMITSUBAKI", "field": "Religious Faith in Oneself", "catalyzer": "Fight", "plosion": "Monstrous Fuel" },
  { "player": "<ruby>V.W.P<rt>Hitogoto</rt></ruby> - Shingi", "universe": "KAMITSUBAKI", "field": "Overcoming", "catalyzer": "Promise", "plosion": "Monstrous Fuel Belonging" },
  { "player": "<ruby>V.W.P - Yokubou", "universe": "KAMITSUBAKI", "field": "Will of Power", "catalyzer": "Phantasm", "plosion": "Hunger Fuel" },
  { "player": "<ruby>kessoku band<rt>ZAQ</ruby> - Guitar to Kodoku to Aoi Hoshi", "universe": "Bocchi The Rock!", "field": "Social Anxiety", "catalyzer": "Recognition", "plosion": "Hunger & Belonging" },
  { "player": "<ruby>Ariabl'eyeS<rt>Lyse</rt></ruby> - Senkou no Flare", "universe": "", "field": "Medieval Story", "catalyzer": "Sacrifice", "plosion": "Fatal Madness" },
  { "player": "<ruby>Ariabl'eyeS<rt>Lyse</rt></ruby> - Kega Renaki Bara Juuji", "universe": "", "field": "Protection of the Town", "catalyzer": "Courage of Standing", "plosion": "Fatal Belonging" },
  { "player": "Kanzaki Iori feat. Hatsune Miku - Inochi ni Kirawarete iru.", "universe": "VOCALOID", "field": "Life Hate", "catalyzer": "Meaninglessness Embracement", "plosion": "Borderless Hollow" },
  { "player": "kemu feat. IA - Roku-chou Nen to Ichiya Monogatari", "universe": "VOCALOID", "field": "Malevolent Treatment", "catalyzer": "Inevitable Retaliation", "plosion": "Estrangelement Belonging" },
  { "player": "<ruby>TUYU<rt>Pusu</rt></ruby> - Doro no Bunzai de Watashi Dake no Taisetsu wo Ubaou da Nante", "universe": "", "field": "Possessiveness & Denyment", "catalyzer": "Pathological Control", "plosion": "Destructive Hunger Madness" },
  { "player": "<ruby>TUYU<rt>Pusu</rt></ruby> - Under Heroine", "universe": "", "field": "Manipulative Egotism", "catalyzer": "Jealousy", "plosion": "Destructive Hunger" },
  { "player": "Neru feat. Kagamine Rin - Terror", "universe": "VOCALOID", "field": "Resistance", "catalyzer": "Dream Pursuit", "plosion": "Borderless Fuel" },
  { "player": "Neru feat. Kagamine Len - Inochi no Justitia", "universe": "VOCALOID", "field": "Heroic Devotion", "catalyzer": "Flame of Hope", "plosion": "Spread Cryptic" },
  { "player": "Neru feat. Kagamine Rin - Abstract Nonsense", "universe": "VOCALOID", "field": "Deppression & Hatred & Suicide", "catalyzer": "World Sucks Unsolved", "plosion": "Hollow Agony" },
  { "player": "Neru feat. Kagamine Rin - Tokyo Teddy Bear", "universe": "VOCALOID", "field": "Honestful Homeless", "catalyzer": "Mechanical Replacement of People", "plosion": "Monstrous Hollow" },
  { "player": "Neru feat. Kagamine Rin & Kagamine Len - Sai Kyouiku", "universe": "VOCALOID", "field": "Murder", "catalyzer": "Solitude", "plosion": "Destructive Estrangelement" },
  { "player": "Neru feat. Kagamine Rin - Boy and Girl Chameleon Symptom", "universe": "VOCALOID", "field": "Rusting Life","catalyzer": "Discomprehension", "plosion": "Unknown Estrangelement" },
  { "player": "Neru feat. Kagamine Rin - Jailbreak", "universe": "VOCALOID", "field": "Prison", "catalyzer": "Outdoors", "plosion": "Structural Estrangelement×Undetermined Fuel" },
  { "player": "mafumafu - Kuyamu to Kaite Mirai", "universe": "", "field": "Desire to Disappear", "catalyzer": "Suffering", "plosion": "Monstrous Agony % Worsening" },
  { "player": "mafumafu - Rinne Tensei", "universe": "", "field": "Reincarnation AND Gods", "catalyzer": "Creative Perpetuation", "plosion": "Fatal Constructive×Destructive" },
  { "player": "<ruby>Übermensch<rt>Nietzsche</rt></ruby>", "universe": "Thus Spoke Zarathoustra", "field": "Individuality, Amorality", "catalyzer": "Will to Power, Life Celebration", "plosion": "Undetermined Borderless Monstrous Fuel & Hunger Release" }]


const LIKKHH_ARCADISTS = [
  { "player": "<ruby>Ekeline<rt>Fenekohq</rt></ruby>", "universe": "⟁URNELCY", "field": "", "catalyzer": "", "horizon": "Intimate Belonging Release & Borderless Constructive Layers", },

  { "player": "a", "universe": "", "field": "a", "catalyzer": "a", "horizon": "a" },
  { "player": "a", "universe": "", "field": "a", "catalyzer": "a", "horizon": "a" },
  { "player": "a", "universe": "", "field": "a", "catalyzer": "a", "horizon": "a" },

  { "player": "<ruby>Ariabl'eyeS<rt>Lyse</rt></ruby> - Nageki no L'adieu", "universe": "", "field": "Farewell", "catalyzer": "Let go and be by your own", "horizon": "Belonging Layers ➜ Borderless Constructive" },
  { "player": "<ruby>Kano<rt>samfree</rt></ruby> - Stella-rium", "universe": "Houkago no Pleiades", "field": "Be Meant to be", "catalyzer": "Right Time", "horizon": "Intimate Layers" },
  { "player": "Orangestar feat. IA - Asu no Yozora Shoukaihan", "universe": "VOCALOID", "field": "Sense of Unity", "catalyzer": "Yesterday and Tomorrow", "horizon": "Intimate Belonging & Hunger" },
  { "player": "<ruby>Natsume Itsuki<rt>Natsume Itsuki</rt></ruby> - Stay Alive", "universe": "", "field": "Hardship Relief", "catalyzer": "Past Traumas", "horizon": "Hollow Layers×Belonging Fuel" },
  { "player": "<ruby>Imy<rt>myu</rt></ruby> - Tsuioku no Faindaa", "universe": "", "field": "Friendship & Memories", "catalyzer": "Nostalgia", "horizon": "Intimate Belonging" },
  { "player": "Yorushika - Itte.", "universe": "", "field": "Regrets when Occasion Present", "catalyzer": "No Longer There(Separation)", "horizon": "Intimate Spread×Layers" },
  { "player": "mafumafu - Keitai Renwa", "universe": "", "field": "Essay to Reach", "catalyzer": "Proximity", "horizon": "Belonging Hunger×Layers" },
  { "player": "Jin - Additional Memory", "universe": "", "field": "Death Regrets", "catalyzer": "Goodbye Love", "horizon": "Intimate Layers Belonging×Fatal Estrangelement" },
  { "player": "Natsushiro Takaaki - Near", "universe": "", "field": "Vulnerability", "catalyzer": "Confidant", "horizon": "Intimate Belonging & Estrangelement" },
  { "player": "40mP feat. Hatsune Miku - Torinoko City", "universe": "VOCALOID", "field": "Litteracy, Social Ambivalence & Withdraw", "catalyzer": "Help Need", "horizon": "Intimate Layers Belonging Hunger" },
  { "player": "<ruby>Hector<rt>Homer</rt></ruby>", "universe": "Iliad and Odyssey", "field": "Tourment, Family, Innocent in War", "catalyzer": "Duty", "horizon": "Belonging Layers×Fatal" },
  { "player": "<ruby>Gregor Samsa<rt>Franz Kafka</rt></ruby>", "universe": "The Metamorphosis", "field": "Societal Duties", "catalyzer": "Self Struggle", "horizon": "Unknown Estrangelement ➜ Fatal Madness" },
  { "player": "RIM - Shokuchuu Shokubutsu", "universe": "KAMITSUBAKI", "field": "Desire", "catalyzer": "Unfulfillement", "horizon": "Monstrous Hollow×Belonging" },
  { "player": "TK from Ling toshite Sigure - unravel", "universe": "Tokyo Ghoul", "field": "Inside Struggle", "catalyzer": "Suffering", "horizon": "Monstrous Hollow×Belonging" },
  { "player": "Ado - Watashi wa Saikyou", "universe": "", "field": "Supportive Ally", "catalyzer": "Positive Mental", "horizon": "Belonging" },
  { "player": "kakashi feat. Hatsune Miku - Shin Seikatsu", "universe": "", "field": "Desire to be Listened", "catalyzer": "Internal Hole", "horizon": "Intimate Emptiness Hollow" },
  { "player": "Ne! Ko!", "universe": "Nora to Oujo to Noraneko Heart", "field": "Cat", "catalyzer": "Admitted Preference", "horizon": "Intimate Spread", },
  { "player": "Noraneko Heart", "universe": "Nora to Oujo to Noraneko Heart", "field": "Cat", "catalyzer": "Attachement", "horizon": "Belonging Layers", },
  { "player": "Crying Heart", "universe": "Nora to Oujo to Noraneko Heart", "field": "Frosted Realm", "catalyzer": "Legends Making", "horizon": "Madness Layers", },
  { "player": "<ruby>V.W.P<rt>mao sasagawa</rt></ruby> - Utahime/DIVA", "universe": "KAMITSUBAKI", "field": "Progression", "catalyzer": "Adventure", "horizon": "Intimate Fuel×Fatal Hollow" },
  { "player": "<ruby>V.W.P<rt>Kanata Okajima, Shao Hao, Nay Shalom</rt></ruby> - Tsuioku", "universe": "KAMITSUBAKI", "field": "Life Cycle", "catalyzer": "Home", "horizon": "Intimate Emptiness Belonging" },
  { "player": "Kanzaki Iori feat. Hatsune Miku - Kimi no Kamisama ni Naritai.", "universe": "VOCALOID", "field": "Hopelessness Help", "catalyzer": "Reaching Tentative", "horizon": "Hollow Agony×Constructive Belonging" },
  { "player": "Kanzaki Iori - Ano Natsu ga Houwa Suru.", "universe": "VOCALOID", "field": "Murder & Guilt", "catalyzer": "Haunted Conscience", "horizon": "Monstrous Hollow Belonging" },
  { "player": "Kanzaki Iori feat. Kagamine Rin - Adult Children", "universe": "VOCALOID", "field": "Infantal Trauma, Will to be Loved, People Pleasing, Distrust", "catalyzer": "Smile", "horizon": "Hollow Madness Belonging Hunger" },
  { "player": "<ruby>Mashumairesh!!<rt>Howan, Mashima Himeko, Delmin, Ruhuyu / Tomitaka Kazuki</rt></ruby> - Platform", "universe": "SHOW BY ROCK!!", "field": "Separation & Reunion", "catalyzer": "Hopeful Promise", "horizon": "Intimate Belonging Layers" },
  { "player": "<ruby>Mashumairesh!!<rt>Ruhuyu / Mayu Miyazaki</rt></ruby> - Speed Up", "universe": "SHOW BY ROCK!!", "field": "Don't Look Back", "catalyzer": "Move Forward", "horizon": "Absolute Fuel" },
  { "player": "<ruby>Mashumairesh!!<rt>Mashima Himeko / Wiggy</rt></ruby> - Kimi no Rhapsody", "universe": "SHOW BY ROCK!!", "field": "Tenderness", "catalyzer": "Overflowing Feelings", "horizon": "Belonging" },
  { "player": "<ruby>Mashumairesh!!<rt>Howan / Yamato</rt></ruby> - Hiromenes", "universe": "SHOW BY ROCK!!", "field": "Dream", "catalyzer": "Running", "horizon": "Borderless" },
  { "player": "<ruby>Mashumairesh!!<rt>Howan, Mashima Himeko, Delmin, Ruhuyu / Chihiro Tamaki</rt></ruby> - Anokanatarium", "universe": "SHOW BY ROCK!!", "field": "Dearness", "catalyzer": "Transcendant Relationship", "horizon": "Absolute Belonging" },
  { "player": "<ruby>Mashumairesh!!<rt>Howan / Kazumi Tomita</rt></ruby> - Hoshizora Light Story", "universe": "SHOW BY ROCK!!", "field": "Cosmic Expression", "catalyzer": "Sparkling Beauty", "horizon": "Release Spread" },
  { "player": "<ruby>Mashumairesh!!<rt>(Howan)Yugo Ichikawa</rt></ruby> - Mahou no Aikotoba", "universe": "SHOW BY ROCK!!", "field": "Ad Song", "catalyzer": "Promotional Shop", "horizon": "Spread" },
  { "player": "<ruby>Mashumairesh!!<rt>(Howan)Hiroaki Suzuki</rt></ruby> - Takaramono Wa Kimi To", "universe": "SHOW BY ROCK!!", "field": "Tenderness", "catalyzer": "Caregiving", "horizon": "Constructive Belonging" },
  { "player": "<ruby>Mashumairesh!!<rt>(Howan)HAMA-kgn</rt></ruby> - Goodbye Thank you!", "universe": "SHOW BY ROCK!!", "field": "Feelings", "catalyzer": "Embracement", "horizon": "Intimate Release" },
  { "player": "<ruby>Mashumairesh!!<rt>(Mashima Himeko)Yugo Ichikawa</rt></ruby> - Rainy Girl", "universe": "SHOW BY ROCK!!", "field": "Loneliness & Vulnerability", "catalyzer": "External Tenderness", "horizon": "Intimate Doubt×Belonging" },
  { "player": "<ruby>Mashumairesh!!<rt>(Mashima Himeko)Yugo Ichikawa</rt></ruby> - Arco Color", "universe": "SHOW BY ROCK!!", "field": "Companionship", "catalyzer": "Walk", "horizon": "Belonging Release" },
  { "player": "<ruby>Mashumairesh!!<rt>(Howan & Mashima Himeko)Kazuki Tomita</rt></ruby> - Tenohira", "universe": "SHOW BY ROCK!!", "field": "Tenderness", "catalyzer": "Togetherness", "horizon": "Intimate Belonging" },
  { "player": "<ruby>Mashumairesh!!<rt>(Ruhuyu)HAMA-kgn</rt></ruby> - Cinematic Memoir", "universe": "SHOW BY ROCK!!", "field": "Memories Dearness", "catalyzer": "Wonderfulness", "horizon": "Intimate Belonging" },
  { "player": "<ruby>Mashumairesh!!<rt>(Ruhuyu)Junko Miyajima</rt></ruby> - Last Judge", "universe": "SHOW BY ROCK!!", "field": "Documenting Peers", "catalyzer": "Desire to be Appreciated", "horizon": "Unknown Layers×Belonging Hunger" },
  { "player": "<ruby>Mashumairesh!!<rt>HAMA-kgn (Felion Sounds)</rt></ruby>", "universe": "SHOW BY ROCK!!", "field": "Happiness and Togetherness", "catalyzer": "Symphony", "horizon": "Constructive Belonging" },
  { "player": "<ruby>Uwasanopetals<rt>KAMEKICHI</rt></ruby> - Saishuu Ressha", "universe": "SHOW BY ROCK!!", "field": "Physical Distance", "catalyzer": "Overcoming Cope", "horizon": "Belonging Layers" },
  { "player": "<ruby>Uwasanopetals<rt>KAMEKICHI</rt></ruby> - Hatsukoi no Oto", "universe": "SHOW BY ROCK!!", "field": "Bond Endeepement", "catalyzer": "Confession", "horizon": "Intimate Belonging" },
  { "player": "<ruby>Uwasanopetals<rt>KAMEKICHI</rt></ruby> - Sayonara, Bokura no Love Song.", "universe": "SHOW BY ROCK!!", "field": "Shared Song", "catalyzer": "Keeping the Bound Metaphysically", "horizon": "Unknown×Intimate Belonging" },
  { "player": "<ruby>Uwasanopetals<rt>Iori Momose</rt></ruby> - Ichibyou no Uta", "universe": "SHOW BY ROCK!!", "field": "Disappearance of a Loved one", "catalyzer": "Open Vulnerability", "horizon": "Intimate Belonging ➜ Unknown Emptiness" },
  { "player": "<ruby>Uwasanopetals<rt>KAMEKICHI</rt></ruby> - Taikakusen wo Tsunaide", "universe": "SHOW BY ROCK!!", "field": "Timid Proximity", "catalyzer": "Bet on", "horizon": "Intimate Release" },
  { "player": "<ruby>Criticrista<rt>(Jacklyn)YASUHIRO</rt></ruby> - How Are You?", "universe": "SHOW BY ROCK!!", "field": "Past Resolution", "catalyzer": "Smile", "horizon": "Constructive Belonging Layers" },
  { "player": "<ruby>Criticrista<rt>OMIYA</rt></ruby> - Mot Mot Mot", "universe": "SHOW BY ROCK!!", "field": "Video Game", "catalyzer": "Playfulness Love", "horizon": "Fuel Spread" },
  { "player": "<ruby>Criticrista<rt>Takahiro Yuba</rt></ruby> - Asuiro Koi Moyou", "universe": "SHOW BY ROCK!!", "field": "Affection Proximity", "catalyzer": "Romantic Attentiveness", "horizon": "Intimate Belonging" },
  { "player": "<ruby>Criticrista<rt>Rosia, Tsukino, Holmy, Jacklyn / Tota Fujiwara</rt></ruby> - Kyu-Kyu-Kyun♡Heart Shaker", "universe": "SHOW BY ROCK!!", "field": "Emotional Love", "catalyzer": "Euphory", "horizon": "Intimate Belonging" },
  { "player": "Studdo Ban Gyasshu<rt>ki</rt></ruby> - CLOUD9", "universe": "SHOW BY ROCK!!", "field": "Euphory", "catalyzer": "Excitement", "horizon": "Chaos Fuel" },
  { "player": "Studdo Ban Gyasshu<rt>Yoshie Isogai</rt></ruby> - IDENTITY", "universe": "SHOW BY ROCK!!", "field": "Love", "catalyzer": "Conviction Whatever the World", "horizon": "Absolute Belonging" },
  { "player": "Studdo Ban Gyasshu<rt>Daruma Maruyama</rt></ruby> - LOVENCOURAGE", "universe": "SHOW BY ROCK!!", "field": "Love Confession", "catalyzer": "Energical Direction", "horizon": "Spread Fuel" },
  { "player": "Dolly Dolci<rt>Makoto Asano</rt></ruby> - Ryusei Romance", "universe": "SHOW BY ROCK!!", "field": "Lost on Illusions", "catalyzer": "Dreamy Fall of Love", "horizon": "Unknown ➜ Intimate Belonging" },
  { "player": "<ruby>Plasmagica<rt>Hiroaki Gotoh</rt></ruby> - My pace!!", "universe": "SHOW BY ROCK!!", "field": "Authenticity", "catalyzer": "Everyday Self", "horizon": "Release Layers" },
  { "player": "<ruby>Plasmagica<rt>Erica Masaki</rt></ruby> - Mirai Wanted", "universe": "SHOW BY ROCK!!", "field": "Tenderness Goal", "catalyzer": "Desire to Change", "horizon": "Belonging Fuel" },
  { "player": "<ruby>Plasmagica<rt>Yoshinobu Takeichi</rt></ruby> - Bokura no Neiro", "universe": "SHOW BY ROCK!!", "field": "Trying its Best", "catalyzer": "Gratitude", "horizon": "Intimate Belonging" },
  { "player": "<ruby>Plasmagica<rt>Plasmagica / RegaSound</rt></ruby> - Ryuusei Dreamline", "universe": "SHOW BY ROCK!!", "field": "Dearness", "catalyzer": "Unition", "horizon": "Layers Belonging" },
  { "player": "<ruby>Plasmagica<rt>Plasmagica, ShinganCrimsonZ, Trichronika, Criticrista / RegaSound</rt></ruby> - My Resolution ~Mirai he no Kizuna~", "universe": "SHOW BY ROCK!!", "field": "Self Strength", "catalyzer": "Unite Determination", "horizon": "Borderless Fuel" },
  { "player": "<ruby>Plasmagica(Retoree)<rt>HAMA-kgn</rt></ruby> - Yowamushi Amanojaku", "universe": "SHOW BY ROCK!!", "field": "Honesty Pain Complex", "catalyzer": "Bond Endeepement", "horizon": "Estrangelement×Belonging" },
  { "player": "<ruby>Plasmagica(Moa)<rt></rt></ruby> - Mikansei Tripper", "universe": "SHOW BY ROCK!!", "field": "Miracle", "catalyzer": "Treasurly", "horizon": "Constructive Madness Fuel" },
  { "player": "Hijirikawa Shian (CV: Eri Inagawa) - Close to You (Cyan Ver.)", "universe": "SHOW BY ROCK!!", "field": "Dearness", "catalyzer": "Tenderness", "horizon": "Absolute Belonging" },
  { "player": "<ruby>Cyan & Howan<rt>Yugo Ichikawa</rt></ruby> - How To Fly", "universe": "SHOW BY ROCK!!", "field": "Meeting", "catalyzer": "Hold Hands", "horizon": "Spread Belonging" },
  { "player": "<ruby>Plasmagica & Mashumairesh!!<rt>Cyan, Howan / Takumi Yoshida</rt></ruby> - Do Re Mi Fa STARS!!", "universe": "SHOW BY ROCK!!", "field": "Positive Mood", "catalyzer": "Run/Jump/Sing/Dance", "horizon": "Constructive Spread" },
  { "player": "<ruby>Cyan, A, Ailane<rt>Erica Masaki</rt></ruby> - Good Day by Day", "universe": "SHOW BY ROCK!!", "field": "Excitement", "catalyzer": "Fights and Laughs", "horizon": "Madness Release" },
  { "player": "<ruby>Tsurezure Naru Ayatsuri Mugenan<rt>Shiori Yoshida</rt></ruby> - Kakinaraseyo Senritsu", "universe": "SHOW BY ROCK!!", "field": "World Immensity", "catalyzer": "Passion", "horizon": "Release Fuel" },
  { "player": "<ruby>Tsurezure Naru Ayatsuri Mugenan<rt>A, Un / Junko Miyajima</rt></ruby> - Otome Kagerou", "universe": "SHOW BY ROCK!!", "field": "Transience", "catalyzer": "Burning", "horizon": "Spread Intimate" },
  { "player": "<ruby>Tsurezure Naru Ayatsuri Mugenan<rt>Hinata Ogi</rt></ruby> - Yoruzakidaiko Kaguyauchi", "universe": "SHOW BY ROCK!!", "field": "Festival", "catalyzer": "Blooming", "horizon": "Fuel ➜ Chaos" },
  { "player": "<ruby>Tsurezure Naru Ayatsuri Mugenan<rt>Shiori Yoshida</rt></ruby> - Toki Wa Mijikashi Utaeya Otometachi", "universe": "SHOW BY ROCK!!", "field": "Simplicity", "catalyzer": "Naked Doing", "horizon": "Intimate Spread" },
  { "player": "<ruby>Tsurezure Naru Ayatsuri Mugenan<rt>HAMA-kgn</rt></ruby> - Omohide Sakuya Akanezora", "universe": "SHOW BY ROCK!!", "field": "Farewell", "catalyzer": "Meet Again", "horizon": "Belonging Layers" },
  { "player": "<ruby>Tsurezure Naru Ayatsuri Mugenan<rt>Shiori Yoshida</rt></ruby> - Ikitoshi Ikeru Mono E", "universe": "SHOW BY ROCK!!", "field": "Melancholy", "catalyzer": "Dedication", "horizon": "Constructive Intimate" },
  { "player": "<ruby>Zerotickholic<rt>Yoshie Isogai</rt></ruby> - Generic Heroine", "universe": "SHOW BY ROCK!!", "field": "Special on Ordinary", "catalyzer": "Search for Sweetness", "horizon": "Madness Hunger" },
  { "player": "<ruby>Zerotickholic<rt>Botchi Boromaru</rt></ruby> - Sentimental Vanilla", "universe": "SHOW BY ROCK!!", "field": "Flavors Enjoyment", "catalyzer": "Appreciative", "horizon": "Hunger Layers" },
  { "player": "<ruby>Zerotickholic<rt>Chihiro Tamaki</rt></ruby> - Jinsei Recipe", "universe": "SHOW BY ROCK!!", "field": "Culinary Mix", "catalyzer": "Eat all of it", "horizon": "Hunger Layers" },
  { "player": "Minami - Hollowness", "universe": "", "field": "Worth to Others", "catalyzer": "Despair, Scars & Idealization", "horizon": "Monstrous Hollow" },
  { "player": "Minami - Kawaki wo Ameku", "universe": "Domestic na Kanojo", "field": "Relationships Turmoil", "catalyzer": "Superficiality Frustration", "horizon": "Fatal Monstrous" },
  { "player": "Eve - Shirayuki", "universe": "", "field": "Mortality", "catalyzer": "Tenderness", "horizon": "Intimate Belonging" },
  { "player": "Eve - INSOMNIA", "universe": "", "field": "Dissociative Personnality Disorder", "catalyzer": "Depression, Child Abuse, Trauma", "horizon": "Cryptic Intimate Agony" },
  { "player": "<ruby>YOASOBI<rt>Ayase</rt></ruby> - Gunjou", "universe": "", "field": "Likes", "catalyzer": "Tough to Act", "horizon": "Absolute Fuel" },
  { "player": "<ruby>YOASOBI<rt>Ayase</rt></ruby> - Harujion", "universe": "", "field": "Coping Separation", "catalyzer": "Move on and Grow out of it", "horizon": "Constructive Release" },
  { "player": "<ruby>YOASOBI<rt>Ayase</rt></ruby> - Yoru ni Kakeru", "universe": "", "field": "Suicide", "catalyzer": "Romantization of Mutual Death", "horizon": "Belonging Madness" },
  { "player": "<ruby>YOASOBI<rt>Ayase</rt></ruby> - UNDEAD", "universe": "Monogatari", "field": "Optimism", "catalyzer": "Happiness Pursuit", "horizon": "Spread Fuel" },
  { "player": "<ruby>YOASOBI<rt>Ayase</rt></ruby> - IDOL", "universe": "Oshi no Ko", "field": "Archetypal Persona", "catalyzer": "Insanity Expectations", "horizon": "Borderless Madness" },
  { "player": "<ruby>Isekaijoucho<rt>samayuzame</rt></ruby> - Monogatari no Waltz", "universe": "KAMITSUBAKI", "field": "Loneliness", "catalyzer": "Correlation", "horizon": "Emptiness ➜ Fuel" },
  { "player": "<ruby>Isekaijoucho<rt>rionos</rt></ruby> - Daremo inai e de", "universe": "KAMITSUBAKI", "field": "Solitude on the Vast World", "catalyzer": "Integrative Acceptance", "horizon": "Borderless Belonging" },
  { "player": "<ruby>Isekaijoucho<rt>Kasamura Tota</rt></ruby> - Sirius no Shinzou", "universe": "KAMITSUBAKI", "field": "Morse Code", "catalyzer": "Space Travel", "horizon": "Belonging Cryptic Fuel" },
  { "player": "<ruby>Isekaijoucho<rt>Kashii Moimi</rt></ruby> - ARCADIA", "universe": "KAMITSUBAKI", "field": "Common Life Happenings", "catalyzer": "Connect to the World", "horizon": "Belonging" },
  { "player": "<ruby>Isekaijoucho<rt>Kashii Moimi</rt></ruby> - BREATHE", "universe": "KAMITSUBAKI", "field": "Place to Be", "catalyzer": "Connecting", "horizon": "Madness Belonging" },
  { "player": "<ruby>Isekaijoucho<rt>Kashii Moimi</rt></ruby> - ETERNAL", "universe": "KAMITSUBAKI", "field": "Savior", "catalyzer": "Hope", "horizon": "Belonging Fuel" },
  { "player": "inabakumori feat. Meika Hime - Kazemachigusa", "universe": "VOCALOID", "field": "The Right Time", "catalyzer": "Environnement Boost", "horizon": "Structural Layers" },
  { "player": "40mP feat. Hatsune Miku - Karakuri Pierrot", "universe": "VOCALOID", "field": "Bully", "catalyzer": "Toxic Relationship", "horizon": "Destructive Belonging" },
  { "player": "wowaka feat. Hatsune Miku - Unknown Mother-Goose", "universe": "VOCALOID", "field": "Content & Form", "catalyzer": "Anonymous Love Speech", "horizon": "Belonging Fuel" },
  { "player": "Kairiki bear - Shippaisaku Shoujo", "universe": "VOCALOID", "field": "Mistakeful", "catalyzer": "Repeating Circle still Smiling", "horizon": "Fatal Release" },
  { "player": "PinocchioP feat. Hatsune Miku - Mahou Shoujo to Chocolate", "universe": "VOCALOID", "field": "Role Comedy Play", "catalyzer": "F-Word", "horizon": "Madness Layers" },
  { "player": "PinocchioP feat. Kagamine Rin & Hatsune Miku", "universe": "VOCALOID", "field": "Darkening Caring Communication", "catalyzer": "Listening & Loneliness", "horizon": "Estrangelement Emptiness" },
  { "player": "rerulili feat.Vocaloids - Kami no Manimani", "universe": "VOCALOID", "field": "Festival", "catalyzer": "Laugh", "horizon": "Borderless Belonging" },
  { "player": "ManbouP feat. GUMI - Irokoizata wa Subete Sakuzu de Kaiketsu Kanou de Aru Koto no Shoumei", "universe": "VOCALOID", "field": "Comic Love Story", "catalyzer": "Goal Equation", "horizon": "Undertermined Madness" },
  { "player": "kemu feat. GUMI - Chikyuu Saigo no Kokuhaku o", "universe": "VOCALOID", "field": "Immortality", "catalyzer": "Late Words Invocation", "horizon": "Hunger Belonging Release" },
  { "player": "Ann-Melts P feat. Vocaloids - JINSEI", "universe": "VOCALOID", "field": "Personality Highlights", "catalyzer": "Integrative", "horizon": "Belonging" },
  { "player": "Yuzy feat. Hatsune Miku - Milk Crown on Sonechka", "universe": "VOCALOID", "field": "Religion Skin Dye", "catalyzer": "Hyperbolic Exagerations", "horizon": "Undetermined" },
  { "player": "Hanyuu Maigo feat. flower - Aun no Beats", "universe": "VOCALOID", "field": "Couple Conversation", "catalyzer": "Regret & Acceptance", "horizon": "Emptiness Release" },
  { "player": "<ruby>Aoibahn feat. nanawoakari<rt>nanawoakari</rt></ruby> - Shiawase ni Nante Naranaide", "universe": "", "field": "Childhood Growing Adult", "catalyzer": "Friendship", "horizon": "Release Undetermined" },
  { "player": "n-buna feat. GUMI - Aira", "universe": "VOCALOID", "field": "Hold Overlowing Weight", "catalyzer": "Reach Understanding", "horizon": "Intimate Release" },
  { "player": "n-buna feat. Hatsune Miku - Umiyuri Kaiteitan", "universe": "VOCALOID", "field": "Sea Solitude", "catalyzer": "Drown into the Sky", "horizon": "Cryptic" },
  { "player": "Neru feat. Kagamine Rin & Kagamine Len - How-to World Domination", "universe": "VOCALOID", "field": "Inner Conquest", "catalyzer": "Relationship", "horizon": "Belonging Hunger" },
  { "player": "Neru feat. Kagamine Rin - Lost One's Weeping", "universe": "VOCALOID", "field": "Industrial Schooling", "catalyzer": "Self Robotisation", "horizon": "Structural Agony" },
  { "player": "<ruby>Imy<rt>myu</rt></ruby> - Dreamscape (feat. Aitsuki Nakuru)", "universe": "", "field": "Post-Apocalypse", "catalyzer": "Cosmic Dream", "horizon": "Borderless Layers" },
  { "player": "<ruby>Imy<rt>myu</rt></ruby> - INGLASS (feat. konoco)", "universe": "", "field": "Blooming to Disappear", "catalyzer": "Natural Beauty", "horizon": "Spread Release" },
  { "player": "<ruby>Imy<rt>myu</rt></ruby> - Lost colors (feat. konoco)", "universe": "", "field": "Endless Winter", "catalyzer": "Praying", "horizon": "Undetermined Belonging" },
  { "player": "<ruby>TUYU<rt>Pusu</rt></ruby> - Itsuka Otona ni Nareru to Ii ne.", "universe": "", "field": "Social Media", "catalyzer": "Brainwash", "horizon": "Emptiness Estrangelement" },
  { "player": "<ruby>TUYU<rt>Pusu</rt></ruby> - Under Kids", "universe": "", "field": "Infantal Abuse", "catalyzer": "Hedonistic Nihilism", "horizon": "Hollow Destructive Estrangelement" },
  { "player": "<ruby>TUYU<rt>Pusu</rt></ruby> - Kore Dakara Yameranai", "universe": "", "field": "Obsessive Love", "catalyzer": "Strenghtening Power", "horizon": "Monstrous Hunger" },
  { "player": "<ruby>TUYU<rt>Pusu</rt></ruby> - Namikare", "universe": "", "field": "Unrealised Dreams", "catalyzer": "Desperate Spiral of Misery", "horizon": "Fatal Madness" },
  { "player": "<ruby>TUYU<rt>Pusu</rt></ruby> - Kuraberarekko", "universe": "", "field": "Expectations Pressure", "catalyzer": "Unrelevant Comparisons", "horizon": "Undetermined Belonging" },
  { "player": "<ruby>TUYU<rt>Pusu</rt></ruby> - Shuuten no Saki ga Aru to Suru Naraba.", "universe": "", "field": "Trauma, Regrets & Suicide", "catalyzer": "Surrondings Acceptance", "horizon": "Madness Hunger" },
  { "player": "<ruby>Ariabl'eyeS<rt>Lyse</rt></ruby> - Mebius (feat. Risa Yuzuki)", "universe": "", "field": "Intertwined Love and Pain", "catalyzer": "Unsolved", "horizon": "Fatal Madness" },
  { "player": "<ruby>V.W.P<rt>Kanzaki Iori</rt></ruby> - Kotodama", "universe": "KAMITSUBAKI", "field": "Apocalyptic Existential Hope", "catalyzer": "Love", "horizon": "Agony ➜ Borderless" },
  { "player": "<ruby>V.W.P<rt>Ren</rt></ruby> - Gyoukou", "universe": "KAMITSUBAKI", "field": "Move Forward", "catalyzer": "Simple Happiness", "horizon": "Constructive Belonging" },
  { "player": "<ruby>V.W.P<rt>Kashii Moimi</rt></ruby> - Hanataba", "universe": "KAMITSUBAKI", "field": "Relational Openness", "catalyzer": "Similarity", "horizon": "Constructive Belonging" },
  { "player": "MIMI feat. 可不 - Yurikago", "universe": "KAMITSUBAKI", "field": "Love without Answers", "catalyzer": "Spontaneity", "horizon": "Release Spread" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt</ruby> - Kaikou", "universe": "KAMITSUBAKI", "field": "Suffering & Loneliness", "catalyzer": "Pureness", "horizon": "Agony ➜ Borderless" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt</ruby> - Soshite Hana ni Naru", "universe": "KAMITSUBAKI", "field": "Simplicity", "catalyzer": "Passion", "horizon": "Release" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt</ruby> - Itou", "universe": "KAMITSUBAKI", "field": "Irreversibility Timeline", "catalyzer": "Help Need", "horizon": "Chaos ➜ Belonging" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt</ruby> - Mel no Tasogare", "universe": "KAMITSUBAKI", "field": "Loud Cursed History", "catalyzer": "Soft Kindness Here", "horizon": "Absolute Hollow×Spread Belonging" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt</ruby> - Yakou Bus Nite", "universe": "KAMITSUBAKI", "field": "Homelessness, Neglect, Cruelty", "catalyzer": "Belonging", "horizon": "Agony ➜ Hollow" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt</ruby> - Shinzou no Karakuri", "universe": "KAMITSUBAKI", "field": "Mask, Fragility, Kindness", "catalyzer": "Decisive Aware Feeling & Acceptance", "horizon": "Chaos ➜ Release" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt</ruby> - Yo Madoi Ko", "universe": "KAMITSUBAKI", "field": "Freedom", "catalyzer": "Awareness & Acceptance", "horizon": "Unknown×Belonging" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt</ruby> - Mikakunin Shoujo Shinkoukei", "universe": "KAMITSUBAKI", "field": "Manipulation, Childish", "catalyzer": "Absurdity & Welcoming", "horizon": "Hollow×Belonging" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt</ruby> - Kaerimichi", "universe": "KAMITSUBAKI", "field": "Natural Spreading", "catalyzer": "Fusing Flowing", "horizon": "Unknown & Belonging Release" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt</ruby> - Hinadori", "universe": "KAMITSUBAKI", "field": "Separation", "catalyzer": "Acceptance Onward", "horizon": "Belonging ➜ Release" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt</ruby> - quiz", "universe": "KAMITSUBAKI", "field": "Uncertainty, Choice", "catalyzer": "Decision on Togetherness", "horizon": "Unknown×Belonging" },
  { "player": "<ruby>KAF<rt>Okajima Kanata, Yamamoto Hayato</rt</ruby> - Nanimono", "universe": "KAMITSUBAKI", "field": "Life Role Game", "catalyzer": "Recognition & Being Noticed", "horizon": "Hunger" },
  { "player": "<ruby>KAF<rt>suisoh</rt></ruby> - Swimmer", "universe": "KAMITSUBAKI", "field": "Water Reflection", "catalyzer": "Disconnect from Electronic", "horizon": "Belonging" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt</ruby> - Tatoeba", "universe": "KAMITSUBAKI", "field": "Drown Movie like", "catalyzer": "Moments Cheering", "horizon": "Intimate Release Belonging" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt</ruby> - Yoru ga Furiyamu Mae ni", "universe": "KAMITSUBAKI", "field": "Night Falls Transition", "catalyzer": "Flowing Pass Open", "horizon": "Intimate Release" }]


const RUGGHH_ARCADISTS = [
  { "player": "<ruby>Nezrog<rt>Fenekohq</rt></ruby>", "universe": "⟁URNELCY", "field": "", "catalyzer": "", "quiz": "Unknown Cryptic Order Emptiness", },

  { "player": "a", "universe": "", "field": "a", "catalyzer": "a", "quiz": "a" },
  { "player": "a", "universe": "", "field": "a", "catalyzer": "a", "quiz": "a" },
  { "player": "a", "universe": "", "field": "a", "catalyzer": "a", "quiz": "a" },

  { "player": "mafumafu feat. IA - Yakubyougami", "universe": "VOCALOID", "field": "Strangeness", "catalyzer": "Cynism", "quiz": "Estrangelement Layers % Destructive Hunger" },
  { "player": "Yorushika - Algernon", "universe": "", "field": "Labyrinth", "catalyzer": "Unending Lost Travel", "quiz": "Unknown Release" },
  { "player": "<ruby>Ulysses<rt>Homer</rt></ruby>", "universe": "Iliad and Odyssey", "field": "Wandering, Virtue, Humility", "catalyzer": "Responsibility", "quiz": "Unknown Doubt×Fatal" },
  { "player": "<ruby>Meursault<rt>Albert Camus</rt></ruby>", "universe": "The Stranger", "field": "Absurdity & Apathy", "catalyzer": "The Sun", "quiz": "Fatal Hollow" },
  { "player": "Isaac", "universe": "Castlevania", "field": "Wandering, Suffering Meaning", "catalyzer": "Fidelity", "quiz": "Emptiness Agony Cryptic" },
  { "player": "Ado - Gira Gira", "universe": "", "field": "Lost Identity", "catalyzer": "Thrive for Success", "quiz": "Hunger" },
  { "player": "Kanzaki Iori feat. Kagamine Rin Len - Shinu Toki Shineba Ii", "universe": "VOCALOID", "field": "Death is Simple", "catalyzer": "Want to be Human", "quiz": "Structural Hollow×Hunger" },
  { "player": "<ruby>Uwasanopetals<rt>KAMEKICHI</rt></ruby> - Eien Nante Uso Bakari Datta", "universe": "SHOW BY ROCK!!", "field": "Limited Time", "catalyzer": "Transience & Dearness", "quiz": "Fatal Absolute" },
  { "player": "Shizuku Secret Mind - A Song Without A Songstress", "universe": "SHOW BY ROCK!!", "field": "Solitude Instrument Dearness", "catalyzer": "Fading", "quiz": "Emptiness Layers" },
  { "player": "<ruby>BUD VIRGIN LOGIC<rt>Yugo Ichikawa (Felion Sounds)</rt></ruby> - PLease Please Christmas", "universe": "SHOW BY ROCK!!", "field": "Santa Claus", "catalyzer": "Celebration", "quiz": "Wishful Play" },
  { "player": "<ruby>Tsurezure Naru Ayatsuri Mugenan<rt>Mike Sugiyama</rt></ruby> - Yumeyo Sake", "universe": "SHOW BY ROCK!!", "field": "Flowing", "catalyzer": "Fantasy", "quiz": "Intimate Chaos" },
  { "player": "<ruby>Tsurezure Naru Ayatsuri Mugenan<rt>Hyuga Ogi</rt></ruby> - Akisame Junjouka", "universe": "SHOW BY ROCK!!", "field": "Give Up", "catalyzer": "Falling in Love", "quiz": "Intimate Spread Release" },
  { "player": "<ruby>Tsurezure Naru Ayatsuri Mugenan<rt>A / Hyuga Ogi</rt></ruby> - Izayoi Bonbori Uta", "universe": "SHOW BY ROCK!!", "field": "Celestial Event", "catalyzer": "Drunkenness", "quiz": "Borderless" },
  { "player": "<ruby>Tsurezure Naru Ayatsuri Mugenan<rt>Yocke</rt></ruby> - Ryuuri ~SASURAI~", "universe": "SHOW BY ROCK!!", "field": "Fluctuation", "catalyzer": "Wandering", "quiz": "Fatal Unknown" },
  { "player": "<ruby>Tsurezure Naru Ayatsuri Mugenan<rt>A / Hyuga Ogi</rt></ruby> - Tabiji Yoiyoi Yume Hanabi", "universe": "SHOW BY ROCK!!", "field": "Wandering", "catalyzer": "Purposeless", "quiz": "Unknown Layers" },
  { "player": "<ruby>Tsurezure Naru Ayatsuri Mugenan<rt>HAMA-kgn</rt></ruby> - SADAME", "universe": "SHOW BY ROCK!!", "field": "Cherry Blossom", "catalyzer": "Renewal Seasons", "quiz": "Fatal Belonging" },
  { "player": "<ruby>Tsurezure Naru Ayatsuri Mugenan<rt>Yoshie Isogai</rt></ruby> - Ukiyo ni Mai Fu Wa Setsuna no Hana", "universe": "SHOW BY ROCK!!", "field": "Nature's Doing", "catalyzer": "Observance", "quiz": "Unknown Release" },
  { "player": "<ruby>Tsurezure Naru Ayatsuri Mugenan<rt>HAMA-kgn</rt></ruby> - Irodoru Yume Wa Shinpuu No Gotoku", "universe": "SHOW BY ROCK!!", "field": "Endless Dream", "catalyzer": "Flowing", "quiz": "Spread Release" },
  { "player": "<ruby>Tsurezure Naru Ayatsuri Mugenan<rt>Mashiro Shimura</rt></ruby> - Reimei ni Saki ke", "universe": "SHOW BY ROCK!!", "field": "Cyclical Nature", "catalyzer": "Flowing", "quiz": "Borderless Intimate" },
  { "player": "<ruby>Tsurezure Naru Ayatsuri Mugenan<rt>Yoshie Isogai</rt></ruby> - Koi Yomi no Chou", "universe": "SHOW BY ROCK!!", "field": "Dream", "catalyzer": "Singing", "quiz": "Borderless Layers Release" },
  { "player": "<ruby>Mashumairesh!!<rt>Kazumi Tomita</rt></ruby> - Cinderella Story", "universe": "SHOW BY ROCK!!", "field": "Book Inspiration", "catalyzer": "Admiration & Elegance", "quiz": "Undetermined Fuel" },
  { "player": "<ruby>Mashumairesh!!<rt>Delmin, Ruhuyu / HAMA-kgn</rt></ruby> - No problem!!", "universe": "SHOW BY ROCK!!", "field": "Listen to Oneself", "catalyzer": "Self Acceptance & Smile", "quiz": "Intimate Release" },
  { "player": "<ruby>Mashumairesh!!<rt>Howan / Show Aratame</rt></ruby> - Masshiro Start Line", "universe": "SHOW BY ROCK!!", "field": "Travel Far Away", "catalyzer": "Excitement", "quiz": "Unknown" },
  { "player": "<ruby>Zerotickholic<rt>Kentaro Fujii</rt></ruby> - Kakurenbo", "universe": "SHOW BY ROCK!!", "field": "Identity", "catalyzer": "Undiscoverable Veil", "quiz": "Cryptic Emptiness" },
  { "player": "<ruby>YOASOBI<rt>Ayase</rt></ruby> - New me", "universe": "", "field": "Routine", "catalyzer": "Eveyday Small Changes", "quiz": "Chaos Unknown" },
  { "player": "<ruby>YOASOBI<rt>Ayase</rt></ruby> - Tabun", "universe": "", "field": "Inevitable Goodbye", "catalyzer": "Welcoming Home", "quiz": "Absolute Fatal" },
  { "player": "<ruby>HIMEHINA<rt>Gohgo</rt></ruby> - Hitogata", "universe": "", "field": "Virtual World", "catalyzer": "Human Appeal", "quiz": "Borderless Fuel" },
  { "player": "<ruby>HIMEHINA<rt>Gohgo</rt></ruby> - HIBARI", "universe": "", "field": "Reaching Soul", "catalyzer": "Long Last", "quiz": "Unknown Layers Belonging" },
  { "player": "<ruby>HIMEHINA<rt>Gohgo</rt></ruby> - WWW", "universe": "", "field": "Vague Identity", "catalyzer": "Distorsion & Transformation", "quiz": "Undetermined" },
  { "player": "<ruby>HIMEHINA<rt>Gohgo</rt></ruby> - Mr.VIRTUALIZER", "universe": "", "field": "Dreamic Worlds Temptation", "catalyzer": "Can I Become a Hero ?", "quiz": "Undetermined Layers" },
  { "player": "<ruby>HIMEHINA<rt>Gohgo</rt></ruby> - Adam to Madame", "universe": "", "field": "Break Fate, Break Taboo, Break Dream", "catalyzer": "Painted or Destroyed? Tragedy or Comedy?", "quiz": "Unknown Release" },
  { "player": "Tsumiki feat. KAFU - phony", "universe": "VOCALOID", "field": "Masks Appearances", "catalyzer": "Deceit Falsehood", "quiz": "Fatal Doubt" },
  { "player": "Alstroemeria feat. nomico - Bad Apple", "universe": "Touhou", "field": "Self-Worth", "catalyzer": "Disconnection from Reality", "quiz": "Intimate Emptiness×Estrangelement Layers" },
  { "player": "mafumafu feat. Hatsune Miku - Merry Bad End", "universe": "VOCALOID", "field": "Crowd Manipulation", "catalyzer": "Scapegoat", "quiz": "Layers Estrangelement" },
  { "player": "Guchiry feat. flower - Abnormality Dancin' Girl", "universe": "VOCALOID", "field": "Standardization & Depression", "catalyzer": "Freedom", "quiz": "Fatal Madness Estrangelement Order" },
  { "player": "Oonuma Paseri feat. flower - Egoist", "universe": "VOCALOID", "field": "Guidance Conversation", "catalyzer": "Life Withdraw S-Word", "quiz": "Emptiness" },
  { "player": "Iyowa feat. KAFU - Kyu-kurarin", "universe": "VOCALOID", "field": "Depression & Suicide", "catalyzer": "Despair & Bed", "quiz": "Emptiness Fuel % Intimate Hollow" },
  { "player": "PinocchioP feat. Hatsune Miku - Kusare-gedou and Chocolate", "universe": "VOCALOID", "field": "Rumours Assumptions", "catalyzer": "Expectations Betrayal", "quiz": "Spread Estrangelement" },
  { "player": "Hiiragi Magnetite feat. KAFU - Marshall Maximizer", "universe": "VOCALOID", "field": "Science & Religion", "catalyzer": "Contradiction", "quiz": "Undetermined Unknown" },
  { "player": "32ki feat. Hatsune Miku & Kasane Teto - Mesmerizer", "universe": "VOCALOID", "field": "Hypnosis Escape", "catalyzer": "Blue/Red Pill", "quiz": "Fatal Madness" },
  { "player": "Shinsei Kamattechan - Shinitai Himawari", "universe": "", "field": "Suicide", "catalyzer": "Parental Abuse", "quiz": "Worsening" },
  { "player": "Shinsei Kamattechan - Ruru's Suicide Show on a Livestream", "universe": "", "field": "Suicide", "catalyzer": "Unsolved", "quiz": "Worsening Hollow" },
  { "player": "Eve - Dramaturgy", "universe": "", "field": "Theater", "catalyzer": "High Expectations Demands", "quiz": "Fatal Unknown" },
  { "player": "cosMo@bousouP feat. Hatsune Miku - YAMINABE!!!!", "universe": "VOCALOID", "field": "Amusing Cooking Game", "catalyzer": "Enjoyment", "quiz": "Estrangelement Chaos" },
  { "player": "<ruby>Wolpis Carter<rt>HarryP</rt></ruby> - Deichu Ni Saku", "universe": "", "field": "Existential Wandering", "catalyzer": "Doing its Best", "quiz": "Intimate Borderless" },
  { "player": "mikitoP feat. Hatsune Miku - Shoujo Rei", "universe": "VOCALOID", "field": "Bullying & Suicide", "catalyzer": "Manipulation", "quiz": "Destructive Belonging Cryptic" },
  { "player": "siinamota feat. Kagamine Rin - Young Girl A", "universe": "VOCALOID", "field": "Lagged-Like Life", "catalyzer": "Unsolved", "quiz": "Worsening Cryptic" },
  { "player": "Kairiki bear feat. Hatsune Miku - Ruma", "universe": "VOCALOID", "field": "Rightness", "catalyzer": "Ambiguity", "quiz": "Fatal Unknown Layers" },
  { "player": "<ruby>TUYU<rt>Pusu</rt></ruby> - Ano Yo Iki no Bus ni Notte Saraba.", "universe": "", "field": "Guilt, Regrets & Suicide", "catalyzer": "Self Hatred", "quiz": "Agony Hollow" },
  { "player": "<ruby>harusaruhi<rt>Takayan</rt></ruby> - Gyakuten", "universe": "KAMITSUBAKI", "field": "Uncertainty, Fragility, Anxiety, Exposure Danger", "catalyzer": "Searching a Sense of Somethingness Nevertheless", "quiz": "Fatal Estrangelement &% Doubt" },
  { "player": "<ruby>V.W.P<rt>Kanzaki Iori</rt></ruby> - Dennou", "universe": "KAMITSUBAKI", "field": "Truth, Uncertainty", "catalyzer": "Skeptical on Artificial Feelings & Flexible Identity", "quiz": "Chaos Doubt ➜ Undetermined Unknown" },
  { "player": "<ruby>V.W.P<rt>Kanzaki Iori</rt></ruby> - Kyoumei", "universe": "KAMITSUBAKI", "field": "Real or Fake?", "catalyzer": "Love/Soul Important", "quiz": "Unknown×Belonging" },
  { "player": "<ruby>V.I.P<rt>Ren</rt></ruby> - Gekkou", "universe": "KAMITSUBAKI", "field": "Will to Certificate", "catalyzer": "Existential Recognition", "quiz": "Belonging Hunger" },
  { "player": "<ruby>V.I.P<rt>Kashii Moimi</rt></ruby> - Kikai no Koe", "universe": "KAMITSUBAKI", "field": "Alter-Consciousness", "catalyzer": "Incorporate of Humans Self like", "quiz": "Spread Layers" },
  { "player": "<ruby>Isekaijoucho<rt>Ren</rt></ruby> - PANDORA CALL", "universe": "KAMITSUBAKI", "field": "Manipulation threw \"Love\" Word", "catalyzer": "Intentionality Analyzer behind the Melody", "quiz": "Unknown Hollow" },
  { "player": "<ruby>Isekaijoucho<rt>Harumaki Gohan</rt></ruby> - Tomedonaki Hakujou", "universe": "KAMITSUBAKI", "field": "Associative Bias", "catalyzer": "Appearances & Realities", "quiz": "Intimate Undetermined" },
  { "player": "<ruby>Isekaijoucho<rt>Sasagao Mao</rt></ruby> - Ambivalent", "universe": "KAMITSUBAKI", "field": "Apathy", "catalyzer": "Impulsivity", "quiz": "Monstrous Emptiness" },
  { "player": "<ruby>Isekaijoucho×RIM<rt>Ren</rt></ruby> - Utakata", "universe": "KAMITSUBAKI", "field": "Morphism", "catalyzer": "Wait it's Completion", "quiz": "Structural Layers" },
  { "player": "<ruby>KAF<rt>Neuron (Empty old City)</rt></ruby> Hitoe ni Kowarete", "universe": "KAMITSUBAKI", "field": "Heaviness", "catalyzer": "Self Distorsion", "quiz": "Agony Hollow" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt></ruby> Fukakai", "universe": "KAMITSUBAKI", "field": "Societal Agreement", "catalyzer": "Impersonal Measurement", "quiz": "Structural Order ➜ Unknown" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt></ruby> Tomadoi Telepathy", "universe": "KAMITSUBAKI", "field": "Trust & Leap of Faith", "catalyzer": "Uncondional Action to Signals", "quiz": "Unknown ➜ Borderless" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt></ruby> Wasurete Shimae", "universe": "KAMITSUBAKI", "field": "Manipulation, Betrayal, Memory, Trauma, Obsession", "catalyzer": "The Betrayer Hold All the Meaning of that \"Love\". Can't Forget so Accepting is the only way to Heal", "quiz": "Belonging ➜ Chaos ➜ Unknown Estrangement ➜ Release" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt></ruby> Umi ni Bakeru", "universe": "KAMITSUBAKI", "field": "Hunger as a Whole", "catalyzer": "Fusion on Density", "quiz": "Borderless Layers" }, { "player": "<ruby>KAF<rt>Kanzaki Iori</rt</ruby> - Answer", "universe": "", "field": "Regret Scaling", "catalyzer": "Bounds over Correctness", "quiz": "Unknown Belonging" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt></ruby> Keshiki", "universe": "KAMITSUBAKI", "field": "Freedom", "catalyzer": "Individual Identity", "quiz": "Unknown" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt></ruby> Hissei-yo", "universe": "KAMITSUBAKI", "field": "What Directives ?", "catalyzer": "Self & Reciprocity", "quiz": "Unknown & Borderless Layers" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt></ruby> Majo", "universe": "KAMITSUBAKI", "field": "Word, Meaning, Soul, Unproovable", "catalyzer": "Inacessibility Trap, Whatever Dear", "quiz": "Unknown & Borderless" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt></ruby> Nihil", "universe": "KAMITSUBAKI", "field": "Existential Uncertainty", "catalyzer": "Hunger & Belief", "quiz": "Fatal Hollow ➜ Unknown" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt></ruby> - Samayoi", "universe": "KAMITSUBAKI", "field": "Farewell Renewal", "catalyzer": "Wandering & Curiosity", "quiz": "Unknown Release" },
  { "player": "<ruby>KAF<rt>Ren</rt></ruby> - Fukan Suru Jishou", "universe": "KAMITSUBAKI", "field": "Idealization, Delusive Lies, Life Unequal to be Equal", "catalyzer": "Self-Worth Measurement by X or Self", "quiz": "Undetermined Hunger ➜ Unknown Release" },
  { "player": "<ruby>KAF<rt>Guiano</rt></ruby> Kono Sekai wa Utsukushii", "universe": "KAMITSUBAKI", "field": "What if it End Tomorrow", "catalyzer": "Faith Delivery", "quiz": "Unknown Release" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt></ruby> Kako wo Kurau", "universe": "KAMITSUBAKI", "field": "Void Self-Hurt", "catalyzer": "Regrets", "quiz": "Hunger &% Doubt" },
  { "player": "<ruby>KAF<rt>Kanzaki Iori</rt></ruby> Hito wo Kidoru", "universe": "KAMITSUBAKI", "field": "Disappearance & Memories", "catalyzer": "Life Open to Us", "quiz": "Fatal Release" },
  { "player": "<ruby>koko×KAF<rt>Ren</rt></ruby> - Haguruma", "universe": "KAMITSUBAKI", "field": "Karma & Faith", "catalyzer": "Incantational Reality", "quiz": "Madness Hunger" },
  { "player": "<ruby>Imy<rt>myu</rt></ruby> - Uso wa Shinjitsu wo Enjiru (feat. Natsume Itsuki)", "universe": "", "field": "Disguised Fictions", "catalyzer": "Continue Acting", "quiz": "Absolute Undetermined" }]


document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('openArcadiaRefsBtn');
  const closeBtn = document.getElementById('closeArcadiaRefsBtn');
  const modal = document.getElementById('arcadiaRefsModal');
  const overlay = document.getElementById('arcadiaRefsModalOverlay');

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

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  // Populate tables
  function generateTableHTML(data) {
    if (!data || data.length === 0) return '';

    // Detect which 5th field exists (plosion, horizon, or quiz)
    const firstRow = data[0];
    let fifthFieldName = 'zzz';
    if ('plosion' in firstRow) fifthFieldName = 'plosion';
    if ('horizon' in firstRow) fifthFieldName = 'horizon';
    if ('quiz' in firstRow) fifthFieldName = 'quiz';

    const fieldDisplay = fifthFieldName.charAt(0).toUpperCase() + fifthFieldName.slice(1);
    let html = `<thead><tr><th>Player</th><th>Universe</th><th>Field</th><th>Catalyzer</th><th>${fieldDisplay}</th></tr></thead><tbody>`;

    data.forEach(row => {
      const fifthValue = row[fifthFieldName] || '';
      html += `<tr>
        <td style="padding: 8px;">${row.player}</td>
        <td style="padding: 8px;">${row.universe}</td>
        <td style="padding: 8px;">${row.field}</td>
        <td style="padding: 8px;">${row.catalyzer}</td>
        <td style="padding: 8px;">${fifthValue}</td>
      </tr>`;
    });

    html += '</tbody>';
    return html;
  }

  document.getElementById('jqbTable').innerHTML = generateTableHTML(JQB_ARCADISTS);
  document.getElementById('likkhhTable').innerHTML = generateTableHTML(LIKKHH_ARCADISTS);
  document.getElementById('rugghTable').innerHTML = generateTableHTML(RUGGHH_ARCADISTS);

  // Populate tags in Featuring Tags
  const tagsList = document.getElementById('eurekaTagsList');
  const activeTagsList = document.getElementById('activeTagsList');

  EUREKA_TAGS.forEach(tag => {
    const span = document.createElement('span');
    span.className = 'eureka-tag';
    span.textContent = tag;
    span.draggable = true;

    span.addEventListener('dragstart', function (e) {
      this.classList.add('dragging');
    });

    span.addEventListener('dragend', function (e) {
      this.classList.remove('dragging');
    });

    span.addEventListener('click', function (e) {
      const isInActiveList = this.parentElement === activeTagsList;
      const targetContainer = isInActiveList ? tagsList : activeTagsList;
      targetContainer.appendChild(this);
      this.classList.toggle('active');
      filterTablesByTags();
    });

    tagsList.appendChild(span);
  });

  // Setup drag and drop
  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e, container) {
    e.preventDefault();
    const draggedTag = document.querySelector('.eureka-tag.dragging');
    if (draggedTag) {
      container.appendChild(draggedTag);
      draggedTag.classList.toggle('active', container === activeTagsList);
      filterTablesByTags();
    }
  }

  tagsList.addEventListener('dragover', handleDragOver);
  tagsList.addEventListener('drop', (e) => handleDrop(e, tagsList));

  activeTagsList.addEventListener('dragover', handleDragOver);
  activeTagsList.addEventListener('drop', (e) => handleDrop(e, activeTagsList));

  // Filter tables by active tags
  function filterTablesByTags() {
    const activeTags = Array.from(document.querySelectorAll('#activeTagsList .eureka-tag'))
      .map(tag => tag.textContent.trim().toLowerCase());

    document.querySelectorAll('.cult-refs tbody tr').forEach(row => {
      const lastCell = row.cells[row.cells.length - 1];
      if (!lastCell) return;

      const cellText = lastCell.textContent.trim();
      if (!cellText) {
        row.style.display = 'none';
        return;
      }

      if (activeTags.length === 0) {
        row.style.display = '';
        return;
      }

      const shouldShow = activeTags.every(tag => cellText.toLowerCase().includes(tag));
      row.style.display = shouldShow ? '' : 'none';
    });
  }

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const searchTerm = this.value.toLowerCase();
      const tables = document.querySelectorAll('.cult-refs tbody tr');

      tables.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
      });
    });
  }
});

function toggleTag(tagElement) {
    const activeTagsList = document.getElementById('activeTagsList');
    const tagsList = document.getElementById('eurekaTagsList');

    if (tagElement.parentElement.id === 'eurekaTagsList') {
        activeTagsList.appendChild(tagElement);
    } else {
        tagsList.appendChild(tagElement);
    }
    filterTablesByTags();
}