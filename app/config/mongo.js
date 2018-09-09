const { Stitch, AnonymousCredential, RemoteMongoClient } = require('mongodb-stitch-react-native-sdk');

async function getDrugsCollection() {
  const stitchClient = await Stitch.initializeDefaultAppClient("supermedapp-wlufy");
  const mongodb = stitchClient.getServiceClient(
    RemoteMongoClient.factory,
    "mongodb-atlas"
  );

  if(!stitchClient.auth.isLoggedIn) {
    const credential = new AnonymousCredential();
    await stitchClient.auth.loginWithCredential(credential)
  }

  return mongodb.db("Drugs").collection("drugsformongo");
}



//const atlas = context.services.get("mongodb-atlas");
export default getDrugsCollection;
