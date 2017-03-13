var fs = require('fs');
fs.readFile('test.txt', function(error, data) {
    if (error) {
        console.log(error);
        return;
    } else {
        console.log(data.toString());
    }
});


console.log('----------------');