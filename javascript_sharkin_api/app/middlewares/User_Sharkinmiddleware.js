const User=require("../models/user");

const User_Sharkinmiddleware = async (req, res, next)=>{
   try{
    await User.find({EmPlantao: true}).exec(function (err, results) {
        var count = results.length;
        if(count>1){
            res.status(401).json({'error': 'User_Sharkinmiddleware'})
        } else {
            next();
        }
      });
   } catch(error){
    res.status(201).json({"error":"Ja ha pessoas demais no plantao"});
   }
}
module.exports = User_Sharkinmiddleware;