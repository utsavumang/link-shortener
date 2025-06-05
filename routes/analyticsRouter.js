const express = require('express')
const {renderAnalyticsPage, renderAnalyticsSearch} = require("../controllers/analyticsController") 

const analyticsRouter = express.Router();
analyticsRouter.get('/', renderAnalyticsPage);
analyticsRouter.get('/search/', renderAnalyticsSearch );

module.exports = analyticsRouter;
