FROM node:12.14-alpine as builder

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

# Can't run only dev here
RUN npm install

COPY . .

RUN npm run build

FROM node:12.14-alpine as node

WORKDIR /app

COPY package*.json ./

RUN apk --no-cache --update --virtual build-dependencies add \
  python \
  make \
  g++ \
  && npm install --only=production \
  && apk del build-dependencies

ENV PATH /app/node_modules/.bin:$PATH

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["npm", "run", "start:prod"]

# Docker Build Command
# docker build -f Dockerfile -t open-hockey-api .

# Docker Run Command (mounts working directory as volume but avoids mounting host node_modules directory)
# docker run -p 3000:3000 -e PORT=3000 open-hockey-api
