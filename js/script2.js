let h3titulo = document.getElementById("titulo");
h3titulo.innerHTML = "I62026"

let h3 = document.createElement("h3")
//h3.innerHTML="ola"
document.body.appendChild(h3)
let p = document.getElementById("imc")
p.innerHTML = "IMC"
let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
let calcular = document.querySelector("#btn")
let  pimc = document.querySelector("#IMC")
 
calcular.addEventListener("click", () =>{

let peso = Number.parseFloat(inputPeso.value)
console.log(typeof(peso))
let altura = Number.parseFloat(inputAltura.value)

let imc = peso/ (altura*altura)
console.log(imc)
pimc.innerHTML = imc

 });

