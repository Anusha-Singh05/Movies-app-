import mongoose from 'mongoose'

export default async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connect to MongoDb")
    } catch (e) {
        console.log("Error connecting to MongoDB")
        process.exit(0)
    }
}