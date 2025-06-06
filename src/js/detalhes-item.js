import { getActiveItemColecao, marcarItemComoEmprestado, deleteItemCollecao, setActiveItemColecao  } from "./item/item-colecao.js";

const item = getActiveItemColecao();
console.log(item);

const title = document.getElementById('item-name');
title.innerText = item.nome;

const image = document.getElementById('item-image')
image.setAttribute('src', item.imagem)

const categoryContainer = document.getElementById("categoryContainer");
const label = document.createElement('span')
label.innerText = 'Categorias:'
label.classList.add('fw-bold')
categoryContainer.appendChild(label)

if(item.categorias.length === 0) {
  const span = document.createElement("span");
  span.innerText = 'Nenhuma';
  categoryContainer.appendChild(span);
}

for (let i = 0; i < item.categorias.length; i++) {
  const span = document.createElement("span");
  span.classList.add("badge", "text-bg-secondary");
  span.innerText = item.categorias[i];
  categoryContainer.appendChild(span);
}

if(item.emprestado) {
  const emprestadoContainer = document.getElementById('emprestado')
  emprestadoContainer.classList.remove('d-none')
  const emprestadoPara = document.getElementById('emprestado-para')
  emprestadoPara.innerText = item.emprestado.para
  const emprestadoAte = document.getElementById('emprestado-ate')
  emprestadoAte.innerText = item.emprestado.ate
}

function abrirModalEmprestado() {
  const modal = new bootstrap.Modal(document.getElementById("modalEmprestado"));
  modal.show();
}

function abrirModalExcluir() {
  const modal = new bootstrap.Modal(document.getElementById("modalExcluir"));
  modal.show();
}

function voltarDetalhes() {
  window.location.href = "detalhes.html";
}

function editarValores() {
  window.location.href = "editar.html";
}

function salvarEmprestado() {
  const formEl = document.forms.EmprestarForm
  const formData = new FormData(formEl)
  const formProps = Object.fromEntries(formData);
  marcarItemComoEmprestado(formProps.emprestadoPara, formProps.emprestadoAte)
}

function removerItem() {
  deleteItemCollecao(item.id)
  setActiveItemColecao(null)
  window.location.href = '../colecao/detalhes.html'
}



// Torna acessível para o HTML
window.abrirModalEmprestado = abrirModalEmprestado;
window.abrirModalExcluir = abrirModalExcluir;
window.voltarDetalhes = voltarDetalhes;
window.editarValores = editarValores;
window.salvarEmprestado = salvarEmprestado;
window.removerItem = removerItem