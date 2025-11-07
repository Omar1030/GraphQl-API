// ! Models
import userModel from "../../models/userModel.js";

const userQuery = {
  getUsers: async () => {
    return await userModel.find();
  },

  getUserById: async (_, args) => {
    const user = await userModel.findById(args.id);
    return user;
  },

  deleteUser: async (_, args) => {
    await userModel.findByIdAndDelete(args.id);
    return await userModel.find();
  },
};

export default userQuery;
