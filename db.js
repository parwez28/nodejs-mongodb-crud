const mongoose = require('mongoose');

const mongoURL = "mongodb://localhost:27017";
const dbName = "ourDB";
const connectDB = async () => {
    try {
        await mongoose.connect(`${mongoURL}/${dbName}`);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
      console.log("Failed To Connect MongoDB",error);
      process.exit(1);
    }
}

module.exports=connectDB;