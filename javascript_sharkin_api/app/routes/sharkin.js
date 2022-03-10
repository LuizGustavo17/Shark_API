var express = require('express');
var router = express.Router();
const Sharkin = require('../models/sharkin');
const User = require('../models/user');
const WithAuth = require('../middlewares/auth');
const TurnInPlantao = require('../middlewares/TurnInPlantao');

// Sharkin's Checkin
router.post('/sharkin', WithAuth, TurnInPlantao, async(req, res) =>{
    try{
        let sharkin = new Sharkin({User_Id:req.user._id, IsComplete:false});
        await sharkin.save();
        res.status(200).json(sharkin);
    }
    catch (error) {
        res.status(500).json({error: 'An internal error ocurred'});
    }
})

// Sharkin's Checkout
router.put('/sharkout', WithAuth, async(req, res) =>{
    try{
         let docs = await Sharkin.findOneAndUpdate({User_Id:req.user._id, IsComplete:false}, {$set:{IsComplete:true, HourSharkout: Date.now()}}, {returnOriginal:false});
        res.status(200).json(docs);
    }
    catch (error) {
        res.status(500).json({error: 'An internal error ocurred'});
    }
});


module.exports = router;