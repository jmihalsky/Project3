const express = require("express");
const session = require("express-session");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

var passport = require("./configuration/passport");
// Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.use(routes);

// Passport info
app.use(session({secret: "snowroutes", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Add Sequelize

// Start Server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}`);
});
