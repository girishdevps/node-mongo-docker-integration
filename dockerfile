FROM node:22

WORKDIR /app

COPY package*.json .

RUN npm install --production-only

COPY app.js .

EXPOSE 3000

CMD ["node","app.js"]
