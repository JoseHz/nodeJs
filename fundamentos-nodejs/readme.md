# variables de entorno
const nombre = process.env.NOMBRE || 'sin nombre';
const nombre = process.env.NOMBRE || 'sin nombre';

NOMBRE=Jose node 02-variables-entorno
NOMBRE=Jose WEB=www.google.com node 02-variables-entorno

# nodemon para desarrollo
npm i nodemon -D

nodemon 03-nodemon

# para produccion pm2
npm i pm2

pm2 start 03-nodemon

