let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value)
    let pacientes = document.querySelectorAll(".paciente");
 
    for( let i = 0; i < pacientes.length; i++){
        let paciente = pacientes[i];
        let tdNome = paciente.querySelector(".info-nome");
        let nome = tdNome.textContent;
        console.log(nome)
    }

})