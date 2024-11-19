const { User } = require("../db");
const { verifyToken } = require("../utilities/auth");

/**
 * Authentication middleware for protected routes
 * @param {string[]} roles
 */
const authUser = (roles = ["owner"]) => async (req, res, next) => {
    const bearer = req.headers.authorization || req.headers["Authorization"] || false;

    if (!bearer) return res.status(401).json({ message: "User not authorize" });

    const token = bearer.replace("Bearer ", "");

    try {
        const is_verified = verifyToken(token);
    
        if (!is_verified) return res.status(401).json({ message: "User not authorize" });

        const user = await User.findOne({ _id: is_verified.id }, "-password", { lean: true });

        req.user = user;
        return next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "User not authorize" });
    }
}

module.exports = {
    authUser
}