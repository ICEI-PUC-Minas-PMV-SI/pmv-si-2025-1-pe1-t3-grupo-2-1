
## Plano de Testes de Software

**Caso de Teste** | **CT01 - Cadastrar Novo usuário**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço www.teste.com.br <br> 2) Clique Cadastre-se <br> 2) Preencha todos os campos do formulário <br> 3) Clique no botão "Cadastrar".
**Requisitos associados** | RF-001, RNF-002 e RNF-003
**Resultado esperado** | Prosseguir para Login
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Realizar login de Usuário**
 :--------------: | ------------
**Procedimento**  | 1)Preencha todos os campos do formulário <br> 2) Clique no botão "Entrar".
**Requisitos associados** | RF-001, RNF-002 e RNF-003
**Resultado esperado** | Prosseguir para Cadastrar Nova Coleção
**Dados de entrada** | Aprovação de dados já cadastrados no formulário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Cadastrar Nova Coleção**
 :--------------: | ------------
**Procedimento**  | 1) Clique no botão "Nova Coleção" <br>  
**Requisitos associados** | RF-002, RNF-002 e RNF-003
**Resultado esperado** | Página de cadastro de nova coleção se abrirá 
**Dados de entrada** | Sem novos dados cadastrados no formulário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Definir ou Alterar atributos da Coleção**
 :--------------: | ------------
**Procedimento**  | 1)Adicione nome, Atributos e Categorias para sua nova coleção <br> 
**Requisitos associados** | RF-003, RNF-002 e RNF-003
**Resultado esperado** | Nova Coleção criada e adicionada a página de coleções do usuário
**Dados de entrada** | Inserção de dados válidos no formulário de coleções
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Visualizar lista de todos os itens da Coleção**
 :--------------: | ------------
**Procedimento**  | 1) Clique no botão "detalhes" para abrir a nova coleção <br> 2) Clique no botão "Novo Item" para adicionar itens a coleção <br> 3) Adicione os dados dos novos itens <br> 4) clique em "Salvar" para visualizar os itens. <br> 5) Adicione quantos itens desejar 
**Requisitos associados** | RF-004, RNF-002 e RNF-003
**Resultado esperado** | Visualizar itens cadastrados da nova Coleção
**Dados de entrada** | Inserção de dados válidos no formulário de Coleção
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - Busca de itens dentro das coleções**
 :--------------: | ------------
**Procedimento**  | 1)  Clique no botão "pesquisar" <br> 2) digite o nome do item procurado <br> 
**Requisitos associados** | RF-005, RNF-002 e RNF-003
**Resultado esperado** | Item encontrado
**Dados de entrada** | pesquisa de dados válidos no formulário de Coleção
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - Visualizar detalhes de itens da Coleção**
 :--------------: | ------------
**Procedimento**  | 1)  Clique no botão "detalhes" na frente do item desejado <br> 
**Requisitos associados** | RF-006, RNF-002 e RNF-003
**Resultado esperado** | Visualize todos os detalhes cadastrados daquele item
**Dados de entrada** | Visualização de dados no formulário de coleção
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT08 - Cadastrar um novo item dentro de uma Coleção**
 :--------------: | ------------
**Procedimento**  | 1) Clique no botão "Novo Item" para adicionar itens a coleção <br> 2) Adicione os dados dos novos itens <br> 3) clique em "Salvar" para visualizar os itens. <br>  
**Requisitos associados** | RF-007, RNF-002 e RNF-003
**Resultado esperado** | Novo item cadastrado
**Dados de entrada** | Inserção de dados válidos no formulário de coleção
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT09 - Editar detalhes de um item da coleção**
 :--------------: | ------------
**Procedimento**  | 1) Clique no botão "detalhes" na frente do item <br> 2) Clique no botão "editar" na parte superior direita <br> 3) Edite os dados desejados
**Requisitos associados** | RF-008, RNF-002 e RNF-003
**Resultado esperado** | Item editado
**Dados de entrada** | Inserção de dados válidos no formulário de coleção
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT10 - Marcar como Emprestado**
 :--------------: | ------------
