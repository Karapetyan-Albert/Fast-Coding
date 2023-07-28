const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
let textValue = document.getElementById("text-area");
let timeEl = document.getElementById("time")
let typeWords = document.getElementById('typeWords')
let wordP = document.getElementById('text');
let yourScore = document.getElementById('y-score')
let highScoreEl = document.getElementById("hScore");
let playButton = document.getElementById('play');
let firstPage = document.getElementById('firstPage');
let gamePage = document.getElementById('gamePage');
let rocket = document.getElementById('figure-jumping');
let learnButton = document.getElementById('learn');
let backButton_1 = document.getElementById('backButton_1');
let backButton_2 = document.getElementById('backButton_2');
let backButton_3 = document.getElementById('backButton_3')
let countDown = document.getElementById('count-down');
let musicButton = document.getElementById('musicButton');
let music = document.getElementById('music');
let settingsPage = document.getElementById('settingsPage');
let settingsButton = document.getElementById('settings');
let gameTimer;

// if(!localStorage.mode){
//     // console.log("Asd")
//     localStorage.mode = "dark";
// }

// console.log(localStorage)
// if(localStorage.mode=="dark"){
//     body.style.background = '#fff url("./assets/img/blue_pink_6.jpg") center center / cover no-repeat fixed';
//     // toggle.classList.toggle('bi-brightness-high-fill')
    
    
// } else  if(localStorage.mode=="white"){
//     body.style.background = '#fff url("./assets/img/smokebg.jpg") center center / cover no-repeat fixed';
//     // toggle.classList.toggle('bi-moon')
// }

toggle.addEventListener('click', function () {
   
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = '#fff url("./assets/img/blue_pink_6.jpg") center center / cover no-repeat fixed';
        localStorage.mode="dark"
        body.style.color = 'white';
        body.style.transition = '2s';
        (document.getElementById('typeWords')).style.color = 'white';
    } else {
        // console.log("asdasdasdasd")
        body.style.background = '#fff url("./assets/img/smokebg.jpg") center center / cover no-repeat fixed';
        localStorage.mode="white"
        body.style.color = 'purple';
        body.style.transition = '2s';
        (document.getElementById('typeWords')).style.color = 'purple';
        (document.getElementById('text-area')).style.border = '5px solid purple'
    }
    console.log(localStorage.mode)
})


playButton.addEventListener('click', function () {
    firstPage.style.display = 'none';
    countDown.style.display = 'block';
    rocket.style.display = 'none';

    let startCount = document.getElementById("start-count")
    startCount.innerHTML = 3
   let  id = setInterval(function () {
        startCount.innerHTML--
        if (startCount.innerHTML == 0) {
            clearInterval(id)
            generalGame()
        }
    }, 1000)




})

function generalGame() {

    countDown.style.display = 'none';
    gamePage.style.display = 'block';

    let score = 0
    let time = 5;
    let hScore;
    let randomWord = randomItem(wordsArr);

    if (!localStorage.score) {
        localStorage.score = 0
    }


    hScore = localStorage.score // localStorage.score
    highScoreEl.innerHTML = hScore
    timeEl.innerHTML = time
    yourScore.innerHTML = score;
    typeWords.innerHTML = randomWord;
 


    gameTimer = setInterval(function () {
        time--;
        timeEl.innerHTML = time
        if (time <= 0) {
            clearInterval(gameTimer)
            gameOver.style.display = "flex";
            gamePage.style.display = "none";

        }
    }, 1000)


    textValue.addEventListener('keypress', function (e) {
        if (e.code == "Enter") {

            if (textValue.value == randomWord) {
                score++;
                yourScore.innerHTML = score
                randomWord = randomItem(wordsArr);
                time += 3
                if (score > hScore) {
                    hScore = score;
                    highScoreEl.innerHTML = hScore
                    localStorage.score = hScore
                }
                typeWords.innerHTML = randomWord;
                textValue.value = '';
            } else {
                time -= 2
                randomWord = randomItem(wordsArr)
                typeWords.innerHTML = randomWord;
            }
            if(time>=0)
            timeEl.innerHTML = time
            textValue.value = ""

        }

    })
}


learnButton.addEventListener('click', function () {
    firstPage.style.display = 'none';
    keyboard.style.display = 'block';
    rocket.style.display = 'none';
    gameKeyboard();
})

settingsButton.addEventListener('click', function () {
    firstPage.style.display = 'none';
    settingsPage.style.display = 'block';
})

backButton_1.addEventListener('click', function () {
    // location.reload()
    clearInterval(gameTimer)
    firstPage.style.display = 'block';
    gamePage.style.display = 'none';
    rocket.style.display = 'block';
})

backButton_2.addEventListener('click', function () {
    // location.reload()
    firstPage.style.display = 'block';
    keyboard.style.display = 'none';
    rocket.style.display = 'block';
    removedEl.classList.remove("selected");
})
backButton_3.addEventListener('click', function () {
    // location.reload()
    settingsPage.style.display = 'none';
    firstPage.style.display = 'block';
    rocket.style.display = 'block';
})

let removedEl;
function gameKeyboard() {
    let oneLetter = randomItem(letterArr);
    let oneElement = document.getElementById(oneLetter);
    removedEl = oneElement;
    oneElement.classList.add("selected");
    document.addEventListener('keyup', function (event) {
        if (event.code == oneLetter) {
            oneElement.classList.remove("selected");
            oneLetter = randomItem(letterArr);
            oneElement = document.getElementById(oneLetter);
            oneElement.classList.add("selected");
        } else {
            let falseEl = document.getElementById(event.code)
            falseEl.classList.add("hit");
            setTimeout(() => {
                falseEl.classList.remove("hit");
            }, 1000);
        }
    })

}

musicButton.addEventListener('click', function () {

    if (music.paused) {
        music.play()
    } else {
        music.pause()
    }

})

let gameOver = document.getElementById("gameOver");
let playAgain = document.getElementById("playAgain");
let menuButton = document.getElementById("menu");

menuButton.addEventListener("click", function () {
    gameOver.style.display = "none";
    firstPage.style.display = "block";
    rocket.style.display = 'block';
})

playAgain.addEventListener("click", function () {
    gameOver.style.display = "none";
    countDown.style.display = 'block';
    textValue.value = "";

    let startCount = document.getElementById("start-count")
    startCount.innerHTML = 3
    id = setInterval(function () {
        startCount.innerHTML--
        if (startCount.innerHTML == 0) {
            clearInterval(id);
            generalGame();
        }
    }, 1000)

})




