// Load Data
var subjects = require("../data/friends");

module.exports = function (app) {
  // Displays all subjects
  app.get("/api/friends", function (req, res) {
    return res.json(subjects);
  });

  app.post("/api/friends", function(req, res) {
    subjects.push(req.body);
    console.log(req);
    console.log(res);
    
  });
};
