FROM node:22.13-alpine3.21

RUN adduser -D -g AppUser -h /app -s /sbin/nologin appuser && apk upgrade -U --no-cache

WORKDIR /app

USER appuser

COPY --chown=appuser:appuser . .

RUN npm install

RUN npm run build

ENTRYPOINT ["node", "dist/main.js"]
