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


const categorias = document.getElementById('categorias')

const defaultOption = document.createElement('option')
defaultOption.innerText = 'Selecione uma categoria'
defaultOption.setAttribute('selected', true)
categorias.appendChild(defaultOption)

activeCollection.categorias.forEach(categoria => {
  const option = document.createElement('option')
  option.innerText = categoria
  option.value = categoria
  categorias.appendChild(option)
})

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
    categorias: [],
    imagem: url,
    atributos: atributos

  }
  addItemColecao(newItem)
})