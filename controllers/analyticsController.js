const navbarLinks = [
    { href: "/", text: "Home" },
    { href: "/stats", text: "Stats" },
    { href: "/analytics", text: "Visit History" },
    { href: "https://github.com/utsavumang/link-shortener", text: "Github Repo" },
    { href: "https://github.com/utsavumang/link-shortener#link-shortener", text: "About" },
];


const URL = require("../models/url")

async function renderAnalyticsPage(req, res) {
  res.render("analytics", {
    navbarLinks,
    result: null,
    fullShortURL: null,
    error: null
  });
}

async function renderAnalyticsSearch(req, res) {
    const shortId = req.query.shortId;

    if (!shortId) {
        return res.redirect("/analytics");
    }

    const result = await URL.findOne({shortId});

    if (!result) {
        return res.render("analytics", {
            navbarLinks,
            result: null,
            fullShortURL: null,
            error: "Short ID not found",
        });
    }

    if (result.createdBy && result.createdBy.toString() !== req.session.userId) {
        return res.render("analytics", {
            navbarLinks,
            result: null,
            fullShortURL: null,
            error: "You are not authorized to view analytics for this link",
        });
    }
    const fullShortURL = `${req.protocol}://${req.get("host")}/url/${shortId}`;  

    res.render("analytics", {
        navbarLinks,
        fullShortURL,
        result,
        error: null
    });
}

async function renderStats(req, res) {
    const urls = await URL.find({ createdBy: req.session.userId });
    res.render("stats", {
        navbarLinks,
        urls,
        req
  });
}


module.exports = {
    renderAnalyticsPage,
    renderAnalyticsSearch,
    renderStats,
}

