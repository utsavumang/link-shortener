const {Router} = require("express");
const{handleGenerateShortURL, handleRedirectURL} = require("../controllers/urlController");

const urlRouter = Router();


urlRouter.post("/", handleGenerateShortURL);

urlRouter.get("/:id", handleRedirectURL);

module.exports = urlRouter;