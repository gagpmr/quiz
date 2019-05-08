import PouchDB from "pouchdb";
import PouchDBFind from "pouchdb-find";
import PouchDBUpsert from "pouchdb-upsert";
var remoteCouch = "http://gagpmr:claudemonet@localhost:5984/app-state";
PouchDB.plugin(PouchDBFind);
PouchDB.plugin(PouchDBUpsert);

const appState = PouchDB("app-state");
appState.createIndex({
  index: { fields: ["field"] }
});

export const updateField = (field, value) => {
  appState
    .upsert(field, doc => {
      doc.value = value;
      return doc;
    })
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    });
  var opts = { live: true };
  appState.sync(remoteCouch, opts);
};
