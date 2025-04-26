FROM node:lts-alpine
WORKDIR /c/Users/hp/Desktop/Microservice-deployment
#COPY /c/Users/hp/Desktop/Microservice-deploymentSS-assignment .
RUN apt-get update && apt-get install -y
RUN npm install npm@latest -g && \
    npm install n -g && \
    n latest
CMD ["node", "SS-assignment/index.js"]
EXPOSE 3001