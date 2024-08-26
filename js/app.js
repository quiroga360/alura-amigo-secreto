const listaDeAmigosIncluidos = document.querySelector('#lista-amigos');
const listaSorteio = document.querySelector('#lista-sorteio');
const pessoas = [];

const adicionar = () => {

    const amigoInput = document.querySelector('#nome-amigo').value;

    if (amigoInput) {

        if (listaDeAmigosIncluidos.innerHTML) {
            // adicionar a partir do segundo nome na lista
            listaDeAmigosIncluidos.innerHTML = listaDeAmigosIncluidos.innerHTML + ', ' + amigoInput;

        } else {
            // adicionar primeiro nome na lista
            listaDeAmigosIncluidos.innerHTML = listaDeAmigosIncluidos.innerHTML + amigoInput;

        }

        pessoas.push(amigoInput);

    } else {
        // input vazio
        alert('Digite um nome.');

    }

    console.log(pessoas);


};


const sortearAmigo = () => {
    const maxNumber = pessoas.length - 1;
    const minNumber = 0;
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

const sortear = () => {

    const sorteados = [];
    const numeroParDeParticipantes = pessoas.length % 2 === 0;

    if (numeroParDeParticipantes) {

        for (let i = 0; i < pessoas.length; i++) {

            let sorteadoAgora;

            do {

                sorteadoAgora = pessoas[sortearAmigo()];

            } while (pessoas[i] === sorteadoAgora || sorteados.includes(sorteadoAgora));

            sorteados.push(sorteadoAgora);
            listaSorteio.innerHTML = listaSorteio.innerHTML + `${pessoas[i]} presenteia ${sorteadoAgora}<br>`;

        };


    } else {
        alert('Adicione mais um participante.');
    };

};

const reiniciar = () => {
    listaDeAmigosIncluidos.innerHTML = "";
    listaSorteio.innerHTML = "";

    while (pessoas.length > 0) {
        pessoas.pop();
    }

}