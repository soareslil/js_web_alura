console.log("fui carregado de um arquivo.js externo");

var titulo = document.querySelector(".titulo");
titulo.textContent = "Liliane Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

// console.log(pacientes)

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var alturaEhValido = validaAltura(altura);

  if (!pesoEhValido) {
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValido) {
    alturaEhValido = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }

  if (alturaEhValido && pesoEhValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  } else {
    tdImc.textContent = "Altura ou peso inválido!";
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso < 500){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura < 3.0){
        return true;
    }else{
        return false;
    }
}



titulo.addEventListener("click", function () {
  console.log("clickado");
});
