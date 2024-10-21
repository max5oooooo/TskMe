const jwt = require("jsonwebtoken");

const { SERVER_PRIVATE_KEY } = process.env;

const generateToken = (payload) => {
    return jwt.sign(payload, SERVER_PRIVATE_KEY);
}

const verifyToken = (token) => {
    return jwt.verify(token, SERVER_PRIVATE_KEY);
}

module.exports = {
    generateToken,
    verifyToken,
}