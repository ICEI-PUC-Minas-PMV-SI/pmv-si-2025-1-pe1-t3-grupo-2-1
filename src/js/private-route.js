const isUsuárioAutenticado = () => {
    const usuarioAutenticado = localStorage.getItem('usuarioAutenticado');
    return usuarioAutenticado === 'true';
}


if(!isUsuárioAutenticado()) {
    // Usuário autenticado, redirecionar para a página de login
    window.location.href = '/login.html';
}