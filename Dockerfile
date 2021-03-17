FROM node:15-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 1337

CMD [ "node", "bin/start.js" ]
