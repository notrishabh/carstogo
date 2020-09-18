const mongoose = require('mongoose');
var userRatings = new mongoose.Schema(
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
       }
    }
);