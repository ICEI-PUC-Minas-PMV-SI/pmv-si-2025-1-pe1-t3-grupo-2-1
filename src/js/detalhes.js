
function abrirModalEmprestado(){
    new bootstrap.Modal("#modalEmprestado").show();

}
function abrirModalExcluir() {
    new bootstrap.Modal("#modalExcluir").show();
}

function voltarDetalhes() {
    window.location.href ="detalhes.html";
}
function editarValores() {
    window.location.href ="editar.html";  
}

function salvarEmprestado() {
    const inputElement = document.getElementById("empretadoPara");
  const inputValue = inputElement.value;
  localStorage.setItem("emprestado_para", inputValue);
  alert("Texto salvo no localStorage!");
}