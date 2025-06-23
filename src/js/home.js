import { clearActiveCollection, getFilteredCollectionList, setActiveCollection } from "./colecao/colecao.js";

const colecaoListContainer = document.getElementById('colecao-list-container');

const colecaoList = getFilteredCollectionList()

function navigateToDetails(colecaoId) {
    console.log('Navegando para detalhes da coleção com ID:', colecaoId)
    const colecao = colecaoList.find(c => c.id === colecaoId)
    if(!colecao) return
    setActiveCollection(colecaoId)
    window.location.href = 'colecao/detalhes.html'
}


clearActiveCollection()

const renderColecaoList = () => {
    colecaoListContainer.innerHTML = ''
    colecaoList.forEach(colecao => {
        const colecaoItem = document.createElement('div')
        colecaoItem.className = 'card col-auto w-100 p-2'
        colecaoItem.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${colecao.nome}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${colecao.items.length} itens</h6>
                <button class="btn btn-primary" id="details-button${colecao.id}" type="button">Detalhes</a>
            </div>
        `
        colecaoListContainer.appendChild(colecaoItem)
    })
}

renderColecaoList()

colecaoList.forEach(colecao => {
    const detailsButton = document.getElementById(`details-button${colecao.id}`)
    detailsButton.addEventListener('click', () => {
        navigateToDetails(colecao.id)
    })
})

