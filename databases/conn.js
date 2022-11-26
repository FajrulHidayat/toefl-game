const MONGO_URI =
  "mongodb+srv://fajrul:fajrul1234@cluster0.5omynns.mongodb.net/?retryWrites=true&w=majority";
import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    // console.log(MONGO_URI);
    const { connection } = await mongoose.connect(MONGO_URI);
    // console.log(connection);
    if (connection.readyState == 1) {
      console.log("Database Connected");
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};

export default connectMongo;
