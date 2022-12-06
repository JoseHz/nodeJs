async function hola(nombre) {
  return await new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log(`hola ${nombre}`)
      resolve(nombre)
    }, 1000)
  })
}

async function adios(nombre) {
  return await new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`)
      resolve(nombre)
    }, 1000)
  })
}

async function hablar(nombre) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla');
      resolve(nombre)
    }, 500)
  })
}

async function main(nombre) {
  await hola(nombre);
  await hablar();
  await adios(nombre);
}

main('jose');