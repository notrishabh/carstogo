const mongoose = require('mongoose');
var inventory = new mongoose.Schema(
    {
       userID : {
           type : String
       },
       vehicleID : {
           type : String
       },
       status : {
           type : String
       },
       adminApproval : {
           type : Boolean
       }
    }
);