let box1;
let box2;
let titre = document.getElementById("titre");
let gauche = document.getElementById("gauche");
let droite = document.getElementById("droite");
let imageGauche = document.getElementById("image-gauche");
let resultatGauche = document.getElementById("resultat-gauche");
let imageDroite = document.getElementById("image-droite");
let resultatDoite = document.getElementById("resultat-droite");
let bouton = document.querySelector(".bouton");
let boutonRejouer = document.querySelector("#bouton-rejouer");
const unTableau = ["pierre", "feuille", "ciseau"];

imageGauche.addEventListener("click", (event) => {
    box1 = randomMachine();
    imageGauche.style.backgroundImage = "url(images-pfc/" + box1 + ".jpg)";
    verifGame();
})
imageDroite.addEventListener("click", (event) => {
    box2 = randomMachine();
    imageDroite.style.backgroundImage = "url(images-pfc/" + box2 + ".jpg)";
    verifGame();
})

function randomMachine() {
    let aleatoire = Math.floor(Math.random() * unTableau.length);
    return unTableau[aleatoire];
}
function verifGame() {
    if (box1 == box2) {
        console.log("faute");
    }
    else if (box1 == "pierre" && box2 == "ciseau") {
        console.log("pierre qui gagne");
    }
    else if (box1 == "pierre" && box2 == "feuille") {
        console.log("pierre qui gagne");
    }
    else if (box1 == "feuille" && box2 == "ciseau") {
        console.log("feuille qui gagne");
    }
    else if (box1 == "feuille" && box2 == "pierre") {
        console.log("feuille qui gagne");
    }
    else if (box1 == "ciseau" && box2 == "pierre") {
        console.log("ciseau qui gagne");
    }
    else if (box1 == "ciseau" && box2 == "feuille") {
        console.log("ciseau qui gagne");
    }
}






// Perso, pour le chifumi, le début du scenario, je dirais :
// Connecté tous les blocks html concernés à des objets, il y en a un paquet.
// Commencer à faire une fonction initialisation ou start, c'est peut-être plus parlant qu'initialisation
// Trouver une manière de stocker ce qui a été jouer à droite et a gauche.
// Rendre les images cliquables.
// Quand tout cela fonctionne, on passe à la suite mais pas avant !!
