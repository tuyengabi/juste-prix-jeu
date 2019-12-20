//definir le temp décendre de section
AOS.init({
    duration: 2000,
})


// des fonctions de jeu
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


//des fonctions de temp
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


//des fonctions de commencer le jeu
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




// des fonction de carousel 
function nextBg (e) {
    //je récupere tout les bg
    let lstBgCarousel = document.querySelectorAll('.carousel__bg');
    let majFait = false;
    //je parcours ma liste
    lstBgCarousel.forEach(
        function (item, index) {
            //si je ne retrouve pas la classe carousel__bg--hidden, je lui ajoute et je la retire pour le suivant
            if (item.classList.contains('carousel__bg--hidden') === false && majFait === false) {
                //si je suis à l'index maximal => je retourne à 0 sinon je vais au suivant
                if (index === lstBgCarousel.length - 1) {
                    index = 0;
                }
                //je retire la clas carousel__bg--hidden du bg actuel 
                item.classList.add('carousel__bg--hidden');
                // j'ajoute carousel__bg--hidden au suivant
                lstBgCarousel[index + 1].classList.remove('carousel__bg--hidden')
                //on force la sortie de la boucle pou faire l'opértion juste une suel fois
                majFait = true;
            }
        }
    );
}


function previousBg (e) {
    //je récupere tout les bg
    let lstBgCarousel = document.querySelectorAll('.carousel__bg');
    let majFait = false;
    //je parcours ma liste
    lstBgCarousel.forEach(
        function (item, index) {
            //si je ne retrouve pas la classe carousel__bg--hidden, je lui ajoute et je la retire pour le suivant
            if (item.classList.contains('carousel__bg--hidden') === false && majFait === false) {
                //si je suis à l'index maximal => je retourne à 0 sinon je vais au suivant
                if (index === 0) {
                    index = lstBgCarousel.length - 1;
                }
                //je retire la clas carousel__bg--hidden du bg actuel 
                item.classList.add('carousel__bg--hidden');
                // j'ajoute carousel__bg--hidden au suivant
                lstBgCarousel[index - 1].classList.remove('carousel__bg--hidden')
                //on force la sortie de la boucle pou faire l'opértion juste une suel fois
                majFait = true;
            }
        }
    );
}


function nextLocation (e) {
    //je récupere tout les bg
    let lstLocationCarousel = document.querySelectorAll('.carousel__location');
    let majFait = false;
    //je parcours ma liste
    lstLocationCarousel.forEach(
        function (item, index) {
            //si je ne retrouve pas la classe carousel__bg--hidden, je lui ajoute et je la retire pour le suivant
            if (item.classList.contains('carousel__location--hidden') === false && majFait === false) {
                //si je suis à l'index maximal => je retourne à 0 sinon je vais au suivant
                if (index === lstLocationCarousel.length - 1) {
                    index = 0;
                }
                //je retire la clas carousel__bg--hidden du bg actuel 
                item.classList.add('carousel__location--hidden');
                // j'ajoute carousel__bg--hidden au suivant
                lstLocationCarousel[index + 1].classList.remove('carousel__location--hidden')
                //on force la sortie de la boucle pou faire l'opértion juste une suel fois
                majFait = true;
            }
        }
    );
}

function nextCarousel() {
    nextBg();
    nextLocation();
}

function previousCarousel() {
    previousBg();
    previousLocation();
}

document.getElementsByClassName('carousel__btn--next')[0].addEventListener('click',nextCarousel);

document.getElementsByClassName('carousel__btn--previous')[0].addEventListener('click',previousCarousel);

