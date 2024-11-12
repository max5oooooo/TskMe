const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_URI, {tls:true});

        console.log("Database connected");
    } catch (error) {
        throw error;
    }
}

const disconnect = async () => {
    try {
        mongoose.disconnect();

        console.log("Database disconnected");
    } catch (error) {
        throw error;
    }
}

const models = {
    User: require("./models/User"),
    Task: require("./models/Task"),
}

module.exports = {
    connect,
    disconnect,
    ...models
}