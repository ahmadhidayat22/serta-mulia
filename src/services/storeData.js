const { Firestore } = require('@google-cloud/firestore');
const projectId = process.env.PROJECT_ID;
async function storeData(id, data) {
    const db = new Firestore({
        projectId
    });
   
    const predictCollection = db.collection('prediction');
    return predictCollection.doc(id).set(data);
  }
   
module.exports = storeData;