

var fs = require('fs');

fs.readdir(process.argv[2], function(err, files) {
    if(err) throw err;
    files.filter(function(filename) {
        return filename.split('.')[1] == process.argv[3];    
    }).map(function (filename) {
        console.log(filename);
    });
});

