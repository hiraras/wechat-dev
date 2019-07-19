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

      连用形（て形・ます形・た形）
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
      词尾为く/ぐ，都变为い，但是く后接て，ぐ后接で，例如：書く->書いて・書いた、泳ぐ->泳いで・泳いだ
      词尾为う/つ/る，都变为っ（小写），后接て、た，例如：買う->買って・買った
      词尾为ぬ/ぶ/む，都变为ん，后续助动词或助词的第一个假名要变浊音，例如：死ぬ->死んで・死んだ、
      词尾为す，变成し，例如：話す->話して・話した
      特例：行く->行った・行って
      II类动词
      去掉词尾る，例如：見る->見た・みて
      III类动词
      ｶ变动词：くる变き，例如：来る->来て・来た
      ｻ变动词：する变し，例如：勉強する->勉強して・勉強した

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
  }, ]
}, {
  id: 1,
  name: '形容词',
  categoryList: []
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
