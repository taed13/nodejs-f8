const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connect database successfully!!!");
  } catch (error) {
    console.log("Connect failure!!!");
  }
}

module.exports = { connect };
