FROM node:8
WORKDIR /app
RUN npm install -g json-server
COPY . /app
RUN npm install
ENTRYPOINT npm start --host 0.0.0.0
#EXPOSE 3000
