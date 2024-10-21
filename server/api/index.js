const express = require("express");
const app = express.Router();

/**
 * @path /api/ping
 * @method GET
 */
app.get("/ping", (_, res) => {
    return res.status(200).json({ message: "Server online" });
});

/**
 * @path /api/users
 */
app.use("/users", require("./routes/users"));

/**
 * @path /api/tasks
 */
app.use("/tasks", require("./routes/tasks"));

module.exports = app;