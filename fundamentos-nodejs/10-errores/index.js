function seRompe() {
  return 3 + z;
}

try {
  seRompe();
} catch(err) {
  console.error('error ' + err.message)
  
  console.log('no pasa nada')
}

