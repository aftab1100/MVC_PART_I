const { Cat } = require("../../models/Cat");
//JavaScript HOF
let adminController = (req, res) => {
  //Modal
  //mongoose.model(tableName,Schemea or columInformation)
  //mongoose.model(CollectionName,SchemaDefinationary)

  const kitty = new Cat({ name: req.query.name });
  kitty
    .save()
    .then(() => {
      res.status(200).json({
        message: "ok",
      });
      console.log(req.query.name);
    })
    .catch((e) => {
      res.status(400).json({
        message: "error",
        data: e,
      });
    });
};
//Named exports
module.exports = { adminController: adminController };
