var filtered_ls = require('./make_it_modular_mymodule.js');

function callback(err, data) {
    if(err) {
        return console.error('There was an error:', err);    
    }    
    data.forEach(function(elem) { 
        console.log(elem);    
    });
}

filtered_ls(process.argv[2], process.argv[3], callback);

