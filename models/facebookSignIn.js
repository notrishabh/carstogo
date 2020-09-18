const mongoose = require('mongoose');
var facebookSignIn = new mongoose.Schema(
    {
        name : {
            type : String
        },
        email : {
            type : String
        },
        profileUrl : {
            type : String
        },
    }
);