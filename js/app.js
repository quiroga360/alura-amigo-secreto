const listaDeAmigos = [];
const listaDeAmigosIncluidos = document.querySelector('#lista-amigos');

const adicionar = () => {

    console.log(listaDeAmigosIncluidos);
    
    console.log(listaDeAmigos);
    
    const amigoInput = document.querySelector('#nome-amigo').value;
    console.log(amigoInput);

    if (amigoInput) {

        listaDeAmigos.push(amigoInput);

        console.log(listaDeAmigos);
        console.log(listaDeAmigosIncluidos.innerHTML);

        

    } else {
        alert('Digite um nome.');
    }

    
    

}