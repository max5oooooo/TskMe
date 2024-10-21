/**
 * Authentication middleware for protected routes
 * @param {string[]} roles
 */
const authUser = (roles = ["owner"]) => (req, res, next) => {

}

module.exports = {
    authUser
}