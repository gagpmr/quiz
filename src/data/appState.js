import PouchDB from "pouchdb";
var remoteCouch = "http://gagpmr:claudemonet@localhost:5984/appState";

const appState = PouchDB("appState");
export const updateField = (field, value) => {
  var qa = {
    _id: new Date().toISOString(),
    value: value,
    field: field
  };
  appState.put(qa, (err, result) => {
    if (!err) {
      console.log("Successfully updated appState");
    }
    console.log(result);
  });
  var opts = { live: true };
  appState.sync(remoteCouch, opts);
};
