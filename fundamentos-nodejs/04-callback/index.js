function respuesta(resultado) {
  return console.log(resultado)
}

function potencia(a,b) {
  console.log(`${a} elevado a ${b} es: `)
  return respuesta(a**b);
}

function sum(a,b) {
  console.log(`${a} sumado a ${b} es: `);
  return respuesta(a+b);
}

function rest(a,b) {
  console.log(`${a} restado a ${b} es: `);
  return respuesta(a-b);
}

function miFirstCallback(nombre, a, b, callback) {
  console.log(`Hola ${nombre}`);
  callback(a,b);
}

miFirstCallback('Jose', 2, 4, potencia);
miFirstCallback('Jose', 2, 4, sum);
miFirstCallback('Jose', 2, 4, rest);
