const mongoose = require("mongoose");
const commentSchema = mongoose.Schema(
  {
  comment: {
    type: String,
    required: true,
  },
  newsId: {
    ref: "News",
    type: mongoose.Schema.Types.ObjectId,
  },
},
{ timestamps: true }
);

const Comments = mongoose.model("Comments", commentSchema);

module.exports = Comments;