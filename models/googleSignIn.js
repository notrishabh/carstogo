const mongoose = require('mongoose');
var googleSignIn = new mongoose.Schema(
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