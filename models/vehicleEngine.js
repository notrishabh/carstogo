const mongoose = require('mongoose');
var vehicleEngine = new mongoose.Schema(
    {
        vehicleID: {
            type: String
        },
        type: {
            type: String
        },
        displacement: {
            type: String
        },
        maxPower: {
            type: String
        },
        maxTorque: {
            type: String
        },
        noOfCylinders: {
            type: Number
        },
        turboCharger: {
            type: Boolean
        },
        superCharger: {
            type: Boolean
        },
        driveType: {
            type: String
        },
        fuelSupplySystem: {
            type: String
        },
    }
);

