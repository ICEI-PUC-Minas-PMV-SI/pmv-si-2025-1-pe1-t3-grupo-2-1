import { setActiveItemColecao, editItemColecao } from "./item/item-colecao.js";

function voltarDetalhesItem() {
    window.location.href ="../item/detalhes.html";
}

// TODO: implementar logica de salvar a edição do item
// function salvarEdicaoItem() {
//     const nome = document.getElementById("nome").value;
//     const descricao = document.getElementById("descricao").value;
//     const categoria = document.getElementById("categoria").value;
//     const imagem = document.getElementById("imagem").value;

//     const item = {
//         id: localStorage.getItem('activeItemColecao'),
//         nome,
//         descricao,
//         categoria,
//         imagem
//     };
//     editItemColecao(item);
//     setActiveItemColecao(item.id);
//     window.location.href ="../item/detalhes.html";
// }


// const btnSalvar = document.getElementById("savebtn");

// btnSalvar.addEventListener("click", salvarEdicaoItem);