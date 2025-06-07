function ensureAuthenticated(res, res, next){
    if (req.session.user) {
        return next();
    }
    res.redorect("/auth/login");
}

module.exports = ensureAuthenticated;