const mongoose = require('mongoose');
var serviceRatings = mongoose.Schema(
    {
        stars : {
            type : Number
        },
        description : {
            type : String
        },
        dateTime : {
            type : Date
        },
        reviewerName : {
            type : String
        },
    }
);