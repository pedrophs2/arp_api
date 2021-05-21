# API para requisições de teste / ARP_API

- Para executar a aplicação em modo de desenvolvimento basta rodar o comando: `npm run dev`. Esse comando irá:
   - Executar o `npm install` e instalar todas as dependências necessárias
   - Executar o projeto com o `ts-node-dev` possibilitando que as alterações na API sejam reconhecidas em tempo real, e o projeto recarregado.

## Documentação de EndPoints API: _Swagger_
#### Em Breve

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
 - Vá ao branch `master`, e faça o merge do seu branch no master
 - Caso a solução não contenha erros, o próprio Umbler irá compilar o projeto e subir a versão automaticamente

#### Vídeo de Apoio: GitHub Desktop
 - https://youtu.be/KzVWLm12Y_s
