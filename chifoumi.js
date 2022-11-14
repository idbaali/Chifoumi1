let box1;
let box2;
let titre = document.getElementById("titre");
let gauche = document.getElementById("gauche");
let droite = document.getElementById("droite");
let imageGauche = document.getElementById("image-gauche");
let resultatGauche = document.getElementById("resultat-gauche");
let imageDroite = document.getElementById("image-droite");
let resultatDroite = document.getElementById("resultat-droite");
let bouton = document.querySelector(".bouton");
let boutonRejouer = document.querySelector("#boutonRejouer");
const unTableau = ["pierre", "feuille", "ciseau"];

imageGauche.addEventListener("click", (event) => {
    box1 = randomMachine();
    imageGauche.style.backgroundImage = "url(images-pfc/" + box1 + ".jpg)";
    imageGauche.style.pointerEvents = "none";
    resultatGauche.textContent = box1;
    verifGame();
})
imageDroite.addEventListener("click", (event) => {
    box2 = randomMachine();
    imageDroite.style.backgroundImage = "url(images-pfc/" + box2 + ".jpg)";
    imageDroite.style.pointerEvents = "none";
    resultatDroite.textContent = box2;
    verifGame();
})

boutonRejouer.addEventListener("click", (event) => {
    start();
    // boutonRejouer.style.pointerEvents = "green";
})

window.addEventListener("load", (event) => {
    start();
})

function start() {
    titre.textContent = "Chifoumi";
    resultatGauche.textContent = "";
    resultatDroite.textContent = "";
    gauche.style.backgroundColor = "gray";
    droite.style.backgroundColor = "gray";
    boutonRejouer.style.display = "none";
    imageGauche.style.pointerEvents = "initial";
    imageDroite.style.pointerEvents = "initial";
    imageGauche.style.backgroundImage = "url(./images-pfc/depart.jpg)";    //CSS
    imageDroite.style.backgroundImage = "url(./images-pfc/depart.jpg)";
}
function randomMachine() {
    let aleatoire = Math.floor(Math.random() * unTableau.length);       // Un nombre entre 0 et 3 :   let x = Math.random();
    return unTableau[aleatoire];                                       //Renvoie un nombre aléatoire entre 0 et 100 :   let x = Math.random() * 100;
}                                                                     //Un nombre entier aléatoire entre 1 et 10 :     let x = Math.floor((Math.random() * 10) + 1);
function verifGame() {
    if (box1 == box2) {
        titre.textContent = "Egalité !!";
        boutonRejouer.style.display = "initial";
        box1 = box2 = "";
    }
    else if (box1 == "pierre" && box2 == "ciseau") {
        titre.textContent = "La pierre casse le ciseau !";
        resultatGauche.textContent = "Gagné!";
        resultatDroite.textContent = "Perdu!";
        gauche.style.backgroundColor = "green";
        droite.style.backgroundColor = "red";
        boutonRejouer.style.display = "initial";
        box1 = box2 = "";
    }
    else if (box1 == "pierre" && box2 == "feuille") {
        titre.textContent = "La feuille enveloppe la pierre!";
        resultatGauche.textContent = "Perdu!";
        resultatDroite.textContent = "Gagné!";
        gauche.style.backgroundColor = "red";
        droite.style.backgroundColor = "green";
        boutonRejouer.style.display = "initial";
        box1 = box2 = "";
    }
    else if (box1 == "feuille" && box2 == "ciseau") {
        titre.textContent = "le ciseau coupe la feuille!";
        resultatGauche.textContent = "Perdu!";
        resultatDroite.textContent = "Gagné!";
        gauche.style.backgroundColor = "red";
        droite.style.backgroundColor = "green";
        boutonRejouer.style.display = "initial";
        box1 = box2 = "";
    }
    else if (box1 == "feuille" && box2 == "pierre") {
        titre.textContent = "La feuille enveloppe la pierre !";
        resultatGauche.textContent = "Gagné!";
        resultatDroite.textContent = "Perdu!";
        gauche.style.backgroundColor = "green";
        droite.style.backgroundColor = "red";
        boutonRejouer.style.display = "initial";
        box1 = box2 = "";
    }
    else if (box1 == "ciseau" && box2 == "pierre") {
        titre.textContent = "La pierre casse le ciseau!";
        resultatGauche.textContent = "Perdu!";
        resultatDroite.textContent = "Gagné!";
        gauche.style.backgroundColor = "red";
        droite.style.backgroundColor = "green";
        boutonRejouer.style.display = "initial";
        box1 = box2 = "";
    }
    else if (box1 == "ciseau" && box2 == "feuille") {
        titre.textContent = "Le ciseau coupe la feuille!";
        resultatGauche.textContent = "Gagné!";
        resultatDroite.textContent = "Perdu!";
        gauche.style.backgroundColor = "green";
        droite.style.backgroundColor = "red";
        boutonRejouer.style.display = "initial";
        box1 = box2 = "";
    }
}






// Perso, pour le chifumi, le début du scenario, je dirais :
// Connecté tous les blocks html concernés à des objets, il y en a un paquet.
// Commencer à faire une fonction initialisation ou start, c'est peut-être plus parlant qu'initialisation
// Trouver une manière de stocker ce qui a été jouer à droite et a gauche.
// Rendre les images cliquables.
// Quand tout cela fonctionne, on passe à la suite mais pas avant !!
