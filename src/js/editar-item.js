import { getActiveCollection } from "./colecao/colecao.js";
import { setActiveItemColecao, editItemColecao, getActiveItemColecao } from "./item/item-colecao.js";

const item = getActiveItemColecao();
const activeCollection = getActiveCollection()
console.log(item)

const chBoxes = document.querySelectorAll('.dropdown-menu input[type="checkbox"]');
const dpBtn = document.getElementById('multiselectCategoria');
let selectedCategoria = [];

const atributos = document.getElementById('atributos')

activeCollection.atributos.forEach((attributo, idx) => {
  const input = document.createElement('div')
  input.classList.add('mb-3')
  input.innerHTML = `
    <label for="atributo-${idx}" class="form-label">${attributo}</label>
    <input class="form-control" name="atributo${idx}" id="atributo-${idx}">
  `
  atributos.appendChild(input)
});

function handleCB() {
    selectedCategoria = [];
    let selectedCategoriasText = '';
    chBoxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedCategoria.push(checkbox.value);
            selectedCategoriasText += checkbox.value + ', ';
        }
    });
    dpBtn.innerText = selectedCategoria.length > 0 ? selectedCategoriasText.slice(0, -2) : 'Selecione a categoria';
}

chBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCB);
});

function fillForm() {
    document.getElementById('nome').value = item.nome
    document.getElementById('descricao').value = item.nome

    item.atributos.forEach(({valor, chave}, idx) => {
        document.getElementById(`atributo-${idx}`).value = valor
    })

    selectedCategoria = item.categorias

    

}

fillForm()