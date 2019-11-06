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
    if (compteur < 2) {
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
        afficherMesssage("message", "C'est gagné !");
    }


}

function afficherMesssage(identifiant, messageText) {
    return document.getElementById(identifiant).innerHTML = messageText;
}