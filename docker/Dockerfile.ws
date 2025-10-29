FROM oven/bun:1

WORKDIR /usr/src/app

ARG DATABASE_URL

COPY ./packages ./packages

COPY ./bun.lock ./bun.lock
COPY ./turbo.json ./turbo.json

COPY ./package.json ./package.json

COPY ./apps/ws-server ./apps/ws-server




RUN bun install

RUN DATABASE_URL=${DATABASE_URL} bun  run generate:db

EXPOSE 8080

CMD ["bun", "run","start:ws"]

