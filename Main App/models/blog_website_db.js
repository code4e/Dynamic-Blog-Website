const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    postTitle: {
        type: String,
        required: true
    },
    actualPost: {
        type: String,
        required: true
    }
});
const Post = mongoose.model('Post', postSchema);
module.exports = Post;