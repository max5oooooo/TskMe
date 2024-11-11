const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { SERVER_PRIVATE_KEY } = process.env;

const generateToken = (payload) => {
    return jwt.sign(payload, SERVER_PRIVATE_KEY);
}

const verifyToken = (token) => {
    return jwt.verify(token, SERVER_PRIVATE_KEY);
}

const hashPassword = (password) => {
    return bcrypt.hashSync(password, 12);
}

const comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

module.exports = {
    generateToken,
    verifyToken,
    hashPassword,
    comparePassword,
}