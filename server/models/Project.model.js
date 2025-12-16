const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    imageUrl: String,
    location: String,
    category: { type: String, default: "Residential" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
