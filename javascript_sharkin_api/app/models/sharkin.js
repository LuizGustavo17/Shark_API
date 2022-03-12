const mongoose = require('mongoose');
const date = new Date();
let fix =date.setHours(date.getHours()-3);

/**
 * Creating a Sharkin's duty Table
 * 
 * @atributte HourSharkin: Time of Checkin
 * @atributte HourSharkout: Time of Checkout
 * 
 */
let sharkinSchema = new mongoose.Schema({
    HourSharkin: {type: Date, default: fix},
    HourSharkout: {type: Date},
    User_Id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    IsComplete: Boolean,
    IsValid: Boolean
})

module.exports = mongoose.model('Sharkin', sharkinSchema)