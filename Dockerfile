FROM node:16.13.0-alpine3.12

RUN apk update \
  && apk add --no-cache \
    bash \
    git \
    jq \
    ncurses \
    vim \
&& rm /var/cache/apk/*

RUN mkdir -p /app
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

ADD . /app

RUN yarn build

EXPOSE 3000

CMD yarn run serve -s /app/build
