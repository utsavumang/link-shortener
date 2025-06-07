const express = require('express');


const {
    renderSignupForm,
    renderLoginForm,
    handleSignup,
    handleLogin,
    handleLogout
} = require('../controllers/authController');

const authRouter = express.Router();

authRouter.get('/signup', renderSignupForm);
authRouter.get('/login', renderLoginForm);

authRouter.post('/signup', handleSignup);
authRouter.post('/login', handleLogin);

authRouter.get('/logout', handleLogout);

module.exports = authRouter;