import { parcelas } from "./parcelas";

class financiamento {
#taxaJuros; //juros mensais
#prazo;   //em meses 
#parcelas = [];

    constructor(valor,entrada,taxaJuros,prazo) {
        this.#taxaJuros = taxaJuros;
        this.#prazo = prazo;
        this.#parcelas.push(parcelas());

    };
}