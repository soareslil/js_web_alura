console.log("console do arquivo buscar-pacientes")
let buttonAdicionar = document.querySelector("#buscar-pacientes");

buttonAdicionar.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        let resposta = xhr.responseText;
        let pacientes = JSON.parse(resposta);
        
        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
        })
    });

    xhr.send();
})