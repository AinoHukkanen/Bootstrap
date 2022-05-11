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

let button2 = document.getElementById("vastaus");
button2.addEventListener("click", tulokset);

function tulokset() {
    alert("testi");
    
}














