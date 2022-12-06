const fs = require('fs');

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    if (err) {
      console.log(err.message)
    };
    cb(data.toString())
  })
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) {
      console.error(err);
    } else {
      cb('Se escribio ' + contenido)
    }
  })
}

function borrar(ruta) {
  fs.unlink(ruta, (err) => {
    if (err) {
      console.log('hubo un error ' + err)
    }
    console.log('Se borro correctamente...')
  })
}

// leer(__dirname + '/file.txt', console.log);
// escribir(__dirname + '/file2.txt', 'Soy un archivo nuevo', console.log);
// leer(__dirname + '/file2.txt', console.log);

//borrar un archivo
borrar(__dirname + '/file2.txt')