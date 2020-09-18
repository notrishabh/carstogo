const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('user');
const Package = mongoose.model('package');

var loggedInID = "damn";

route.get('/',(req,res) => {
    res.render('home/user', {
        title : "User register"
    });
});

route.post('/', (req,res) => {
    registerUser(req,res);
});

function registerUser(req,res){
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.mobile = req.body.mobile;
    user.password = req.body.password;
    loggedInID = user.id;

    user.save((err,docs) => {
        if(!err){
            res.redirect('/package');
        }else{
            console.log("Error in registration : " + err);
        }
    });
}

route.get('/package', (req,res)=>{
    Package.find((err,docs)=>{
        if(!err){
            res.render('home/package', {
                package : docs,
                title : "Select Package"
            });
        }else{
            console.log("Error in package reading : " +err);
        }
    }).lean();
});

route.get('/package/:id', (req,res)=>{
    Package.findOne({_id : req.params.id}, (err,packs)=>{
    User.findOneAndUpdate({_id : loggedInID}, {$set : {packageID : packs.name}}, {new:true}, (err,docs)=>{
        if(!err){
            // res.send("PACKAGE ADDED" + packs.name);

            User.aggregate([{$lookup:
                {
                      from: "packages",
                      localField: "packageID",
                      foreignField: "name",
                      as: "packageDetails"
                  }
                 },
                 {
                    // $match: { "packageDetails": { $ne: [] } },
                    $match: { _id: mongoose.Types.ObjectId(loggedInID) }
                 }
              ], (err,details)=>{
                //   console.log(details[1].packageDetails[0].name);
                //   details.forEach((item) => {
                //       item.packageDetails.forEach((subItem)=>{
                //           console.log(subItem.name);
                //       });
                //   });
                var packss = details[0].packageDetails[0];
                res.render('home/select', {
                    name : packss.name,
                    price : packss.price,
                    validity : packss.validity,
                    maxVehicleListed : packss.maxVehicleListed,
                    maxViewsAllowed : packss.maxViewsAllowed,
                    username : details[0].name
                });
              });
        }else{
            console.log("error in package adding :" + err);
        }
    });
    });
});



module.exports = route;