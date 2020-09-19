const mongoose = require('mongoose');
var vehicle = new mongoose.Schema(
    {
        make: {
            type: String
        },
        model: {
            type: String
        },
        type: {
            type: String
        },
        price: {
            type: String
        },
        color: {
            type: String
        },
        mileage : {
            type: String
        },
        seats : {
            type: Number
        },
        fuel : {
            type: String
        },
        distanceTravelled : {
            type: String
        },
        imageUrl : {
            type: String
        },
        views : {
            type: String
        },
        status : {
            type: String
        },
        registration_state : {
            type: String
        },
        yearOfManufacturing : {
            type: String
        },
        transmissionType : {
            type: String
        },
        noOfOwners : {
            type: Number
        },
        engine : {
            type: String
        },
        torque : {
            type: String
        },
        topSpeed : {
            type: String
        },
        acceleration : {
            type: String
        },
        emmisionControlSystem : {
            type: String
        },
        insuranceExpiryDate : {
            type: String
        },
        warranty : {
            type: String
        },
        warrantyPeriod : {
            type: String
        },
        tenPercentDiscount : {
            type: Boolean
        },
        accidental : {
            type: Boolean
        },
    
    }
);
mongoose.model('vehicle', vehicle);

