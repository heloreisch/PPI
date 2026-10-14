console.log(window.screen)

window.document.body.innerHTML="<p> OLÁ </p>"
window.document.body.style.backgroundColor = "palevioletred"
let div = document.createElement("div");
let pnome = document.createElement("p");

//nome
div.appendChild(document.createElement("br"));
let temp= document.createElement("input");
pnome.innerHTML= "informe su nombre"
div.appendChild(pnome);
document.body.appendChild(div);
temp.id = "inputNome"
div.appendChild(temp)

// peso
div.appendChild(document.createElement("br"));
temp=document.createElement("label");
temp.innerHTML = " informe su peso"
div.appendChild(temp);
temp=document.createElement("input");
temp.id= "inputPeso"
div.appendChild(temp)

// altura
div.appendChild(document.createElement("br"));
temp=document.createElement("label");
temp.innerHTML = " informe su altura"
div.appendChild(temp);
temp=document.createElement("input");
temp.id= "inputAltura"
div.appendChild(temp)


// botao
div.appendChild(document.createElement("br"));
tmp = document.createElement("button");
tmp.id= "btnCalcular"
tmp.innerHTML= "calcular"
div.append(tmp)


tmp.addEventListener("click", () =>{
    temp.innerHTML = " su imc es:"
    inputPeso=document.getElementById("inputPeso")
    inputAltura=document.getElementById("inputAltura")
    peso=Number.parseFloat(inputPeso.value)
     altura=Number.parseFloat(inputAltura.value)
     imc= peso/(altura*altura);
     console.log(imc)
     result = document.createElement("p")
    result.innerHTML = imc
    div.appendChild(result);


})