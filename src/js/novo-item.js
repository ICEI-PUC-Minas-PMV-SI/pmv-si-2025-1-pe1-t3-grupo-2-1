import { getActiveCollection } from './colecao/colecao.js'
import { uploadImage } from './file-upload/file-upload.js'
import { addItemColecao } from './item/item-colecao.js';
import {buildForm} from './item/telas/formulario-item.js'

function onSubmitForm(item) {
  addItemColecao(item)
  window.location.href = '../colecao/detalhes.html'
}

buildForm(onSubmitForm)