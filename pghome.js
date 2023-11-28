document.addEventListener("DOMContentLoaded", function() {
    verificarAutenticacao();
});


const verificarAutenticacao = () => {
    const autorizado = localStorage.getItem("autorizado");
    if(autorizado !== "true"){
        alert("Usuario não cadastrado, Efetue o login e tente novamente!");
        window.location = './index.html';
    }
}


const selectOp = () => {
    const select = document.getElementById("escolherElenco");
    const opcaoSelecionada = select.options[select.selectedIndex].value;

    if(opcaoSelecionada === "nulo"){
        window.location = "./home.html"
    }

    if (opcaoSelecionada === "elencoCompleto"){
        elencoT();
    }
    if (opcaoSelecionada === "masculino"){
        elencoM();
    }
    if (opcaoSelecionada === "feminino"){
        elencoF();
    }

}

const fazerCartao = (atleta) => {
    const container = document.createElement('article');
    const titulo = document.createElement('h3');
    const imagem = document.createElement('img');
    const saibaMais = document.createElement('p');
    saibaMais.classList.add("playerCard")
    container.classList.add("contCard")
    
    saibaMais.style.color = 'white';
    saibaMais.style.margin = '2px';
    saibaMais.style.padding = '1em';




    container.style.width = 'min-content';
    container.style.backgroundColor = 'grey';
    container.style.textAlign = 'center';
    container.style.margin = 'auto';
    container.style.padding ='0.5em';
    container.style.cursor = 'pointer';

    container.dataset.id = atleta.id;
    container.dataset.altura = atleta.altura;
    container.dataset.nome_completo = atleta.nome_completo;
    container.dataset.nascimento = atleta.nascimento;

    titulo.innerHTML = atleta.nome;
    imagem.src = atleta.imagem;
    imagem.alt = `foto de ${atleta.nome}`;
    saibaMais.innerHTML = 'Saiba mais!';

    container.appendChild(titulo);
    container.appendChild(imagem);
    container.appendChild(saibaMais);

    return container;
};

const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}
const atualizarDivComElenco = async (urlEndpoint, containerDiv) => {
    const entrada = await pegar_coisas(urlEndpoint);

    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }

    for (const atleta of entrada) {
        const cartao = fazerCartao(atleta);
        containerDiv.appendChild(cartao);
    }
};



const elencoT = () =>{
    const urlEndpoint = "https://botafogo-atletas.mange.li/all"

    const containerDiv = document.getElementById('containerCartoes');

    if (containerDiv) {
        atualizarDivComElenco(urlEndpoint, containerDiv);
        
        containerDiv.addEventListener('click', (event) => {
            const clickedCard = event.target.closest('article');
            if (clickedCard) {
                const atletaId = clickedCard.dataset.id;
                redirecionarParaPaginaAtleta(atletaId);
            }
        });
    }
}




const elencoM = () =>{
    const urlEndpoint = "https://botafogo-atletas.mange.li/masculino"

    const containerDiv = document.getElementById('containerCartoes');

    if (containerDiv) {
        atualizarDivComElenco(urlEndpoint, containerDiv);
        
        containerDiv.addEventListener('click', (event) => {
            const clickedCard = event.target.closest('article');
            if (clickedCard) {
                const atletaId = clickedCard.dataset.id;
                redirecionarParaPaginaAtleta(atletaId);
            }
        });
    }

}
const elencoF = () =>{
    const urlEndpoint = "https://botafogo-atletas.mange.li/feminino"

    const containerDiv = document.getElementById('containerCartoes');

    if (containerDiv) {
        atualizarDivComElenco(urlEndpoint, containerDiv);
        
        containerDiv.addEventListener('click', (event) => {
            const clickedCard = event.target.closest('article');
            if (clickedCard) {
                const atletaId = clickedCard.dataset.id;
                redirecionarParaPaginaAtleta(atletaId);
            }
        });
    }

  
}   
const redirecionarParaPaginaAtleta = (atletaId) => {
    const paginaAtletaURL = `detalhes.html?id=${atletaId}`;
    window.location.href = paginaAtletaURL;
};


const botaoSair = () => {
    localStorage.removeItem("autorizado");
    console.log("Login retirado");
    window.location = './index.html'
}