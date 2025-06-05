const express = require("express");
const urlRouter = require('./routes/urlRouter');
const analyticsRouter = require('./routes/analyticsRouter');
const statsRouter = require('./routes/statsRouter');
const homeRouter = require("./routes/homeRouter");
const {connectMongoDB} = require("./config/connections");
const path = require("path")

const app = express();
const PORT = 8000;

connectMongoDB("mongodb://127.0.0.1:27017/link-shortener").then(() => console.log("Database Connected")).catch((err) => console.log("Error in Connection of Database"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({extended: true})); //since we were sending form-data
app.use(express.json()); //possibly for other routes, im forgetting


app.use("/", homeRouter);
app.use("/url", urlRouter);
app.use("/analytics", analyticsRouter);
app.use("/stats", statsRouter)
app.listen(PORT, ()=> console.log(`Server Started at Port ${PORT}`));

