FROM node:18-slim
WORKDIR /app
COPY . ./
RUN npm ci
EXPOSE 80
CMD ["node", "index.js"]