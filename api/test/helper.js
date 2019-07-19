const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require("mongoose");

process.env.ENV = "test";
chai.use(chaiHttp);

setTimeout(() => {
  after(async () => {
    if(mongoose.connection.db) {
      await mongoose.connection.db.dropDatabase();
    }
    mongoose.connection.close();
  });
});
