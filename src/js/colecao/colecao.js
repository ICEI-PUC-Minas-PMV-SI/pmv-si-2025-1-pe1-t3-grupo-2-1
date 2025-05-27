import { getLocalStoreValue, setLocalStoreValue } from "../local-storage/local_storage_access.js"

const getCollectionList = () => {
    const colecoes = getLocalStoreValue('colecoes')
    if(!colecoes) return []
    return colecoes
}

export const getFilteredCollectionList = (name = '') => {
    const colecoes = getLocalStoreValue('colecoes')
    if(!colecoes) return []
    return colecoes.filter(item => item.nome.toLowerCase().includes(name.toLowerCase()))
}

export const createNewCollection = (colecao) => {
    const colecoes = getCollectionList()
    const newColecao = {
        id: colecoes.length + 1,
        ...colecao
    }
    colecoes.push(newColecao)
    setLocalStoreValue('colecoes', colecoes)
    return newColecao
}

export const updateCollection = (colecao) => {
    const colecoes = getCollectionList()
    const index = colecoes.findIndex(c => c.id === colecao.id)
    if(index === -1) return null
    colecoes[index] = colecao
    setLocalStoreValue('colecoes', colecoes)
    return colecao
}

export const deleteCollection = (id) => {
    const colecoes = getCollectionList()
    const index = colecoes.findIndex(c => c.id === id)
    if(index === -1) return null
    colecoes.splice(index, 1)
    setLocalStoreValue('colecoes', colecoes)
    return colecoes
}

export const getCollectionById = (id) => {
    const colecoes = getCollectionList()
    const colecao = colecoes.find(c => c.id === id)
    return colecao
}

export const setActiveCollection = (id) => {
    setLocalStoreValue('colecao_ativa', id);
}

export const getActiveCollection = () => {
    const colecaoAtiva = getLocalStoreValue('colecao_ativa')
    if(!colecaoAtiva) return null
    return getCollectionById(colecaoAtiva)
}

export const clearActiveCollection = () => {
    setLocalStoreValue('colecao_ativa', null);
}