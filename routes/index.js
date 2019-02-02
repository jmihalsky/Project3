const express = require("express");
const path = require("path");
const router = require("express").Router();

const db = require("../smodels");
const passport = require("../configuration/passport");

router.post("/API/signup", function(req,res){
    db.user.create({
        user_name: req.body.user_name,
        email: req.body.email,
        fist_name: req.body.fist_name,
        last_name: req.body.last_name,
        pword: req.body.pword
    }).then(function(){

    }).catch(function(err){

    });
});

module.exports = router;
