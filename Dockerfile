# <linos> host image
FROM node:12.14.1-alpine

ARG PLATFORM_LEVEL=ENTERPRISE
ARG NPM_TOKEN

WORKDIR /app

RUN npm config set '_auth' "${NPM_TOKEN}"

COPY . .

RUN npm install
RUN npm run build
RUN npm prune --production

ENV PATH /app/node_modules/.bin:$PATH

CMD ["npm", "run", "start:prod"]

# Docker Build Command
# docker build -f Dockerfile -t open-hockey-api .

# Docker Run Command
# docker run -p 3000:3000 open-hockey-api
