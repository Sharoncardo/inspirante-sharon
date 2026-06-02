const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const eventRoutes = require("./routes/eventRoutes");
const registrationRoutes = require("./routes/registrationRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/register", registrationRoutes);
app.use("/api/events",eventRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/inspirante")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("Server Running");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});