const mongoose = require('mongoose');
let sharkinSchema = new mongoose.Schema({
    HourSharkin: {type: Date, default: Date.now},
    HourSharkout: {type: Date},
    User_Id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    IsComplete: Boolean
})

module.exports = mongoose.model('Sharkin', sharkinSchema)