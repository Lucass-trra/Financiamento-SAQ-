import { parcelas } from "./parcelas.js";

export class financiamento {
#taxaJuros; //juros mensais
#prazo;   //em meses 
#parcelas = [];

    constructor(valor,entrada,taxaJuros,prazo) {
        this.#taxaJuros = taxaJuros;
        this.#prazo = prazo;
        //composição
        this.#parcelas.push(new parcelas(0,0,0,0,valor-entrada));
    }

    static calcJuros(valor,taxaJuros) {
        return valor * (taxaJuros / 100);
    }

    calcParcelaMensal() {
        let saldo = this.#parcelas[this.#parcelas.length-1].getSaldo();
        let prazo = this.#prazo - (this.#parcelas.length-1);
        let amortizacao = saldo / prazo;
            for(let loop=1; loop<prazo; loop++) {
                const numero = this.#parcelas.length;
                const juros = financiamento.calcJuros(saldo,this.#taxaJuros);
                const valor = juros + amortizacao;
                saldo -= amortizacao;
                    if(saldo < 0) {
                        saldo =0;
                    }
                this.#parcelas.push(new parcelas(numero,valor,juros,amortizacao,saldo));
            }
    }

    exibeParcelas() {
        const parcelas = this.#parcelas.slice(1);
            for(const parcela of parcelas) {
                const linha = corpoTabela.insertRow(-1);
                        for(const dado of parcela.getDadosFormatados()) {
                            const celula = linha.insertCell(-1);
                            celula.textContent = dado;
                        }
            }
    }
}