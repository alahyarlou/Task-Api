FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

ENV PORT=3000
ENV MONGO_URI="mongodb://mongo:27017/taskmanager"
ENV HOST_URL="http://localhost"

EXPOSE 3000

CMD ["npm", "start"]
