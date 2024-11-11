const express = require("express");
const app = express.Router();

const { UserDTO } = require("../../DTO");
const { User } = require("../../db");
const { authUser } = require("../../middlewares/auth");
const { hashPassword } = require("../../utilities/auth");

/**
 * Create a new user
 * @path /api/users
 * @method POST
 */
app.post("/", async (req, res) => {
    try {
        const data = await UserDTO.validate(req.body);

        data.password = hashPassword(data.password);

        const user = (await new User(data).save()).toObject();

        const { password, tfa, ...newUser } = user;

        return res.status(201).json(newUser);
    } catch(err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
});

/**
 * Create a new user
 * @path /api/users
 * @method PUT
 */
app.put("/", authUser(["owner"]), async (req, res) => {
    try {
        const data = await UserDTO.validateUpdate(req.body);

        if (data.password) data.password = hashPassword(data.password);

        await User.updateOne({ _id: req.user._id }, { ...data });

        return res.status(200).json({ message: "User updated" })
    } catch(err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
})

module.exports = app;