import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    // mongodb+srv://usama:se2017120@cluster0.6nnrs.mongodb.net/mern?retryWrites=true&w=majority
    const conn = await mongoose.connect(
      "mongodb+srv://usama:se2017120@cluster0.6nnrs.mongodb.net/mern?retryWrites=true&w=majority",
      {
        // const conn = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    // console.log("connected");
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
