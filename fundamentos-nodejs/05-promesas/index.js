function hola(nombre) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log(`hola ${nombre}`)
      resolve(nombre)
    }, 1000)
  })
}

function adios(nombre) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`)
      resolve(nombre)
    }, 1000)
  })
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla');
      resolve(nombre)
    }, 500)
  })
}

console.log('Iniciando el proceso....')
hola('Jose')
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(nombre => console.log(`${nombre} termino el proceso`))
  .catch(err => console.log('Algo fallo ', err))