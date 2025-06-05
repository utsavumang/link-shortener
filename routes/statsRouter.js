const express = require('express')
const {renderStats} = require("../controllers/analyticsController") 

const statsRouter = express.Router();

statsRouter.get('/', renderStats );

module.exports = statsRouter;
