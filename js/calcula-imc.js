console.log("fui carregado de um arquivo.js externo");

let titulo = document.querySelector(".titulo");
titulo.textContent = "Liliane Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

// console.log(pacientes)

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];

  let tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;

  let tdAltura = paciente.querySelector(".info-altura");
  let altura = tdAltura.textContent;

  let tdImc = paciente.querySelector(".info-imc");

  let pesoEhValido = validaPeso(peso);
  let alturaEhValido = validaAltura(altura);

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
    let imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  } else {
    tdImc.textContent = "Altura ou peso inválido!";
  }
}

function calculaImc(peso, altura) {
  let imc = 0;
  imc = peso / (altura * altura);
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
