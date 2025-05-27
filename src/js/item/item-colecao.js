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