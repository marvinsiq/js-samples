"use strict";

const fs = require('fs');

const fileName = "test.log"

fs.appendFile(fileName, new Date().toISOString() + "\n", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`The '${fileName}' file has been saved.`);
    }
});