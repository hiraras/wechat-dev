const wordList = [
  { "spell": "a", "pingjia": "あ", "pianjia": "ア" },
  { "spell": "i", "pingjia": "い", "pianjia": "イ" },
  { "spell": "u", "pingjia": "う", "pianjia": "ウ" },
  { "spell": "e", "pingjia": "え", "pianjia": "エ" },
  { "spell": "o", "pingjia": "お", "pianjia": "オ" },
  { "spell": "ka", "pingjia": "か", "pianjia": "カ" },
  { "spell": "ki", "pingjia": "き", "pianjia": "キ" },
  { "spell": "ku", "pingjia": "く", "pianjia": "ク" },
  { "spell": "ke", "pingjia": "け", "pianjia": "ケ" },
  { "spell": "ko", "pingjia": "こ", "pianjia": "コ" },
  { "spell": "sa", "pingjia": "さ", "pianjia": "サ" },
  { "spell": "shi", "pingjia": "し", "pianjia": "シ" },
  { "spell": "su", "pingjia": "す", "pianjia": "ス" },
  { "spell": "se", "pingjia": "せ", "pianjia": "セ" },
  { "spell": "so", "pingjia": "そ", "pianjia": "ソ" },
  { "spell": "ta", "pingjia": "た", "pianjia": "タ" },
  { "spell": "chi", "pingjia": "ち", "pianjia": "チ" },
  { "spell": "tsu", "pingjia": "つ", "pianjia": "ツ" },
  { "spell": "te", "pingjia": "て", "pianjia": "テ" },
  { "spell": "to", "pingjia": "と", "pianjia": "ト" },
  { "spell": "na", "pingjia": "な", "pianjia": "ナ" },
  { "spell": "ni", "pingjia": "に", "pianjia": "ニ" },
  { "spell": "nu", "pingjia": "ぬ", "pianjia": "ヌ" },
  { "spell": "ne", "pingjia": "ね", "pianjia": "ネ" },
  { "spell": "no", "pingjia": "の", "pianjia": "ノ" },
  { "spell": "ha", "pingjia": "は", "pianjia": "ハ" },
  { "spell": "hi", "pingjia": "ひ", "pianjia": "ヒ" },
  { "spell": "fu", "pingjia": "ふ", "pianjia": "フ" },
  { "spell": "he", "pingjia": "へ", "pianjia": "ヘ" },
  { "spell": "ho", "pingjia": "ほ", "pianjia": "ホ" },
  { "spell": "ma", "pingjia": "ま", "pianjia": "マ" },
  { "spell": "mi", "pingjia": "み", "pianjia": "ミ" },
  { "spell": "mu", "pingjia": "む", "pianjia": "ム" },
  { "spell": "me", "pingjia": "め", "pianjia": "メ" },
  { "spell": "mo", "pingjia": "も", "pianjia": "モ" },
  { "spell": "ya", "pingjia": "や", "pianjia": "ヤ" },
  { "spell": "yu", "pingjia": "ゆ", "pianjia": "ユ" },
  { "spell": "yo", "pingjia": "よ", "pianjia": "ヨ" },
  { "spell": "ra", "pingjia": "ら", "pianjia": "ラ" },
  { "spell": "ri", "pingjia": "り", "pianjia": "リ" },
  { "spell": "ru", "pingjia": "る", "pianjia": "ル" },
  { "spell": "re", "pingjia": "れ", "pianjia": "レ" },
  { "spell": "ro", "pingjia": "ろ", "pianjia": "ロ" },
  { "spell": "wa", "pingjia": "わ", "pianjia": "ワ" },
  { "spell": "wo", "pingjia": "を", "pianjia": "ヲ" },
  { "spell": "nn", "pingjia": "ん", "pianjia": "ン" },
  { "spell": "ba", "pingjia": "ば", "pianjia": "バ" },
  { "spell": "bi", "pingjia": "び", "pianjia": "ビ" },
  { "spell": "bu", "pingjia": "ぶ", "pianjia": "ブ" },
  { "spell": "be", "pingjia": "べ", "pianjia": "ベ" },
  { "spell": "bo", "pingjia": "ぼ", "pianjia": "ボ" },
  { "spell": "ga", "pingjia": "が", "pianjia": "ガ" },
  { "spell": "gi", "pingjia": "ぎ", "pianjia": "ギ" },
  { "spell": "gu", "pingjia": "ぐ", "pianjia": "グ" },
  { "spell": "ge", "pingjia": "げ", "pianjia": "ゲ" },
  { "spell": "go", "pingjia": "ご", "pianjia": "ゴ" },
  { "spell": "za", "pingjia": "ざ", "pianjia": "ザ" },
  { "spell": "zi", "pingjia": "じ", "pianjia": "ジ" },
  { "spell": "zu", "pingjia": "ず", "pianjia": "ズ" },
  { "spell": "ze", "pingjia": "ぜ", "pianjia": "ゼ" },
  { "spell": "zo", "pingjia": "ぞ", "pianjia": "ゾ" },
  { "spell": "da", "pingjia": "だ", "pianjia": "ダ" },
  { "spell": "di", "pingjia": "ぢ", "pianjia": "ヂ" },
  { "spell": "du", "pingjia": "づ", "pianjia": "ヅ" },
  { "spell": "de", "pingjia": "で", "pianjia": "デ" },
  { "spell": "do", "pingjia": "ど", "pianjia": "ド" },
  { "spell": "pa", "pingjia": "ぱ", "pianjia": "パ" },
  { "spell": "pi", "pingjia": "ぴ", "pianjia": "ピ" },
  { "spell": "pu", "pingjia": "ぷ", "pianjia": "プ" },
  { "spell": "pe", "pingjia": "ぺ", "pianjia": "ペ" },
  { "spell": "po", "pingjia": "ぽ", "pianjia": "ポ" },
  { "spell": "kya", "pingjia": "きゃ", "pianjia": "キャ" },
  { "spell": "kyu", "pingjia": "きゅ", "pianjia": "キュ" },
  { "spell": "kyo", "pingjia": "きょ", "pianjia": "キョ" },
  { "spell": "sya", "pingjia": "しゃ", "pianjia": "シャ" },
  { "spell": "syu", "pingjia": "しゅ", "pianjia": "シュ" },
  { "spell": "syo", "pingjia": "しょ", "pianjia": "ショ" },
  { "spell": "cha", "pingjia": "ちゃ", "pianjia": "チャ" },
  { "spell": "chu", "pingjia": "ちゅ", "pianjia": "チュ" },
  { "spell": "cho", "pingjia": "ちょ", "pianjia": "チョ" },
  { "spell": "nya", "pingjia": "にゃ", "pianjia": "ニャ" },
  { "spell": "nyu", "pingjia": "にゅ", "pianjia": "ニュ" },
  { "spell": "nyo", "pingjia": "にょ", "pianjia": "ニョ" },
  { "spell": "hya", "pingjia": "ひゃ", "pianjia": "ヒャ" },
  { "spell": "hyu", "pingjia": "ひゅ", "pianjia": "ヒュ" },
  { "spell": "hyo", "pingjia": "ひょ", "pianjia": "ヒョ" },
  { "spell": "mya", "pingjia": "みゃ", "pianjia": "ミャ" },
  { "spell": "myu", "pingjia": "みゅ", "pianjia": "ミュ" },
  { "spell": "myo", "pingjia": "みょ", "pianjia": "ミョ" },
  { "spell": "rya", "pingjia": "りゃ", "pianjia": "リャ" },
  { "spell": "ryu", "pingjia": "りゅ", "pianjia": "リュ" },
  { "spell": "ryo", "pingjia": "りょ", "pianjia": "リョ" },
  { "spell": "bya", "pingjia": "びゃ", "pianjia": "ビャ" },
  { "spell": "byu", "pingjia": "びゅ", "pianjia": "ビュ" },
  { "spell": "byo", "pingjia": "びょ", "pianjia": "ビョ" },
  { "spell": "gya", "pingjia": "ぎゃ", "pianjia": "ギャ" },
  { "spell": "gyu", "pingjia": "ぎゅ", "pianjia": "ギュ" },
  { "spell": "gyo", "pingjia": "ぎょ", "pianjia": "ギョ" },
  { "spell": "zya", "pingjia": "じゃ", "pianjia": "ジャ" },
  { "spell": "zyu", "pingjia": "じゅ", "pianjia": "ジュ" },
  { "spell": "zyo", "pingjia": "じょ", "pianjia": "ジョ" },
  { "spell": "pya", "pingjia": "ぴゃ", "pianjia": "ピャ" },
  { "spell": "pyu", "pingjia": "ぴゅ", "pianjia": "ピュ" },
  { "spell": "pyo", "pingjia": "ぴょ", "pianjia": "ピョ" }
];

