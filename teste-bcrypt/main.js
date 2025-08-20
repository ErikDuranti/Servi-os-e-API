const bcrypt = require('bcrypt');
const prompt = require('prompt-sync')();

let texto = prompt("Palavra a ser Criptografada: ");
textoHash = bcrypt.hashSync(texto, 10);
console.log(textoHash);

let textoTeste = prompt("Texto para validar a palavra: ");

console.log("Validando Texto: ", bcrypt.compareSync(textoTeste, textoHash));
console.log("Valudando 'Hello': ", bcrypt.compareSync("Hello", textoHash));