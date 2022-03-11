const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/sharkin_databasl', {
}).then(()=>console.log('Connection Succeful')).catch((err)=>console.log(err));