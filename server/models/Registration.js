const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "Registration",
  registrationSchema
);