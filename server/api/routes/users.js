const express = require("express");
const app = express.Router();

const bcrypt = require("bcryptjs");
const { UserDTO } = require("../../DTO");
const { User } = require("../../db");

/**
 * Create a new user
 * @path /api/users
 * @method POST
 */
app.post("/", async (req, res) => {
    try {
        const data = await UserDTO.validate(req.body);

        data.password = bcrypt.hashSync(data.password, 12);

        const user = (await new User(data).save()).toObject();

        const { password, tfa, ...newUser } = user;

        return res.status(201).json(newUser);
    } catch(err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
});

module.exports = app;