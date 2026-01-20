const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    imageUrl: String,
    location: String,
    category: { type: String, default: "Residential" },
    companyName: {type: String, required: true},
    companyEmail: String,
    priceRange: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
