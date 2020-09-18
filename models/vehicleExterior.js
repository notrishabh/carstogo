const mongoose = require('mongoose');
var vehicleExterior = new mongoose.Schema(
    {
        vehicleID: {
            type: String
        },
        length: {
            type: String
        },
        width: {
            type: String
        },
        height: {
            type: String
        },
        wheelBase: {
            type: String
        },
        adjustableHeadlights: {
            type: Boolean
        },
        convertibleRoof: {
            type: Boolean
        },
        grossWeight: {
            type: String
        },
        tyreSize: {
            type: String
        },
    }
);

