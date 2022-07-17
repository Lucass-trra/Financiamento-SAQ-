const comCarenciaInput = document.querySelector("#comCarencia");
const comCarenciaSelect = document.querySelector("#opcoesCarencia");

comCarenciaInput.addEventListener("change",function(){
    if(this.checked) {
        comCarenciaSelect.removeAttribute("hidden");

    }else {
        comCarenciaSelect.setAttribute("hidden","hidden");
    }
});