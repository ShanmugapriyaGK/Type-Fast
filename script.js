document.addEventListener("DOMContentLoaded", function() {

    let sentences = [
        "Technology is changing the way we live and work every day.",
        "Learning a new language opens up many unique opportunities.",
        "Reading books expands your mind and builds your vocabulary.",
        "Always believe in yourself even when things get difficult",
        "Kindness is a simple gift that can change someone's day.",
        "The stars look beautiful when the night sky is fully clear. ",
        "Success comes to those who work hard and never give up",
        "Laughing with close friends is the finest medicine.",
        "A positive attitude makes every challenge much easier.",
        "Time flies quickly when you are having a lot of fun",
        "Planting trees helps protect and improve our environment."
    ];

    let sentence = "";
    let time = 30;
    let timer;
    let correctCount = 0;
    let wrongCount = 0;

    let input = document.getElementById("exampleFormControlTextarea2");
    let show = document.getElementById("show");
    let timerDisplay = document.getElementById("timer");
    let startBtn = document.getElementById("startBtn");
    let result = document.getElementById("result");

    function randomSentence() {
        let random = Math.floor(Math.random() * sentences.length);
        sentence = sentences[random];
        show.innerHTML = sentence;

    }
    randomSentence();

    startBtn.addEventListener("click", function(e) {
        e.preventDefault();
        clearInterval(timer);
        time = 30;
        correctCount = 0;
        wrongCount = 0;
        input.value = "";
        input.disabled = false;
        input.focus();
        timerDisplay.innerHTML = time;
        result.style.display = "none";
        randomSentence();

        timer = setInterval(function() {
            time--;
            timerDisplay.innerHTML = time;

            if (time <= 0) {
                clearInterval(timer);
                input.disabled = true;
                document.getElementById("correct").innerHTML = correctCount;
                document.getElementById("wrong").innerHTML = wrongCount;
                result.style.display = "block";
            }

        }, 1000);

    });


    input.addEventListener("input", function() {
        checkTyping();
    });


    function checkTyping() {
        let typed = input.value;
        correctCount = 0;
        wrongCount = 0;

        let output = "";
        for (let i = 0; i < typed.length; i++) {
            if (typed[i] === sentence[i]) {
                correctCount++;
            }
            else {
                wrongCount++;
            }

        }

        for (let i = 0; i < sentence.length; i++) {
            if (typed[i] == null) {
                output += sentence[i];
            }
            else if (typed[i] === sentence[i]) {
                output += `<span style="color:green">${sentence[i]}</span>`;
            }
            else {
                output += `<span style="color:red">${sentence[i]}</span>`;
            }

        }
        show.innerHTML = output;

        if(typed === sentence){
            clearInterval(timer)
            input.disabled = true
             document.getElementById("correct").innerHTML = correctCount;
                document.getElementById("wrong").innerHTML = wrongCount;
                result.style.display = "block";
        }
    }

});