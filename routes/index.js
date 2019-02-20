const express = require("express");
const path = require("path");
const router = require("express").Router();

const db = require("../smodels");
const passport = require("../configuration/passport");

router.post("/API/signup", function(req, res) {
  console.log(req.body);
  db.usr
    .create({
      user_name: req.body.user_name,
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      pword: req.body.pword
    })
    .then(function() {
      res.json("success");
    })
    .catch(function(err) {
      res.json(err);
    });
});

router.post("/API/login", passport.authenticate("local"), function(req, res) {
  console.log("logged in ", req.body.user_name);
  console.log(req.user.user_id);
  userInfo = {
    user_name: req.body.user_name,
    user_id: req.user.user_id,
    logged_in: true
  };
  res.send(userInfo);
});

router.get("/API/userinfo/:user_name", function(req, res) {
  console.log(req.params.user_name);
  db.usr
    .findAll({
      attributes: ["user_id", "user_name", "email", "first_name", "last_name"],
      where: { user_name: req.params.user_name }
    })
    .then(function(dbUser) {
      res.json(dbUser);
    })
    .catch(function(err) {
      res.json(err);
    });
});

router.get("/API/resort_all", function(req, res) {
  db.resort_weather
    .findAll({ order: [["resort_name", "ASC"]] })
    .then(function(dbResAll) {
      res.json(dbResAll);
    })
    .catch(function(err) {
      res.json(err);
    });
});

router.get("/API/user_resorts/:user_name", function(req, res) {
  db.usr_resort_favs
    .findAll({ where: { user_name: req.params.user_name } })
    .then(function(dbUserFavs) {
      res.json(dbUserFavs);
    })
    .catch(function(err) {
      res.json(err);
    });
});

router.post("/API/user_fav_sav", function(req, res) {
  db.user_favs
    .create({
      user_id: req.body.user_id,
      resort_id: req.body.resort_id
    })
    .then(function() {
      res.json("success");
    })
    .catch(function(err) {
      res.json(err);
    });
});

router.get("/API/resort/:resort_id", function(req, res) {
  db.resort_weather
    .findAll({ where: { resort_id: req.params.resort_id } })
    .then(function(dbResort) {
      res.json(dbResort);
    })
    .catch(function(err) {
      res.json(err);
    });
});

router.get("/API/usr_rpt/:resort_id", function(req, res) {
  db.user_reports
    .findAll({
      where: { resort_id: req.params.resort_id },
      order: [["report_date", "DESC"]]
    })
    .then(function(dbUsrReports) {
      res.json(dbUsrReports);
    })
    .catch(function(err) {});
});

router.post("/API/usr_rpt", function(req, res) {
  console.log(req.body);
  db.user_res_conditions
    .create({
      resort_id: req.body.resort_id,
      user_id: req.body.user_id,
      report_date: req.body.report_date,
      new_snow: req.body.new_snow,
      temp: req.body.temp,
      lft_lines: req.body.lft_lines,
      cond: req.body.cond,
      cond_notes: req.body.cond_notes
    })
    .then(function() {
      res.json("success");
    })
    .catch(function(err) {
      res.json(err);
    });
});

router.get("/API/test", function(req, res) {
  res.json("test");
});

module.exports = router;
