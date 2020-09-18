const mongoose = require('mongoose');
var user = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String
        },
        mobile: {
            type: String
        },
        password: {
            type: String
        },
        referral: {
            type: String
        },
        packageID : {
            type: String
        },
        historyID : {
            type: String
        },
        roleID : {
            type: String
        },
        reviewID : {
            type: String
        },
        serviceID : {
            type: String
        },
        googleID : {
            type: String
        },
        facebookID : {
            type: String
        },
        debitCardID : {
            type: String
        },
        creditCardID : {
            type: String
        },
        notificationID : {
            type: String
        },
        addresss : {
            type: String
        },
        pin_code : {
            type: String
        },
        gst : {
            type: String
        },
        pan : {
            type: String
        },
        registration_status : {
            type: Boolean
        },
        information_status : {
            type: Boolean
        },
    
    }
);

mongoose.model('user',user);
