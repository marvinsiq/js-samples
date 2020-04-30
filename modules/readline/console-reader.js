const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual seu nome? ", function (answer) {
  console.log(`Obrigado ${answer}`);
  rl.close();
});

