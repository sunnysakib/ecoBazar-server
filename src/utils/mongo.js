const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const MONGO_URL = process.env.DATABASE_LOCAL;

async function mongoConnect() {
  mongoose.connect(MONGO_URL).then(
    () => {
      console.log(`Connecting MongoDb`.yellow.bold);
    },
    (err) => {
      console.log(err);
    }
  );
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
