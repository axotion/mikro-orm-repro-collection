FROM node:21-alpine3.18

WORKDIR /usr/src/app

COPY src/ src/
COPY .eslintrc.js .
COPY nest-cli.json .
COPY package.json .
COPY package-lock.json .
COPY tsconfig.build.json .
COPY tsconfig.json .

RUN npm install
RUN npm i -g @nestjs/cli@10.1.17

RUN npm run build
ENTRYPOINT [ "node", "dist/main.js" ]