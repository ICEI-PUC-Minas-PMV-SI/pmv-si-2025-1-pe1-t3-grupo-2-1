import { getActiveItemColecao } from "./item/item-colecao.js";

const item = getActiveItemColecao()
console.log(item)

const title = document.getElementById("itemTitle")

title.innerText = item.nome

const categoryContainer = document.getElementById("categoryContainer")

for(let i = 0; i < item.categorias.length; i++) {
    const span = document.createElement('span')
    span.classList.add('badge')
    span.classList.add('text-bg-secondary')
    span.innerText = item.categorias[i]
    categoryContainer.appendChild(span)
}

function abrirModalEmprestado(){
    new bootstrap.Modal("#modalEmprestado").show();

}
function abrirModalExcluir() {
    new bootstrap.Modal("#modalExcluir").show();
}

function voltarDetalhes() {
    window.location.href ="detalhes.html";
}
function editarValores() {
    window.location.href ="editar.html";  
}

function salvarEmprestado() {
    const inputElement = document.getElementById("empretadoPara");
  const inputValue = inputElement.value;
  localStorage.setItem("emprestado_para", inputValue);
  alert("Texto salvo no localStorage!");
}