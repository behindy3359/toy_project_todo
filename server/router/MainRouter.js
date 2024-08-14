const express = require("express");
const router = express.Router();
const controller = require("../controller/mainController");

console.log('mainrouter호출');

router.get('/',controller.main);

module.exports = router;