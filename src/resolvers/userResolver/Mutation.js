import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import userModel from "../../models/userModel.js";

const userMutation = {
  register: async (_, args) => {
    return await userModel.create(args.user);
  },

  login: async (_, { user: { email, password } }) => {
    if (!email || !password) throw new Error("Email or password is missing!");

    const user = await userModel.findOne({ email });
    if (!user) throw new Error("User is not exist");

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) throw new Error("Invalid Password");

    const token = jwt.sign({ id: user._id, name: user.name }, process.env.SECRET_KEY);
    return token;
  },
};

export default userMutation;
