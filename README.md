
#### Dependências do template
`cypress`
`cypress-cucumber-preprocessor`
`cypress-xpath`
`cypress-plugin-tab`
`fs`
`fs-extra`
`rimraf`
`multiple-cucumber-html-reporter`


## Requisitos
- [Node LTS](https://nodejs.org/pt-br/)


## 1. Execução
#### 1.1 Instalações
Para a execução, é necessária a instalação das seguintes dependências:
- `npm i multiple-cucumber-html-reporter`;
- `npm install cypress --save-dev`.

#### 1.2 Execução
1. Abrir um terminal no diretório da automação;
2. Executar o comando `npm run cypress:run` para que os testes sejam realizados. (Juntamente com o Screenshot dos erros)
3. Executar o comando `npm run cypress:report` para que o Report do ultimo teste executado seja gerado.