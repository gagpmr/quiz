import PouchDB from "pouchdb";
import PouchDBFind from "pouchdb-find";
import PouchDBUpsert from "pouchdb-upsert";
var remoteCouch = "http://gagpmr:claudemonet@localhost:5984/history";
PouchDB.plugin(PouchDBFind);
PouchDB.plugin(PouchDBUpsert);

const history = PouchDB("history");
history.createIndex({
  index: { fields: ["field"] }
});

const sync = () => {
  return history
    .sync(remoteCouch, {
      live: true,
      retry: true
    })
    .on("change", function(change) {
      console.log("Change made to CouchDb:-");
      console.log(change);
    })
    .on("paused", function(info) {
      console.log("Live replication paused");
      console.log(info);
    })
    .on("active", function(info) {
      console.log("Live replication resumed");
      console.log(info);
    })
    .on("error", function(err) {
      console.log("Error during replication - CouchDb");
      console.log(err);
    });
};

const getDefault = () => {
  return {
    _id: new Date().toISOString(),
    subject: "history"
  };
};

export const add = item => {
  const def = getDefault();
  def.question = item.question;
  def.answer = item.answer;
  console.log(def);
  return history
    .put(def)
    .then(response => {
      console.log(response);
      return sync();
    })
    .catch(function(err) {
      console.log("Error while adding - History");
      console.log(err);
    });
};

export const all = () => {
  return history
    .allDocs({ include_docs: true, descending: true })
    .then(response => {
      console.log(response);
    })
    .catch(function(err) {
      console.log("Error while getting all - History");
      console.log(err);
    });
};
