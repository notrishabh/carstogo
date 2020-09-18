const mongoose = require('mongoose');
var notifications = new mongoose.Schema(
    {
       registration : {
           type : String
       },
       packageRenewal : {
           type : String
       },
       loginReminder : {
           type : String
       },
       favourites : {
           type : String
       },
       holdRequest : {
           type : String
       },
       holdExpireReminder : {
           type : String
       },
       callBackRequest : {
           type : String
       },
       newsletter : {
           type : String
       }


    }
);