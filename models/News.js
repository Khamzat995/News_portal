const mongoose = require("mongoose");
const newsSchema = mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
  imageURL: {
    type: String,
    required: false,
  },
  categoryId: {
    ref: "Category",
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("News", newsSchema);