**Procedimento**  | 1) Na página de Item da coleção clique em "Marcar como Empretado" <br> 2) Adicione a pessoa e dia do emprestimo <br> 3) Clique no botão "Salvar"
**Requisitos associados** | RF-009, RNF-002 e RNF-003
**Resultado esperado** |Opção "Marcar como emprestado" Adiconada
**Dados de entrada** | Inserção de dados válidos no formulário de coleção
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT11 - Excluir item da coleção**
 :--------------: | ------------
**Procedimento**  | 1) Na página de Item da coleção clique em "Excluir" <br> 2) No modal clique no botão "Sim" <br> 
**Requisitos associados** | RF-010, RNF-002 e RNF-003
**Resultado esperado** | Item Excluído
**Dados de entrada** | Deletado dos dados do formulário de coleção
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT12 - Excluir Coleção**
 :--------------: | ------------
**Procedimento**  | 1) Preencha todos os campos do formulário <br> 2) Clique no botão "Criar conta" <br> 
**Requisitos associados** | RF-011, RNF-002 e RNF-003
**Resultado esperado** | Usuário cadastrado
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT13 - Interface Intuitiva**
 :--------------: | ------------
**Procedimento**  | 1) Abra a página de uma coleção qualquer <br> 2) Visualize todos os itens por suas categorias e  descrições  <br> 
**Requisitos associados** | RF-012, RNF-001, RNF-002 e RNF-003
**Resultado esperado** | Visualizar todos os itens com suas respectivas descrições e categorias
**Dados de entrada** | Visualização de dados no formulário de coleção
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT14 - Anexar imagens a Coleção**
 :--------------: | ------------
**Procedimento**  | 1) Na página de "Nova Coleção" e "Novo item" clique no botão "Clique para fazer upload"<br> 2) busque em seus arquivos a imagem escolhida<br> 
**Requisitos associados** | RF-013, RNF-002 e RNF-003
**Resultado esperado** | Imagem Adicionada com sucesso
**Dados de entrada** | Inserção de dados válidos no formulário de coleção
**Resultado obtido** | Sucesso

## Registro dos Testes de Software


|*Caso de Teste*                                 |*CT01 - Cadastrar Novo usuário 1*                                         |
|---|---|
|Requisito Associado | RF-001 - O sistema deve permitir o cadastro de um novo usuário da aplicação.|
|Link do vídeo do teste realizado: | | 

|*Caso de Teste*                                 |*CT02 - Cadastrar Nova Coleção  2*                                        |
|---|---|
|Requisito Associado | RF-002 - O sistema deve permitir o cadastro de uma nova coleção.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT03 - Definir ou Alterar atributos da Coleção  3*                                        |
|---|---|
|Requisito Associado | RF-003 -O sistema deve permitir que o usuário defina e altere atributos personalizados para sua coleção..|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT04 - Visualizar lista de todos os itens da Coleção  4*                                        |
|---|---|
|Requisito Associado | RF-004 -O sistema deve permitir a listagem de todos os itens cadastrados em uma coleção.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT05 - Busca de itens dentro das coleções 5*                                        |
|---|---|
|Requisito Associado | RF-005 - O sistema deve permitir a busca e filtragem de itens dentro de uma coleção.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT06 - Visualizar detalhes de itens da Coleção  6*                                        |
|---|---|
|Requisito Associado | RF-006 - O sistema deve exibir os detalhes de um item cadastrado, incluindo todos os seus atributos e informações associadas.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT07 - Cadastrar um novo item dentro de uma Coleção  7*                                        |
|---|---|
|Requisito Associado | RF-007 - O sistema deve permitir o cadastro de um novo item dentro de uma coleção.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT08 - Editar detalhes de um item da coleção  8*                                        |
|---|---|
|Requisito Associado | RF-008 - O sistema deve permitir a atualização dos detalhes de um item já cadastrado.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT09 - Marcar como Emprestado
9*                                        |
|---|---|
|Requisito Associado | RF-009 - O sistema deve permitir que o usuário marque um item como emprestado e registre para quem foi emprestado e a data.|
|Link do vídeo do teste realizado: |  | 


