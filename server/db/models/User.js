const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        enum: ["owner", "colab"],
        default: ["owner"],
    }, // owner, colab
    profile_image: {
        type: String,
        required: false,
        default: null
    },
    // tfa: {},
    is_active: {
        type: Boolean,
        default: true,
    },
    is_verified: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true, versionKey: false, strict: true });

UserSchema.plugin(mongoosePaginate);

const User = model("User", UserSchema);

module.exports = User;