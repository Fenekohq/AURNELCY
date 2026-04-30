function renderSongs() {
  songs.forEach(song => {
    const target = document.getElementById(song.id);
    if (!target) return;

    target.innerHTML = `
      <div style="text-align: center;">
        <details>
          <summary style="cursor: pointer;">𝄞</summary>


        <div style="max-width:100%; margin:0 auto; text-align:center;">
          <a href="${song.youtubeUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-block; position:relative; width:100%; max-width:900px; border-radius:12px; overflow:hidden; text-decoration:none;">
            <img src="${song.thumbnail}" alt="プラズマジカ & Mashumairesh!! - ランナーズハイ!! thumbnail" style="width:100%; height:auto; display:block;">
            <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; pointer-events:none;">
              <svg width="96" height="96" viewBox="0 0 64 64" aria-hidden="true" style="filter:drop-shadow(0 6px 18px rgba(0,0,0,0.45));">
                <circle cx="32" cy="32" r="30" fill="rgba(0,0,0,0.55)"></circle>
                <polygon points="26,20 26,44 46,32" fill="#fff"></polygon>
              </svg>
            </div>
          </a>

          <div style="margin-top:0.6rem; font-size:0.95rem;">
            <a href="${song.youtubeUrl}" target="_blank" rel="noopener noreferrer">Open on YouTube ↗</a>
          </div>

          <noscript>
            <div style="text-align:center; margin-top:0.5rem;">
              <a href="${song.youtubeUrl}" target="_blank" rel="noopener noreferrer">
                <img src="${song.thumbnail}" alt="プラズマジカ & Mashumairesh!! - ランナーズハイ!! thumbnail" style="max-width:100%; border-radius:12px;">
              </a>
            </div>
          </noscript>
        </div>

        <div>
          <audio controls style="width: 100%; margin: 20px auto; border-radius: 10px; background-color: #f0f0f0; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
            <source src="${song.audioSrc}" type="audio/mpeg">
          </audio>
        </div>

        <div>
          <img src="${song.coverImg}" style="width: 400px; height: 400px; border-radius: 5%">
        </div>

          <details class="lyrics-section" style="margin: 64px auto;">
            <summary style="text-decoration: underline; cursor: pointer;">
              Lyrics ${song.lyricsType}
            </summary>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
              <div>
                <h2>${song.lyricsLeftTitle}</h2>
                ${song.lyricsLeftContent}
                <br>
                <cite>- ${song.authorLeft} -</cite>
              </div>

              <div>
                <h2>${song.lyricsRightTitle}</h2>
                ${song.lyricsRightContent}
                <br>
                <cite>- ${song.authorRight} -</cite>
              </div>
            </div>
          </details>
        </details>
      </div>
    `;
  });
}

const style = document.createElement("style");

style.textContent = `
#himn .st-singer { color: #ff69b4; }
#himn .nd-singer { color: #1e90ff; }
#himn .rd-singer { color: #9932cc; }

#vwp .kaf { color: #ff00ff; }
#vwp .rim { color: #0000cd; }
#vwp .haru { color: #ff0000; }
#vwp .sekai { color: #ffa500; }
#vwp .koko { color: #8a2be2; }
#vwp .all { text-shadow: 0px 0px 4px; }

#aria .st-singer { color: #1e90ff; }
#aria .nd-singer { color: #87ceeb; }
`;

document.head.appendChild(style);

