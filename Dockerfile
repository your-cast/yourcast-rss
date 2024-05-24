FROM node:20.13-alpine3.20

RUN adduser -D -g AppUser -h /app -s /sbin/nologin appuser

WORKDIR /app

USER appuser

COPY --chown=appuser:appuser . .

RUN npm install

RUN npm build

ENTRYPOINT ["node", "dist/main.js"]
