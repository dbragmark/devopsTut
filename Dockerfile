FROM node:11.9-alpine
WORKDIR /app


COPY package.json yarn.lock ./
RUN yarn install --prod && \
    yarn cache clean


COPY . .

CMD ["yarn",  "start"]
