import { getFilteredCollectionList } from "./colecao/colecao.mjs";

const colecaoListContainer = document.getElementById('colecao-list-container');

const colecaoList = getFilteredCollectionList()

const renderColecaoList = () => {
    colecaoListContainer.innerHTML = ''
    colecaoList.forEach(colecao => {
        const colecaoItem = document.createElement('div')
        colecaoItem.className = 'card col-auto w-auto p-2'
        colecaoItem.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${colecao.nome}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${colecao.items.length} itens</h6>
                <a href="colecao/detalhes.html" class="card-link">Detalhes</a>
            </div>
        `
        colecaoListContainer.appendChild(colecaoItem)
    })
}

renderColecaoList()