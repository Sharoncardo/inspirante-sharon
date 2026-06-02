const mongoose = require("mongoose");
const Event = require("./models/Event");

mongoose.connect("mongodb://127.0.0.1:27017/inspirante");

const seedEvents = [
  {
    name: "Tech Symposium 2026",
    date: "2026-07-10",
    venue: "Main Auditorium",
    capacity: 120,
  },
  {
    name: "Hackathon",
    date: "2026-07-15",
    venue: "Lab Block C",
    capacity: 40,
  },
  {
    name: "Cultural Fest",
    date: "2026-07-20",
    venue: "Open Amphitheatre",
    capacity: 300,
  },
  {
    name: "Workshop: React Basics",
    date: "2026-07-22",
    venue: "Seminar Hall 2",
    capacity: 30,
  },
  {
    name: "Placement Prep Talk",
    date: "2026-07-25",
    venue: "Main Auditorium",
    capacity: 200,
  },
];

async function seedDatabase() {
  try {
    await Event.deleteMany({});
    await Event.insertMany(seedEvents);

    console.log("Database seeded successfully");
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

seedDatabase();