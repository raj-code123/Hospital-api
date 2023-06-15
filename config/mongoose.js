const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hospital', { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console,"Error connecting to MongoDB"));
db.once('open' ,() => {
    console.log("connected to Database :: MongoDB");
});

module.exports = db;