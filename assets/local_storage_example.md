# Chave coleção

Nome da chave: `colecoes`
```json
    [{
    "id": 1,
    "nome": "Coleção de livros",
    "descricao": "Uma coleção de livros com título, autor e ano de publicação.",
    "completa": false,
    "categorias": ["Fantasia", "Aventura", "Ficção Científica", "Distopia", "Romance", "Clássico"],
    "items": [
        {
            "id": 1,
            "nome": "O Senhor dos Anéis",
            "descricao": "Uma obra-prima da literatura de fantasia.",
            "categorias": ["Fantasia", "Aventura"],
            "atributos": [
                {"chave": "autor", "valor": "J.R.R. Tolkien"}
            ]
        },
        {
            "id": 2,
            "nome": "1984",
            "descricao": "Um romance distópico sobre um futuro totalitário.",
            "categorias": ["Ficção Científica", "Distopia"],
            "atributos": [
                {"chave": "autor", "valor": "George Orwell"}
            ]
        },
        {
            "id": 3,
            "nome": "Orgulho e Preconceito",
            "descricao": "Uma crítica social disfarçada de romance.",
            "categorias": ["Romance", "Clássico"],
            "atributos": [
                {"chave": "autor", "valor": "Jane Austen"}
            ]
        }
    ],
    "atributos": [
        "autor"
    ]
}]
```


Item da coleção:
```json
{
  "id": 1,
  "nome": "O Senhor dos Anéis",
  "descricao": "Uma obra-prima da literatura de fantasia.",
  "categorias": ["Fantasia", "Aventura"],
  "imagem": "url-da-imagem",
  "atributos": [ { "chave": "autor", "valor": "J.R.R. Tolkien" } ]
}
```