const pingjiaList = [
  "あ", "い", "う", "え", "お",
  "か", "き", "く", "け", "こ",
  "さ", "し", "す", "せ", "そ",
  "た", "ち", "つ", "て", "と",
  "な", "に", "ぬ", "ね", "の",
  "は", "ひ", "ふ", "へ", "ほ",
  "ま", "み", "む", "め", "も",
  "や", "ゆ", "よ",
  "ら", "り", "る", "れ", "ろ",
  "わ", "を", "ん",
  "ば", "び", "ぶ", "べ", "ぼ",
  "が", "ぎ", "ぐ", "げ", "ご",
  "ざ", "じ", "ず", "ぜ", "ぞ",
  "だ", "ぢ", "づ", "で", "ど",
  "ぱ", "ぴ", "ぷ", "ぺ", "ぽ",
  "きゃ", "きゅ", "きょ",
  "しゃ", "しゅ", "しょ",
  "ちゃ", "ちゅ", "ちょ",
  "にゃ", "にゅ", "にょ",
  "ひゃ", "ひゅ", "ひょ",
  "みゃ", "みゅ", "みょ",
  "りゃ", "りゅ", "りょ",
  "びゃ", "びゅ", "びょ",
  "ぎゃ", "ぎゅ", "ぎょ",
  "じゃ", "じゅ", "じょ",
  "ぴゃ", "ぴゅ", "ぴょ"
];

