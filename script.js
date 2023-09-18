const kanaBtn = document.querySelector(".kanaSwitchBtn");
const text = document.querySelector(".btnText");
let hiragana = true;
kanaBtn.addEventListener("click", () => {
  hiragana = !hiragana;

  if (hiragana) {
    kanaBtn.style = "background-color: #F9E2AF;";
    text.innerText = "HIRAGANA";
    kanaBtn.classList.remove("kanaSwitchBtn2");
    kanaBtn.classList.add("kanaSwitchBtn");
  } else {
    kanaBtn.style = "background-color: #F38BA8;";
    text.innerText = "KATAKANA";
    kanaBtn.classList.remove("kanaSwitchBtn");
    kanaBtn.classList.add("kanaSwitchBtn2");
  }
});
