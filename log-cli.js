
function writerow(text) {
const fs = require('fs');

let dnow = Date();

var filename = "/tmp/logcli";

fs.writeFile(filename, text +" --> ["+dnow.toLocaleString() +"]\n",{ flag: "a"}, function(err) {
    if(err) {
        return console.log(err);
    }else {
    // console.log("The log was saved!");
    }
});

}

module.exports = { writerow };
