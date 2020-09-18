const mongoose = require('mongoose');
var package = new mongoose.Schema(
    {
        name: {
            type: String
        },
        price: {
            type: String
        },
        validity: {
            type: Date
        },
        maxVehiclesListed: {
            type: Number
        },
        maxViewsAllowed: {
            type: Number
        },
        noOfStates: {
            smallStates : {
                type : Number
            },
            mediumStates : {
                type : Number
            },
            largeStates : {
                type : Number
            },
        },
        statesOpted: {
            smallStateID : {
                type : Array
            },
            mediumStates : {
                type : Array
            },
            largeStates : {
                type : Array
            },
        },
        viewOtherDealers: {
            type: Boolean
        },
        priorityListing: {
            type: Boolean
        },
        expressSaleListing: {
            type: Boolean
        },
        bannerAd: {
            type: Boolean
        },
        trustedDealerBrand: {
            type: Boolean
        },
    }
);

mongoose.model('package', package);

