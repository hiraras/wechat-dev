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
  "わ", "を", "ん"
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
  "ワ", "ヲ", "ン"
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
  "wa", "wo", "nn"
];

const wordListLengthArr = [46, 71, 104];

module.exports = {
  wordList: wordList,
  spellList: spellList,
  pianjiaList: pianjiaList,
  pingjiaList: pingjiaList,
  wordListLengthArr: wordListLengthArr
};
