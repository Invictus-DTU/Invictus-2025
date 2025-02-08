const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        name: {
            required: true,
            type: String
        },
        email: {
            unique: true,
            required: true,
            type: String
        },
        password: {
            required: true,
            type: String
        },
        college: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema);

module.exports = User