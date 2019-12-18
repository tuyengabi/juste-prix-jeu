//definir le temp décendre de section
AOS.init({
    duration: 2000,
})

let prixMystere = determinerPrixMystere(780, 800);
let ok = document.getElementById("btnPlay");
let compteur = 0;

ok.addEventListener("click", leJeu, false);
console.log(prixMystere);

function determinerPrixMystere(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function leJeu() {
    var champSaisi = document.getElementById("input").value;
    if (compteur < 9) {
        calculProposition(champSaisi, prixMystere);
    } else {
        afficherMesssage("message", "C'est perdu !" + " " + prixMystere);
    }

}

function calculProposition(prixPropose, prixATrouve) {

    if (prixPropose < prixATrouve) {
        afficherMesssage("message", "C'est plus !");
        compteur = compteur + 1;
    } else if (prixPropose > prixATrouve) {
        afficherMesssage("message", "C'est moins !");
        compteur = compteur + 1;
    } else {
        afficherMesssage("message", "Vous etes gagné un vacance!");
    }


}

function afficherMesssage(identifiant, messageText) {
    return document.getElementById(identifiant).innerHTML = messageText;
}

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            
        }
    }, 1000);
}

document.getElementById("btnStart").addEventListener("click", function () {
    var countSec = 60 * 0.5,
        display = document.querySelector('#count');
    startTimer(countSec, display);
});

document.getElementById("btnStart").addEventListener("click", function () {
    document.getElementById("text").innerHTML = "secondes";
});

document.getElementById("btnStart").addEventListener("click", function () {
    document.getElementById("hint").innerHTML = "est entre 780 et 800";
});

document.getElementById("btnStart").addEventListener("click", function () {
    document.getElementById("input").style.visibility = "visible";
});

document.getElementById("btnStart").addEventListener("click", function () {
    document.getElementById("btnStart").style.display = "none";
});

document.getElementById("btnStart").addEventListener("click", function () {
    document.getElementById("btnPlay").style.visibility = "visible";
});

document.querySelector('#rightArrow').addEventListener('click',function(e){
    document.getElementById('imgBg1').classList.add('carousel__bg--hidden');

    document.getElementById('imgBg2').classList.remove('carousel__bg--hidden');
})
