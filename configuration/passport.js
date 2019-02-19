//we import passport packages required for authentication
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
//
//We will need the models folder to check passport agains
var db = require("../smodels");
//
// Telling passport we want to use a Local Strategy. In other words,
//we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "user_name",
    passwordField: "pword"
  },
  function(user_name, pword, done) {
    // When a user tries to sign in this code runs
    console.log(user_name);
    db.usr.findOne({
      where: {
        user_name: user_name
      }
    }).then(function(dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        console.log("user does not exist");
        return done(null, false, {
          message: "User does not exist"
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(pword)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));
//
// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(usr, cb) {
  cb(null, usr);
});
//
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
//
// Exporting our configured passport
module.exports = passport;