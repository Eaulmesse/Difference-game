let boulon = document.getElementById("boulon");
let cable = document.getElementById("cable");
let coupelle = document.getElementById("coupelle");
let marron = document.getElementById("marron");
let metal2 = document.getElementById("metal2");
let nez = document.getElementById("nez");
let piecemetal = document.getElementById("piecemetal");
let plumage = document.getElementById("plumage");
let tige = document.getElementById("tige");


let soluce = [boulon, cable , coupelle, marron, metal, metal2, nez, piecemetal, plumage, tige];
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
    location.reload();
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

boulon.addEventListener("click", function(){
    opacityOne(boulon);
}, {once : true});

cable.addEventListener("click", function(){
    opacityOne(cable);
}, {once : true});

coupelle.addEventListener("click", function(){
    opacityOne(coupelle);
}, {once : true});

marron.addEventListener("click", function(){
    opacityOne(marron);
}, {once : true});

metal.addEventListener("click", function(){
    opacityOne(metal);
}, {once : true});

metal2.addEventListener("click", function(){
    opacityOne(metal2);
}, {once : true});

nez.addEventListener("click", function(){
    opacityOne(nez);
}, {once : true});

piecemetal.addEventListener("click", function(){
    opacityOne(piecemetal);
}, {once : true});

tige.addEventListener("click", function(){
    opacityOne(tige);
}, {once : true});

plumage.addEventListener("click", function(){
    opacityOne(plumage);
}, {once : true});