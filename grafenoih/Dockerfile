
FROM node:20-alpine AS build-stage

WORKDIR /app


COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM nginx:stable-alpine AS production-stage

ENV PORT=8080

COPY --from=build-stage /app/dist /usr/share/nginx/html


RUN sh -c 'echo "server { listen ${PORT}; root /usr/share/nginx/html; index index.html; }" > /etc/nginx/conf.d/default.conf'


EXPOSE 8080


CMD ["nginx", "-g", "daemon off;"]