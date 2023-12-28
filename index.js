const express = require("express");
const { adminRoute } = require("./src/routes/admin/adminRoute");

const app = express();
require("dotenv").config();

app.use("/admin", adminRoute);
//Server Starting
let PORT = process.env.PORTNO;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
