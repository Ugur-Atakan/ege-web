import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected to Registate DB");
    }
    catch (err) {
        console.log(err);
    }
}

export { connectDB }