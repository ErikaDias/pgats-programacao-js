const listaDeBrinquedos = ["Bola", "Osso", "Corda", "Sino"]

function entregarBrinquedos(){
    listaDeBrinquedos.forEach(brinquedo => {
        console.log(`Entregando ${brinquedo}`);
    });
}

entregarBrinquedos();