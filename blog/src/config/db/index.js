const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://tiendatpot:gSa6usEAWhlMHdDG@cluster0.fgfmbee.mongodb.net/?retryWrites=true&w=majority/f8_education_dev",
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
