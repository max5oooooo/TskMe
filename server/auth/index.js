const express = require("express");
const app = express.Router();
const Joi = require("joi");
const { User } = require("../db");
const { generateToken, comparePassword } = require("../utilities/auth");

/**
 * @path /auth/token
 * @method POST
 */
app.post("/token", async (req, res) => {
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        const user = await User.findOne({ email: data.email }, null, { lean: true });

        if (!user) return res.status(404).json({ message: "User Not Found" });

        const is_valid_password = comparePassword(data.password, user.password);

        if (!is_valid_password) return res.status(404).json({ message: "User Not Found" });

        const token = generateToken({ id: user._id, email: user.email, roles: user.roles });

        const { is_active, is_verified, password, ...userData } = user;

        return res.status(201).json({ token, user: userData });
    } catch(err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
});

module.exports = app;