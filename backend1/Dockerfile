FROM node:12

COPY package.json .
RUN yarn

COPY . .
CMD ["node", "index.js"]