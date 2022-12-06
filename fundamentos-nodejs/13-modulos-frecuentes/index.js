//npm i bcrypt 
//encriptar passwords

const bcrypt = require('bcrypt');

const password = '1234segura';

bcrypt.hash(password, 5, function (err, hash) {
  if (err) {
    console.log(err);
    return
  }
  console.log(hash);
  bcrypt.compare(password, hash, function(err, res) {
    console.error(res);
  })
})

//npm i moment
//trabajar con diferentes formatos de fecha

const moment = require('moment');

let ahora = moment();

console.log(ahora);

console.log(ahora.toString());

console.log(ahora.format('YYYY/MM/DD - HH:mm'));

//npm i sharp
//trabajar con imagenes

const sharp = require('sharp');

sharp('firma-director.png')
  .resize(30)
  .toFile('resize.png');

