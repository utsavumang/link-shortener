const express = require("express");
const urlRouter = require('./routes/urlRouter');
const analyticsRouter = require('./routes/analyticsRouter')
const {connectMongoDB} = require("./config/connections");



const app = express();
const PORT = 8000;

connectMongoDB("mongodb://127.0.0.1:27017/link-shortener").then(() => console.log("Database Connected")).catch((err) => console.log("Error in Connection of Database"));


app.use(express.json())
app.use("/url", urlRouter);
app.use("/analytics", analyticsRouter);
app.listen(PORT, ()=> console.log(`Server Started at Port ${PORT}`));

