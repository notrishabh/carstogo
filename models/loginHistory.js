const mongoose = require('mongoose');
var loginHistory = new mongoose.Schema(
    {
       dateTime : {
           type : Date
       },
);