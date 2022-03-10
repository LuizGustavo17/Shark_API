const mongoose = require('mongoose');

/**
 * Creating a Sharkin's duty Table
 * 
 * @atributte HourSharkin: Time of Checkin
 * @atributte HourSharkout: Time of Checkout
 * 
 */
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