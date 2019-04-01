s// Load Data
var subjects = require("../data/friends");

module.exports = function (app) {
  // Displays all subjects
  app.get("/api/friends", function (req, res) {
    return res.json(subjects);
  });

  app.post("/api/friends", function(req, res) {
    
    // console.log("dog has been added");

    // console.log(req.body.scores);

    var name = "";
    var photo = "";

    // 5*10 = 50, is the largest number but going to use double that, 100
    var total = 100;

    for (var i = 0; i < subjects.length; i++) {
      var compareTotal = 0;
      
			for (var j = 0; j < req.body.scores.length; j++) {
				compareTotal += Math.abs(subjects[i].scores[j] - req.body.scores[j]);
			}

			if (compareTotal < total) {

				total = compareTotal;
				name = subjects[i].name;
				photo = subjects[i].photo;
			}
    }
    
    res.json({name: name, photo: photo});

    // push new data after you select choice
    subjects.push(req.body);

  });
};
