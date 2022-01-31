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

var Airtable = require('airtable');

var base = new Airtable({apiKey: 'key64dRqz2W6akikD'}).base('appwF7020jRFGCAly');

const table = base('Cuenco Card');

var CuencoCards =[];

let runlastdate = new Date();


let t =runlastdate.toISOString();


table.select({
    view: "Suscripción",
    fields: ["CC#","Cédula", "Cuencos", "Last Modified","URLs","Phone","Fecha"],
    filterByFormula: "IS_AFTER({Last modified},TODAY())"
}).eachPage(function page(records, fetchNextPage) {
    
    records.forEach(function(record) {

        
        let card = new Card(record.get('CC#'),record.get('Cédula'),record.get('Cuencos'),record.get('URLs'),record.get('Phone'),record.get('Fecha'));

        CuencoCards.push(card);
        
    });

    fetchNextPage();

}, function done(err) {
    
    if (err) { console.error(err); return; }

    
    CuencoCards.forEach(card => {
        console.log(card);

        // Si existe en WF, modificar numero de cuencos

        // Si no existe, Crear item
        
    });
    
    


});


