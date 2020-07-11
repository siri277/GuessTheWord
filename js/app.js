const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const button1 = document.querySelector(".button1");
const score = document.getElementById("score");

let play = false;
let newWords1 = "";
let randWords1 = "";
var timeleft = 60;
var timerCount = 0;
var count = 0;

let sWords1 = ["tiger", "fox", "lion", "snake", "giraffe", "dog", "elephant", "horse", "zebra", "bear", "wolf",
    "cat", "deer", "monkey", "sheep", "buffalo", "hippopotamus", "cheetah", "rhinoceros"];

function start() {
    window.location.href = "./GuessTheWord/static pages/index1.html";
}
function birds() {
    window.location.href = "GuessTheWord/static pages/index3.html";
}
function animals() {
    window.location.href = "GuessTheWord/static pages/index2.html";
}
function playagain() {
    window.location.href = "GuessTheWord/static pages/index1.html";
}

const createNewWords1 = () => {
    let ranNum1 = Math.floor(Math.random() * sWords1.length);
    //console.log(ranNum);
    let newtempsWords1 = sWords1[ranNum1];
    //console.log(newtempsWords.split(""));
    return newtempsWords1;
}
const scrambleWords1 = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        //console.log(temp);
        let j = Math.floor(Math.random() * (i + 1));
        //console.log(i);
        //console.log(j);
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
function timer() {
    var downtimer = setInterval(function () {
        if (timeleft < 0) {
            clearInterval(downtimer);
            window.location.href = "../static pages/index4.html";
        }
        else {
            document.getElementById("timer").innerText = "Time Left : " + timeleft;
            timeleft -= 1;
        }

    }, 1000)
}
button1.addEventListener("click", function () {
    timerCount += 1;

    if (timerCount == 1) {
        timer();
    }
    if (!play) {
        play = true;
        button1.innerHTML = "Guess";
        guess.classList.toggle("hidden");
        newWords1 = createNewWords1();
        randWords1 = scrambleWords1(newWords1.split(""));
        //console.log(randWords.join(""));
        msg.innerHTML = randWords1;
    }
    else {
        let tempword = guess.value;
        if (tempword == newWords1) {
            //console.log("Correct");
            play = false;
            msg.innerHTML = `AWESOME`;
            count++;
            score.innerText = "   Score : " + count;
            button1.innerHTML = "NEXT";
            guess.classList.toggle("hidden");
            guess.value = "";
        }
        else {
            //console.log("Incorrect");
            msg.innerHTML = `OH NO!. Try Again: ${randWords1}`;
        }
    }
})


