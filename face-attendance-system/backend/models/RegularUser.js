const mongoose = require('mongoose');

const RegularUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    encoding: {
        type: Array,
        required: true
    },
    status: {
        type: String,
        default: 'Absent'
    }
});

module.exports = mongoose.model('RegularUser', RegularUserSchema);
