const mongoose = require('mongoose');
var services = mongoose.Schema(
    {
        name : {
            type : String
        },
        mobile : {
            type : String
        },
        amount : {
            type : String
        },
        timeTakes : {
            type : String
        },
        description : {
            type : String
        },
        reviewID : {
            type : String
        },
        FAQID : {
            type : String
        },
        imageUrl : {
            type : String
        },
        videoUrl : {
            type : String
        },
        availableRegions : {
            type : Array
        },
        warrantyPeriod : {
            type : String
        },
        supportedCars : {
            type : String
        },
        additionalPoints : {
            type : String
        }
  
    }
);