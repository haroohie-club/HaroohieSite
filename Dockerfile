FROM node:22-alpine

EXPOSE 3000

WORKDIR /usr/app
COPY ./ /usr/app

RUN npm i && npm i -g nuxt

RUN nuxt build

ENTRYPOINT [ "node", ".output/server/index.mjs" ]