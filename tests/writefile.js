const fs = require('fs');

const cal = require('./cal.js');
const variable = '';

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key64dRqz2W6akikD'}).base('appwF7020jRFGCAly');

base('Cuenco Card').find('recCyaGBh6GBVMUD2', function(err, record) {
    if (err) { console.error(err); return; }



const vsum = cal.sum(2,2);

let dnow = Date();

var filename = "/tmp/t";

fs.writeFile(filename,  "Write file --> ["+dnow.toLocaleString() +"]Suma:" +vsum + "- ID :"+ record.id+"\n",{ flag: "a"}, function(err) {
    if(err) {
        return console.log(err);
    }else {
    console.log("The Airtable was saved!");
    // return "The file was saved!";
    }
});

});


const Webflow = require('webflow-api');
// Initialize the API
const api = new Webflow({ token: 'c715d17584ef110d7c3c7bcaa6906c5931c130ea4ac0aaae1726c92143b7bcc6' });
const siteid = '61f00bdd2265e92582e18224';


const items = api.items({ collectionId: '61f90e5c7a457c3409dff91d' }, { limit: 100 });
items.then((info) => {
    // Filtar cuencos que sea necesario actualizar en WF
    // Filtrar cuencos que se tegan que crear en WF
   
    info.items.forEach(i => {
   
        console.log(i);
        
        
        
    })
}).then(function() {
    let dnow = Date();

    var filename = "/tmp/t";
    
    fs.writeFile(filename,  "WEbflow file --> ["+dnow.toLocaleString() +"]- ID :"+"\n",{ flag: "a"}, function(err) {
        if(err) {
            return console.log(err);
        }else {
        console.log("The WF was saved!");
        // return "The file was saved!";
        }
    });
})



// const vsum = cal.sum(2,2);

// let dnow = Date();

// var filename = "/tmp/historialtests";

// fs.writeFile(filename,  "Write file --> ["+dnow.toLocaleString() +"]Suma:" +vsum + "- ID :"+ variable+"\n",{ flag: "a"}, function(err) {
//     if(err) {
//         return console.log(err);
//     }else {
//     console.log("The log was saved!");
//     // return "The file was saved!";
//     }
// });
