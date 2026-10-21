let h3titulo = document.getElementById("titulo");
//h3titulo.innerHTML = "I62026"

let h3 = document.createElement("h3")
//h3.innerHTML="ola"
document.body.appendChild(h3)
let p = document.getElementById("imc")
p.innerHTML = "IMC"
let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
let calcular = document.querySelector("#btn")
let  pimc = document.querySelector("#IMC")
let  d = document.querySelector("#descricao")
let  img = document.querySelector("#img")


calcular.addEventListener("click", () =>{

let peso = Number.parseFloat(inputPeso.value)
console.log(typeof(peso))
let altura = Number.parseFloat(inputAltura.value)

let imc = peso/ (altura*altura)
console.log(imc)
pimc.innerHTML = imc


if(imc < 18.5 ){
    d.innerHTML = "Abaixo peso"
    img.innerHTML = '<img src= "../teste/imgIMC/abaixopeso.png" >'
}
if(imc >= 18.5 && imc < 25){
    d.innerHTML ="peso normal"
     img.innerHTML = '<img src= "../teste/imgIMC/normal.png" >'

} else if(imc>=25 && imc <30){
   d.innerHTML ="Sobrepeso"
    img.innerHTML = '<img src= "../teste/imgIMC/sobrepeso.png" >'
}
 else if(imc>=30 && imc <35){
   d.innerHTML ="Obesidade grau I"
    img.innerHTML = '<img src= "../teste/imgIMC/obesidade1.png" >'
 }

 else if(imc>=35 && imc <40){
  d.innerHTML =" Obesidade grau II (severa)"
  img.innerHTML = '<img src= "../teste/imgIMC/obesidade2.png" >'
 }
 else if( imc > 40){
    d.innerHTML =" Acima de 40: Obesidade grau III (mórbida)"
    img.innerHTML = '<img src= "../teste/imgIMC/obesidade3.png" >'
 }

 });

 

