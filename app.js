let affiche = document.getElementById("affiche");
let barriere = document.getElementById("barriere");
let basdegrille = document.getElementById("basdegrille");
let fenetre = document.getElementById("fenetre");
let graph = document.getElementById("graph");
let lampe = document.getElementById("lampe");
let marche = document.getElementById("marche");
let portedegarage = document.getElementById("portedegarage");
let toit = document.getElementById("toit");
let mur = document.getElementById("mur");
let soluce = [affiche, barriere , basdegrille, fenetre, graph, lampe, marche, portedegarage, toit, mur];
let counterVal = 0;
let containerSlot = document.querySelector(".slot")
let emojis = ["💪","👌🏻","🏆","🎯"];

console.log(soluce.length);

function fiesta(){

    if (counterVal == "10"){
        for(let i = 0; i<50; i++){
            let confetti = document.createElement("div");
            confetti.innerText = emojis[Math.floor(Math.random()*emojis.length)];
            containerSlot.appendChild(confetti);
        }

        animateConfettis();
    }   
}

function animateConfettis(){


    const TLCONF = gsap.timeline()

    TLCONF
    .to(".slot div",{
        y: "random(-100,100)",
        x: "random(-100,100)",
        z: "random(0,1000)",
        rotation: "random(-90,90)"
    })
    .to(".slot div", { autoAlpha: 0, duration: 2 }, "-=0.2")
    .add(() => {
        containerSlot.innerHTML = "";
    });
}

function reveal(){
    for(let i=0; i < soluce.length; i++) {
      soluce[i].style.opacity = "1";  
      soluce[i].style.transition = "0.5s";
    }
}

function reset(){
    for(let i=0; i < soluce.length; i++) {
      soluce[i].style.opacity = "0";  
      soluce[i].style.transition = "0.5s";
      counterVal = 0;
      updateDisplay(counterVal);
    }
}

function updateDisplay(val) {
    console.log(val);
    document.getElementById("counter-label").innerHTML = val;
}

function incrementClick() {
    console.log("confirm");
    counterVal++;
    updateDisplay(counterVal);
}

function opacityOne(param){
    param.style.opacity = "1";
    param.style.transition = "0.5s";
    incrementClick();
    fiesta();
}

affiche.addEventListener("click", function(){
    opacityOne(affiche);
}, {once : true});

barriere.addEventListener("click",function(){
    opacityOne(barriere);
}, {once : true});

basdegrille.addEventListener("click",function(){
    opacityOne(basdegrille);
}, {once : true});

fenetre.addEventListener("click",function(){
    opacityOne(fenetre);
}, {once : true});

graph.addEventListener("click",function(){
    opacityOne(graph);
}, {once : true});

lampe.addEventListener("click",function(){
    opacityOne(lampe);
}, {once : true});

marche.addEventListener("click",function(){
    opacityOne(marche);
}, {once : true});

portedegarage.addEventListener("click",function(){
    opacityOne(portedegarage);
}, {once : true});

toit.addEventListener("click",function(){
    opacityOne(toit);
}, {once : true});

mur.addEventListener("click",function(){
    opacityOne(mur);
}, {once : true});

