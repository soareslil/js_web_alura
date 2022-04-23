let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  // console.log("oi cliquei no botao");
  event.preventDefault();

  let form = document.querySelector("#form-adiciona");

  //extraindo informacoes do paciente do form
  let paciente = obtemPacienteDoFormulario(form);

  //cria a tr e a td do paciente

  let pacienteTr = montaTr(paciente);

  let erros = validaPaciente(paciente);
  console.log(erros);

  if(erros.length >0){
    exibeMensagensDeErro(erros);
    return ;
  }

  // adicionando o paciente na tabela
  let tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  form.reset();
  let mensagensErro = documenent.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";


});

function exibeMensagensDeErro(erros){
  let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
   erros.forEach(function(erro){
    let li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  })
}

function obtemPacienteDoFormulario(form) {
  let paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  return paciente;
}

function montaTr(paciente) {
  let pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente){

  let erros = [];

  if(paciente.nome.length == 0){
    erros.push("O campo NOME não pode ser em branco!");
  }

  if(!validaPeso(paciente.peso)){
    erros.push("Peso é inválido!")
  }

  if(!validaAltura(paciente.altura)){
    erros.push("Altura é inválida!")
  }

  if(paciente.peso.length == 0){
    erros.push("O campo PESO não pode ser em branco!");
  }

  if(paciente.altura.length == 0){
    erros.push("O campo ALTURA não pode ser em branco!");
  }

  if(paciente.gordura.length == 0){
    erros.push("O campo GORDURA não pode ser em branco!");
  }

  return erros;
}