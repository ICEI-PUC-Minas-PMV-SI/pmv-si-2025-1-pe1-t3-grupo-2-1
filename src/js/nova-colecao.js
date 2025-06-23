const nomeInput = document.getElementById("nome-colecao");
const atributosContainer = document.getElementById("atributos-container");
const categoriasContainer = document.getElementById("categorias-container");
const salvarBtn = document.getElementById("btn-salvar");
const cancelarBtn = document.getElementById("btn-cancelar");
const formContainer = document.getElementById("colecao-form");

// Adicionar novo atributo
document.getElementById("btn-novo-atributo").addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "text";
  input.className = "form-control";
  input.placeholder = "Novo atributo";
  atributosContainer.appendChild(input);
});

// Adicionar nova categoria
document.getElementById("btn-nova-categoria").addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "text";
  input.className = "form-control";
  input.placeholder = "Nova categoria";
  categoriasContainer.appendChild(input);
});

// Cancelar = voltar para a home
cancelarBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "../index.html";
});

// Salvar coleção
salvarBtn.addEventListener("click", () => {
  const nome = nomeInput.value.trim();
  if (!nome) return alert("Nome da coleção é obrigatório");

  const atributos = Array.from(document.querySelectorAll(".atributo"))
    .map((el) => el.value.trim())
    .filter(Boolean);
  const categorias = Array.from(document.querySelectorAll(".categoria"))
    .map((el) => el.value.trim())
    .filter(Boolean);

  const colecao = { nome, atributos, categorias, items: [] };
  let colecoes = JSON.parse(localStorage.getItem("colecoes")) || [];

  colecao.id = Date.now().toString(); // ID único
  colecoes.push(colecao);

  localStorage.setItem("colecoes", JSON.stringify(colecoes));
  localStorage.removeItem("colecaoAtiva");
  window.location.href = "../index.html";
});
