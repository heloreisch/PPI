
let nome = "romulo";
var sobreNome;

if( nome == "romulo"){

var sobreNome="beninca";
let idade = 30;
var pet = "dog";
console.log ("nome: "+nome+" sobrenome: "+ sobreNome+ " idade: "+idade+" pet: "+pet);
}

//node.exe js/javascript.js
let idade = 20;
//estrutura de seleção 
if( idade == 20){
    console.log("nome: "+nome)
} else {
    console.log("nome: "+ "gustavo")
}

if( idade == "20"){
    console.log("A")
} if( idade === "20"){ // boueou para fazr  convrao entao ele se torna tring
    console.log("B");
}

peso=50
altura=1.77
imc=peso/(altura*altura)
// classique do mc
/*• Abaixo de 18,5: Abaixo do peso
• 18,6 a 24,9: Peso normal ou ideal
• 25 a 29,9: Sobrepeso
• 30 a 34,9: Obesidade grau I
• 35 a 39,9: Obesidade grau II (severa)
• Acima de 40: Obesidade grau III (mórbida */

if(imc < 18.5 ){
    console.log(" Abaixo peso")
}
if(imc >= 18.5 && imc < 25){
    console.log("peso normal")

} else if(imc>=25 && imc <30){
    console.log("Sobrepeso")
}
 else if(imc>=30 && imc <35){
    console.log("Obesidade grau I")
 }

 else if(imc>=35 && imc <40){
    console.log("Obesidade grau II (severa)")
 }
 else if( imc > 40){
    console.log(" Acima de 40: Obesidade grau III (mórbida)")
 }

 

// swutch case estrutura de sleção 
a=2

switch(a){
case 1: console.log("A");
break
case 2: console.log("B");
break
case 3: console.log("C");
break
default: console.log("D")
}

switch(a){
case  a**a==4: console.log("A");
break
// el retorna true por isso da defuly
case a==2: console.log("B");
break
case 3==3: console.log("C");
break
default: console.log("D")
}


//estrutua de repetição whilwE

let i=0;
while(i<5){
    console.log(i);
    i++
}

//for

for(let i= 0; i<5; i++){
    console.log(i);
}

//array
let carnes= ["picanha", "costela", "alcatra", "fraldinha"];
carnes.forEach(  (v1) => {
    console.log(v1 + "index:"+index);
} )
// função anonima 