|*Caso de Teste*                                 |*CT10 - Excluir intem da coleção  10*                                        |
|---|---|
|Requisito Associado | RF-010 - O sistema deve permitir a exclusão de itens cadastrados.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT11 - Excluir Coleção 11*                                        |
|---|---|
|Requisito Associado | RF-011 - O sistema deve permitir a exclusão de uma coleção inteira, caso desejado pelo usuário.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT12 - Interface Intuitiva  12*                                        |
|---|---|
|Requisito Associado | RF-012 - O sistema deve fornecer uma interface intuitiva para visualização da coleção por categorias, status ou outros filtros.
RFN-001 - A aplicação deve ter uma interface intuitiva e acessível para usuários sem conhecimento técnico avançado|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT13 - Anexar imagens a Coleção  13*                                        |
|---|---|
|Requisito Associado | RF-013 -  	O sistema deve permitir que o usuário anexe imagens aos itens da coleção.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT14 - Designer do Sistema  14*                                        |
|---|---|
|Requisito Associado | RNF-002 -  	O design da aplicação deve ser Mobile, mesmo que isto não impessa o uso correto da plataforma caso acessada em diferentes dispositivos, desktop por exemplo.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT15 - Sistema Modular  15*                                        |
|---|---|
|Requisito Associado | RNF-003 -  	O sistema deve ser modular, facilitando a adição de novas funcionalidades sem impactar o código existente|
|Link do vídeo do teste realizado: |  | 

## Avaliação dos Testes de Software

 Os testes demonstram uma boa cobertura dos requisitos funcionais do sistema, abrangendo desde o cadastro e login de usuários até o gerenciamento completo de coleções e itens. Os casos de teste estão organizados de forma clara, com uma estrutura consistente que inclui procedimentos, requisitos associados, dados de entrada, resultados esperados e resultados obtidos. Essa padronização facilita a leitura e execução dos testes por parte da equipe de QA. <br>

A sequência dos testes segue um fluxo lógico de uso da aplicação, cobrindo as funcionalidades essenciais, como a criação e edição de coleções, adição e visualização de itens, busca interna, anexos de imagens e até interações mais específicas, como marcar itens como emprestados. Além disso, o teste CT13, relacionado à interface intuitiva, demonstra atenção à experiência do usuário, o que é um diferencial positivo. Gostariamos se possível no futuro, melhorar o designer e interação do usuário, bem como adaptação para layout Desktop. <br>

Em resumo,gostamos do plane de testes, com boa organização e alinhado às funcionalidades previstas no sistema. Com pequenos ajustes de consistência e a complementação com casos de erro, o documento poderá atender de forma ainda mais eficaz às necessidades de validação do software.


# Testes de Usabilidade

Perfil dos Participantes:


1. Wellington, 47 anos – Vendedor e colecionador de DVDs.

2. Anderson, 40 anos – Professor universitário e estudioso de documentos históricos.

3. Ana Silva, 35 anos – Arquiteta e colecionadora de miniaturas.

4. Laura Mendes, 28 anos – Designer gráfica e fã de cultura pop.

5. Lucas, 32 anos – Designer gráfico e colecionador de action figures.

    Cenários de Teste
   
1. Cenário 1 – Consulta Rápida de Filme (Wellington)
História de Usuário: Verificar rapidamente se possui determinado DVD antes de efetuar uma nova compra.

Funcionalidades Avaliadas:

Barra de busca por título;

Status do item (em posse, emprestado);

Navegação simples e intuitiva.

Tarefa Proposta: Pesquisar pelo título “Cantando na Chuva” e identificar se o item está disponível.

Expectativas:

Facilidade e rapidez na busca;

Identificação clara do status do item.

2. Cenário 2 – Busca Avançada de Documento Histórico (Anderson)
História de Usuário: Encontrar rapidamente um mapa antigo para utilizar em aula.

Funcionalidades Avaliadas:

Filtros por categoria, data e tipo de documento;

Campos para anotações;

Busca com múltiplos critérios.

Tarefa Proposta: Localizar um “Mapa do Brasil Colonial” usando filtros específicos.

Expectativas:

Busca eficiente e detalhada;

Facilidade de organização por categorias.

