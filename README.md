<p align="center">
  <a href='https://www.apollographql.com/'><img src='https://user-images.githubusercontent.com/841294/53402609-b97a2180-39ba-11e9-8100-812bab86357c.png' height='100' alt='Apollo Server'></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" height='100' alt="Nest Logo" /></a>
  <a href="https://graphql.org/" target="blank"><img src="https://raw.githubusercontent.com/graphql/graphql-spec/a3084aabe16e1a45ab45bb7e67c3cd64640e02e3/resources/GraphQL%20Logo.svg" width="320" height='100' alt="GraphQL Logo" /></a>
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

## Deployed Instances

> Note: Both instances running on free-tier of Heroku. Servers may need a minute to spin up if currently idle.

### Dev

- URL: `https://open-hockey-api-dev.herokuapp.com/graphql`
- Playground Enabled: yes

### Prod

- URL: `https://open-hockey-api.herokuapp.com/graphql`
- Playground Enabled: no
