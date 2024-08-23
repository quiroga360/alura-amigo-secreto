const listaDeAmigosIncluidos = document.querySelector('#lista-amigos');

const adicionar = () => {

    const amigoInput = document.querySelector('#nome-amigo').value;

    if (amigoInput) {

        if (listaDeAmigosIncluidos.innerHTML) {
            // adicionar a aprtir do segundo nome na lista
            listaDeAmigosIncluidos.innerHTML = listaDeAmigosIncluidos.innerHTML + ', ' + amigoInput;

        } else {
            // adicionar primeiro nome na lista
            listaDeAmigosIncluidos.innerHTML = listaDeAmigosIncluidos.innerHTML + amigoInput;

        }

    } else {
        // input vazio
        alert('Digite um nome.');

    }

};

const sortear = () => {

    if (listaDeAmigosIncluidos.innerHTML) {
        // criar array com nomes para sortear
        const nomesParaSortear = listaDeAmigosIncluidos.innerHTML.split(', ');

        // o maior número sorteado deve ser igual ao tamanho do array (último índice)
        const valorMaximo = nomesParaSortear.length - 1;

        // o menor número sorteado deve ser igual a zero (primeiro índice do array)
        const valorMinimo = 0;

        

        const sorteio = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1) + valorMinimo);
        console.log(sorteio);
        

        //const limiteSorteio = nomesParaSortear.length;
        alert(nomesParaSortear[sorteio])

    } else {
        alert('Sem nomes para sortear');
    }



}