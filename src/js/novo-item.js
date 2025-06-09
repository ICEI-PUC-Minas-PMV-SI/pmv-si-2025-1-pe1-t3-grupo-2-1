import { getActiveCollection } from './colecao/colecao.js'
import { uploadImage } from './file-upload/file-upload.js'
import { addItemColecao } from './item/item-colecao.js';

const activeCollection = getActiveCollection()
/* Adicionando evento para input de imagem */
const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');
imageInput.addEventListener('change', function () {
  const file = this.files[0];

  if (file) {
  const reader = new FileReader();

  reader.addEventListener('load', function () {
    preview.setAttribute('src', this.result);
    preview.classList.remove('d-none')
    preview.style.display = 'block';
  });

  reader.readAsDataURL(file);
  }
});

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


const menuCategoria = document.getElementById('menuCategoria')

activeCollection.categorias.forEach(categoria => {
  const option = document.createElement('li')
  option.innerHTML = `
    <label>
      <input type="checkbox" value="${categoria}">
      ${categoria}
    </label>
  `
  option.value = categoria
  menuCategoria.appendChild(option)
})


const chBoxes = document.querySelectorAll('.dropdown-menu input[type="checkbox"]');
const dpBtn = document.getElementById('multiselectCategoria');
let selectedCategoria = [];

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


// const defaultOption = document.createElement('option')
// defaultOption.innerText = 'Selecione uma categoria'
// defaultOption.setAttribute('selected', true)
// categorias.appendChild(defaultOption)


const formItem = document.getElementById('form-item')

formItem.addEventListener('submit', async (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const formProps = Object.fromEntries(formData);
  let url
  if(formProps.image.size) {
    url = await uploadImage(formProps.image)
  }

  const atributos = activeCollection.atributos.map((atributo, idx) => {
    return { chave: atributo, valor: formProps[`atributo${idx}`] }
  })

  const newItem = {
    nome: formProps.nome,
    descricao: formProps.descricao,
    categorias: selectedCategoria,
    imagem: url,
    atributos: atributos

  }
  addItemColecao(newItem)
  window.location.href = '../colecao/detalhes.html'
})