

// defnir variaveis
var b;
let a;
const c = 3.14;
//i else ; for switch 
//String, Number , null, undefided

b= 2.0;
console.log("O tipo de variavel B:" + typeof(b));
a=2;
console.log("O tipo de variavel A:" + typeof(a));

if(a==b){
    console.log("O valor esas variavis é igual");
}
if(!(a===b)){
    console.log(" o valor dessa variavei sao diferentes");
}

var itensChurrasco = [];
itensChurrasco.push("costela")
itensChurrasco.push("pão de alho")
itensChurrasco.push("carvão")
itensChurrasco.push("linguiça")
itensChurrasco.push("coca")

for (let i=0; i< itensChurrasco.length-1; i++){

}
itensChurrasco.forEach((e,i) => {
    console.log(i + "-" + e);

})

nome="Theodore Peter James Kinnaird Taptiklis";
console.log(nome.split(""));
/* 
sem "" = [ 'Theodore Peter James Kinnaird Taptiklis' ]
com "" =
[
  'T', 'h', 'e', 'o', 'd', 'o', 'r',
  'e', ' ', 'P', 'e', 't', 'e', 'r',
  ' ', 'J', 'a', 'm', 'e', 's', ' ',
  'K', 'i', 'n', 'n', 'a', 'i', 'r',
  'd', ' ', 'T', 'a', 'p', 't', 'i',
  'k', 'l', 'i', 's'
] */

  console.log(nome.split("").reverse().join(""));
  // silkitpaT drianniK semaJ reteP erodoehT

  // funçao com array
  // reverse , join ,nap

  itensChurrasco.map((e) => {
    console.log(e.length);

  })

  // filter
  console.log(itensChurrasco.filter( ( e,i) => {return i!=3}));


  // filtro para remove os elemenosque coeçem com p
 console.log(itensChurrasco.filter( ( e,i) => {
// quebra as letras do string  se inclui p = ! 
return !e.split("").includes("p");
  
 

 }));
// fazer comunicaçao entre 2 itemas apena usando tt
 console.log(JSON.stringify(itensChurrasco));
  array2=JSON.stringify("[\"bla\",\"bla\"]")
  console.log(array2[1])