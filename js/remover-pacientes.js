let pacientesAll = document.querySelectorAll(".paciente");

pacientesAll.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log('duplo clique aqui');
        this.remove();
    });
});