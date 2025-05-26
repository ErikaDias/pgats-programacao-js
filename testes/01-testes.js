import { exibirNomeDogFormatado } from "../Conceitos/testes-de-unidade.js";
import assert from "node:assert";

describe("Teste do Projeto", () => {
    it("Exibir o nome formatado", () => {
        assert.strictEqual(exibirNomeDogFormatado("dog"), "DOG");
    });

    it("primeiro teste", () => {});

    it("segundo teste", () => {});
});