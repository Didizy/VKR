FROM node:14.16.1-alpine

WORKDIR /app/vkr-ui

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

# CMD ["npm", "start"]