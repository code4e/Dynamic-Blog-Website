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
}, {collation: { locale: 'en_US', strength: 2 }});
const Post = mongoose.model('Post', postSchema);
module.exports = Post;