import todoModel from "../../models/todoModel.js";

const todoMutation = {
  addTodo: async (_, args, context) => {
    console.log(context);
  },
};

export default todoMutation;
