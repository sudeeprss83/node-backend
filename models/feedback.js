const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  name: String,
  email: String,
  type: String,
  message: String,
});

const Feedback = mongoose.model("feedback", feedbackSchema);
module.exports = Feedback;
