const Characters = [
  {char: "あ", romanji: "a", group: 1},
  {char: "い", romanji: "i", group: 1},
  {char: "う", romanji: "u", group: 1},
  {char:"え", romanji: "e", group: 1},
  {char: "お", romanji: "o", group: 1},
  {char:"か",romanji:"ka", group: 2},
  {char: "き", romanji: "ki", group: 2},
  {char:"く",romanji: "ku", group: 2},
  {char:"け",romanji:"ke", group: 2},
  {char: "こ",romanji:"ko", group: 2},
  {char: "さ",romanji:"sa", group: 3},
  {char:"し",romanji:"shi", group: 3},
  {char:"す",romanji:"su", group: 3},
  {char:"せ",romanji:"se", group: 3},
  {char:"そ",romanji:"so", group: 3},
  {char:"た",romanji:"ta", group: 4},
  {char: 'ち',romanji: 'chi', group: 4},
  {char: 'つ',romanji: 'tsu', group: 4},
  {char: 'て',romanji: 'te', group: 4},
  {char: 'と',romanji: 'to', group: 4},
  {char: "な",romanji: 'na', group: 5},
  {char: "に",romanji: 'ni', group: 5},
  {char: "ぬ",romanji: 'nu', group: 5},
  {char: "ね",romanji: 'ne', group: 5},
  {char: "の", romanji: "no", group:5},
  {char: "は",romanji: 'ha', group: 6},
  {char: "ひ",romanji: 'hi', group: 6},
  {char: "ふ",romanji: 'fu', group: 6},
  {char: "へ",romanji: 'he', group: 6},
  {char: "ほ",romanji: 'ho', group: 6},
  {char: "ま",romanji: 'ma', group: 7},
  {char: "み",romanji: 'mi', group: 7},
  {char: "む",romanji: 'mu', group: 7},
  {char: "め",romanji: 'me', group: 7},
  {char: "も",romanji: 'mo', group: 7},
  {char:"や",romanji:'ya', group: 8},
  {char:"ゆ",romanji:'yu', group: 8},
  {char:"よ",romanji:'yo', group: 8},
  {char: "ら",romanji: 'ra', group: 8},
  {char: "り",romanji: 'ri', group: 8},
  {char: "る",romanji: 'ru', group: 9},
  {char: "れ",romanji: 're', group: 9},
  {char: "ろ",romanji: 'ro', group: 9},
  {char: "わ",romanji: 'wa', group: 9},
  {char: "を",romanji: 'wo', group: 9},
];

const characterLabel = document.getElementById("character");
const checkButton = document.getElementById("check");
const answerInput = document.getElementById("input");
const infoText = document.getElementById("infoText");
const streakLabel = document.getElementById("streak");
let streak = 0;
let isCheckButtonClicked = false;

function randomize() {
  streakLabel.innerText = "Streak: " + streak;
  infoText.innerText = "";
  answerInput.value = "";
  answerInput.style.backgroundColor = "#5b6078";
  currentCharacter = Math.floor(Math.random() * Characters.length);
  characterLabel.textContent = Characters[currentCharacter].char;
  for (let i = 0; i < Characters.length; i++) {
    console.log(Characters[i].char,Characters[i].romanji);
  }
}

randomize();
document.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    checkButton.click();
  }
});
checkButton.addEventListener("click", function () {
  if (isCheckButtonClicked == true) {
    isCheckButtonClicked = false;
    checkButton.innerText = "Check";
    randomize();
  } else {
    if (answerInput.value == Characters[currentCharacter].romanji) {
      console.log("Good");
      answerInput.style.backgroundColor = "#a6da95";
      isCheckButtonClicked = true;
      checkButton.innerText = "Next";
      streak++;
      infoText.innerText = "";
    } else {
      infoText.innerText =
        "That's not it. Correct answer is: " + Characters[currentCharacter].romanji;
      answerInput.style.backgroundColor = "#ee99a0";
      answerInput.style.color = "#1e1e2e";
      checkButton.innerText = "Check";
      streak = 0;
    }
  }
});
