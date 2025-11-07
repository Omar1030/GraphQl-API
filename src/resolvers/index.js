// ! Queries
import userQuery from "../resolvers/userResolver/Query.js";
import todoQuery from "../resolvers/todoResolver/Query.js";
import userMutation from "./userResolver/Mutation.js";
import todoMutation from "./todoResolver/Mutation.js";

const resolvers = {
  Query: {
    ...userQuery,
    ...todoQuery,
  },

  Mutation: {
    ...userMutation,
    ...todoMutation,
  },
};

export default resolvers;
