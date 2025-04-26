FROM node:lts-alpine
WORKDIR /apps
COPY ./SS-assignment .
CMD ["cd", "SS-assignment"]
RUN npm install
CMD ["node", "index.js"]