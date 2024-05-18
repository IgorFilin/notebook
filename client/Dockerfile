FROM node:16 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist/notebook /usr/share/nginx/html

COPY ./config/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
