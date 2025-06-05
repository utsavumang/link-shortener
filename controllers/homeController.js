const navbarLinks = [
    { href: "/", text: "Home" },
    { href: "/stats", text: "Stats" },
    { href: "/analytics", text: "Visit History" },
    { href: "https://github.com/utsavumang/link-shortener", text: "Github Repo" },
    { href: "https://github.com/utsavumang/link-shortener#link-shortener", text: "About" },
];

// Had a collision if shortURL was directly used as arguments because in middleware, it was colliding with next
async function renderHome(req, res, options = {}) {
  const { shortURL = null } = options;

  res.render("home", {
    navbarLinks,
    shortURL,
  });
}

module.exports = {
    renderHome
}