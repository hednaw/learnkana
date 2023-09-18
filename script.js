const kanaBtn = document.querySelector(".kanaSwitchBtn");
const text = document.querySelector(".btnText");
const characterContainer = document.querySelector(".characterContainer");
const characterText = document.querySelector(".character");
const textInputBox = document.querySelector("#textInput");
let hiragana = true;

const kanaDictionary = [
  { hiragana: "あ", katakana: "ア", romanji: "a" },
  { hiragana: "い", katakana: "イ", romanji: "i" },
  { hiragana: "う", katakana: "ウ", romanji: "u" },
  { hiragana: "え", katakana: "エ", romanji: "e" },
  { hiragana: "お", katakana: "オ", romanji: "o" },
  { hiragana: "か", katakana: "カ", romanji: "ka" },
  { hiragana: "き", katakana: "キ", romanji: "ki" },
  { hiragana: "く", katakana: "ク", romanji: "ku" },
  { hiragana: "け", katakana: "ケ", romanji: "ke" },
  { hiragana: "こ", katakana: "コ", romanji: "ko" },
  { hiragana: "さ", katakana: "サ", romanji: "sa" },
  { hiragana: "し", katakana: "シ", romanji: "shi" },
  { hiragana: "す", katakana: "ス", romanji: "su" },
  { hiragana: "せ", katakana: "セ", romanji: "se" },
  { hiragana: "そ", katakana: "ソ", romanji: "so" },
  { hiragana: "た", katakana: "タ", romanji: "ta" },
  { hiragana: "ち", katakana: "チ", romanji: "chi" },
  { hiragana: "つ", katakana: "ツ", romanji: "tsu" },
  { hiragana: "て", katakana: "テ", romanji: "te" },
  { hiragana: "と", katakana: "ト", romanji: "to" },
  { hiragana: "な", katakana: "ナ", romanji: "na" },
  { hiragana: "に", katakana: "ニ", romanji: "ni" },
  { hiragana: "ぬ", katakana: "ヌ", romanji: "nu" },
  { hiragana: "ね", katakana: "ネ", romanji: "ne" },
  { hiragana: "の", katakana: "ノ", romanji: "no" },
  { hiragana: "は", katakana: "ハ", romanji: "ha" },
  { hiragana: "ひ", katakana: "ヒ", romanji: "hi" },
  { hiragana: "ふ", katakana: "フ", romanji: "fu" },
  { hiragana: "へ", katakana: "ヘ", romanji: "he" },
  { hiragana: "ほ", katakana: "ホ", romanji: "ho" },
  { hiragana: "ま", katakana: "マ", romanji: "ma" },
  { hiragana: "み", katakana: "ミ", romanji: "mi" },
  { hiragana: "む", katakana: "ム", romanji: "mu" },
  { hiragana: "め", katakana: "メ", romanji: "me" },
  { hiragana: "も", katakana: "モ", romanji: "mo" },
  { hiragana: "や", katakana: "ヤ", romanji: "ya" },
  { hiragana: "ゆ", katakana: "ユ", romanji: "yu" },
  { hiragana: "よ", katakana: "ヨ", romanji: "yo" },
  { hiragana: "ら", katakana: "ラ", romanji: "ra" },
  { hiragana: "り", katakana: "リ", romanji: "ri" },
  { hiragana: "る", katakana: "ル", romanji: "ru" },
  { hiragana: "れ", katakana: "レ", romanji: "re" },
  { hiragana: "ろ", katakana: "ロ", romanji: "ro" },
  { hiragana: "わ", katakana: "ワ	", romanji: "wa" },
  { hiragana: "を", katakana: "ヲ", romanji: "wo" },
];
let textBuffer = "";
kanaBtn.addEventListener("click", () => {
  hiragana = !hiragana;

  if (hiragana) {
    kanaBtn.style = "background-color: #F9E2AF;";
    characterContainer.style = "background-color: #F9E2AF;";
    text.innerText = "HIRAGANA";
    kanaBtn.classList.remove("kanaSwitchBtn2");
    kanaBtn.classList.add("kanaSwitchBtn");
  } else {
    kanaBtn.style = "background-color: #F38BA8;";
    characterContainer.style = "background-color: #F38BA8;";
    text.innerText = "KATAKANA";
    kanaBtn.classList.remove("kanaSwitchBtn");
    kanaBtn.classList.add("kanaSwitchBtn2");
  }
});

function PickCharacter() {
  let dictLenght = Object.keys(kanaDictionary).length;
  let randomlyPickedCharacter =
    kanaDictionary[Math.floor(Math.random() * dictLenght)];
  characterText.innerText = randomlyPickedCharacter.katakana;
  return randomlyPickedCharacter;
}
randomlyPickedCharacter = PickCharacter();
