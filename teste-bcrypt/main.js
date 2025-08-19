const bcrypt = require('bcrypt');

let texto = "Hello World";
textoHash = bcrypt.hashSync(texto, 12);
console.log(textoHash);
console.log(texto);