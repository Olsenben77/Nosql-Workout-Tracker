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

router.put("/api/workouts/:id", function(req, res) {
  console.log(req.params.id);
  console.log(req.body);
  db.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then(response => res.json(response))
    .catch(err => console.log(err));
});
//}); //update collection with req.body where id = req.params.id
router.get("/api/workouts/range", function(req, res) {
  db.find().then(data => res.json(data));
});
module.exports = router;
