//Import area
const mongoose = require("mongoose");

require("dotenv").config();
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_DB}.j4tnhwo.mongodb.net/?retryWrites=true&w=majority`
  )
  .then((d) => {
    console.log("connected Successfully");
  })
  .catch((e) => {
    console.log("Error", e);
  });

//Exports
exports.mongoose = mongoose;
