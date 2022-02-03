// test sites find on internet


const Webflow = require('webflow-api');

const api = new Webflow({token:'76070838dfba49869ab9a542dcd8b8faf819a0f251fb252992da43dd301193d8'});
const siteid = '5e11f6f45aa398e84a03cef4';


// const info = api.info();
// info.then(i => console.log(i));


function displayCollections(siteId) {
    const collections = api.collections({ siteId: siteId });
  
    collections.then((collection) => {
    //   var collectionId = c[0]._id;
        collection.forEach(c => {
            console.log(c);
            
        });
    //   console.log('First collection id = ' + collectionId);
        
    //   displayItems(collectionId);
    });
  }


// Promise <[ Item ]>
function displayItems(collectionId) {
    const items = api.items({ collectionId: collectionId }, { limit: 100 });
  
    items.then((i) => console.log(i));
}
  



// const site = api.site({ siteId: siteid });

// site.then(s => console.log(s));


const domains = api.domains({ siteId: siteid });

domains.then(d => console.log(d));


// ----
// RUN
// ----
// displayCollections(siteid);