FROM node:12-alpine as node

RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . /app/

# The below is to download the dependencies needed to install and use app dependencies, such as python
# Alpine node does not provide these but installing them on top on alpine-node still results in much smaller img size
RUN apk --no-cache --update --virtual build-dependencies add \
  python \
  make \
  g++ \
  && npm install \
  && apk del build-dependencies

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]

# Docker Build Command
# docker build -f dev.Dockerfile -t open-hockey-api-dev .

# Docker Run Command (mounts working directory as volume but avoids mounting host node_modules directory)
# docker run -p 3000:3000 -e PORT=3000 -v "$PWD":/app -v /app/node_modules -v /app/dist open-hockey-api-dev
