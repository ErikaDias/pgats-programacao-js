function voltasNaQuadra(volta, voltasSatisfeito) {

    while (volta <= voltasSatisfeito) {
        console.log(`${volta}º volta de Gamora na quadra...`);
        volta++;
    }
    console.log("Gamora está satisfeita!");
}
voltasNaQuadra(1, 5);