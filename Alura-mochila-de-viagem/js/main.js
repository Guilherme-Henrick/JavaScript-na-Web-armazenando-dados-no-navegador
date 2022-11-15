const form = document.querySelector("#novoItem");
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem("itens") || []);

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements[0];
    const quantidade = evento.target.elements[1];

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElemento(itemAtual);

    itens.push(itemAtual);

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
});

function criaElemento(item) {
/* <li class="item"><strong>7</strong>Camisas</li> */
    const novoItem = document.createElement('li');
    const numeroItem = document.createElement('strong');

    novoItem.classList.add("item");

    numeroItem.innerHTML = item.quantidade;
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);
};