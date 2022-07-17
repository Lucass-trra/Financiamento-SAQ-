import { parcelas } from "./parcelas";

class financiamento {
#taxaJuros; //juros mensais
#prazo;   //em meses 
#parcelas = [];

    constructor(valor,entrada,taxaJuros,prazo) {
        this.#taxaJuros = taxaJuros;
        this.#prazo = prazo;
        //composição
        this.#parcelas.push(parcelas(0,0,0,0,valor-entrada));
    };
}