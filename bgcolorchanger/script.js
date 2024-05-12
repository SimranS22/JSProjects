const body = document.body;
const rbcg = document.getElementById("rbcg")
const result = document.getElementById("res")
const copyhex = document.getElementById("copyIcon") 

rbcg.addEventListener("click",changeBgColor);
let hexcode;

function changeBgColor(){
    const randColor = getRandColor();
    body.style.backgroundColor=randColor;
}

function getRandColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";

    for(let i=0;i<6;i++){
        color += letters[Math.floor(Math.random()*16)];
        result.innerHTML = "Hexcode: "+color;

    }
    return color;
}
