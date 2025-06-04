// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-storage.js"
import { FIREBASE_CONFIG } from '../firebase-config.js'

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);

const storage = getStorage(app)
const storageRef = ref(storage) 

export async function uploadImage(file) {
    const snapshot = await uploadBytes(ref(storageRef, 'images/' + file.name), file)
    const url = await getDownloadURL(snapshot.ref)
    console.log(url)
    return url 
}