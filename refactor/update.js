

var log = require('/home/tupax/SmallPotion/Webflow/madrecuenca/log-cli.js');

var Card = require('./card');



var Airtable = require('airtable');

var base = new Airtable({apiKey: 'key64dRqz2W6akikD'}).base('appwF7020jRFGCAly');

const table = base('Cuenco Card');

var CuencoCardsAirtable =[];

const Webflow = require('webflow-api');
// Initialize the API
const api = new Webflow({ token: 'c715d17584ef110d7c3c7bcaa6906c5931c130ea4ac0aaae1726c92143b7bcc6' });
const siteid = '61f00bdd2265e92582e18224';



table.select({
    view: "Suscripción",
    fields: ["CC#","Cédula", "Cuencos", "Last Modified","URLs","Phone","Fecha","Descuento Envase"],
    filterByFormula: "IS_AFTER({Last modified},TODAY())"
}).eachPage(function page(records, fetchNextPage) {


    try{
        CuencoCardsAirtable.push(records.map( db =>
            new Card(db.get('CC#'),db.get('Cédula'),db.get('Cuencos'),db.get('URLs'),db.get('Phone'),db.get('Fecha'),db.get('Descuento Envase'))
        ))
    }
    catch(e){ console.log('error inside eachPage => ',e)}


    fetchNextPage();

}, function done(err) {
    
    if (err) { console.error(err); return; }
    console.log("Airtable data arrive!");



    let collectionid = '61f90e5c7a457c3409dff91d';
    let update = false;


    const items = api.items({ collectionId: collectionid }, { limit: 100 });
    items.then((info) => {
        console.log("WF data incoming ...");
        // Filtar cuencos que sea necesario actualizar en WF
        // Filtrar cuencos que se tegan que crear en WF
        info.items.forEach(i => {
            // setTimeout(() => {console.log("this is the 55 message - 3s")}, 3000);

            console.log(i.slug);
        // 1. Busco los CC registrados
            CuencoCardsAirtable.forEach(e => {    
                if(i.name == e.id){
                
                    if(i.cuencos !== e.cuencos){    
                    // hacer update de cuenco
                    // let  fields = {}
                    let fields = {
                        'cuencos': e.cuencos

                    }
                    api.patchItem({
                        collectionId:collectionid,
                        itemId: i._id   ,
                        fields: fields
                        
                        })
                    log.writerow("De la CC: "+e.id +" se actualizó el nro de cuencos a: "+e.cuencos);                    
                    update = true;
                    }
    
                // Sino soloQuito esta cc del array porque ya esta realizado
                CuencoCardsAirtable = CuencoCardsAirtable.filter((element) => element.id !== i.name); 
                }   
            });
        });
    
        if (CuencoCardsAirtable.length > 0){
            // Crear un item nuevo en WF por cada item nuevo porque no esta registrado
        
            CuencoCardsAirtable.forEach(e=> {
                e.fecha = new Date(e.fecha);
                e.fecha = e.fecha.toISOString();
                let slug = e.id.substring(e.id.length - 5);
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
                
                log.writerow("Se creó la CC: "+e.id);

            })
            update = true;
        }

    }).then(function() {
        if( update){
        const published = api.publishSite({siteId:siteid,domains:['madrecuenca.uy','www.madrecuenca.uy']});
        published.then(p => console.log(p));
        } else {
            console.log("No fue necesario re-publicar el sitio");
        }

    }).then(function(){


        if (CuencoCardsAirtable.length === 0){
            console.log("No hay nuevas entradas\n ----- END ------");
            log.writerow("No hay nuevas entradas");
        }
    }).catch(err=> console.error(err));



}); 


