const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,(err) =>{
    if(!err){
        console.log('Connection Successs');
    }else{
        console.log('error in MongoDB connection:'+JSON.stringify(err, undefined, 2));
    }
});

require('./user.model');