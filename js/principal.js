console.log("fui carregado de um arquivo.js externo");

var titulo = document.querySelector(".titulo");
titulo.textContent = "Liliane Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValido = true;

if(peso <=0 || peso >= 1000){
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!"
}

if(altura <=0 || altura>=3.00){
    alturaEhValido = false;
    tdImc.textContent ="Altura inválida";
}

if(alturaEhValido && pesoEhValido){
    var imc = peso / (altura * altura);
    
    tdImc.textContent = imc;
}