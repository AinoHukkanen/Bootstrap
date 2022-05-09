let p = document.querySelector("p");
let button = document.getElementById("lajitteluhattu");


p.addEventListener("mouseenter", changeColor);
p.addEventListener("mouseleave", changeColor);
button.addEventListener("click", lajitteluhattu);
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










function vastaus() {

    if(document.getElementById("1a").checked) {
         document.getElementById("results").innerHTML = " OIKEA VASTAUS "
         document.getElementById("submit").disabled = true;
         document.getElementById("1b").disabled = true;
         document.getElementById("1c").disabled = true;
    
    if(document.getElementById("2a").checked) {
            document.getElementById("results").innerHTML = " OIKEA VASTAUS "
            document.getElementById("submit").disabled = true;
            document.getElementById("2b").disabled = true;
            document.getElementById("2c").disabled = true;


    if(document.getElementById("3a").checked) {
                document.getElementById("results").innerHTML = " OIKEA VASTAUS "
                document.getElementById("submit").disabled = true;
                document.getElementById("3b").disabled = true;
                document.getElementById("3c").disabled = true;

    if(document.getElementById("4a").checked) {
                    document.getElementById("results").innerHTML = " OIKEA VASTAUS "
                    document.getElementById("submit").disabled = true;
                    document.getElementById("4b").disabled = true;
                    document.getElementById("4c").disabled = true;

    }
}
    }
}
}
