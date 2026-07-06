const mongoose = require("mongoose")

const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected");
    }catch(err){
        console.log("some error in establising connection");
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDb;