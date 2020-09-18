const mongoose = require('mongoose');
const url = process.env.MONGODB_URI || 'mongodb+srv://rishabh:rishabh@cluster0.awuov.mongodb.net/carstogo?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err)=>{
    if(!err){
        console.log("Database Connected ....");
    }else{
        console.log("error in database connection : " + err);
    }
});

require('./user');
require('./package');