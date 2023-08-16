# Utiliza la imagen oficial de Node.js como imagen base
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /ames_frontend

# Copia el package.json y package-lock.json (o yarn.lock) al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todos los archivos de la aplicación actual al contenedor
COPY . .

# Compila la aplicación de Vue.js
RUN npm run build

# Exponer el puerto en el que la aplicación de Vue.js escucha (por ejemplo, 8080)
EXPOSE 5173

# Comando para ejecutar la aplicación de Vue.js
CMD ["npm", "run", "dev"]