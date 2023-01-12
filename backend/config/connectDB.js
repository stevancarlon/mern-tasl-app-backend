const mongoose = require("mongoose")


const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected` );
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB

// server.js connection method 2

// const startServer = async () => {
//     try {
//         await connectDB();
        
//     } catch (error) {
//         console.log(error)
//     }
// };

// startServer()

