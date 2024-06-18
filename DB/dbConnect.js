const mongoose = require('mongoose');

async function dbConnect(url) {
    try {
        await mongoose.connect(url);
        console.log('MongoDB connected successfully');
        return true;
    }
    catch (error) {
        console.log('Could not connect to MongoDB');
    }
};

module.exports = dbConnect;