
const parametroId = new URLSearchParams(window.location.search);
const atletaId = parametroId.get('id');

const urlEndpoint = `https://botafogo-atletas.mange.li/${atletaId}`;

const fazerCartao = (atleta) => {

    const nomeAtleta = atleta.nome;
    const nomeCompleto = atleta.nome_completo;
    const posicao = atleta.posicao;
    const imagem = atleta.imagem;
    const descricao = atleta.descricao;
    const nascimento = atleta.nascimento;
    const altura = atleta.altura;

    const imgJog = document.getElementById("imgJog");
    imgJog.src = imagem;

    const nomeJog = document.getElementById("nomeJog");
    nomeJog.innerHTML = nomeAtleta;

    const posJog = document.getElementById("posJog");
    posJog.innerHTML = posicao;

    const descricaoJog = document.getElementById("descricaoJog");
    descricaoJog.innerHTML = `${descricao}`;

    const nomeCJog = document.getElementById("nomeCJog");
    nomeCJog.innerHTML = `Nome completo: ${nomeCompleto}`;

    const nascimentoJog = document.getElementById("nascimentoJog");
    nascimentoJog.innerHTML = `Nascimento: ${nascimento}`

    const alturaJog = document.getElementById("alturaJog");
    alturaJog.innerHTML = `Altura: ${altura}`

};

const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}
const atualizarDivComElenco = async (urlEndpoint) => {
    const entrada = await pegar_coisas(urlEndpoint);
        
        const atletas = Array.isArray(entrada) ? entrada : [entrada];

        for (const atleta of atletas) {
            if (atleta.nome) {
                const cartao = fazerCartao(atleta);
            } else {
                alert("Atleta não Cadastrado volte e escolha um existente!");
            }
        }
}; 
atualizarDivComElenco(urlEndpoint);       


