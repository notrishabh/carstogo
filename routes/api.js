const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();
const User = mongoose.model('user');
const Package = mongoose.model('package');
const Vehicle = mongoose.model('vehicle');


route.get('/users', (req,res)=>{
    if(Object.keys(req.query).length === 0){
        User.find((err,docs)=> {
            if(!err){
                res.header("Content-Type", 'application/json');
                res.send(JSON.stringify(docs, null, 4));
            }else{
                console.log("Error in list" + err);
            }
        });
    }else{
    User.find(({name : req.query.name}), (err,docs)=> {
        if(!err){
            res.header("Content-Type", 'application/json');
            res.send(JSON.stringify(docs, null, 4));
        }else{
            console.log("Error in list" + err);
        }
    });
}

});
route.get('/packages', (req,res)=>{
    if(Object.keys(req.query).length === 0){
        Package.find((err,docs)=> {
            if(!err){
                res.header("Content-Type", 'application/json');
                res.send(JSON.stringify(docs, null, 4));
            }else{
                console.log("Error in list" + err);
            }
        });
    }else{
    Package.find(({name : req.query.name}), (err,docs)=> {
        if(!err){
            res.header("Content-Type", 'application/json');
            res.send(JSON.stringify(docs, null, 4));
        }else{
            console.log("Error in list" + err);
        }
    });
}
});
route.get('/vehicles', (req,res)=>{
    if(Object.keys(req.query).length === 0){
        Vehicle.find((err,docs)=>{
            if(!err){
                res.header("Content-Type", 'application/json');
                res.send(JSON.stringify(docs, null, 4));
            }else{
                console.log("Error in list" + err);
            }
        });
    }else{
        Vehicle.find(({make : req.query.make}), (err,docs)=>{
            if(!err){
                res.header("Content-Type", 'application/json');
                res.send(JSON.stringify(docs, null, 4));
            }else{
                console.log("Error in list" + err);
            }
        });
    }
});

module.exports = route;