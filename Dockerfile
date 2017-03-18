FROM node:latest
WORKDIR app
RUN npm install
COPY shoppingList /app
CMD node .
