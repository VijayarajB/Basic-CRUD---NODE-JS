const mongoose = require ('mongoose');

const employersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    employeeID:{
        type: String,
        required: true
    },
    emailID: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    pocSubmitted: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('employersDetails', employersSchema);