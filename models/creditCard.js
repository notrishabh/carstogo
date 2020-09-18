const mongoose = require('mongoose');
var creditCard = mongoose.Schema(
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