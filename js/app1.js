const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const button2 = document.querySelector(".button2");
const score = document.getElementById("score");

let play = false;
let newWords2 = "";
let randWords2 = "";
var timeleft = 60;
var timerCount = 0;
var count = 0;

let sWords2 = ["pigeon", "crow", "parrot", "owl", "swan", "peacock", "penguin", "ostrich", "vulture", "eagle", "hen", "sparrow",
    "dove", "flamingo", "duck", "goose", "cuckoo", "kingfisher", "falcon"];


const createNewWords2 = () => {
    let ranNum2 = Math.floor(Math.random() * sWords2.length);
    //console.log(ranNum);
    let newtempsWords2 = sWords2[ranNum2];
    //console.log(newtempsWords.split(""));
    return newtempsWords2;
}
const scrambleWords2 = (arr) => {
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
            window.location.href = "index4.html";
        }
        else {
            document.getElementById("timer").innerText = "Time Left : " + timeleft;
            timeleft -= 1;
        }

    }, 1000)
}
button2.addEventListener("click", function () {
    timerCount += 1;

    if (timerCount == 1) {
        timer();
    }
    if (!play) {
        play = true;
        button2.innerHTML = "Guess";
        guess.classList.toggle("hidden");
        newWords2 = createNewWords2();
        randWords2 = scrambleWords2(newWords2.split("")).join("");
        //console.log(randWords.join(""));
        msg.innerHTML = randWords2;

    }
    else {
        let tempword = guess.value;
        if (tempword == newWords2) {
            //console.log("Correct");
            play = false;
            msg.innerHTML = `AWESOME`;
            count++;
            score.innerText = "   Score : " + count;
            button2.innerHTML = "NEXT";
            guess.classList.toggle("hidden");
            guess.value = "";



        }
        else {
            //console.log("Incorrect");
            msg.innerHTML = `OH NO!. Try Again: ${randWords2}`;
        }
    }
})


