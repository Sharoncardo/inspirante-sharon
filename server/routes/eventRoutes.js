const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const Registration = require("../models/Registration");

router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });

    const eventsWithCounts = await Promise.all(
      events.map(async (event) => {
        const count = await Registration.countDocuments({
          eventName: event.name,
        });

        return {
          ...event.toObject(),
          registrations: count,
        };
      })
    );

    res.json(eventsWithCounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post("/", async (req, res) => {
  try {
    console.log("Received:", req.body);

    const { name, date, venue, capacity } = req.body;

    const event = await Event.create({
      name,
      date,
      venue,
      capacity,
    });

    console.log("Saved:", event);

    res.status(201).json(event);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;