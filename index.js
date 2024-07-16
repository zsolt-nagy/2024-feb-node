import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";

const app = express();
const port = process.env.PORT || 8080;

// cors elimination middleware
app.use(cors());
// post request handling - body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function appStartedCallback() {
    console.log("App is listening");
}

app.listen(port, appStartedCallback);

app.get("/", (req, res) => {
    res.status(200).json({ status: true });
});
