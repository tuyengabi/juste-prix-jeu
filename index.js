// let timer = countdown();



// document.getElementById("btnStart").addEventListener("click", function () {
//     document.getElementById("count").innerHTML = timer;
// });



// function countdown() {

//     for (let sec = 30; sec > 0; sec--) {
//         console.log(sec);
//     }

    
// }


function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

document.getElementById("btnStart").addEventListener("click", function () {
    var fiveMinutes = 60 * 0.5,
        display = document.querySelector('#count');
    startTimer(fiveMinutes, display);
});

document.getElementById("btnStart").addEventListener("click", function () {
    document.getElementById("text").innerHTML = "secondes";
});

document.getElementById("btnStart").addEventListener("click", function () {
    document.getElementById("hint").innerHTML = "est entre 700 et 720";
});

document.getElementById("btnStart").addEventListener("click", function () {
    document.getElementById("input").style.visibility = "visible";
});

document.getElementById("btnStart").addEventListener("click", function () {
    document.getElementById("btnStart").innerHTML = "OK";
});








