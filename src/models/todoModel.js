import mongoose, { Schema } from "mongoose";

const todoSchecm = new Schema({
  title: {
    type: String,
    required: [true, "Title of todo is required"],
    minLength: [3, "Title is less than 3 charcters"],
    maxLength: [25, "Max length is 25 charcters"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: [true, "Who is the owner of todo?"],
  },
});

const todoModel = mongoose.model("Todo", todoSchecm);

export default todoModel;
