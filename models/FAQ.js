const mongoose = require('mongoose');
var FAQ = mongoose.Schema(
    {

        question : {
            type : String
        },
        answer : {
            type : String
        },
    }
);