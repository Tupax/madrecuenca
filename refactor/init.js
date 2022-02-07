// class Task {
//     constructor(name,Deadline,Status) {
//         this.name = name;
//         this.Deadline = Deadline;
//         this.Status = Status;
//         // this.recipiente = parseInt(recipiente);
//       }
// }
var giveClass = require('./taskclass');


const dataAirtable = [];
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keym0Wh3AN1Yv63Sv'}).base('appZWKwzBefWAYvqk');

base('Tasks').select({
    // Selecting the first 3 records in All tasks:
    maxRecords: 3,
    view: "All tasks",
    fields: ["Name","Deadline","Status"]
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.


    try {

    dataAirtable.push (records.map( db => new giveClass(db.get('Name'),null,db.get('Deadline'),db.get('Status')) ));

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    }
    catch(e){ console.log('error inside eachPage => ',e)}
    fetchNextPage();
    


}, function done(err) {
    if (err) { console.error(err); return; }


    console.log(dataAirtable);
});


