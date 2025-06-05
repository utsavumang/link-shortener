const { nanoid } = require('nanoid');

const URL = require("../models/url")
const { renderHome } = require("./homeController");

async function handleGenerateShortURL(req, res) {
    
    if (!req.body) return res.status(400).json({ error: "Body is required"});
    if (!req.body.url) return res.status(400).json({ error: "URL is required"});
    const shortId = nanoid(8);

    await URL.create({
        shortId: shortId,
        redirectURL: req.body.url,
        visitHistory : [],
    });
    const fullShortUrl = `${req.protocol}://${req.get("host")}/url/${shortId}`;

    return renderHome(req, res, { shortURL: fullShortUrl });;
    // Would have been much simpler if we used res.render directly here but i was trying to prevent navbar components from repetition

}

async function handleRedirectURL(req, res) {
    const shortId = req.params.id;
    const entry = await URL.findOneAndUpdate(
        {
            shortId
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );
    res.redirect(entry.redirectURL); 
}


module.exports = {
    handleGenerateShortURL,
    handleRedirectURL,
}