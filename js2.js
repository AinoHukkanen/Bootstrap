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
    document.getElementById("1b").disabled = true;
    document.getElementById("1c").disabled = true;
} else if(document.getElementById("1b").checked) {
    document.getElementById("answer1").innerHTML = "Väärin meni";
    document.getElementById("1a").disabled = true;
	document.getElementById("1c").disabled = true;
} else if(document.getElementById("1c").checked) {
    document.getElementById("answer1").innerHTML = "Väärin meni";
    document.getElementById("1a").disabled = true;
	document.getElementById("1b").disabled = true;
} else {
    document.getElementById("answer1").innerHTML = "Sinun täytyy valita joku vaihtoehdoista."
}
}
function tulokset2() {
    if (document.getElementById("2a").checked) {
        document.getElementById("answer2").innerHTML = "Oikein";
        document.getElementById("2b").disabled = true;
        document.getElementById("2c").disabled = true;
    } else if(document.getElementById("2b").checked){
        document.getElementById("answer2").innerHTML = "Väärin meni";
        document.getElementById("2a").disabled = true;
        document.getElementById("2c").disabled = true;
    } else if(document.getElementById("2c").checked) {
        document.getElementById("answer2").innerHTML = "Väärin meni";
        document.getElementById("2a").disabled = true;
        document.getElementById("2b").disabled = true;
    } else {
        document.getElementById("answer2").innerHTML = "Sinun täytyy valita joku vaihtoehdoista."
    }
}
function tulokset3() {
    if (document.getElementById("3a").checked) {
        document.getElementById("answer3").innerHTML = "Oikein";
        document.getElementById("3b").disabled = true;
        document.getElementById("3c").disabled = true;
    } else if(document.getElementById("3b").checked) {
        document.getElementById("answer3").innerHTML = "Väärin meni";
        document.getElementById("3a").disabled = true;
        document.getElementById("3c").disabled = true;
    }   else if(document.getElementById("3c").checked) {
        document.getElementById("answer3").innerHTML = "Väärin meni";
        document.getElementById("3a").disabled = true;
        document.getElementById("3b").disabled = true;
    } else {
        document.getElementById("answer3").innerHTML = "Sinun täytyy valita joku vaihtoehdoista."
    }

}
function tulokset4() {
    if (document.getElementById("4a").checked) {
        document.getElementById("answer4").innerHTML = "Oikein";
        document.getElementById("4b").disabled = true;
        document.getElementById("4c").disabled = true;
    } else if(document.getElementById("4b").checked) {
        document.getElementById("answer4").innerHTML = "Väärin meni";
        document.getElementById("4a").disabled = true;
        document.getElementById("4c").disabled = true;
    } else if(document.getElementById("4c").checked) {
        document.getElementById("answer4").innerHTML = "Väärin meni";
        document.getElementById("4a").disabled = true;
        document.getElementById("4b").disabled = true;
    } else {
        document.getElementById("answer4").innerHTML = "Sinun täytyy valita joku vaihtoehdoista."
    }

}