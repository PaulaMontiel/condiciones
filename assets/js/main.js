//functions diferent parts
//function visibility part1
const part1 = document.querySelector('#part1')
const part2 = document.querySelector('#part2')
const part3 = document.querySelector('#part3')

function party1() {
    if (part1.style.display === "none") {
        part1.style.display = "flex";
        part2.style.display = "none";
        part3.style.display = "none";
    } else {
        part1.style.display = "none";
        part2.style.display = "flex";
        part3.style.display = "none";
    }
}
//function part2
function party2() {

    if (part2.style.display === "none") {
        part2.style.display = "flex";
        part1.style.display = "none";
        part3.style.display = "none";
    
    } else {
        part2.style.display = "none";
        part1.style.display = "flex";
        part3.style.display = "none";
    }
}
//function part 3
function party3() {
    if (part3.style.display === "none") {
        part3.style.display = "flex";
        part2.style.display = "none";
        part1.style.display = "none";
    } else {
        part3.style.display = "none";
        part2.style.display = "flex";
        part1.style.display = "none";
    }
}


// part 1 
/// border function

function redBorder() {
    let  moon = document.querySelector(".sticker-1");
    console.log(moon.style.borderColor);
    if(moon.style.borderColor != "" ){
        moon.style.borderColor = "";
    } else  {
        moon.style.borderColor = "red"
    }

}
//part2

function verification(){
    let sticker1 = document.querySelector('#s1').value
    let sticker2 = document.querySelector('#s2').value
    let sticker3 = document.querySelector('#s3').value
    let result = document.querySelector('.result')
    let total = parseInt(sticker1)+ parseInt(sticker2)+ parseInt(sticker3)
    if ( total > 10){
        result.innerHTML = "Llevas demasiados stickers.";
        result.style.color = "#f5c"
    } else {
        result.innerHTML = "Llevas"+ " " + total + " "+" stickers.";

    }
    console.log(total)
}

//part3

function correct(){
    let num1 = document.querySelector('#num-1').value
    let num2 = document.querySelector('#num-2').value
    let num3 = document.querySelector('#num-3').value
    let total = num1 + num2 + num3
    let final = document.querySelector('#final')

    if (total === "911"){
        final.innerHTML = "password 1 correcto"
    } else if(total === "714") {
        final.innerHTML = "password 2 correcto"
    } else {
            final.innerHTML = "password Incorrecto! "
            final.style.color = "#f5c"
    }

}

