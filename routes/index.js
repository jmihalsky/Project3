const express = require("express");
const path = require("path");
const router = require("express").Router();

const db = require("../smodels");
const passport = require("../configuration/passport");

router.post("/API/signup", function(req,res){
    console.log(req.body);
    db.usr.create({
        user_name: req.body.user_name,
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        pword: req.body.pword
    }).then(function(){
        res.json("success");
    }).catch(function(err){
        res.json(err);
    });
});

router.post("/API/login", passport.authenticate("local"), function(req,res){
    console.log("logged in ", req.body.user_name);
    userInfo = {
        user_name: req.body.user_name,
        logged_in: true
    };
    res.send(userInfo);
});

router.get("/API/userinfo", function(req,res){
    db.usr.findAll({where: {user_name: req.body.user_name}}).then(function(dbUsr){
        res.json(dbUser);
    }).catch(function(err){
        res.json(err);
    });
});

router.get("/API/resort_all", function(req,res){
    db.resort_weather.findAll({}).then(function(dbResAll){
        res.json(dbResAll);
    }).catch(function(err){
        res.json(err);
    });
});

router.get("/API/test", function(req,res){
    res.json("test");
});

module.exports = router;