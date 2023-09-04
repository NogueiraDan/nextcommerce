## Nextcommerce

Esse é um template de um front de um ecommerce, feito em Next13 e Typescript.
Os produtos são mockados da fakestore API, porém o template está preparado para receber produtos reais oriundos de uma API. Com uma ressalva de apenas modificar os atributos da response no type Product em types.d.ts.

As requests são feitas utilizando-se da Api do Next13, evitando sobrecarga de requisições diretamente na página.

Arquitetura da requisição: Client -> Utilitário -> API