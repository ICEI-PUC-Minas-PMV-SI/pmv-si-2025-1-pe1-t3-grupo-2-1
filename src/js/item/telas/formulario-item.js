import { getActiveCollection } from "../../colecao/colecao.js";
import { uploadImage } from "../../file-upload/file-upload.js";

const activeCollection = getActiveCollection();
const formItem = document.getElementById('form-item')

export function buildForm(onSubmitForm, defaultValues) {
  formItem.innerHTML = `
    <label class="border border-2 border border-dark-subtle p-4 text-center rounded-4 pe-auto">
      Clique para fazer upload
      <input class="d-none" name="image" type="file" accept="image/*" id="imageInput" />
      <img class="d-none mw-100 mh-3 mt-1" id="preview" alt="Pré-visualização" />
    </label>
    <div class="mb-3">
      <label for="nome" class="form-label">Nome</label>
      <input class="form-control" name="nome" id="nome" required>
    </div>
    <div class="mb-3">
      <label for="descricao" class="form-label">Descrição</label>
      <textarea class="form-control" name="descricao" id="descricao" rows="3"></textarea>
    </div>
    <div class="w-100 d-flex flex-column gap-2" id="atributos"></div>
    <div class="mb-3" id="categoriasContainer">
      <label class="form-label">Categorias:</label>
    </div>
    </select>
    <div class="d-flex flex-row justify-content-end gap-2 mt-3">
      <button type="button" class="btn btn-outline-primary">Cancelar</button>
      <button type="submit" class="btn btn-primary">Salvar</button>
    </div>
  `

  buildImgInput()
  buildAtributosFields()
  buildCategoriasFields()
  if(defaultValues)
    fillDefaultValues(defaultValues)

  formItem.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData);
    const categorias = formData.getAll('categorias[]'); 
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
      categorias: categorias,
      imagem: url,
      atributos: atributos
    }
    onSubmitForm(newItem)
})
}

function buildImgInput() {

  const imageInput = document.getElementById("imageInput");
  const preview = document.getElementById("preview");
  imageInput.addEventListener("change", function () {
    const file = this.files[0];
    
    if (file) {
      const reader = new FileReader();
      
      reader.addEventListener("load", function () {
        preview.setAttribute("src", this.result);
        preview.classList.remove("d-none");
        preview.style.display = "block";
      });
      
      reader.readAsDataURL(file);
    }
  });
}

function buildAtributosFields() {
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
  
}

function buildCategoriasFields() {
  const categoriasSelect = document.getElementById("categoriasContainer")
  activeCollection.categorias.forEach(categoria => {
    
    const option = document.createElement('div')
    option.classList.add('form-check')
    option.innerHTML = `
    <input class="form-check-input" type="checkbox" name="categorias[]" value="${categoria}" id="${categoria}">
    <label class="form-check-label" for="${categoria}">${categoria}</label>
    `
    categoriasSelect.appendChild(option)
  })  
}

function fillDefaultValues(defaultValues) {
  
  document.getElementById('nome').value = defaultValues.nome
  if(defaultValues.imagem) {
    const preview = document.getElementById("preview")
    preview.src = defaultValues.imagem
    preview.classList.remove('d-none')

  }
  document.getElementById('descricao').value = defaultValues.descricao
  defaultValues.atributos.forEach(({valor, chave}, idx) => {
    document.getElementById(`atributo-${idx}`).value = valor
  })
  const categorias = document.querySelectorAll('input[name="categorias[]"]');
  categorias.forEach(cat => {
    cat.checked = defaultValues.categorias.includes(cat.value)
  })
}