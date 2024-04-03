<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

## Descrição

API criada usando NestJS, Prisma e SQL

## Instalação

```bash
$ npm install
```

## Executar App

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Como usar?

Retorna os dados de todos os funcionários

GET http://localhost:3000/api/employees

Retorna dados de um funcionário especifico utilizando seu ID

GET http://localhost:3000/api/employees/id

Adiciona um novo funcionário

POST http://localhost:3000/api/employees

```bash
{
  "name": "Maria Aparecida",
  "email": "maria.aparecida@gmail.com",
  "role": "INTERN"
}
```

Atualiza os dados de um funcionário especifico utilizando seu ID

PATCH http://localhost:3000/api/employees/id

```bash
{
  "name": "Maria Aparecida dos Santos",
}
```

Delete os dados de um funcionário especifico utilizando seu ID
DELETE http://localhost:3000/api/employees/id
