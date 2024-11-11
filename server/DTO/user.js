const Joi = require("joi");

class User {
    constructor(payload = {
        first_name: "",
        last_name: "",
        description: "",
        email: "",
        password: "",
        roles: [], // owner, colab
        profile_image: "",
        tfa: {},
        is_active: true,
        is_verified: false,
    }) {}

    get full_name() {
        return `${this.first_name} ${this.last_name}`;
    }

    static validate = async (payload) => {
        return await (Joi.object().keys({
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            description: Joi.string().optional(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            roles: Joi.string().optional().valid("owner", "colab"),
            profile_image: Joi.string().optional(),
        })).validateAsync(payload);
    }

    static validateUpdate = async (payload) => {
        return await (Joi.object().keys({
            first_name: Joi.string().optional(),
            last_name: Joi.string().optional(),
            description: Joi.string().optional(),
            email: Joi.string().email().optional(),
            password: Joi.string().optional(),
        })).validateAsync(payload);
    }
}

module.exports = User;