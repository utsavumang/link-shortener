const navbarLinks = [
    { href: "/", text: "Home" },
    { href: "/shorten", text: "Shorten" },
    { href: "/stats", text: "Stats" },
    { href: "/about", text: "About" }
  ];


async function renderHome(req, res) {

    res.render("home", { navbarLinks : navbarLinks})

}

module.exports = {
    renderHome
}