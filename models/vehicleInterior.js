const mongoose = require('mongoose');
var vehicleInterior = new mongoose.Schema(
    {
        vehicleID: {
            type: String
        },
        airConditioner: {
            type: Boolean
        },
        heater: {
            type: Boolean
        },
        digitalClock: {
            type: Boolean
        },
        seatType: {
            type: String
        },
        airBag: {
            type: Boolean
        },
        heightAdjustableDriverSeat: {
            type: Boolean
        },
        vanityMirror: {
            type: Boolean
        },
    }
);