const songs = [
  // ✅ FIRST
  {
    id: "song-mapnel",
    title: "ランナーズハイ!!",
    artist: "プラズマジカ & Mashumairesh!!",
    youtubeUrl: "https://www.youtube.com/watch?v=7rPiWljlFpY",
    thumbnail: "feature/プラズマジカ & Mashumairesh!! - ランナーズハイ!! thumbnail.jpg",
    audioSrc: "feature/プラズマジカ & Mashumairesh!! - ランナーズハイ!! song.mp3",
    coverImg: "feature/プラズマジカ & Mashumairesh!! - ランナーズハイ!! cover.jpg",
    lyricsType: "JAP/FR",
    authorLeft: "Kouta Kaneko",
    authorRight: "Kouta Kaneko",
    lyricsLeftTitle: "ランナーズハイ!!",
    lyricsRightTitle: "Runners High!!",
    lyricsLeftContent: `
    張り裂けそうな想いを<br>
    抱いて　僕らの住む街が<br>
    坂の上　今日も暮れていく<br>
    当たり前なんかじゃ無くて<br>
    気が付けば全部一瞬で<br>
    過ぎ去ってしまうから<br>
    この歌を僕は歌うよ<br>
    <br>
    どこまでも続くような<br>
    オレンジと青のグラデーション<br>
    瞬きも出来ないほど綺麗な<br>
    今だけを焼き付けていたいよ<br>
    <br>
    走れ　走れ　音の上で<br>
    ランナーズハイ！！<br>
    もう止められないんだ<br>
    つまずいて転んで擦りむいた夜も<br>
    君となら乗り越えられた<br>
    走れ　走れ　もっと早く<br>
    ランナーズハイ！！<br>
    心拍数がBPMさ<br>
    今この瞬間を歌いながら<br>
    どこまでも君を連れていけるよ<br>
    走れ<br>`,
    lyricsRightContent: `
    En serrant des sentiments qui semblent prêts à éclater,<br>
    La ville où nous vivons,<br>
    sur la colline, s'assombrit encore aujourd'hui.<br>
    Ce n'est pas quelque chose d'acquis,<br>
    avant qu'on ne s'en rende compte, tout<br>
    ne fait que passer en un instant.<br>
    C'est pourquoi je chante cette chanson.<br>
    <br>
    Le dégradé d'orange et de bleu<br>
    qui semble s'étendre à l'infini.<br>
    Je veux graver seulement cet instant magnifique,<br>
    si clair que je ne peux même pas cligner des yeux.<br>
    <br>
    Cours, cours, sur le son.<br>
    Runners High!!<br>
    Je ne peux plus m'arrêter.<br>
    Même les nuits où nous avons trébuché, chuté et écorché nos genoux,<br>
    nous avons pu les surmonter avec toi.<br>
    Cours, cours, plus vite.<br>
    Runners High!!<br>
    Notre rythme cardiaque est le BPM.<br>
    En chantant cet instant précis,<br>
    je peux t'emmener n'importe où.<br>
    Cours<br>`
  },


  {
    id: "song-iuvalcy",
    title: "トリノコシティ",
    artist: "40mP feat. 初音ミク",
    youtubeUrl: "https://www.youtube.com/watch?v=yIQDGwyJpSo",
    thumbnail: "feature/40mP feat. 初音ミク - トリノコシティ thumbnail.jpg",
    audioSrc: "feature/40mP feat. 初音ミク - トリノコシティ song.mp3",
    coverImg: "feature/40mP feat. 初音ミク - トリノコシティ cover.png",
    lyricsType: "JAP/ENG",
    authorLeft: "40mP",
    authorRight: "40mP",
    lyricsLeftTitle: "トリノコシティ",
    lyricsRightTitle: "Urbandonment",
    lyricsLeftContent: `
    0と1が交差する地点<br>
    間違いだらけの　コミュニケーション<br>
    アナタの名前は　何ですか？<br>
    10文字以内で　答エヨ<br>
    <br>
    過去と未来が　交差する地点<br>
    行く宛を失った　現在地<br>
    アナタはどうして　生きているの？<br>
    100文字以内で　答エヨ<br>
    <br>
    過去最高速の　夜が明ける<br>
    バランス取ることも　できないまま<br>
    <br>
    自分だけどこか　取り残された<br>
    音の無い世界　造られた世界<br>
    傷んだ果実を　捨てるだけなら<br>
    2人もいらない　1人で出来るから<br>
    <br>
    昼と夜が　交差する地点<br>
    誰かに会いたくて　会えなくて<br>
    ワタシの名前は　何ですか？<br>
    10文字以内で　教えて<br>
    <br>
    嘘と本当が　交差する地点<br>
    呼吸が止まりそうな　閉塞感<br>
    ワタシはどうして　生きているの？<br>
    100文字以内で　教えて<br>
    <br>
    好き　嫌い　好き　嫌い　の繰り返しで<br>
    疲れきった愛は　もういらない<br>
    <br>
    時間だけいつも　通り過ぎていく<br>
    1秒ごとに　崩れていく世界<br>
    歪んだ景色に　塗りつぶされた<br>
    真実（こたえ）はいらない　偽りでいいの<br>
    <br>
    自分だけどこか　取り残された<br>
    色のない世界　夢に見た世界<br>
    傷んだ果実を　捨てることすら<br>
    1人じゃ出来ない　傍にいてほしくて<br>`,
    lyricsRightContent: `
    A point where 0 and 1 intersects<br>
    A communication full of mistakes<br>
    What is your name?<br>
    Answer me within a 10 word limit<br>
    <br>
    A point where the past and future intersects<br>
    Losing my destination in my present location<br>
    Why are you living?<br>
    Answer within a 100 word limit<br>
    <br>
    The day breaks at a maximum speed never seen before<br>
    Unable to keep my balance<br>
    <br>
    I am somehow left behind<br>
    A soundless world, an artificial world<br>
    If you’re just going to throw away that rotten fruit<br>
    You don’t need two people, one’s just enough.<br>
    <br>
    A point where afternoon and night intersects<br>
    Yearning to meet someone but unable to<br>
    What is my name?<br>
    Tell me within a 10 word limit<br>
    <br>
    A point where lies and truths intersects<br>
    This feeling of entrapment that hinders my breathing<br>
    Why am I living?<br>
    Tell me within a 100 word limit<br>
    <br>
    "I like you. I hate you. I like you. I hate you" was repeated over and over<br>
    This tiresome love…I don’t want it<br>
    <br>
    Time is the only thing that keeps on passing by<br>
    Crumbling this world in a matter of seconds<br>
    Coating over this twisted scenery<br>
    I don’t want the truth, a lie is just fine<br>
    <br>
    I was somehow left behind<br>
    A colourless world, a world I’ve dreamed about<br>
    Even throwing away this rotten fruit<br>
    I can’t do it alone, I want you by my side so much<br>`
  },


  {
    id: "song-arcadia",
    title: "アダムとマダム",
    artist: "HIMEHINA",
    youtubeUrl: "https://www.youtube.com/watch?v=VADgVRvoqwg",
    thumbnail: "feature/HIMEHINA - アダムとマダム thumbnail.jpg",
    audioSrc: "feature/HIMEHINA - アダムとマダム song.mp3",
    coverImg: "feature/HIMEHINA - アダムとマダム cover.jpg",
    lyricsType: "JAP/ENG",
    authorLeft: "Gohgo",
    authorRight: "Gohgo",
    lyricsLeftTitle: "アダムとマダム",
    lyricsRightTitle: "Adam and Madame",
    lyricsLeftContent: `<div id="himn">
    <span class="rd-singer">One Two Three Four... Skip,<br>
    Count...Twenty Four.<br>
    終わらないこの世界 Break the Fate！</span><br>
    <br>
    <span class="rd-singer">Ah Ahn Ah Ah Ahn</span><br>
    <br>
    <span class="st-singer">赤い土と生命の炎に焦がれる恋のように<br>
    このまま君を連れて星すら失っても</span><br>
    <span class="nd-singer">汚されたこの世界も犯した《原罪》も<br>
    生まれたままの葉の時を誰か戻してよ</span><br>
    <br>
    <span class="rd-singer">なんてクヨクヨしてよくないって！<br>
    くらくらCryしてないで Night and Day<br>
    振りかざせMy Light 終わらないでよ? いいよ<br>
    Believe my way my way って祈るよ</span><br>
    <br>
    <span class="st-singer">木々よ 百合よ 陽よ 大地よ 始の海よ</span><br>
    <span class="nd-singer">罪の名よ - The Name of Sin -<br>
    俯いた空よ</span><br>
    <span class="st-singer">飛べない 暗い 世界じゃ 終わんない</span><br>
    <span class="nd-singer">そうでしょ？ 辛いけど</span><br>
    <br>
    <span class="st-singer">立ち上がれ最期は近いから<br>
    誓うから 君を誰にも渡さないって<br>
    ごめんね 涙させて</span><br>
    <span class="rd-singer">＃ 泣かさないで～ ＃</span><br>
    <br>
    <span class="nd-singer">未来を描くとか 壊すとか<br>
    理想の果ての心界の《愛》は甘くて<br>
    苦くて 少し泣けた</span><br>
    <span class="rd-singer">＃ 涙ガンジス ＃</span><br>
    <br>
    <span class="st-singer">どうしても抜け出せない 鎖の《宿命》<br>
    アダムとマダムの星の匂い<br>
    ふたりの恋 Feel the Free...</span><br>
    <br>
    <span class="rd-singer">Ah Ahn Ah Ah Ahn</span><br>
    <br>
    <span class="nd-singer">生まれたまんま裸のまんま<br>
    突っ立って葉っぱ貼って待ってたってずっと変わらない</span><br>
    <span class="nd-singer">そうだ</span><span class="st-singer">、踏み出してこうか？もぎ取っていこうか？<br>
    少しくらいならタブー犯してもいいよって言うのが人間でしょ？</span><br>
    <br>
    <span class="nd-singer">君よ エゴの実をどうしたの？隠したの？</span><br>
    <span class="st-singer">騙さないでせめて私だけは - Do not Cheat on me! -<br>
    欲望？ 希望？ a Lie ざらい話してよ<br>
    離してよ！</span><br>
    <br>
    <span class="nd-singer">She Messed up & Burned out!<br>
    最後は怒ってた<br>
    腐ってたヒトの欲のナレハテなんて<br>
    御免よ、さよならアダム</span><br>
    <span class="rd-singer">＃ いかせないで～ ＃</span><br>
    <br>
    <span class="st-singer">ヒトガタの最期は<br>
    悲劇とか喜劇とか 誰の《台本》にも居なくて<br>
    答えはボクらが描く</span><br>
    <span class="rd-singer">＃ 共にガンジス ＃</span><br>
    <br>
    <span class="nd-singer">宿した宿命を壊し、《解放》を願う<br>
    機械と琥珀と人の希望<br>
    たたかう天 Feel the Free...</span><br>
    <br>
    <span class="nd-singer">ボクらは知らない<br>
    この世界の記憶を<br>
    繰り返す滅びも</span><br>
    <br>
    <span class="st-singer">だけどきっとね<br>
    君は幸せになるために生まれた</span><br>
    <span class="nd-singer">全部無駄とかなんで言うんだ<br>
    ダメだよ</span><br>
    <br>
    <span class="st-singer">さよならごめんとか 違うじゃない<br>
    誓うから 君を誰にも渡さないって</span><br>
    <span class="nd-singer">ね、待って…</span><span class="st-singer">ね、待って…!!</span><br>
    <span class="rd-singer">なんで！ なんで！ なんで！ なんで!!</span><br>
    <br>
    <span class="st-singer">未来を描くとか 壊すとか<br>
    理想の果ての心界の《愛》は甘くて<br>
    狂おしいほどに泣けた</span><br>
    <span class="rd-singer">＃ 涙ガンジス ＃</span><br>
    <br>
    <span class="nd-singer">どうしても抜け出せない 鎖の《宿命》<br>
    アダムとマダムの星の匂い<br>
    かき消すように咆哮べ</span><br>
    <span class="st-singer">ふたり共に Feel the Free...</span><br>
    <br>
    <span class="rd-singer">Ah Ahn Ah Ah Ahn</span><br>
    </div>`,
    lyricsRightContent: `<div id="himn">
    <span class="rd-singer">One Two Three Four… Skip,<br>
    Count… Twenty Four.<br>
    This unending world, Break the Fate!</span><br>
    <br>
    <span class="rd-singer">Ah Ahn Ah Ah Ahn</span><br>
    <br>
    <span class="st-singer">Like a burning love, yearning for the red earth and the flame of life<br>
    Even if I take you away, losing even the stars</span><br>
    <span class="nd-singer">This tainted world and the sin we committed<br>
    Who will return time to the way it was when the leaves were born pure?</span><br>
    <br>
    <span class="rd-singer">Why sulk around? That’s no good!<br>
    Don’t let yourself sway and cry Night and Day<br>
    Wield My Light—don’t let it end! It’s fine<br>
    Belive my way, my way—I’ll pray for it</span><br>
    <br>
    <span class="st-singer">Trees, lilies, the sun, the earth, the primordial sea</span><br>
    <span class="nd-singer">- The Name of Sin -<br>
    Oh sky that looks downcast</span><br>
    <span class="st-singer">This dark, flightless world, it’s not over yet</span><br>
    <span class="nd-singer">Isn’t that right? Even if it’s painful</span><br>
    <br>
    <span class="st-singer">Rise up, the end is near<br>
    I swear, I won’t let anyone take you away<br>
    I’m sorry I made you cry</span><br>
    <span class="rd-singer"># Don’t make me cry~ #</span>
    <<br>
    <br>
    <span class="nd-singer">Dreaming of shaping or destroying the future<br>
    The “love” (nectar) of the deep heart at the end of ideals<br>
    It was sweet, bitter, and made me cry a little</span><br>
    <span class="rd-singer"># Tears of the Ganges #</span><br>
    <br>
    <span class="st-singer">I just can’t escape, bound by the “trap” of fate<br>
    The scent of the stars of Adam and Madame<br>
    Our love is Feel the Free…</span><br>
    <br>
    <span class="rd-singer">Ah Ahn Ah Ah Ahn</span><br>
    <br>
    <span class="nd-singer">Born bare, standing naked<br>
    Just standing there with leaves pasted on won’t change anything</span><br>
    <span class="nd-singer">So</span>, <span class="st-singer">shall we take a step forward? Shall we take what we can?<br>
    A little taboo breaking—humans do that, right?</span><br>
    <br>
    <span class="nd-singer">Oh, what did you do with the fruit of ego? Did you hide it?</span><br>
    <span class="st-singer">At least don’t lie to me, not me—Do not Cheat on me!<br>
    Desire? Hope? A lie—spill it all<br>
    Let me go!</span><br>
    <br>
    <span class="nd-singer">She messed up & burned out!<br>
    In the end, she was angry<br>
    What’s left of human greed in its decay?<br>
    I’m sorry, goodbye, Adam</span><br>
    <span class="rd-singer"># Don’t let me go~ #</span><br>
    <br>
    <span class="st-singer">The end of mankind—<br>
    A tragedy or comedy, something outside of anyone’s “script”<br>
    The answer is one we’ll create</span><br>
    <span class="rd-singer"># Together in the Ganges #</span><br>
    <br>
    <span class="nd-singer">Breaking the fate we were born into, wishing for “freedom,”<br>
    With machines, amber, and human hope<br>
    Battling in the heavens, Feel the Free…</span><br>
    <br>
    <span class="nd-singer">We don’t know—<br>
    The memories of this world<br>
    Or the repeated destruction</span><br>
    <br>
    <span class="st-singer">But, surely—<br>
    You were born to find happiness</span><br>
    <span class="nd-singer">Why say everything is pointless?<br>
    Don’t say that</span><br>
    <br>
    <span class="st-singer">Goodbye, sorry—no, that’s not right<br>
    I swear, I won’t let anyone take you away</span><br>
    <span class="nd-singer">Wait…</span> <span class="st-singer">please, wait…!!</span><br>
    <span class="rd-singer">Why? Why? Why? Why!!</span><br>
    <br>
    <span class="st-singer">Dreaming of shaping or destroying the future<br>
    The “love” (nectar) of the deep heart at the end of ideals<br>
    It was sweet to the point of madness, and it made me cry</span><br>
    <span class="rd-singer"># Tears of the Ganges #</span><br>
    <br>
    <span class="nd-singer">I just can’t escape, bound by the “trap” of fate<br>
    The scent of the stars of Adam and Madame<br>
    Roar to drown it all out</span><br>
    <span class="st-singer">Together, we Feel the Free…</span><br>
    <br>
    <span class="rd-singer">Ah Ahn Ah Ah Ahn</span><br>
    </div>`
  },

  {
    id: "song-aursyl",
    title: "るるちゃんの自殺配信",
    artist: "神聖かまってちゃん",
    youtubeUrl: "https://www.youtube.com/watch?v=hc0ZDaAZQT0",
    thumbnail: "feature/神聖かまってちゃん - るるちゃんの自殺配信 thumbnail.jpg",
    audioSrc: "feature/神聖かまってちゃん - るるちゃんの自殺配信 song.mp3",
    coverImg: "feature/神聖かまってちゃん - るるちゃんの自殺配信 cover.jpg",
    lyricsType: "JAP/ENG",
    authorLeft: "の子",
    authorRight: "Noko",
    lyricsLeftTitle: "るるちゃんの自殺配信",
    lyricsRightTitle: "Ruru's Suicide Show",
    lyricsLeftContent: `
    友達ができない帰り道<br>
    夕暮れは時々優しく<br>
    飛び交うデータの中で<br>
    街のBluetoothがあたしを壊した<br>
    <br>
    中央線に飛びこんで<br>
    傍迷惑な奴だと言われて<br>
    いつだってそこにいたんだ<br>
    少女はさっさと死んじゃった<br>
    FBIに聞いたって分かんない<br>
    彼女のメッセージ<br>
    いつだって叫んでたんだって<br>
    <br>
    チャネリングで夜空広げてく<br>
    野良猫とワルツを踊った<br>
    飛び交うデータの中で<br>
    街のBluetoothがあたしを壊した<br>
    <br>
    UFOに飛び乗って<br>
    反抗期じゃないのよママ聞いて<br>
    いつだって1人でいたんだ<br>
    少女はさっさと死んじゃった<br>
    FBIに聞いたって分かんない<br>
    彼女のメッセージ<br>
    いつだって叫んでたんだって<br>
    <br>
    受験勉強が終わったら<br>
    ネコと話せる魔女さ<br>
    自殺配信してお墓でも立てよう<br>
    この最低なきもち無くなる前に<br>
    <br>
    中央線に飛びこんで<br>
    傍迷惑な奴だと言われて<br>
    いつだってそこにいたんだ<br>
    少女はさっさと死んじゃった<br>
    屋根の上で猫たちと<br>
    頭が悪い人間見下して<br>
    いつだって叫んでたんだって<br>
    <br>
    受験勉強が終わったら<br>
    ネコと話せる魔女さ<br>
    自殺配信してお墓でも立てよう<br>
    この最低なきもち無くなる前に<br>
    <br>
    中央線に飛びこんで<br>
    傍迷惑な奴だと言われて<br>
    いつだってそこにいたんだ<br>
    少女はさっさと死んじゃった<br>
    FBIに聞いたって分かんない<br>
    彼女のメッセージ<br>
    いつだって叫んでたんだって<br>`,
    lyricsRightContent: `
    When i go back to My home, i don't make Friends<br>
    Sometimes the sunset is nice with me<br>
    With the information flying around me<br>
    The city Bluetooth already destroyed me completely<br>
    <br>
    Jumpin' on the Chuo line<br>
    Being called an inconvenience<br>
    She was ever in there<br>
    The girl came foward and died<br>
    Even if You ask the FBI<br>
    You Will never Discover her message<br>
    Even if she yelled it all time<br>
    <br>
    Channeling to extend the night sky<br>
    I already danced a vals with a homeless cat<br>
    With the information flying aruond me<br>
    The city Bluetooth already destroyed me<br>
    <br>
    Jumpin' into a UFO<br>
    Please mama listen, it's not a phase<br>
    She was ever in there<br>
    The girl came foward and died<br>
    Even if You ask the FBI<br>
    You Will never Discover her message<br>
    Even if she yelled it all time<br>
    <br>
    When i finish studing for My exams<br>
    I Will be a witch who talks with Cats<br>
    I'll Make a livestream and dig My own grave<br>
    Before this terrible feeling just dissapears<br>
    <br>
    Jumpin' on the Chuo line<br>
    Being called an inconvenience<br>
    She was ever in there<br>
    The girl came foward and died<br>
    Looking down the stupid humans<br>
    And getting all the Cats on the ceiling<br>
    She always was screaming<br>
    <br>
    When i finish studing for My exams<br>
    I Will be a witch who talks with Cats<br>
    I'll Make a livestream and dig My own grave<br>
    Before this terrible feeling just dissapears<br>
    <br>
    Jumpin' on the Chuo line<br>
    Being called an inconvenience<br>
    She was ever in there<br>
    The girl came foward and died<br>
    Even if You ask the FBI<br>
    You Will never Discover her message<br>
    Even if she yelled it all time<br>`
  },

  {
    id: "song-lysrua",
    title: "言霊",
    artist: "V.W.P",
    youtubeUrl: "https://www.youtube.com/watch?v=_30dknX-UWE",
    thumbnail: "feature/V.W.P - 言霊 thumbnail.jpg",
    audioSrc: "feature/V.W.P - 言霊 song.mp3",
    coverImg: "feature/V.W.P - 言霊 cover.jpg",
    lyricsType: "JAP/ENG",
    authorLeft: "カンザキイオリ",
    authorRight: "Kanzaki Iori",
    lyricsLeftTitle: "言霊",
    lyricsRightTitle: "Spirit Of Words",
    lyricsLeftContent: `<div id="vwp">
    <span class="all">No one can destroy this feeling.<br>
    No one can destroy this feeling.<br>
    No one can destroy this feeling.<br>
    We are here.</span><br>
    <br>
    <span class="kaf">温もりを忘れた世界<br>
    立ち並ぶ廃墟に<br>
    誰かの言葉を探してる</span><br>
    <br>
    <span class="rim">雨模様に拐かされて<br>
    遠ざかる幸福を懐かしむ</span><br>
    <br>
    <span class="koko">これは現実だ<br>
    認めたくはないか？<br>
    理想論を信じたくはないか？<br>
    愛はここにあるって<br>
    信じたくはないか？<br>
    私達は偽物だ</span><br>
    <br>
    <span class="all">だけど想いはここにあって<br>
    あなたを探していて<br>
    これが愛という名前になるなら<br>
    聞き覚えのあるその言葉に縋りたい<br>
    この世界には愛がある<br>
    そうでしょう？</span><br>
    <br>
    <span class="haru">永遠を欲しがる世界<br>
    何もないはずなのに<br>
    誰かの言葉が流れ出す<br>
    退屈ばかりに飲み込まれて<br>
    霞ゆく将来に怯えてる</span><br>
    <br>
    <span class="sekai">そこに咲く魔法で<br>
    幻想は終わらないと<br>
    信じたくはないか？<br>
    自分の気持ちで叫びたくないか？<br>
    私達は偽物だ</span><br>
    <br>
    <span class="all">だけど願いはここにあって<br>
    涙が溢れ出して<br>
    これが愛という形になるなら<br>
    偽物の私にも武器にはなるか？<br>
    世界は愛で救えるか？</span><br>
    <br>
    <span class="rim">が</span><span class="koko">む</span><span class="rim">し</span><span class="koko">ゃ</span><span class="rim">ら</span><span class="koko">に</span><span class="rim">熱</span><span class="koko">を</span><span class="rim">注</span><span class="koko">い</span><span class="rim">で</span><br>
    <span class="rim">言</span><span class="koko">い</span><span class="rim">た</span><span class="koko">い</span><span class="rim">こ</span><span class="koko">と</span><span class="rim">を</span><span class="koko">比</span><span class="rim">べ</span><span class="koko">あ</span><span class="rim">っ</span><span class="koko">て</span><br>
    <span class="rim">仮</span><span class="koko">想</span><span class="rim">世</span><span class="koko">界</span><span class="rim">で</span><span class="koko">物</span><span class="rim">語</span><span class="koko">を</span><span class="rim">紡</span><span class="koko">ぐ</span><br>
    <br>
    <span class="haru">私</span><span class="sekai">達</span><span class="haru">は</span><span class="sekai">偽</span><span class="haru">物</span><span class="sekai">か</span><span class="haru">も</span><span class="sekai">し</span><span class="haru">れ</span><span class="sekai">な</span><span class="haru">い</span><span class="sekai">け</span><span class="haru">れ</span><span class="sekai">ど</span><br>
    <span class="haru">無</span><span class="sekai">い</span><span class="haru">鼓</span><span class="sekai">動</span><span class="haru">が</span><span class="sekai">止</span><span class="haru">ま</span><span class="sekai">ら</span><span class="haru">な</span><span class="sekai">く</span><span class="haru">て</span><br>
    <br>
    <span class="kaf">想いはここにあって<br>
    あなたを探していて<br>
    これが愛という名前になるなら</span><br>
    <br>
    <span class="all">悲しみに飲まれて<br>
    どこにも行けなくて<br>
    それでも言葉は届くなら<br>
    偽物でもいいと歌うよ</span><br>
    <br>
    <span class="kaf">愛よ<br>
    言霊となって世界を救って</span><br>
    </div>`,
    lyricsRightContent: `<div id="vwp">
        <span class="all">No one can destroy this feeling.<br>
    No one can destroy this feeling.<br>
    No one can destroy this feeling.<br>
    We are here.</span><br>
    <br>
    <span class="kaf">In a world that has forgotten warmth<br>
    I go searching in the ruins<br>
    For somebody’s words</span><br>
    <br>
    <span class="rim">Spirited away by threatening skies,<br>
    Warmed by a distant happiness</span><br>
    <br>
    <span class="koko">You don’t want to admit<br>
    This is the real thing?<br>
    You don’t want to believe in the ideal?<br>
    You don’t want to believe<br>
    Love lies here?<br>
    We’re not the real thing</span><br>
    <br>
    <span class="all">But my feelings are here<br>
    I’ll search for you<br>
    And if this is love<br>
    Then I want to cling to those familiar words<br>
    There is love in this world<br>
    Don’t you agree?</span><br>
    <br>
    <span class="haru">In an empty world<br>
    That yearns for eternity<br>
    Someone’s words begin to rain down on me<br>
    There I am, consumed with ennui<br>
    Scared of the future</span><br>
    <br>
    <span class="sekai">Magic blossoms here<br>
    Don’t you want to<br>
    Believe this fantasy never dies?<br>
    Don’t you want to scream out your feelings?<br>
    I guess we’re not the real thing</span><br>
    <br>
    <span class="all">But what I want is here<br>
    The tears come cascading down<br>
    And if this is what love looks like<br>
    Can I, not quite real, arm myself with it?<br>
    Can love save the world?</span><br>
    <br>
    <span class="rim">Comparing</span> <span class="koko">our</span> <span class="rim">words</span><br>
    <span class="rim">In</span> <span class="koko">a</span> <span class="rim">feverish</span> <span class="koko">effort</span><br>
    <span class="rim">To</span> <span class="koko">weave</span> <span class="rim">our</span> <span class="koko">story</span> <span class="rim">in</span> <span class="koko">a</span> <span class="rim">virtual</span> <span class="koko">world</span><br>
    <br>
    <span class="haru">Though</span> <span class="sekai">we</span> <span class="haru">might</span> <span class="sekai">not</span> <span class="haru">be</span> <span class="sekai">the</span> <span class="haru">real</span> <span class="sekai">thing</span><br>
    <span class="haru">A</span> <span class="sekai">heartless-beat</span> <span class="haru">races</span> <span class="sekai">on</span><br>
    <br>
    <span class="kaf">My feelings are here<br>
    I’ll search for you<br>
    And if this is love</span><br>
    <br>
    <span class="all">I’m consumed with sadness,<br>
    Unable to move<br>
    But if my words can still arrive<br>
    Then real or not, I’ll sing them!</span><br>
    <br>
    <span class="kaf">Love.<br>
    Let the words take on new meaning. Save the world.</span><br>
    </div>`
  },

  {
    id: "song-dominos",
    title: "言霊",
    artist: "V.W.P",
    youtubeUrl: "https://www.youtube.com/watch?v=rc7u6mek3rQ",
    thumbnail: "feature/Ariabl_eyeS - 嘆きのラデュー thumbnail.jpg",
    audioSrc: "feature/Ariabl_eyeS - 嘆きのラデュー song.mp3",
    coverImg: "feature/Ariabl_eyeS - 嘆きのラデュー cover.jpg",
    lyricsType: "JAP/FR",
    authorLeft: "リゼ",
    authorRight: "Lyse",
    lyricsLeftTitle: "嘆きのラデュー",
    lyricsRightTitle: "Lamentations de L'adieu",
    lyricsLeftContent: `<div id="aria">
    <span class="st-singer">淀んだ闇を抜ければ<br>
    優しい日差しが降り注ぐ<br>
    交錯してく感情<br>
    高鳴る想い抱えたまま</span><br>
    <br>
    <span class="nd-singer">擦れ違う人波に<br>
    笑う者はもういない</span><br>
    <span class="st-singer">逸る気持ち抑えれずに駆ける伝えたくて</span><br>
    <br>
    <span class="nd-singer">満たしたワイン抱えて<br>
    光溢れる街抜ければ<br>
    闇に抱かれた森<br>
    早く貴女に届けたくて</span><br>
    <br>
    <span class="st-singer">繋ぐ秘密の扉<br>
    ここにあるはずなのに</span><br>
    <span class="nd-singer">消えていると気付く<br>
    貴女の香りが</span><br>
    <br>
    <span class="st-singer">走っても 走っても<br>
    辿り着けない 標に<br>
    蠢く 焦燥<br>
    貴女は見えなくて</span><br>
    <br>
    <span class="nd-singer">溢れ出す 涙さえ<br>
    色褪せてゆく程に<br>
    去り際の言葉を<br>
    全てを飲み込む<br>
    繰り返して</span><br>
    <br>
    <span class="st-singer">不意に落ちた手紙は<br>
    別れの言葉<br>
    行き場のない想い抑えれずに<br>
    宛てもなく駆け抜けた<br>
    咎人は闇の中</span><br>
    <br>
    ♪<br>
    <br>
    <span class="st-singer">逃げられぬ運命なのよ</span><br>
    <span class="nd-singer">貴方は太陽浴びて<br>
    人として生きるのよ</span><br>
    <span class="st-singer">愛して 愛されて<br>
    幸せを掴むのよ</span><br>
    <span class="st-singer">貴</span><span class="nd-singer">方</span><span class="st-singer">と</span><span class="nd-singer">私</span><span class="st-singer">の</span><span class="nd-singer">永</span><span class="st-singer">遠</span><span class="nd-singer">の</span><span class="st-singer">約</span><span class="nd-singer">束</span><span class="st-singer">ね</span><br>
    <span class="st-singer">さ</span><span class="nd-singer">よ</span><span class="st-singer">う</span><span class="nd-singer">な</span><span class="st-singer">ら</span><br>
    </div>`,
    lyricsRightContent: `<div id="aria">
    <span class="st-singer">Alors que je quitte l'obscurité stagnante,<br>
    une douce lumière du soleil m'inonde.<br>
    Mes émotions s'entremêlent.<br>
    Mon cœur palpite.</span><br>
    <br>
    <span class="nd-singer">Tandis que la foule défile,<br>
    plus personne ne rit.</span><br>
    <span class="st-singer">Incapable de contenir mon excitation, je cours, voulant te transmettre ceci.</span><br>
    <br>
    <span class="nd-singer">Serrant une bouteille de vin pleine.<br>
    Alors que je quitte la ville inondée de lumière,<br>
    je pénètre dans une forêt plongée dans les ténèbres.<br>
    Je veux te rejoindre au plus vite.</span><br>
    <br>
    <span class="st-singer">La porte secrète qui nous relie.<br>
    Elle devrait être là,</span><br>
    <span class="nd-singer">mais je réalise qu'elle a disparu.<br>
    Ton parfum.</span><br>
    <br>
    <span class="st-singer">J'ai beau courir,<br>
    je n'arrive pas à atteindre ce point de repère.<br>
    L'angoisse me gagne.<br>
    Je ne te vois pas.</span><br>
    <br>
    <span class="nd-singer">Même mes larmes débordantes<br>
    Finissent par s'effacer.<br>
    Les mots que tu as prononcés en partant<br>
    Tout m'a englouti<br>
    Sans répit.</span><br>
    <br>
    <span class="nd-singer">La lettre tombée à l'improviste<br>
    Des mots d'adieu<br>
    Incapable de contenir mes sentiments n'ayant nulle part où aller<br>
    J'ai couru sans but<br>
    Le pécheur est dans les ténèbres</span><br>
    <br>
    ♪<br>
    <br>
    <span class="st-singer">C'est un destin inéluctable</span><br>
    <span class="nd-singer">Vis sous la lumière du soleil<br>
    Vis comme un être humain</span><br>
    <span class="st-singer">Aime et sois aimé<br>
    Saisis le bonheur</span><br>
    <span class="st-singer">C'est</span> <span class="nd-singer">une</span> <span class="st-singer">promesse</span> <span class="nd-singer">éternelle</span> <span class="st-singer">entre</span> <span class="nd-singer">nous</span><br>
    <span class="st-singer">Au</span> <span class="nd-singer">revoir</span><br>
    </div>`
  }

];

document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `...`;
  document.head.appendChild(style);

  // then render
  renderSongs();
});