const pianjiaList = [
  "ア", "イ", "ウ", "エ", "オ",
  "カ", "キ", "ク", "ケ", "コ",
  "サ", "シ", "ス", "セ", "ソ",
  "タ", "チ", "ツ", "テ", "ト",
  "ナ", "ニ", "ヌ", "ネ", "ノ",
  "ハ", "ヒ", "フ", "ヘ", "ホ",
  "マ", "ミ", "ム", "メ", "モ",
  "ヤ", "ユ", "ヨ",
  "ラ", "リ", "ル", "レ", "ロ",
  "ワ", "ヲ", "ン",
  "バ", "ビ", "ブ", "ベ", "ボ",
  "ガ", "ギ", "グ", "ゲ", "ゴ",
  "ザ", "ジ", "ズ", "ゼ", "ゾ",
  "ダ", "ヂ", "ヅ", "デ", "ド",
  "パ", "ピ", "プ", "ペ", "ポ",
  "キャ", "キュ", "キョ",
  "シャ", "シュ", "ショ",
  "チャ", "チュ", "チョ",
  "ニャ", "ニュ", "ニョ",
  "ヒャ", "ヒュ", "ヒョ",
  "ミャ", "ミュ", "ミョ",
  "リャ", "リュ", "リョ",
  "ビャ", "ビュ", "ビョ",
  "ギャ", "ギュ", "ギョ",
  "ジャ", "ジュ", "ジョ",
  "ピャ", "ピュ", "ピョ"
];

const spellList = [
  "a", "i", "u", "e", "o",
  "ka", "ki", "ku", "ke", "ko",
  "sa", "shi", "su", "se", "so",
  "ta", "chi", "tsu", "te", "to",
  "na", "ni", "nu", "ne", "no",
  "ha", "hi", "fu", "he", "ho",
  "ma", "mi", "mu", "me", "mo",
  "ya", "yu", "yo",
  "ra", "ri", "ru", "re", "ro",
  "wa", "wo", "nn",
  "ba", "bi", "bu", "be", "bo",
  "ga", "gi", "gu", "ge", "go",
  "za", "zi", "zu", "ze", "zo",
  "da", "di", "du", "de", "do",
  "pa", "pi", "pu", "pe", "po",
  "kya", "kyu", "kyo",
  "sya", "syu", "syo",
  "cha", "chu", "cho",
  "nya", "nyu", "nyo",
  "hya", "hyu", "hyo",
  "mya", "myu", "myo",
  "rya", "ryu", "ryo",
  "bya", "byu", "byo",
  "gya", "gyu", "gyo",
  "zya", "zyu", "zyo",
  "pya", "pyu", "pyo"
];

