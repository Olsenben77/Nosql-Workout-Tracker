const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: {
      type: Array,
      default: []
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    total + exercise.duration;
  }, 0);
});
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
