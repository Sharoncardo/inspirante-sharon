const express = require("express");
const Event = require("../models/Event");
const router = express.Router();
const Registration = require("../models/Registration");

router.post("/", async(req, res) => {
  const { studentName, eventName } = req.body;

  const alreadyRegistered = await Registration.findOne({
  studentName,
  eventName,
});

  if (alreadyRegistered) {
    return res.status(400).json({
      message: "You are already registered for this event",
    });
  }

const event = await Event.findOne({
  name: eventName,
});

if (event.registrations >= event.capacity) {
  return res.status(400).json({
    message: "Event is Full",
  });
}




  await Registration.create({
  studentName,
  eventName,
});
     
await Event.findOneAndUpdate(
  { name: eventName },
  { $inc: { registrations: 1 } }
);
const updatedEvent = await
Event.findOne({
    name:eventName,

});

console.log(updatedEvent);



  res.json({
    message: "Registration Successful",
  });
});

router.get("/", async (req, res) => {
  const registrations = await Registration.find();
  res.json(registrations);
});
router.get("/:studentName", async (req, res) => {
  try {
    const registrations = await Registration.find({
      studentName: req.params.studentName,
    });

    res.json(registrations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;