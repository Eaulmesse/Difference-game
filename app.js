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

console.log(affiche);

function opacityOne(param){
    param.style.opacity = "1";
    param.style.transition = "0.5s";
}

affiche.addEventListener("click",function(){
    opacityOne(affiche);
});

barriere.addEventListener("click",function(){
    opacityOne(barriere);
});

basdegrille.addEventListener("click",function(){
    opacityOne(basdegrille);
});

fenetre.addEventListener("click",function(){
    opacityOne(fenetre);
});

graph.addEventListener("click",function(){
    opacityOne(graph);
});

lampe.addEventListener("click",function(){
    opacityOne(lampe);
});

marche.addEventListener("click",function(){
    opacityOne(marche);
});

portedegarage.addEventListener("click",function(){
    opacityOne(portedegarage);
});

toit.addEventListener("click",function(){
    opacityOne(toit);
});

mur.addEventListener("click",function(){
    opacityOne(mur);
});

