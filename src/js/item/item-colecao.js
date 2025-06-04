import { getActiveCollection, updateCollection } from "../colecao/colecao.js";

export const setActiveItemColecao = (itemId) => {
    localStorage.setItem('activeItemColecao', itemId);
}

export const getActiveItemColecao = () => {
    const itemId = localStorage.getItem('activeItemColecao');
    const colecao = getActiveCollection()
    const item = colecao.items.find(item => item.id === itemId);
    return item;
}

export const addItemColecao = (item) => {
    const colecao = getActiveCollection()
    colecao.items.push({
        id: colecao.items.length,
        emprestado: false,
        ...item
    })
    updateCollection(colecao)
}

export const updateItemColecao = (itemId, values) => {
    const colecao = getActiveCollection()
    const index = colecao.items.findIndex(item => item.id === itemId)
    if(index === -1) return null
    colecao.items[index] = values
    updateCollection(colecao)
}

export const deleteItemCollecao = (id) => {
    const colecao = getActiveCollection()
    const index = olecao.items.findIndex(item => item.id === id)
    if(index === -1) return null
    colecao.items.splice(index, 1)
    updateCollection(colecao)
}