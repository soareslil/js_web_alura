let pacientesAll = document.querySelectorAll(".paciente");

let tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    let alvoEvento = event.target;
    let paiDoAlvo = alvoEvento.parentNode;
    paiDoAlvo.classList.add("fadeOut");

    setTimeout(function(){
    paiDoAlvo.remove();
    }, 800);
});