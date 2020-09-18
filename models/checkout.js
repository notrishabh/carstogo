const mongoose = require('mongoose');
var checkout = mongoose.Schema(
    {
        packageID : {
            type : String
        },
        amount : {
            type : String
        },
        debitCardID : {
            type : String
        },
        creditCardID : {
            type : String
        },
        netBankingID : {
            type : String
        },
        upiID : {
            type : String
        },
        paytmID : {
            type : String
        },
    }
);