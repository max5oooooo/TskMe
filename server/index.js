require("dotenv").config();
const express = require("express");
const app = express();

const db = require("./db");
const helmet = require("helmet");
const cors = require("cors");

app.use(helmet());
app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./api"));
app.use("/auth", require("./auth"));

const { SERVER_PORT } = process.env;

db.connect();

app.listen(SERVER_PORT, () => {
    console.log(`Server up and running on port ${SERVER_PORT}`);
});