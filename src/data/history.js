import PouchDB from "pouchdb";
import PouchDBFind from "pouchdb-find";
import PouchDBUpsert from "pouchdb-upsert";

PouchDB.plugin(PouchDBFind);
PouchDB.plugin(PouchDBUpsert);

var couchDb = new PouchDB("http://gagpmr:claudemonet@localhost:5984/history");
const history = new PouchDB("history");

history.createIndex({
  index: { fields: ["field"] }
});

const getDefault = () => {
  return {
    _id: new Date().toISOString(),
    subject: "history"
  };
};

export const add = async item => {
  const def = getDefault();
  def.question = item.question;
  def.answer = item.answer;
  try {
    await history.put(def);
    await history.sync(couchDb);
  } catch (error) {
    console.log("Error while adding - History:-");
  }
};

export const all = async () => {
  const questions = [];
  try {
    await history.sync(couchDb);
  } catch (error) {
    console.log("App - CouchDB Sync Error - History:-");
    console.log(error);
  }
  try {
    const result = await history.allDocs({ include_docs: true, descending: true });
    result.rows.forEach(n => {
      if (n.doc.subject) {
        questions.push(n.doc);
      }
    });
  } catch (error) {
    console.log("App - Error - Get all error - History");
    console.log(error);
  }
  return questions;
};
