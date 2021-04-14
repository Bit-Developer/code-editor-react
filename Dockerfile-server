FROM node:15.12.0-alpine

WORKDIR /app

COPY package*.json ./
COPY ./src/server ./src/server
RUN npm ci --quiet --only=production

# environment variables
ENV PORT=80
CMD [ "node", "src/server/index.js" ]