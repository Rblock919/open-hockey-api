<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

Open Source Hockey Api For NHL Statistics

## Installation

```bash
$ npm install
```

## Running the Application

### Node

```bash
# development (watch mode)
$ npm run start:dev:watch

# debug
$ npm run start:debug

# production mode
$ npm run build && npm run start
```

### Docker

```bash
## Build

# dev
$ docker build -f dev.Dockerfile -t open-hockey-api-dev .

# prod
$ docker build -f Dockerfile -t open-hockey-api .

## Run

# dev
$ docker run -p 3000:3000 -v "$PWD":/app -v /app/node_modules -v /app/dist open-hockey-api-dev

# prod
$ docker run -p 3000:3000 open-hockey-api
```

## Running Dependencies

### Redis (Using Docker)

```bash
# Run redis
$ docker run --name open-hockey-api-redis -p 6379:6379 -d redis

# Connect to redis
$ docker exec -it open-hockey-api-redis sh
$ redis-cli

# test connection
$ ping
# show all keys
$ keys *
# monitor activity
$ monitor
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
