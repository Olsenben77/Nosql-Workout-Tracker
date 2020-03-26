const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("./models");

router.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

router.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/stats.html"));
});

router.get("/api/workouts", function(req, res) {
  db.find().then(data => res.json(data));
});

router.post("/api/workouts", function(req, res) {
  db.create({})
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

// router.put("/api/workouts/:id", function(req, res) {
//   console.log(req.params.id);
//   db.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(
//     err,
//     data
//   ) {
//     res.send(data);
//   });
// });
// }); //update collection with req.body where id = req.params.id
module.exports = router;
