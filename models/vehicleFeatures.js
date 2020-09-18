const mongoose = require('mongoose');
var vehicleFeatures = new mongoose.Schema(
    {
        vehicleID: {
            type: String
        },
        abs: {
            type: Boolean
        },
        powerSteering: {
            type: Boolean
        },
        powerDoorLocks: {
            type: Boolean
        },
        powerWindowRear: {
            type: Boolean
        },
        remoteTrunkOpener: {
            type: Boolean
        },
        lowFuelWarningLight: {
            type: Boolean
        },
        childSafetyLocks: {
            type: Boolean
        },
        cupHolderFront: {
            type: Boolean
        },
        cupHolderRear: {
            type: Boolean
        },
        rearAcVents: {
            type: Boolean
        },
        navigationSystem: {
            type: Boolean
        },
        crashSensor: {
            type: Boolean
        },
        rearCamera: {
            type: Boolean
        },
        heightAdjustableFrontSeatBelts: {
            type: Boolean
        },
        rearSeatcentreArmRest: {
            type: Boolean
        },
        centralLocking: {
            type: Boolean
        },
        seatBeltWarning: {
            type: Boolean
        },
        antiTheftDevice: {
            type: Boolean
        },
        keylessEntry: {
            type: Boolean
        },
        immobilizer: {
            type: Boolean
        },
        powerAntennae: {
            type: Boolean
        },
        powerAdjustableExteriorRearViewMirror: {
            type: Boolean
        },
        electricFoldingRearViewMirror: {
            type: Boolean
        },
        adjustableHeadlights: {
            type: Boolean
        },
        exteriorElectricFoldingRearViewMirror: {
            type: Boolean
        },
        frontFogLights: {
            type: Boolean
        },
        rearWindowDefrogger: {
            type: Boolean
        },
        allViewCamera: {
            type: Boolean
        },
        clutchLock: {
            type: Boolean
        },
        tyrePressureMonitor: {
            type: Boolean
        },
    }
);

