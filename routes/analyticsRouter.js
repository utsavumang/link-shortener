const express = require('express')
const {handleAnalytics} = require("../controllers/analyticsController") 

const analyticsRouter = express.Router();

analyticsRouter.get('/:id', handleAnalytics );

module.exports = analyticsRouter;
