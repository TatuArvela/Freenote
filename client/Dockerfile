FROM node:9.2.0

WORKDIR /app

ADD . /app

RUN yarn install

RUN yarn build --production

RUN yarn global add serve

EXPOSE 3000

CMD serve -s build -p 3000
