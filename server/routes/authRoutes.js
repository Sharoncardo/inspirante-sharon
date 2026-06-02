const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const students = [
  "asha.rao",
  "ravi.shetty",
  "meera.nair",
  "kiran.bhat",
  "divya.kamath",
  "suresh.pai",
  "ananya.hegde",
  "rohan.shenoy",
  "nisha.prabhu",
  "tejas.mallya",
  "priya.bangera",
];

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (
    username === "admin" &&
    password === "inspirante2026"
  ) {
    const token = jwt.sign(
      { username, role: "admin" },
      "secretkey"
    );

    return res.json({
      token,
      role: "admin",
    });
  }

  if (
    students.includes(username) &&
    password === "student123"
  ) {
    const token = jwt.sign(
      { username, role: "student" },
      "secretkey"
    );

    return res.json({
      token,
      role: "student",
    });
  }

  res.status(401).json({
    message: "Invalid Credentials",
  });
});

module.exports = router;