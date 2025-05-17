# Instruções de utilização

## Instalação do Site

O site utiliza o framework Bootstrap obtido através do npm, e também o sass como pré-processador css.
Logo, é necessário o npm instalado na maquina para obter as referidas bibliotecas e depois executar os comandos para gerar os arquivos css necessários.

Para a instalação das dependencias, abrir o terminal na pasta src e executar os seguintes comandos:
```shell
npm install
npm run build
```
- O comando `npm run build` gera os arquivos css compilados através do sass.
- O comando `npm run dev` pode ser usado quando estiver desenvolvendo alguma funcionalidade. O comando compila os arquivos scss em modo "watch", ou seja, ele inspeciona os arquivos scss e recompila sempre que eles sofrerem alguma alteração.

## Estrutura de codigo javascript

Visando manter uma estrutura organizada e de fácil manutenção, optamos por utilizar os arquivos js no padrão `module`. Ao importar o script dentro do html, deve-se informar no atributo `type` o tipo module.
Exemplo:
```html
<script type="module" src="js/lista-colecao.js"></script>
```

## Histórico de versões

### [0.1.0] - DD/MM/AAAA
#### Adicionado
- Adicionado ...