const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    userid: {
        required: true,
        type: Number
    },
    plan: {
        required: true,
        type: String
    },
    days: {
        required: true,
        type: String
    },
    exercise: {
        required: true,
        type: Array
    }
});

module.exports = mongoose.model('Workout', dataSchema);