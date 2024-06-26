FROM node:16.20.2-buster

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8000

ENTRYPOINT [ "npm", "start" ]