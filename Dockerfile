FROM node:12.14.1-alpine

ARG PLATFORM_LEVEL=ENTERPRISE

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
RUN npm prune --production

ENV PATH /app/node_modules/.bin:$PATH

CMD ["npm", "run", "start"]

# Docker Build Command
# docker build -f Dockerfile -t open-hockey-api .

# Docker Run Command
# docker run -p 3000:3000 open-hockey-api

# Running redis
# docker run --name open-hockey-api-redis -p 6379:6379 -d redis

# Connecting to redis container
# docker exec -it open-hockey-api-redis sh
# redis-cli
# ^> test connection --> ping
# ^> show all keys --> keys *
