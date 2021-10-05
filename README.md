# API para requisições de teste / ARP_API

- Para executar a aplicação em modo de desenvolvimento basta rodar o comando: `npm run dev`. Esse comando irá:
   - Executar o `npm install` e instalar todas as dependências necessárias
   - Executar o projeto com o `ts-node-dev` possibilitando que as alterações na API sejam reconhecidas em tempo real, e o projeto recarregado.

## Documentação de EndPoints API: _Swagger_
Para alterações que já estão presentes na API online: 
http://arpdevs.com.br/api-docs/

Para alterações novas, presentes somente na sua máquina: 
http://localhost:3000/api-docs

## Padrões de nomenclatura
#### Todos os exemplos abaixo usarão como base o projeto: `Business-Cook`

Para manter uma organização nos arquivos da API e para que um integrante não modifique o trabalho do outro seguiremos as seguintes regras:

- Pastas principais (Model, Controller, Routes, Middleware...): 
Devem ser precedidas de uma pasta que identifique o projeto.
   - Modelo: `src/tipo_arquivo/identificador_projeto/arquivo.tipo.extensão`
   - Exemplo: `src/model/bck/usuario.model.ts` ou `src/controllers/bck/usuario.controller.ts`
   

## Padrões de Fluxo de Uso (GitHub)

#### O Fluxo a seguir deve ser respeitado pois as alterações dependem disso para serem publicadas na Umbler.

 - Abra o GitHub Desktop ou qualquer outro de sua preferência e crie um branch dedicado a funcionalidade atual
      Exemplo: `cadastro-usuario` ou `correcao-endereco`

 - Troque pra esse branch e desenvolva sua solução
 - Após a solução finalizada e testada, publique o branch no GitHub e faça o push das alterações para o mesmo
 - Mande um Pull Request que eu (Pedro), faço o processo de publicação de alterações em produção

#### Vídeo de Apoio: GitHub Desktop
Em breve...


## Fluxo de Funcionamento da API

A API funciona seguindo um fluxo padrão para criação de requisições HTTP usando as ações básicas:

 - GET  (Requisições que somente retornam dados. Exemplo: Listagem de usuários, visualização de usuário, visualização de itens de lista, etc...)
 - POST (Requisições que criam novos dados no BD. Exemplo: Cadastro de usuários, cadastro de formas de pagamento, agendamento de tarefas, etc...)
 - PUT  (Requisições que atualizam dados contidos no BD. Exemplo: Atualizar usuário, corrigir forma de pagamento, alterar horário de agendamento, etc...)
 - DELETE (Requisições que apagam dados do BD. Exemplo: Nem precisa né ?)

Para encontrar o fluxo de trabalho da API até chegar a lógica de fato siga esse caminho:

`server.ts -> routes/index.ts -> routes/projeto/sigla_projeto.ts -> controllers/projeto/model.controller.ts -> services/projeto/model.services.ts`

Exemplo na API (Projeto: Mercado do Construtor (MCT))

`server.ts -> routes/index.ts -> routes/mct/mct.ts -> controllers/mct/cliente.controller.ts -> services/mct/cliente.services.ts`

O que cada arquivo faz ?

### server.ts
O `server.ts` inicializa todas as rotas externas do projeto e abre uma porta específica para requisição, além de especificar os tipos de retorno da API.

### routes/index.ts
O arquivo `index.ts` da pasta routes inicializa as rotas de todos os projetos contidos nessa API, logo, sempre que um projeto for iniciado, crie uma pasta com a sigla do projeto (com até 3 letras) e aponte as rotas do mesmo nesse arquivo, seguindo o mesmo padrão atual.

### routes/projeto/sigla_projeto.ts
Esse arquivo contém de fato as rotas que fazem as requisições para o Banco de Dados e chamam as classes que fazem a regra de negócio funcionarem

### controllers/projeto/model.controller.ts
Todos os controllers tem a função de basicamente receber uma requisição, chamar a classe que contém a lógica, pegar essa resposta e converter pra uma resposta HTTP

### services/projeto/model.controller.ts
As classes services são onde de fato as requisições acontecem, seja uma simples conversão de dados, a uma chamada ao banco de dados, tudo é feito na classe services, isso impede que misturemos muito da lógica no tratamento de respostas da API
