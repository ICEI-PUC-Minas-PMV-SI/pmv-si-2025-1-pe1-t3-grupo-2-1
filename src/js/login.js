import { getLocalStoreValue } from './local-storage/local_storage_access.js';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailDigitado = document.getElementById('txtemail').value;
    const senhaDigitada = document.getElementById('txtsenha').value;

    const usuarioSalvo = getLocalStoreValue('usuario');

    if (usuarioSalvo && usuarioSalvo.email === emailDigitado && usuarioSalvo.senha === senhaDigitada) {
        localStorage.setItem('usuarioAutenticado', 'true');
        window.location.href = './index.html'; 
    } else {
        alert("Email ou senha inválidos.");
    }
});