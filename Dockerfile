FROM node:10
WORKDIR /app
COPY . /app
CMD ["npm", "start"]