3. Cenário 3 – Registro Detalhado de Miniatura (Ana Silva)
História de Usuário: Cadastrar miniaturas com informações detalhadas para manter o acervo organizado.

Funcionalidades Avaliadas:

Campos personalizáveis (modelo, ano, cor, escala);

Upload de imagens;

Organização por categorias.

Tarefa Proposta: Cadastrar uma miniatura de carro antigo, inserindo dados e imagem.

Expectativas:

Registro completo e personalizado;

Interface visualmente atrativa.

4. Cenário 4 – Consulta de Itens por Universo e Personagem (Laura Mendes)
História de Usuário: Verificar se já possui um item antes de comprá-lo, utilizando filtros por universo e personagem.

Funcionalidades Avaliadas:

Filtros por universo e personagem;

Exibição visual dos itens;

Organização intuitiva.

Tarefa Proposta: Filtrar por “Universo Marvel” e personagem “Homem de Ferro” e verificar posse de HQ específica.

Expectativas:

Interface moderna e visual;

Busca prática e precisa.

5. Cenário 5 – Verificação de Item em Evento (Lucas)
História de Usuário: Conferir se já possui um item durante uma feira de colecionáveis, para evitar compras duplicadas.

Funcionalidades Avaliadas:

Busca rápida por nome ou código;

Exibição de dados como valor, estado e data de aquisição;

Categorização clara e eficiente.

Tarefa Proposta: Verificar se possui determinada action figure antes de efetuar uma compra em evento.

Expectativas:

Consulta instantânea;

Visualização rápida e objetiva.

Cenário de	Satisfação (1 a 5)
Wellington	Consulta Rápida de Filme	5 (Ótimo)
Anderson	Busca Avançada de Documento Histórico	5 (Ótimo)
Ana Silva	Registro Detalhado de Miniatura	5 (Ótimo)
Laura Mendes	Consulta por Universo e Personagem	5 (ÓTIMO)
Lucas	Verificação de Item em Evento	5 (Ótimo)





## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             |(Wellington - Colecionador de DVDs) Você quer assistir a um documentário sobre natureza. Use o sistema para verificar se você já possui esse título em sua coleção e onde ele está localizado (ex: sala, estante A). |
| 2             |(Anderson - Estudioso) Você vai dar uma palestra sobre colonização. Use o sistema para localizar um mapa histórico da América do Sul e adicionar uma anotação com informações sobre a fonte. |



## Registro de Testes de Usabilidade

Cenário 1: Consulta sobre a existência de um documentário sobre natureza na coleção e verificação da localização do item.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 40,33 segundos                  | 
| 2       | SIM             | 4                    | 35,22 segundos                  |
| 3       | SIM             | 5                    | 46,91 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 4,67             | 40,82 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 12,47 segundos |


 Comentários dos usuários:
"O sistema é fácil de navegar, mas seria ótimo se houvesse uma opção de busca por gênero."


Cenário 2: Busca por mangá específico com filtros por universo e personagem para verificar se já consta na coleção.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 28,30 segundos                          |
| 2       | SIM             | 5                    | 25,19 segundos                          |
| 3       | SIM             | 5                    | 33,12 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 	5,00               | 28,87 segundos                        |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 9,45 segundos |

Comentários dos usuários:
"A busca rápida facilitou muito encontrar o mangá que eu procurava."
  

## Avaliação dos Testes de Usabilidade

Os resultados mostram que o sistema é eficiente para as personas testadas, com alta taxa de sucesso em todas as tarefas propostas.

A satisfação dos usuários foi boa, variando entre 4 e 5, indicando que o sistema atende bem às necessidades, desde os colecionadores que buscam facilidade até usuários que precisam de recursos mais avançados.

Observou-se que os usuários levaram mais tempo para completar as tarefas do que o especialista, o que é esperado por conta do conhecimento prévio do desenvolvedor.

No entanto, essa diferença indica que ainda há espaço para melhorar a usabilidade, tornando a navegação mais intuitiva e facilitando o acesso às funcionalidades importantes.

Com essas melhorias, a experiência do usuário pode ser ainda mais rápida e satisfatória para todos os perfis.



