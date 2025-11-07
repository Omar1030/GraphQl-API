import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.DB_CONNECTION)
    .then(() => console.log("Successfull connection to database"))
    .catch((e) => console.log("Failed connection to database"));
};

export default connectDB;
