const readline = require('readline');
const fs = require('fs');

const fileName = "sample.csv";

const rl = readline.createInterface({
    input: fs.createReadStream(fileName)
});

const movies = []

rl.on('line', function (line) {
    movies.push(line.split(","));    
}).on('close', function () {
    console.table(movies);
});