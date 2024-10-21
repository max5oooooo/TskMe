const Joi = require("joi");
const User = require("./user");

class Task {
    constructor(payload = {
        owner: User,
        colabs: [User],
        name: "",
        description: "",
        priority: "", // low, medium, high
        status: "", // active, pending, completed
        mode: "task", // task -> no colabs, project -> colabs
        complete_time_estimated: 0, // seconds
        active_time: 0, // seconds
        pending_time: 0, // seconds
        start_time: Date,
        end_time: Date,
        created_at: Date,
        updated_at: Date,
    }) {}

    static validate = async (payload) => {
        return await (Joi.object().keys({
            owner: Joi.string().required(),
            colabs: Joi.array().items(Joi.string().required()).optional(),
            name: Joi.string().required(),
            description: Joi.string().optional(),
            priority: Joi.string().required().valid("low", "medium", "high"),
            status: Joi.string().required().valid("active", "pending", "completed"),
            mode: Joi.string().required().valid("task", "project"),
            complete_time_estimated: Joi.number().required(),
            active_time: Joi.number().required(),
            pending_time: Joi.number().required(),
            start_time: Joi.date().optional(),
            end_time: Joi.date().optional(),
        })).validateAsync(payload);
    }
}

module.exports = Task;