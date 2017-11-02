// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

 // Each of the below routes just handles the HTML page that the user gets sent to.

 // index route loads index.html/ login
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

 app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/landing_page.html"));
  });

 // question route loads question.html
  app.get("/question", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/questionnaire.html"));
  });
  // recommended route loads question.html
  app.get("/question/recommended", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/recommended.html"));
  });
  // results route loads question.html
  app.get("/question/recommended/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/results.html"));
  });
};