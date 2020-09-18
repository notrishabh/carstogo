const mongoose = require('mongoose');
var debitCard = mongoose.Schema(
    {
        bankName : {
            type : String
        },
    }
);