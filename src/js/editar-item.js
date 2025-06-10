import { editItemColecao, getActiveItemColecao } from "./item/item-colecao.js";
import { buildForm } from "./item/telas/formulario-item.js";

const item = getActiveItemColecao()

function onSubmitForm(values) {
  const imageUrl = values.imagem !== item.imagem ? values.imagem : item.imagem
  editItemColecao({ id: item.id, imagem: imageUrl,  ...values })
  window.location.href = '../colecao/detalhes.html'
}

buildForm(onSubmitForm, item)