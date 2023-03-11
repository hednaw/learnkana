const Characters = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', "さ", 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ','ろ','わ','を']
const Translated = ['a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'shi', 'su', 'se', 'so', 'ta', 'chi', 'tsu', 'te', 'to', 'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'fu', 'he', 'ho', 'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'wa', 'wo']
const characterLabel = document.getElementById("character")
const checkButton = document.getElementById("check")
const answerInput = document.getElementById("input")
const infoText = document.getElementById("infoText")
const streakLabel = document.getElementById("streak")
var streak = 0
var funnyFlag = false;

function randomize() {
    streakLabel.innerHTML = "Streak: " + streak;
    infoText.innerHTML = ""
    answerInput.value = ""
    answerInput.style.backgroundColor = "#5b6078"
    currentCharacter = Math.floor(Math.random() * Characters.length)
    console.log(Characters[currentCharacter])
    console.log(currentCharacter)
    characterLabel.innerHTML = Characters[currentCharacter]
    for(let i = 0; i < Characters.length; i++) {
        console.log(Characters[i], Translated[i])
    }
    console.log(Characters.length, Translated.length)

}

randomize()
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        checkButton.click()
    }
})


checkButton.addEventListener('click', function () {
    if (funnyFlag == true) {
        funnyFlag = false
        checkButton.innerText = "Check"
        randomize()
    } else {
        if (answerInput.value == Translated[currentCharacter]) {
            console.log("Good")
            answerInput.style.backgroundColor = "#a6da95"
            funnyFlag = true;
            checkButton.innerText = "Next"
            streak++
        } else {
            console.log("That's not it. Correct answer is: ", Translated[currentCharacter])
            infoText.innerHTML = "That's not it. Correct answer is: " + Translated[currentCharacter]
            answerInput.style.backgroundColor = "#ee99a0"
            funnyFlag = true;
            checkButton.innerText = "Next"


        }

    }

})
