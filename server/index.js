const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const projectRoutes = require('./routes/projects.routes.js');
const contactRoutes = require('./routes/contact.routes.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongoDB connected successfully");
  })
  .catch((err) => {
    console.log("mongoDB connection error: ", err);
  });

app.get("/", (req, res) => {
  res.send("Skyline Construction Backend is Running!");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
