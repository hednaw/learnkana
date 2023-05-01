const Characters = [
  {char: "あ", romanji: "a"},
  {char: "い", romanji: "i"},
  {char: "う", romanji: "u"},
  {char:"え", romanji: "e"},
  {char: "お", romanji: "o"},
  {char:"か",romanji:"ka"},
  {char: "き", romanji: "ki"},
  {char:"く",romanji: "ku"},
  {char:"け",romanji:"ke"},
  {char: "こ",romanji:"ko"},
  {char: "さ",romanji:"sa"},
  {char:"し",romanji:"shi"},
  {char:"す",romanji:"su"},
  {char:"せ",romanji:"se"},
  {char:"そ",romanji:"so"},
  {char:"た",romanji:"ta"},
  {char: 'ち',romanji: 'chi'},
  {char: 'つ',romanji: 'tsu'},
  {char: 'て',romanji: 'te'},
  {char: 'と',romanji: 'to'},
  {char: "な",romanji: 'na'},
  {char: "に",romanji: 'ni'},
  {char: "ぬ",romanji: 'nu'},
  {char: "ね",romanji: 'ne'},
  {char: "の", romanji: "no"},
  {char: "は",romanji: 'ha'},
  {char: "ひ",romanji: 'hi'},
  {char: "ふ",romanji: 'fu'},
  {char: "へ",romanji: 'he'},
  {char: "ほ",romanji: 'ho'},
  {char: "ま",romanji: 'ma'},
  {char: "み",romanji: 'mi'},
  {char: "む",romanji: 'mu'},
  {char: "め",romanji: 'me'},
  {char: "も",romanji: 'mo'},
  {char:"や",romanji:'ya'},
  {char:"ゆ",romanji:'yu'},
  {char:"よ",romanji:'yo'},
  {char: "ら",romanji: 'ra'},
  {char: "り",romanji: 'ri'},
  {char: "る",romanji: 'ru'},
  {char: "れ",romanji: 're'},
  {char: "ろ",romanji: 'ro'},
  {char: "わ",romanji: 'wa'},
  {char: "を",romanji: 'wo'},
];

const characterLabel = document.getElementById("character");
const checkButton = document.getElementById("check");
const answerInput = document.getElementById("input");
const infoText = document.getElementById("infoText");
const streakLabel = document.getElementById("streak");
let streak = 0;
let funnyFlag = false;

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
  if (event.keyCode == 13) {
    checkButton.click();
  }
});

checkButton.addEventListener("click", function () {
  if (funnyFlag == true) {
    funnyFlag = false;
    checkButton.innerText = "Check";
    randomize();
  } else {
    if (answerInput.value == Characters[currentCharacter].romanji) {
      console.log("Good");
      answerInput.style.backgroundColor = "#a6da95";
      funnyFlag = true;
      checkButton.innerText = "Next";
      streak++;
    } else {
      infoText.innerHTML =
        "That's not it. Correct answer is: " + Characters[currentCharacter].romanji;
      answerInput.style.backgroundColor = "#ee99a0";
      answerInput.style.color = "#1e1e2e";
      funnyFlag = true;
      checkButton.innerText = "Next";
      streak = 0;
    }
  }
});
