const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },

  newsId: {
    ref: "News",
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("Comments", commentSchema);
