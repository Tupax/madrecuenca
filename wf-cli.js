class Card {
    constructor(ccid, cedula,cuencos,url,phone,fecha) {
      this.id = ccid;
      this.cedula = cedula;
      this.cuencos = cuencos;
      this.url = url;
      this.phone = phone;
      this.fecha = fecha;
    }
}

var CuencoCardsWebFflow =[];


const Webflow = require('webflow-api');

// Initialize the API
const api = new Webflow({ token: 'c715d17584ef110d7c3c7bcaa6906c5931c130ea4ac0aaae1726c92143b7bcc6' });
const siteid = '61f00bdd2265e92582e18224';


// --------
// INFO
// --------
// const info = api.info();
// info.then(i=> console.log(i));


// --------
// PUBLICAR
// --------
// const published = api.publishSite({siteId:siteid,domains:['madrecuenca.uy','www.madrecuenca.uy']});
// published.then(p => console.log(p));



// --------
// List Collections
// --------
// function getAllCollections() {

// const collections = api.collections({ siteId: siteid });

// collections.then(c => console.log(c));
// }

// getAllCollections();


// --------
// Get x8 Collection Full Schema
// --------
function getCollection(id) {
    
    const collection = api.collection({ collectionId: id });
    
    collection.then(c => console.log(c));


}    

// getCollection('61f90e5c7a457c3409dff91d');


function  dosomething(allitems){

    console.log("inside dosomething");
    console.log(allitems.length);


    for (let i = 0; i < allitems.length; i++) {
        const row = allitems[i];
        console.log(row);    
        console.log(i);    
    }
    console.log("after dosomething");

    
}


let cca = new Card ('CCx8101',12345678,7,'urltest',099771790,'January 31, 2022');
let cca2 = new Card ('CCx8101',12345678,7,'urltest',099771790,'January 31, 2022');
var CuencoCardsAirtable =[];

CuencoCardsAirtable.push(cca);  
CuencoCardsAirtable.push(cca2);

console.log(CuencoCardsAirtable);


// --------
// Get All Items
// --------
function getItems(id) {
const items = api.items({ collectionId: id }, { limit: 100 });
items.then((info) => {
    // Filtar cuencos que sea necesario actualizar
    // Filtrar cuencos que 
    console.log(info);
    info.items.forEach(i => {



        // var newArray = myArray.filter( (element, index, array) => { 
        //     ... Items passing this condition will be added to the new array...
        //     })
            
        
        var myArray = [{id:1, name:'Morty'},{id:2, name:'Rick'},{id:3, name:'Anna'}];
var newArray = myArray.filter((item) => item.id !== 1);
console.log(newArray);


        CuencoCardsAirtable.forEach(cca => {
            if(cca.id == i.name){
            // hacer update de cuenco
            //Eliminar del array
            }         
        });

        console.log("NAME: ", i.name);

    });
}).then(function() {
    console.log("now filter if there is");


})
}


// cuencos x8
// getItems('61f90e5c7a457c3409dff91d');






//callectionid = 61f90e5c7a457c3409dff91d


