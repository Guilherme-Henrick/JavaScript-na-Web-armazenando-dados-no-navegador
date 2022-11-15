const form = document.querySelector("#novoItem");
const lista = document.getElementById('lista');
const itens = [];

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements[0];
    const quantidade = evento.target.elements[1];

    criaElemento(nome.value, quantidade.value);

    nome.value = "";
    quantidade.value = "";

});

function criaElemento(nome, quantidade) {
/* <li class="item"><strong>7</strong>Camisas</li> */

    const novoItem = document.createElement('li');
    const numeroItem = document.createElement('strong');

    novoItem.classList.add("item");

    numeroItem.innerHTML = quantidade;
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual);

    localStorage.setItem("item", JSON.stringify(itens));
};