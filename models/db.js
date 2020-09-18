const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/carstogo';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err)=>{
    if(!err){
        console.log("Database Connected ....");
    }else{
        console.log("error in database connection : " + err);
    }
});

require('./user');
require('./package');