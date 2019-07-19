const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const fs = require("fs");

const url = "mongodb://localhost:27017";

const cardsDB = "CardDatabase";

const client = new MongoClient(url);

const cardsData = fs.readFileSync("./src/data/cardsB.json");
const cards = JSON.parse(cardsData);

const insertCards = (db) => {
  let collection = db.collection('commandCards');
  collection.insertMany(cards.commands, (result, err) => {
    if(err) console.log(err);
  });
  collection = db.collection('units');
  collection.insertMany(cards.units, (result, err) => {
    if(err) console.log(err);
  });
  collection = db.collection('upgrades');
  collection.insertMany(cards.upgrades, (result, err) => {
    if(err) console.log(err);
  });
  collection = db.collection('battlePlans');
  collection.insertMany(cards.battlePlans, (result, err) => {
    if(err) console.log(err);
  });
};

client.connect(err => {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(cardsDB);
  insertCards(db);
  client.close();
});

