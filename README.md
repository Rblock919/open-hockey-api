<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

Open Source Hockey Api For NHL Statistics

## Installation

```bash
$ npm install
```

## Running the app

### Node

```bash
# development (watch mode)
$ npm run start:dev:watch

# debug
$ npm run start:debug

# production mode
$ npm run start:prod
```

### Docker

#### Build

##### Dev

- `docker build -f dev.Dockerfile -t open-hockey-api .`

##### Prod

- `docker build -f Dockerfile -t open-hockey-api .`

#### Run

##### Dev

- docker run -p 3000:3000 -v "$PWD":/app -v /app/node_modules -v /app/dist open-hockey-api-dev

##### Prod

- docker run -p 3000:3000 open-hockey-api

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
