let prixMystere = determinerPrixMystere(700, 720);
let ok = document.getElementById("btnPlay");
let compteur = 0;

ok.addEventListener("click", leJeu, false);
console.log(prixMystere);

function determinerPrixMystere(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function leJeu() {
    var champSaisi = document.getElementById("input").value;
    if (compteur < 3) {
        calculProposition(champSaisi, prixMystere);
    } else {
        afficherMesssage("message", "c'est perdu !" + " " + prixMystere);
    }

}

function calculProposition(prixPropose, prixATrouve) {

    if (prixPropose < prixATrouve) {
        afficherMesssage("message", "c'est plus !");
        compteur = compteur + 1;
    } else if (prixPropose > prixATrouve) {
        afficherMesssage("message", "c'est moins !");
        compteur = compteur + 1;
    } else {
        afficherMesssage("message", "c'est gagné !");
    }


}

function afficherMesssage(identifiant, messageText) {
    return document.getElementById(identifiant).innerHTML = messageText;
}