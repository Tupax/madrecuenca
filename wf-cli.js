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
function getCollection() {

const collections = api.collections({ siteId: siteid });

collections.then(c => console.log(c));
}


getCollection();



