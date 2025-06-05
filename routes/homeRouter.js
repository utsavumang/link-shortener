const express = require('express')


const homeRouter = express.Router();

const navbarLinks = [
    { href: "/", text: "Home" },
    { href: "/shorten", text: "Shorten" },
    { href: "/stats", text: "Stats" },
    { href: "/about", text: "About" }
  ];

homeRouter.get('/', (req, res) =>
    res.render("home", { navbarLinks : navbarLinks})
);

module.exports = homeRouter;
