const  mongoose = require('mongoose');

//Set up default mongoose connection
// var mongo_url = 'mongodb://127.0.0.1/my_database';

const connectDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDb connected: ${conn.connection.host}`.cyan.underline);
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}
module.exports = connectDb;