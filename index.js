const express = require("express");

const urlRouter = require('./routes/urlRouter');
const analyticsRouter = require('./routes/analyticsRouter');
const statsRouter = require('./routes/statsRouter');
const homeRouter = require("./routes/homeRouter");
const authRouter = require("./routes/authRouter");

const {connectMongoDB} = require("./config/connections");
const path = require("path")
const session = require("express-session")
const MongoStore = require("connect-mongo");
const ensureAuthenticated = require("./middlewares/authMiddleware");

const app = express();
const PORT = 8000;

connectMongoDB("mongodb://127.0.0.1:27017/link-shortener").then(() => console.log("Database Connected")).catch((err) => console.log("Error in Connection of Database"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({extended: true})); //since we were sending form-data
app.use(express.json()); //possibly for other routes, im forgetting

app.use(
    session({
        secret: "linkime",
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: "mongodb://127.0.0.1:27017/link-shortener",
            collectionName: "sessions",
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24
        }
    })
);

app.use((req, res, next) => {
    res.locals.uuser = req.session.user || null;
    next();
})

app.use("/auth", authRouter);
app.use("/url", urlRouter);
app.use("/analytics", ensureAuthenticated, analyticsRouter);
app.use("/stats", ensureAuthenticated, statsRouter)
app.use("/", ensureAuthenticated, homeRouter);
app.listen(PORT, ()=> console.log(`Server Started at Port ${PORT}`));

