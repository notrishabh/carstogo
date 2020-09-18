const mongoose = require('mongoose');
var debitCard = mongoose.Schema(
    {
        nameOnCard : {
            type : String
        },
        cardNumber : {
            type : String
        },
        expiryMonth : {
            type : Number
        },
        expiryYear : {
            type : Number
        },
        cvv : {
            type : Number
        },
    }
);