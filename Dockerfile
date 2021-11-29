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

ADD . /app

# RUN yarn set version berry
RUN yarn install

ARG REACT_APP_ENV

RUN yarn build

EXPOSE 4000

ENV PORT=4000

CMD yarn run serve -s /app/build -l 4000
