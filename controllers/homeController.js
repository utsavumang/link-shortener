const navbarLinks = [
    { href: "/", text: "Home" },
    { href: "/shorten", text: "Shorten" },
    { href: "/stats", text: "Stats" },
    { href: "/about", text: "About" }
  ];


async function renderHome(req, res, shortURL = null ) {

    res.render("home", {
         navbarLinks : navbarLinks,
         shortURL : shortURL,
    })

}

module.exports = {
    renderHome
}