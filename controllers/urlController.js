const { nanoid } = require('nanoid');

const URL = require("../models/url")

async function handleGenerateShortURL(req, res) {
    const body = req.body;
    if (!body || !body.url) return res.status(400).json({ error: "URL is required"});
    const shortId = nanoid(8);

    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory : [],
    });

    return res.json({id : shortId});

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