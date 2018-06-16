FROM node:9-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json .
COPY ./yarn.lock .

ARG NODE_ENV=production
RUN yarn install && npm install

COPY ./public ./public/
COPY ./src ./src/

RUN npm run build

ENTRYPOINT [ "node ./bin/www" ]