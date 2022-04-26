console.log("console do arquivo buscar-pacientes")
let buttonAdicionar = document.querySelector("#buscar-pacientes");

buttonAdicionar.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
           
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);
            
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            })
        }else{
            let erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
})