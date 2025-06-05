const { nanoid } = require('nanoid');

const URL = require("../models/url")

async function handleGenerateShortURL(req, res) {
    
    if (!req.body) return res.status(400).json({ error: "Body is required"});
    if (!req.body.url) return res.status(400).json({ error: "URL is required"});
    const shortId = nanoid(8);

    await URL.create({
        shortId: shortId,
        redirectURL: req.body.url,
        visitHistory : [],
    });

    return res.render({id : shortId});

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