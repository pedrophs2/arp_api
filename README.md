# API para requisições de teste / ARP_API

- Para executar a aplicação em modo de desenvolvimento basta rodar o comando: `npm run dev`. Esse comando irá:
   - Executar o `npm install` e instalar todas as dependências necessárias
   - Executar o projeto com o `nodemon` possibilitando que as alterações na API sejam reconhecidas em tempo real, e o projeto recarregado.

## Documentação de EndPoints API: _Swagger_
#### Em Breve

## Padrões de nomenclatura
#### Todos os exemplos abaixo usarão como base o projeto: `Business-Cook`

Para manter uma organização nos arquivos da API e para que um integrante não modifique o trabalho do outro seguiremos as seguintes regras:

- Arquivos e Classes: 
Arquivos e Classes devem ter como prefixo o nome do sistema que pertencem. Essa regra deve ser seguida pois o mongoDB gera o nome da entidade nos registros do banco baseado no nome que damos na entidade, caso coloquemos todos iguais ele não irá diferenciar os campos e irá misturar os registros das tabelas

   - Modelo: `prefixo_arquivo.extensão` 
   - Exemplo: `bck_usuario.js`

- Pastas principais (Model, Controller, Routes, Middleware...): 
Devem ser precedidas de uma pasta que identifique o projeto.
   - Modelo: `src/pasta_principal/identificador/prefixo_arquivo.extensão`
   - Exemplo: `src/model/bck/bck_usuario.js`
   

## Padrões de Fluxo de Uso (GitHub)

#### O Fluxo a seguir deve ser respeitado pois as alterações dependem disso para serem publicadas na Umbler.

 - Acesse a Umbler
 - Vá em `Arquivos/Pontos de Restauração`
 - Crie um novo ponto de restauração
 - Abra o GitHub Desktop ou qualquer outro de sua preferência e crie um branch
 - Troque pra esse branch e desenvolva sua solução
 - Após a solução finalizada e testada, publique o branch no GitHub
 - Vá ao branch `master`, e faça o merge do seu branch no master
 - Caso a solução não contenha erros, o próprio Umbler irá compilar o projeto e subir a versão automaticamente

#### Caso você tenha pulado alguma dessas etapas, ou mesmo que tenha seguido todas, ocorreu um erro na aplicação após o deploy siga esses passos:

 - Acesse a Umbler
 - Vá em `Arquivos/Pontos de Restauração`
 - Localize o ponto de restauração mais recente (que você deve ter criado antes de iniciar um branch)
 - Clique no segunto item (Restaurar)
 - Marque a opção _Deletar todos os arquivos_
 - Clique em restaurar
    - Vídeo de apoio: https://youtu.be/kukz3Gi7swA

#### Vídeo de Apoio: GitHub Desktop
 - https://youtu.be/KzVWLm12Y_s
