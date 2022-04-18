console.log("fui carregado de um arquivo.js externo");

var titulo = document.querySelector(".titulo");
titulo.textContent = "Liliane Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

// console.log(pacientes)

for(var i =0; i<pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = true;
    var alturaEhValido = true;
    
    if(peso <=0 || peso >= 1000){
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    
    if(altura <=0 || altura>=3.00){
        alturaEhValido = false;
        tdImc.textContent ="Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    
    if(alturaEhValido && pesoEhValido){
        var imc = peso / (altura * altura);
        
        tdImc.textContent = imc.toFixed(2);
    }else{
        tdImc.textContent = "Altura ou peso inválido!"
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    console.log('oi cliquei no botao');
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value; 
    var peso = form.peso.value ;
    var altura = form.altura.value ; 
    var gordura = form.gordura.value;
    
     console.log(nome, peso, altura, gordura);

     var pacienteTr = document.createElement("tr");

     var nomeTd = document.createElement("td");
     var pesoTd = document.createElement("td");
     var alturaTd = document.createElement("td");
     var gorduraTd = document.createElement("td");
     var imcTd = document.createElement("td");
 
    nomeTd.textContent = nome;
     pesoTd.textContent = peso;
     alturaTd.textContent = altura;
     gorduraTd.textContent = gordura;


     pacienteTr.appendChild(nomeTd);
     pacienteTr.appendChild(pesoTd);
     pacienteTr.appendChild(alturaTd);
     pacienteTr.appendChild(gorduraTd);

     console.log(pacienteTr);

     var tabela = document.querySelector("#tabela-pacientes");

     tabela.appendChild(pacienteTr);;




    });


titulo.addEventListener("click", function(){
    console.log('clickado');
})