# Etapa 1: Build da aplicação
FROM node:20-alpine AS build-stage

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos necessários para o build
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Compila a aplicação para produção
RUN npm run build

# Etapa 2: Configuração do servidor para servir os arquivos estáticos
FROM nginx:stable-alpine AS production-stage

# Copia os arquivos compilados para o diretório padrão do Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expõe a porta 80 para o servidor
EXPOSE 80

# Comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]