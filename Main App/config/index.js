const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog_website_db');
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error while connecting to database"));
db.once('open', function(){
    console.log('Database connection successfully established');
});

module.exports = db;