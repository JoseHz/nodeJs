//benchmarking time

let suma = 0;
console.time('blucle');
for (let index = 0; index < 100000; index++) {
  suma += 1;
  
}
console.timeEnd('blucle');


//debugging agregar flag --inspect


//error first js

function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (e) {
      callback(e);
    }
  }, 1000)

  
}

asincrona((err, dato) => {
  if (err) {
    console.log('tenemos un error', err.message);
    return false;
  }
  console.log('todo bien, mi data ', dato);
})

//capturando el error

try {
  function asincrona(callback) {
    setTimeout(() => {
      try {
        let a = 3 + z;
        callback(null, a);
      } catch (e) {
        callback(e);
      }
    }, 1000)
  }

  asincrona((err, dato) => {
    if (err) {
        console.log('tenemos un error', err.message);
        return false;
        // throw err
        // throw no funciona con funciones asincronas
      }

    console.log('todo bien, mi data ', dato);
    }
  )
} catch (e) {
  console.log('capturamos un error');
  console.log(e.message);
}
