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

router.get("/API/userinfo/:user_name", function(req,res){
    console.log(req.params.user_name);
    db.usr.findAll({attributes:["user_id","user_name","email","first_name","last_name"],where: {user_name: req.params.user_name}}).then(function(dbUser){
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

router.get("/API/usr_resorts/:user_name", function(req,res){
    db.usr_resort_favs.findAll({where: {user_name: req.params.user_name}}).then(function(dbUserFavs){
        res.json(dbUserFavs);
    }).catch(function(err){
        res.json(err);
    });
});

router.post("/API/user_fav_sav",function(req,res){
    db.user_favs.create({
        user_id: req.body.user_id,
        resort_id: req.body.resort_id
    }).then(function(){
        res.json("success");
    }).catch(function(err){
        res.json(err);
    });
});

router.get("/API/test", function(req,res){
    res.json("test");
});

module.exports = router;