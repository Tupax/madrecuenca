class Card {
    constructor(ccid, cedula,cuencos,url,phone,fecha,recipiente) {
      this.id = ccid;
      this.cedula = cedula;
      this.cuencos = cuencos;
      this.url = url;
      this.phone = phone;
      this.fecha = fecha;
      this.recipiente = recipiente;
    }
}

var CuencoCardsWebFflow =[];


const { stringify } = require('qs');
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

// TEST
let cca = new Card ('CCx8001',12345678,7,'urltest',099771790,'2022-02-02');
let cca3 = new Card ('CCx8101',12345678,7,'urltest',099771790,'2022-02-02');
let cca2 = new Card ('CCx8002',12345678,7,'urltest',099771790,'2022-02-02');
var CuencoCardsAirtable =[];
CuencoCardsAirtable.push(cca);  
CuencoCardsAirtable.push(cca2);
CuencoCardsAirtable.push(cca3);
// console.log(CuencoCardsAirtable);
// CuencoCardsAirtable.forEach(element => {
    // CuencoCardsAirtable = CuencoCardsAirtable.filter((element) => element.id !== 'CCx8101'); });
// console.log("after: ");
// console.log(CuencoCardsAirtable);



// --------
// Get All Items
// --------
function getItems(collectionid) {
const items = api.items({ collectionId: collectionid }, { limit: 100 });
items.then((info) => {
    // Filtar cuencos que sea necesario actualizar en WF
    // Filtrar cuencos que se tegan que crear en WF
   
    info.items.forEach(i => {
   
        console.log(i);
    // 1. Busco los CC registrados
        CuencoCardsAirtable.forEach(e => {    
            if(i.name == e.id){
            
                if(i.cuencos !== e.cuencos){
                // hacer update de cuenco
                // let  fields = {}
                console.log("UPDATE : ", e.id);
                }

            // Sino soloQuito esta cc del array porque ya esta realizado
            CuencoCardsAirtable = CuencoCardsAirtable.filter((element) => element.id !== i.name); 
            }   
        });
    });

    if (CuencoCardsAirtable.length > 0){
        // Crear un item nuevo en WF por cada item nuevo

    

        
        CuencoCardsAirtable.forEach(e=> {
            e.fecha = new Date(e.fecha);
            e.fecha = e.fecha.toISOString();
            let slug = e.id.substring(e.id.length - 3);
            let fields= {
                'fecha': e.fecha.toString(),
                '_archived': false,
                '_draft': false,
                'cedula': e.cedula,
                'phone': e.phone.toString(),
                'name':e.id,
                'slug': slug,
                'cuencos': e.cuencos,
              
            }
            api.createItem({
                collectionId:collectionid,
                fields: fields
            })
        
        })
    }

}).then(function() {
    const published = api.publishSite({siteId:siteid,domains:['madrecuenca.uy','www.madrecuenca.uy']});
    published.then(p => console.log(p));

})
}


// cuencos x8
getItems('61f90e5c7a457c3409dff91d');






//callectionid = 61f90e5c7a457c3409dff91d
