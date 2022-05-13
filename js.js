let p = document.querySelector("p");
let button = document.getElementById("lajitteluhattu");

p.addEventListener("mouseenter", changeColor);
p.addEventListener("mouseleave", changeColor);
button.addEventListener("click", lajitteluhattu);


function changeColor() {

    p.classList.toggle("textcolor");
}

function lajitteluhattu() {
   document.getElementById("tupa").innerHTML = "Hienoa, löysit lajitteluhatun! Mihinköhän tupaan sinä kuuluisit?";
}

let mielipide = document.getElementById("mielipide");
let mielipide1 = document.getElementById("mielipide1");
mielipide.addEventListener("click", mielipideFunktio1);
mielipide1.addEventListener("click", mielipideFunktio2);


function mielipideFunktio1() {
    document.getElementById("mielipidetulos").innerHTML = "Kiva!" //*MIKSEI TOIMI?*//
    
}
function mielipideFunktio2() {
    document.getElementById("mielipidetulos").innerHTML = "No voi harmi!" //*MIKSEI TOIMI?*//
}















