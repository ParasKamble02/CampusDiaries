import mongoose from "mongoose";
// import mongoose, { connect } from "mongoose";

const connectDB = async() => {
    try{
        mongoose.connection.on('connected', () => console.log("Database Connected"))
        await mongoose.connect(`${process.env.MONGODB_URI}/LSPGCOERS_CAMPUS_DIARIRES`)
    } catch (error){
        console.log(error.message);
    }
}

export default connectDB;