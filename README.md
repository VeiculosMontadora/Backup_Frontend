# Frontend

![Static Badge](https://img.shields.io/badge/Linguagem%3A--gray)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?&logo=typescript&logoColor=blue&color=black)

![Static Badge](https://img.shields.io/badge/Tecnologias%3A--gray)
![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?&logo=html5&logoColor=orange&color=black)
![HTML5](https://img.shields.io/badge/CSS3-%23E34F26.svg?&logo=css3&logoColor=lightblue&color=black)

![Static Badge](https://img.shields.io/badge/Biblioteca_Javascript-React-blue)
![Static Badge](https://img.shields.io/badge/Enviroment-Node.js-green)
![Static Badge](https://img.shields.io/badge/Interface-MaterialUI-orange)

Esse é o repositório do frontend do projeto Veículos Via Montadora. Ele é responsável por prover a interface de usuário do projeto.

## React.js

O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web que precisam ser atualizadas em tempo real. Ele é ideal para esse tipo de aplicação porque ele permite que você atualize a interface de usuário de forma rápida e eficiente.

## MaterialUI

Material UI é uma biblioteca abrangente de componentes que apresenta implementação do sistema Material Design do Google. O MUI oferece um conjunto abrangente de ferramentas de interface do usuário para ajudar a desenvolver novas features mais rapidamente.

## Desenvolvimento

1. Instale o [Node.js](https://nodejs.org/en) versão `>= 18`.

2. Instale o [Yarn](https://yarnpkg.com/) com o comando:

```sh
npm install -g yarn
```

3. Instale as dependências do projeto com o comando:

```sh
yarn install
```

Para isso, é necessário estar com um terminal aberto na pasta raiz do projeto.

4. Para iniciar o servidor de desenvolvimento, execute o comando:

```sh
yarn dev
```

Depois, acesse o endereço `http://localhost:3000` no seu navegador.

5. Para mais comandos, veja o arquivo `package.json` em 'scripts'.

6. As configurações de endpoint da API se encontram no arquivo config.ts. Ao rodar localmente o projeto apontará para o backend local, em produção apontará para o backend em produção.

### Testes

Para rodar os testes, digite o seguinte comando na raiz do projeto:

```sh
yarn test
```
