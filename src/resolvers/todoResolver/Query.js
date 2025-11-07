// ! Models
import todoModel from "../../models/todoModel.js";

const todoQuery = {
  getTodos: async () => {
    return await todoModel.find();
  },

  getTodoById: async (_, args) => {
    return await todoModel.findById(args.id);
  },
};

export default todoQuery;
