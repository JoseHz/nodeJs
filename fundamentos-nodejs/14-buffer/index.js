let buffer = Buffer.alloc(4);

let buffer2 = Buffer.from([1, 2, 3, 4]);

let buffer3 = Buffer.from('hola');

console.log(buffer);
console.log(buffer2);
console.log(buffer3);
console.log(buffer3.toString());

console.group('abecedario');
let abecedario = Buffer.alloc(26);
for (let i=0; i<26; i++) {
  abecedario[i] = i + 97;
}
console.log(abecedario);
console.log(abecedario.toString());
console.groupEnd('abecedario');