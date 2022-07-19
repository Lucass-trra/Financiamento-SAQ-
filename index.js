import { financiamento } from "./financiamento.js";

const comCarenciaInput = document.querySelector("#comCarencia");
const comCarenciaSelect = document.querySelector("#opcoesCarencia");
const corpoTabela = document.querySelector("#corpoTabela");
const calcBotao = document.querySelector("#calcBotao");
const textoValor = document.querySelector("#textoValor");
const textoEntrada = document.querySelector("#textoEntrada");
const textoJuros = document.querySelector("#textoJuros");
const textoTempo = document.querySelector("#textoTempo");


comCarenciaInput.addEventListener("change",function(){
    if(this.checked) {
        comCarenciaSelect.removeAttribute("hidden");

    }else {
        comCarenciaSelect.setAttribute("hidden","hidden");
    }
})

calcBotao.addEventListener("click",function() {
    const valor = parseFloat(textoValor.value);
    const entrada = parseFloat(textoEntrada.value);
    const juros = parseFloat(textoJuros.value);
    const tempo = parseFloat(textoTempo.value);
        let simulacao;
        simulacao = new financiamento(valor,entrada,juros,tempo);
        simulacao.calcParcelaMensal();
        simulacao.exibeParcelas();
})
