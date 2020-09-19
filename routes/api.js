const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();
const User = mongoose.model('user');
const Package = mongoose.model('package');
const Vehicle = mongoose.model('vehicle');


route.get('/users', (req,res)=>{
    User.find(({name : req.query.name}), (err,docs)=> {
        if(!err){
            res.send(docs);
        }else{
            console.log("Error in list" + err);
        }
    });
});
route.get('/packages', (req,res)=>{
    Package.find(({name : req.query.name}), (err,docs)=> {
        if(!err){
            res.send(docs);
        }else{
            console.log("Error in list" + err);
        }
    });
});
route.get('/vehicles', (req,res)=>{
    Vehicle.find(({make : req.query.make}), (err,docs)=>{
        if(!err){
            res.send(docs);
        }else{
            console.log("Error in list" + err);
        }
    });
});

module.exports = route;