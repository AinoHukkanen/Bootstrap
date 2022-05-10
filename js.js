let p = document.querySelector("p");
let button = document.getElementById("lajitteluhattu");


p.addEventListener("mouseenter", changeColor);
p.addEventListener("mouseleave", changeColor);
button.addEventListener("click", tylypahka);

function changeColor() {

    p.classList.toggle("textcolor");
}

function lajitteluhattu() {
   document.getElementById("tupa").innerHTML = "Hienoa, löysit lajitteluhatun! Mihinköhän tupaan sinä kuuluisit?";
}
function tylypahka(){
    document.getElementById("tupa1").innerHTML = "Hienoa, löysit Tylypahkan! Milloinkohan sinä saat oman kirjeesi?";
}













