FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=3000
ENV MONGO_URI="mongodb://localhost:27017/taskmanager"
ENV HOST_URL="http://localhost"

EXPOSE 3000

CMD ["npm", "start"]
