console.log('modulos globales');

let i = 1;
let intervalo = setInterval(() => {
  console.log(`Intevalo ${i}`)
  if (i ===3) {
    clearInterval(intervalo)
  }
  i++;
}, 1000)