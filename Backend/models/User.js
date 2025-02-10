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
        workshop: {
            type: [Number],
            enum: [1, 2, 3, 4, 5],
            default: [] 
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema);

module.exports = User