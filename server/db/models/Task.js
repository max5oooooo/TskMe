const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const TaskSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    colabs: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "User",
        }],
        default: []
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"]
    },
    status: {
        type: String,
        enum: ["active", "pending", "completed"]
    },
    mode: {
        type: String,
        enum: ["task", "project"]
    },
    complete_time_estimated: {
        type: Number,
        required: true,
    },
    active_time: {
        type: Number,
        required: true,
    },
    pending_time: {
        type: Number,
        required: true,
    },
    start_time: {
        type: Date,
        default: null
    },
    end_time: {
        type: Date,
        default: null
    },
}, { timestamps: true, versionKey: false, strict: true });

TaskSchema.plugin(mongoosePaginate);

const Task = model("Task", TaskSchema);

module.exports = Task;