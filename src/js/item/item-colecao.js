import { getActiveCollection } from "../colecao/colecao.js";

export const getItemColecao = (item) => {
}

export const setActiveItemColecao = (itemId) => {
    localStorage.setItem('activeItemColecao', itemId);
}

export const getActiveItemColecao = () => {
    const itemId = localStorage.getItem('activeItemColecao');
    const colecao = getActiveCollection()
    const item = colecao.items.find(item => item.id === itemId);
    return item;
}

export const editItemColecao = (item) => {
    const colecao = getActiveCollection();
    if (!colecao) return null;

    const index = colecao.items.findIndex(i => i.id === item.id);
    if (index === -1) return null;

    colecao.items[index] = item;
    
    updateCollection(colecao)
}