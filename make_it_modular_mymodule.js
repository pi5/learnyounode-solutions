var fs = require('fs');

var filtered_ls = function(directory, extension, callback) {
    fs.readdir(directory, function(err, list) {
            if(err) return callback(err);
            return callback(null, list.filter(function(filename) {
                    return filename.split('.')[1] == extension;    
                    }));
            });
};

module.exports = filtered_ls;

