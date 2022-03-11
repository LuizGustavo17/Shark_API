const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/sharkin_databas15', {
}).then(()=>console.log('Connection Succeful')).catch((err)=>console.log(err));