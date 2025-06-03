
const URL = require("../models/url")


async function handleAnalytics(req, res){
    const shortId = req.params.id;
    const result = await URL.findOne({shortId});
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    })
}

module.exports = {
    handleAnalytics
}