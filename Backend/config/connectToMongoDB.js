const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Trail");
        console.log('MongoDB Connected');
    } catch (error) {
        console.error("Error in MongoDB Connection!!", error);
    }
}

module.exports = connectDB;