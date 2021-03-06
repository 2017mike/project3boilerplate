const { Schema, model } = require("mongoose");


const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId
  }
});



const Post = model("Post", postSchema);

module.exports = Post;
