import React from 'react';

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "supermed";

const db = ({ text }) => {
  // Use connect method to connect to the server
  MongoClient.connect(
    url,
    { useNewUrlParser: true },
    function(err, client) {
      assert.equal(null, err);
      console.log("Connected successfully to server");

      const db = client.db(dbName);
      let result;

      db.collection("drugs")
        .find({
          US_brands: "Advil"
        })
        .toArray()
        .then(res => result = res)
        .catch(err => console.error(error));
      client.close();
    }
  );
  return (
    result
  )
};

export default db;
