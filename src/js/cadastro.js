import { getLocalStoreValue, setLocalStoreValue } from './local-storage/local_storage_access.js';

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('txtemail').value;
    const senha = document.getElementById('txtsenha').value;
    const confirmarSenha = document.getElementById('txtcsenha').value;
            
    if (senha !== confirmarSenha) {
        alert("Senhas precisam ser iguais");
        return;
    }

    const usuarioSalvo = getLocalStoreValue('usuario');

    if (usuarioSalvo && usuarioSalvo.email === email) {
        alert("Usuário com este email já cadastrado!");
    } else {
        const novoUsuario = { email: email, senha: senha };
        setLocalStoreValue('usuario', novoUsuario);
                
        alert("Cadastro realizado com sucesso!");

        document.getElementById('txtemail').value = '';
        document.getElementById('txtsenha').value = '';
        document.getElementById('txtcsenha').value = '';

        window.location.href = './login.html'; 
    }
});