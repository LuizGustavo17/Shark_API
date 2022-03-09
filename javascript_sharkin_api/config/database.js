const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/sharkin_databasee', {
}).then(()=>console.log('Connection Succeful')).catch((err)=>console.log(err));