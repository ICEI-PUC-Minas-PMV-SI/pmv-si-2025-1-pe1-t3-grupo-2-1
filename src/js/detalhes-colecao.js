import { getActiveCollection, deleteCollection, clearActiveCollection } from "./colecao/colecao.js";
import { setActiveItemColecao } from "./item/item-colecao.js";


function navigateToItemDetails(itemId) {
    setActiveItemColecao(itemId)
    window.location.href = '../item/detalhes.html'
}

setActiveItemColecao(null);

const tabs = document.querySelectorAll('.nav-link');
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const target = this.getAttribute('data-bs-target');
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        document.querySelector('.tab-pane.active').classList.remove('active');
        document.querySelector(target).classList.add('active');
    });
});


const activeCollection = getActiveCollection();
let items = activeCollection.items

if(!activeCollection) {
    window.location.href = '../index.html'
}
const title = document.getElementById('collection-title');
title.innerText = activeCollection.nome

const itemsNumber = document.getElementById('items-number-test');
itemsNumber.innerHTML = `<p>Número de itens: ${activeCollection.items.length}</p>` 

function renderItems() {

    const itemsList = document.getElementById('items-list');
    itemsList.innerHTML = ''
    items.forEach(item => {
        const div = document.createElement('div');
        
        div.classList.add('list-group-item')
        div.classList.add('list-group-item-action')
        div.classList.add('d-flex')
        div.classList.add('flex-column')
        div.classList.add('gap-1')
        div.classList.add('align-items-start')
        div.innerHTML = `
            <div class="fw-bold">${item.nome}</div>
            <small class="">${item.descricao}</small>
            <div class="d-flex flex-row gap-2">
                ${item.categorias ? item.categorias.reduce((acc,categoria) => `${acc}<span class="badge bg-secondary rounded-pill">${categoria}</span>`, '') : ''}
            </div>
            <div class="w-100 d-flex flex-row gap-2 justify-content-end">
                <button type="button" id="detalhes-item-${item.id}" class="btn btn-primary btn-sm">
                    Detalhes
                </button>
            </div>
        `;
        itemsList.appendChild(div);
    });
    
    items.forEach(item => {
        const detalhesButton = document.getElementById(`detalhes-item-${item.id}`);
        detalhesButton.addEventListener('click', function() {
            navigateToItemDetails(item.id);
        });
    })
}

renderItems()

const searchInput = document.getElementById('search')

searchInput.addEventListener('change', (e) => {
    items = activeCollection.items.filter(i => i.nome.toLowerCase().includes(e.target.value.toLowerCase()))
    renderItems()
})