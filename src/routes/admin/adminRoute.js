const express = require("express");
const { adminController } = require("../../cotrollers/admin/adminControllers");
const adminRoute = express.Router();
adminRoute.get("/get_students", adminController);
exports.adminRoute = adminRoute;
