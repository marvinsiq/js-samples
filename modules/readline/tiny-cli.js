const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

const help = "\t'help' to show this help\n\t'exit' or ^C to exit\n\t^Z to try send program to the background."

console.log("Type 'help' to see the commands.");

rl.setPrompt('>>> ');
rl.prompt();

rl.on('line', function (line) {
    switch (line.trim()) {
        case 'help':
            console.log(help);
            break;
        case 'exit':
        case '\\q':
            rl.close()
        default:
            console.log(`'${line.trim()}' is not a valid command. Type 'help' or press CTRL+C to exit.`);
            break;
    }
    rl.prompt();
})

// Emitted whenever the input stream receives a ^C
rl.on('SIGINT', function () {
    rl.question('Are you sure you want to exit? (yes/no): ', function (answer) {
        if (answer.match(/^y(es)?$/i)) rl.pause();
    });
})


rl.on('SIGTSTP', function () {
    // This will override SIGTSTP and prevent the program from going to the
    // background.
    console.log('Caught SIGTSTP.');
    rl.prompt();
});

rl.on('close', function () {
    console.log('Have a great day!');
    process.exit(0);
});