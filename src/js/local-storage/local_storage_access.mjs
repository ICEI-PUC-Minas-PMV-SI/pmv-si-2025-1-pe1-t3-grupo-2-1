export const getLocalStoreValue = (key) => {
    const value = localStorage.getItem(key);
    if (value) {
        try {
        return JSON.parse(value);
        } catch (e) {
        return value;
        }
    }
    return null;
}

export const setLocalStoreValue = (key, value) => {
    if (value) {        
        localStorage.setItem(key, JSON.stringify(value));
    }
}