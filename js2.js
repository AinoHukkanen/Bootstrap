let button1 = document.getElementById("vastaus1");
let button2 = document.getElementById("vastaus2");
let button3 = document.getElementById("vastaus3");
let button4 = document.getElementById("vastaus4");

button1.addEventListener("click", tulokset1);
button2.addEventListener("click", tulokset2);
button3.addEventListener("click", tulokset3);
button4.addEventListener("click", tulokset4);

function tulokset1() {
    if (document.getElementById("1a").checked) {
    document.getElementById("answer1").innerHTML = "Oikein";
} else {
    document.getElementById("answer1").innerHTML = "Väärin meni";
}
}

function tulokset2() {
    if (document.getElementById("2a").checked) {
        document.getElementById("answer2").innerHTML = "Oikein";
    } else {
        document.getElementById("answer2").innerHTML = "Väärin meni";
    }

}
function tulokset3() {
    if (document.getElementById("3a").checked) {
        document.getElementById("answer3").innerHTML = "Oikein";
    } else {
        document.getElementById("answer3").innerHTML = "Väärin meni";
    }

}
function tulokset4() {
    if (document.getElementById("4a").checked) {
        document.getElementById("answer4").innerHTML = "Oikein";
    } else {
        document.getElementById("answer4").innerHTML = "Väärin meni";
    }

}