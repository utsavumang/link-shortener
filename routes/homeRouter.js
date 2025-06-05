const express = require('express')
const{renderHome} = require("../controllers/homeController");

const homeRouter = express.Router();


homeRouter.get('/', renderHome);

module.exports = homeRouter;