const wordListLengthArr = [46, 71, 104];
const columnLengthArr = [5, 5, 5, 5, 5, 5, 5, 3, 5, 3, 5, 5, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
const colorList = [
  "#000000","#00003f","#00007f","#0000bf","#0000ff","#003f00","#003f3f","#003f7f","#003fbf",
  "#003fff","#007f00","#007f3f","#007f7f","#007fbf","#007fff","#00bf00","#00bf3f","#00bf7f",
  "#00bfbf","#00bfff","#00ff00","#00ff3f","#00ff7f","#00ffbf","#00ffff","#3f0000","#3f003f",
  "#3f007f","#3f00bf","#3f00ff","#3f3f00","#3f3f3f","#3f3f7f","#3f3fbf","#3f3fff","#3f7f00",
  "#3f7f3f","#3f7f7f","#3f7fbf","#3f7fff","#3fbf00","#3fbf3f","#3fbf7f","#3fbfbf","#3fbfff",
  "#3fff00","#3fff3f","#3fff7f","#3fffbf","#3fffff","#7f0000","#7f003f","#7f007f","#7f00bf",
  "#7f00ff","#7f3f00","#7f3f3f","#7f3f7f","#7f3fbf","#7f3fff","#7f7f00","#7f7f3f","#7f7f7f",
  "#7f7fbf","#7f7fff","#7fbf00","#7fbf3f","#7fbf7f","#7fbfbf","#7fbfff","#7fff00","#7fff3f",
  "#7fff7f","#7fffbf","#7fffff","#bf0000","#bf003f","#bf007f","#bf00bf","#bf00ff","#bf3f00",
  "#bf3f3f","#bf3f7f","#bf3fbf","#bf3fff","#bf7f00","#bf7f3f","#bf7f7f","#bf7fbf","#bf7fff",
  "#bfbf00","#bfbf3f","#bfbf7f","#bfbfbf","#bfbfff","#bfff00","#bfff3f","#bfff7f","#bfffbf",
  "#bfffff","#ff0000","#ff003f","#ff007f","#ff00bf","#ff00ff","#ff3f00","#ff3f3f","#ff3f7f",
  "#ff3fbf","#ff3fff","#ff7f00","#ff7f3f","#ff7f7f","#ff7fbf","#ff7fff","#ffbf00","#ffbf3f",
  "#ffbf7f","#ffbfbf","#ffbfff","#ffff00","#ffff3f","#ffff7f","#ffffbf","#ffffff"
];

const summaryData = [{
  id: 0,
  name: '动词',
  categoryList: [{
    id: 0,
    name: '1.动词的种类',
    content: `
      I类动词（五段动词）
      基本型以う段假名结尾
      II类动词（一段动词）
      基本型以る结尾，且前面为い段或え段假名
      有些虽然倒数第二个假名为い段、え段，但是属于汉字的一部分所以是I类动词
      例如：帰る->かいる　入る->はいる　走る->はしる　知る->しる　切る->きる但这并不绝对,例如見る->みる、出る->でる为II类动词，需要平日积累
      III类动词
      分为ｶ变动词和ｻ变动词
      ｶ变动词只有一个くる
      ｻ变动词
      只有一个动词词尾：する（勉強する）
    `
  }, {
    id: 1,
    name: '2.动词的活用',
    content: `
      2.动词的活用
      基本形（辞典形）
      动词的基本形即动词的原始形态，因字典中多以该形式出现，因而又称为“辞典形”

      否定形（未然形）
      动词的否定形后接助动词ない，表示否定。具体变化如下：
      I类动词
      词尾为不是う段的，变成同行あ段假名，并加ない（行く->行かない）
      词尾为う段的，变成わ加ない（買う->買わない）
      II类动词
      去掉词尾る加ない
      III类动词
      ｶ变动词：くる变成こ加ない　来ない->こない
      ｻ变动词：する变成し加ない　電話する->電話しない

      连用形（て形、ます形、た形）
      动词的连用形即动词后接用言①时所采用的形式。动词连用形的接续方式因动词词性和后接助动词而有所区别。
      连用形一
      后接动词、形容词和ます等助动词、助词
      I类动词
      将词尾的う段假名变成所在行的い段假名(買う->買い、遊ぶ->遊び、書く->書き)，例如：書き（書く）始める
      II类动词
      去掉词尾る（見る->見）例如：起き（起きる）難い
      III类动词
      ｶ变动词：くる变成き（来る->き）例如：来（くる）ました
      ｻ变动词：する变成し（電話する->電話し）温暖化し（温暖化する）つつある
      连用形二
      后接た、て或是以た、て等开头的助动词、助词
      I类动词(参考て形的表格)
      词尾为く/ぐ，都变为い，但是く后接て，ぐ后接で，例如：書く->書いて、書いた、泳ぐ->泳いで、泳いだ
      词尾为う/つ/る，都变为っ（小写），后接て、た，例如：買う->買って、買った
      词尾为ぬ/ぶ/む，都变为ん，后续助动词或助词的第一个假名要变浊音，例如：死ぬ->死んで、死んだ、
      词尾为す，变成し，例如：話す->話して、話した
      特例：行く->行った、行って
      II类动词
      去掉词尾る，例如：見る->見た、みて
      III类动词
      ｶ变动词：くる变き，例如：来る->来て、来た
      ｻ变动词：する变し，例如：勉強する->勉強して、勉強した

      终止形
      动词的终止形与基本形相同，用于结句，亦可后接助词、助动词。

      连体形
      动词的连体形与基本形相同，后接体验作定语，亦可后接助词、助动词。

      假定形
      动词的假定性后接接续助词ば，表示条件或假设。接续ば时，只要将词尾的う段假名变成所在行的え段假名即可
      I类动词
      買う->買えば、見る->見れば、知る->知れば
      II类动词
      食べる->食べれば、感じる->感じれば
      III类动词
      ｶ变动词：来る->来れば
      ｻ变动词：勉強する->勉強すれば

      命令形
      动词的命令形表示说话人对他人的命令，一般用于上级对下级，长辈对晚辈
      I类动词
      将词尾的う段假名变成所在行的え段假名，例如：買う->買え、遊ぶ->遊べ
      II类动词
      将词尾る变成ろ或よ，例如：見る->見ろ、焼ける->焼けろ
      III类动词
      ｶ变动词：来る->来い|来よ
      ｻ变动词：する变成しろ|せよ，例如：勉強する->勉強しろ|勉強せよ

      意志形
      动词意志形后接助动词う或よう，表示说话人的意志、建议、推测。
      I类动词
      将词尾的う段假名变成所在行的お段假名加う，例如：買う->買おう、遊ぶ->遊ぼう
      II类动词
      去掉词尾る加よう，見る->見よう
      III类动词
      ｶ变动词：来る->来よう
      ｻ变动词：する变成し加よう，例如：勉強する->勉強しよう
    `
  }, {
    id: 2,
    name: '3.动词的时态',
    content: `
      日语的时态通常分为非过去时和过去时。
      非过去时：表示事物现在的性质状态，或是将来要发生的动作，或是恒古不变、反复发生的动作
      过去时：表示过去发生或已经完成的动作
    `
  }, {
    id: 3,
    name: '4.动词的语体',
    content: `
      动词的敬体
      动词的敬体肯定形式是由动词连用形一+表示郑重的后缀"ます"构成的。而"ます"也可以进行活用变化。其否定形是"ません"，过去形是"ました"。
              原型  肯定形     否定形     过去肯定形  过去否定形
      一类动词：書く->書きます->書きません->書きました->書きませんでした
      二类动词：見る->見ます  ->見ません  ->見ました ->見ませんでした
      ｶ变动词： 来る->来ます  ->来ません  ->来ました ->来ませんでした
      ｻ变动词： する->します  ->しません  ->しません ->しませんでした
      
      动词的简体
      动词的简体肯定形式是其基本型，过去时由动词连用形二+表示过去的助动词"た"构成。简体否定形式由否定形+表示否定的助动词"ない"构成。
            　　原型  肯定形   否定形    过去肯定形  过去否定形
      一类动词：書く->　書く　->書かない->　書いた　->書かなかった
      二类动词：見る->　見る　->見ない  ->　見た　 ->見なかった
      ｶ变动词： 来る->　来る　->来ない  ->　来た　 ->来なかった
      ｻ变动词： する->　する　->しない  ->　した　 ->しなかった
    `
  }, {
    id: 4,
    name: '5.动词的体',
    content: `
      体是一个语法范畴，指通过词形的变化表示动作、变化、状态。日语的体由完整体和持续体构成。完整体表示完整的动作、变化、状态，
      持续体表示：1️⃣动作正在进行；2️⃣状态(动作结果的持续)；3️⃣习惯、反复以及长期进行的动作。
    `
  }, {
    id: 5,
    name: '6.动词的态',
    content: `
      动词的能动态(可能形)
      动词的能动态表示某人具有某种能力，或表示在某种条件或状态下行为动作的可能性，相当于汉语的"能···，会···，可以···"。
      他动词变成能动态后，与动词搭配使用的"を"大多变为"が"。
      
      一类动词：将词尾的う段假名变成所在行的え段假名+る
      買う->買える
      遊ぶ->遊べる
      二类动词：去掉词尾る＋られる
      見る->見られる
      ｶ变动词：くる变成こ＋られる
      来る->来られる
      ｻ变动词：する变成できる
      する->できる
      勉強する->勉強できる
      
      动词的被动态(xxx被怎么样)
      当描述某一动作、行为时，若不是以施事者为主角，而是以承受者为主角进行描述，则应采用动词的被动态。
      一类动词：将词尾的う段假名变成所在行的あ段假名+れる
      買う->買われる
      遊ぶ->遊ばれる
      二类动词：去掉词尾る＋られる
      見る->見られる
      ｶ变动词：くる变成こ＋られる
      来る->来られる
      ｻ变动词：する变成される
      する->される
      勉強する->勉強される
      根据动作的实施者可将被动句分为：直接被动句、间接被动句、所有者被动句和使役被动句。
      直接被动句：使用他动词，描述客观事实，可以还原为主动句，符合转换规律；
      间接被动句：动词并没有直接作用于叙述的焦点，而是句中的主语从动作施事者那里遭受到不利的影响；
      所有者被动句：其中的客体多为动作主体的一部分，或是主体的所有物；
      使役被动句：由动词的使动态再变被动态所构成。表示动作是动作主体在他人的作用之下(强迫、命令或驱使等)被迫进行。
      
      动词的使动态
      当描述某一动作、行为时，若不是以施事者为主角，而是以指使者、容许者或者促成者为主角进行描述，则应采用动词的使动态。
      一类动词：将词尾的う段假名变成所在行的あ段假名+せる
      買う->買わせる
      遊ぶ->遊ばせる
      二类动词：去掉词尾る＋させる
      見る->見させる
      ｶ变动词：くる变成こ＋させる
      来る->来させる
      ｻ变动词：する变成させる
      する->させる
      勉強する->勉強させる
    `
  }, {
    id: 6,
    name: '7.授受动词',
    content: `
      在表达人与人之间的授受关系时，汉语中可以只用一个"给"字，但日与比较复杂，表示授受关系的授受动词共有7个，可以分为一下三组：
            授受动词                                  用法               主语
      组一：くれる、くださる(敬语)                      别人给我           别人
      组二：やる、あげる、差し上げる(敬语)               我给别人           我
      组三：もらう、いただく(敬语)                      我从别人那接受      我
      "我"指说话人或心理上属于说话人的一方的人
    `
  }]
}, {
  id: 1,
  name: '形容词',
  categoryList: [{
    id: 0,
    name: '1.形容词的种类',
    content: `
      I类形容词(亦称イ形容词或形容词)
      词尾为"い"，修饰名词时采用"Aい"的形式，具有形容词的性质(A表示形容词词干)
      例如：広い、美しい、痛い、嬉しい
      
      II类形容词(亦称ナ形容词或形容动词)
      词尾为"だ"，修饰名词时采用"Aな"的形式，兼有形容词和动词的性质
      在辞典和教材的单词表中，II类形容词一般都只列出词干。所以看到"きれい(だ)"时，不要误以为是I类形容词
      例如：残念、好き、豊富、鮮やか、綺麗
    `
  }, {
    id: 1,
    name: '2.形容词的活用',
    content: `
      基本形（辞典形）
      形容词的基本形是形容词的原始形态，因字典中多以该形式出现，因而又称为"辞典形"，I类形容词的基本形为词干加词尾，II类形容词的基本形仅为词干。
      
      否定形
      形容词的否定形后接助动词"ない"或"ではない"表示否定。具体变化如下：
      I类形容词：
      将词尾的い变成く+ない
      例如：高い->高くない、大きい->大きくない
      II类形容词：
      词干直接加ではない
      例如：親切->親切ではない、静か->静かではない
      
      连用形
      形容词的连用形即形容词后接用言时所采用的形式。其有两种变化形式:
      连用形一
      修饰动词等谓语
      I类形容词
      词尾い变成く，例如：高い->たかく
      II类形容词
      词尾だ变成に，例如：好きだ->好きに
      
      连用形二
      在句子中表示中顿、并列或原因
      I类形容词
      词尾い变成く，例如高い->高く
      II类形容词
      词尾だ变成で，例如：好きだ->好きで
      
      终止形
      形容词的终止形用于结句，亦可后接助词、助动词。
      I类形容词的终止形与基本型相同
      II类形容词的终止形为：基本型+だ
      
      连体形
      形容词的连体形后接体言作定语，亦可后接助词、助动词。
      I类形容词的连体形与基本型相同
      II类形容词的连体形为：基本型+な
      
      假定形
      形容词的假定形后接接续助词ば，表示条件或假设。
      I类形容词
      去掉词尾い+けれ，例如：高い->高ければ
      II类形容词
      基本型+なら，例如：好き->好きならば (这里的ば常被省略)
    `
  },{
    id: 2,
    name: '3.形容词的时态和语体',
    content: `
      形容词与名词和动词一样，存在时态和语体的对立。
      I类形容词
      非过去时：
      肯定形(基本形)：大きい
      否定形(词干+くない)：大きくない
      敬体肯定(基本形+です)：大きいです
      敬体否定(词干+くありません或くないです)：大きくありません或大きくないです
      过去时：
      肯定形(词干+かった)：大きかった
      否定形(词干+くなかった)：大きくなかった
      敬体肯定(词干+かったです)：大きかったです
      敬体否定(词干+くありませんでした或くなかったです)：大きくありませんでした或大きくなかったです
      
      II类形容词
      非过去时：
      肯定形(词干+だ)：簡単だ
      否定形(词干+ではない)：簡単ではない
      敬体肯定(词干+です)：簡単です
      敬体否定(词干+ではありません或ではないです)：簡単ではありません或簡単ではないです
      过去时：
      肯定形(词干+だった)：簡単だった
      否定形(词干+ではなかった)：簡単ではなかった
      敬体肯定(词干+でした)：簡単でした
      敬体否定(词干+ではありませんでした或ではなかったです)：簡単ではありませんでした或簡単ではなかったです
    `
  },{
    id: 3,
    name: '4.い结尾的二类形容词',
    content: `
      い结尾的二类形容词收集(这里的い并不是词尾，而是词干，真正的结尾是だ)：
      綺麗->きれい
      嫌い->きらい
      厄介->やっかい
      曖昧->あいまい
      案外->あんがい
    `
  }]
}, {
  id: 2,
  name: '格助词',
  categoryList: [{
    id: 0,
    name: '介绍',
    content: `
      日语的格助词接在体言或相当于体言的词语之后，表示该体言或相当于体言的词语在句子中的某种作用或地位。
      常用格助词主要有十个:が、の、を、に、へ、で、と、から、まで、より
    `
  }, {
    id: 1,
    name: '1.が的用法',
    content: `
      Ⅰ表述客观现象或状态，例如：
      雨が降っている 客观现象
      机の上に本がある 状态
      
      Ⅱ表示能够、希望、好恶、技能，例如：
      私は車の運転ができる 能够
      コーヒーがほしい 希望
      彼は山登りが好きだ 好恶
      彼女は料理がうまい 技能
      
      Ⅲ古代日语在现代日语中的残留，主要接在体言或用言的连体形后，相当于の，例如：
      我が国
      眠るがごとく
      
      另外，当碰到一下两种情况时常用が
      a.当疑问词做主语时
      どれが日本語の本ですか？
      b.当体言或相当于体言的词语在从句中做主语时
      彼が昨日買った本はとても面白かった
    `
  }, {
    id: 2,
    name: '2.の的用法',
    content: `
      Ⅰ接在体言之后，表示所属、性质、同位或数量关系等，例如：
      私の手紙 所属
      経済の本 性质
      同級生の山田 同位
      三人の娘 数量关系
      
      Ⅱ接在状语之后，构成定语，例如：
      子供に対しての説明
      
      Ⅲ与其他助词重叠，构成定于，例如：
      会社からの電話
      
      Ⅳ表示前接的体言是定语从句的主语，例如：
      これは、山田先生の書いた本です
    `
  }, {
    id: 3,
    name: '3.を的用法',
    content: `
      Ⅰ表示他动词所涉及的对象，例如：
      映画を見る
      テレビの音を小さくする
      
      Ⅱ表示离开的场所，例如：
      バスを降りる
      
      Ⅲ表示经过的路线，例如：
      鳥が空を飛ぶ
    `
  }, {
    id: 4,
    name: '4.に的用法',
    content: `
      Ⅰ表示动作发生的时间，例如：
      七時に起きる
      
      Ⅱ表示存在的场所，例如：
      図書館に新聞がある
      
      Ⅲ表示动作的终点
      日本に行く
      
      Ⅳ表示动作的目的
      日本へ留学に行った
      
      Ⅴ表示对象
      妹に本をあげる
      
      Ⅵ表示变化的结果
      信号が赤から青に変わる
      
      Ⅶ表示比较、频率、分配的基准
      母に似ている 比较的基准
      三日に一度 频率的基准
      五十人に一人 分配的基准
      
      Ⅷ表示原因
      あまりの嬉しさに泣き出した
      
      Ⅸ表示被动句中动作的发出者
      父に叱られた
      
      Ⅹ表示使役句中动作的发出者
      先生は学生に本を読ませた
    `
  }, {
    id: 5,
    name: '5.へ的用法',
    content: `
      I表示方向或终点
      大阪へ向かう 表示方向
      京都へ5時に着く 表示终点
      
      II表示对象
      両親へ電話をかける
    `
  }, {
    id: 6,
    name: '6.で的用法',
    content: `
      I表示地点
      図書館で勉強する
      
      II表示原因
      大雪で電車が止まる
      
      III表示材料
      紙で人形を作る
      
      IV表示工具、手段
      パソコンで書類を作る
      
      V表示范围
      中国はアジアで一番大きい国だ 中国是亚洲最大的国家
      
      VI表示期限或限度
      一日で仕事を終える (終える->おえる->終う的可能型->做完、完成)
      
      VII表示动作进行时的状态
      一人で夕食を食べる 一个人吃晚饭
      
      VIII表示内容
      進学のことで先生に相談する
    `
  }, {
    id: 7,
    name: '7.と的用法',
    content: `
      I表示动作的共同者
      山田さんと映画を見に行った
      
      II表示对象
      本物と似ている
      
      III表示结果
      彼はやっと課長となった
      
      IV表示说、想、观察等的内容
      五十歳を超えているとは見えない
    `
  }, {
    id: 8,
    name: '8.から的用法',
    content: `
      I表示起点(时间、空间)
      朝から晩まで働く 时间的起点
      家から駅まで歩く 空间的起点
      
      II表示间接原因
      火の不始末から火事になる (不始末->ふしまつ->不经心、不注意、不规矩)
      
      III表示材料(与で的用法相近，但大多用于表示产品和原材料的形态存在巨大差异时)
      ワインはぶどうから作られる 葡萄酒的原料是葡萄
      
      IV表示变化前的状态
      信号が赤から青に変わる
      
      V表示判断的依据
      調査結果から考えると 从调查结果来看。。
    `
  }, {
    id: 9,
    name: '9.まで的用法',
    content: `
      I表示终点(时间、空间)，常客から一起使用
      朝から晩まで働く 时间的终点
      駅まで歩く 空间的终点
    `
  }, {
    id: 10,
    name: '10.より的用法',
    content: `
      I表示比较的基准
      木村さんは田村さんより高い
      
      II表示起点，和から意义相同，是从古代日语中残留下来的用法
      個展は明日より開催されます 个人作品展览从明天开始举办 时间的起点
      泥棒は窓より侵入した 小偷从窗户闯了进来 空间的起点
    `
  }]
}, {
  id: 3,
  name: '敬语',
  categoryList: [{
    id: 0,
    name: `介绍`,
    content: `
      日语敬语的功能有两种：
      1.表达对对方的敬意
      2.保持距离
      
      日语的敬语为"相对敬语"，主要体现在两个方面：
      1."亲疏远近"，这在使用时是一个很重要的标准。
      比如在家里，虽然父母是孩子的长辈，但也不需要使用敬语。
      2."上下、内外关系"，
      比如在公司内部，下属通常需要对上司使用尊他语。
      但当向其他公司提及自己的上司时，则要用自谦语。
      
      日语中的敬语相当发达，已经形成一个完整而复杂的系统，它涉及名词、形容词和动词等。
      其中动词的敬语形式最为多样，既有专门用于表示敬意的动词，更有大量通过语法手段
      表示敬意的形式。
      
      日语的敬语具体分为尊他语、自谦语、郑重语和美化语。
    `
  }, {
    id: 1,
    name: `1.尊他语`,
    content: `
      尊他语是一种抬高对方或其所有物(所属)的表达方式。名词、动词、形容词和少数副词都可以构成尊他语。
      I名词
      名词构成尊他语主要有三种形式
      1️⃣名词本身表示尊他
      あなた、どなた、この/その/あの/どの方、こちら、そちら、どちら、先生、教授、部長、社長
      2️⃣加前缀お/ご
      お母さん、お父さん、お話、お宅、お電話、お礼、ご都合、ご住所、ご両親、ご兄弟、ご家族
      3️⃣加后缀様、さん、殿(どの)、氏(し)、がた等
      山田さん、大島さま、中村太郎どの、田中氏、先生がた
      其中前缀お和ご所表示的意义没有什么差异，只是在使用上有所区别
      一般お接在训读的词(和语词)前面，而ご接在音读的词(汉字词)前面
      但也有例外，如：お弁当、お札、お返事(ご返事亦可)
      
      II动词
      有些动词专门用于表示尊他，而一般的动词则要通过语法手段来表示尊他。
      简体　　　　　　　敬体                对应的普通动词
      いらっしゃる　　　いらっしゃいます　　　行く/来る/いる
      おいでになる　　　おいでになります　　　行く/来る/いる
      おっしゃる　　　　おっしゃいます　　　　言う
      召し上げる　　　　召し上げります　　　　食べる/飲む
      ご覧になる　　　　ご覧になります　　　　読む/見る
      なさる　　　　　　なさいます　　　　　　する
      くださる　　　　　くださいます　　　　　くれる
      
      まったくおっしゃったとおりです  完全如您所说
      そのまま召し上がってください  就那样吃吧
      先生もいらっしゃいませんか  老师也一起来吧
      今日の新聞はご覧になりましたか  今天的报纸您看了吗？
      
      一般动词尊他语的表现形式(以下分别为形式1~4)
      表现方式         和语词(I、II类动词)            汉字词(III类动词)
      お/ごVになる　　　お＋动词的连用形1️⃣＋になる　　　ご＋动词词干＋になる
      お/ごVください　　お＋动词的连用形1️⃣＋ください　　ご＋动词词干＋ください
      お/ごVです　　　　お＋动词的连用形1️⃣＋です　　　　ご＋动词词干＋です
      Vれる/られる　　　接续同被动态一致
      
      形式1不适用于外来语构成的动词或连用形只有一个假名的动词。
      形式2用于请求对方进行某种行为，是比较正式的说法。比てください更为尊敬、客气。
      形式3中没有时态变化，时态需要用相关的副词表示。
      形式4的句子结构与普通的句子相同，只是动词变成了尊他形式。
      
      これは山田先生がお書きになった本です  这是山田老师写的书  1
      李先生はその問題を詳しくご研究になりました  李老师对那个问题研究的很详细  1
      どうぞ、こちらの入り口からお入りください  请从这边的入口进入  2
      せひご参加ください  请大家一定参加  2
      先生、今お帰りですか  老师，您现在要回去了吗？  3
      社長はあしたからご旅行です  社长从明天开始去旅行  3
      これは、ご友人が書かれたのです  这是您的朋友写的  4
      新しく来られた先生方を紹介します  介绍一下新来的老师  4
      
      III其他词
      形容词和少数副词也可以加前缀お/ご构成尊他语。形容词加お/ご的规律和名词相同。副词只加前缀ご。
      最近お忙しいですか  最近忙吗？  I类形容词
      なかなかご立派ですね  可真了不起呀！  II类形容词
      ごゆっくりお楽しみください  请您慢慢欣赏吧。  副词
    `
  }, {
    id: 2,
    name: `2.自谦语`,
    content: `
      自谦语是一种降低说话人或其所有物(所属)，以此来抬高对方的表达方式。
      名词、动词、形容词和少数副词都可以构成自谦语。
      
      I名词
      名词构成的自谦语主要有三种形式
      1️⃣名词本身表示自谦
      わたくし、父、母、うち、家内
      2️⃣加前缀お/ご
      お見舞い、お挨拶、お手紙
      3️⃣使用表示自谦意义的汉字词
      弊社、弊誌、小社、小店、拙者、拙稿、愚作、愚見
      
      II动词
      有些动词专门用于表示自谦，而一般的动词则要用通过语法手段来表示自谦
      专门用于表示自谦的动词有：
      简体　　　　　　　　敬体                对应的普通动词
      参る　　　　　　　　参ります　　　　　　　行く/来る
      いたす　　　　　　　いたします　　　　　　する
      おる　　　　　　　　おります　　　　　　　いる
      申す　　　　　　　　申します　　　　　　　言う
      いただく　　　　　　いただきます　　　　　食べる/飲む/もらう
      拝見する　　　　　　拝見します　　　　　　見る
      伺う　　　　　　　　伺います　　　　　　　聞く/尋ねる/訪問する
      お目にかかる　　　　お目にかかります　　　会う
      存じる　　　　　　　存じます　　　　　　　知る/思う
      
      入学のご紹介をいたします  我来做一下入学介绍
      私個人の感想を申します  我来谈谈个人的感想
      明日お宅に挨拶に参ります  我明天去贵府拜访
      先生にお目にかかることができる、本当に嬉しく存じます  能见到老师，我真的很高兴
      
      一般动词自谦语的表现形式
      表现方式              和语词(I、II类动词)　　　　　　　　汉字词(III类动词)
      お/ごVする/いたす　　　お＋动词的连用形1️⃣＋する/いたす　　ご＋动词词干＋する/いたす
      
      はい。お願いいたします  好的，那就拜托你了
      では、またお電話いたします  那我再给您打电话
      日常生活のあらゆることをお手伝いします  日常生活中的所有事情，我都愿意效劳
      当社が積極的にご協力します  我公司愿积极协助
    `
  }, {
    id: 3,
    name: `3.郑重语`,
    content: `
      郑重语是一种对听话人表示尊敬之意的表达方式。代表性的郑重语有です、ます。（で）ございます的敬意程度最高

      けっこうです->けっこうでございます  不用了
      よろしいですか->よろしゅうでございますか  可以吗？
    `
  }, {
    id: 4,
    name: `4.美化语`,
    content: `
      美化语是一种美化语言的表现方式，使语言更加得体、优雅，多为女性使用。
      要注意的是：美化语使用的太过频繁时，反而会使人感到啰嗦。
      美化语主要有两类
      I凝固型美化语
      使用限制：已成为固定的词
      例：おじぎ、おにぎり、おかわり、ご馳走(ごちそう)
      
      II典型性美化语
      1️⃣
      使用限制：一般前加お/ご
      例：お祝い、お茶、お寺、ご祝儀
      2️⃣
      使用限制：女性加お/ご、男性或加或不加
      例：お菓子、お金、お米、お刺身、お煎餅、お土産、お年始
      3️⃣
      使用限制：无明显男女差异，因个人、场景而异
      例：お味、お茶碗、お花、お水、ご近所
      4️⃣男性不加お/ご、女性或加或不加
      例：お財布、お醤油、おソース(调味酱)、お雑巾、お大根、お箸
    `
  }, ]
}];

module.exports = {
  wordList: wordList,
  spellList: spellList,
  pianjiaList: pianjiaList,
  pingjiaList: pingjiaList,
  wordListLengthArr: wordListLengthArr,
  columnLengthArr: columnLengthArr,
  colorList: colorList,
  summaryData: summaryData,
};
