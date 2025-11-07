import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";

import connectDB from "./utils/dbConnection.js";

import typeDefs from "./schema.js";
import resolvers from "./resolvers/index.js";
import checkAuth from "./utils/auth.js";

// ! Env
dotenv.config({ path: "src/config/.env" });

// ! Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const url = await startStandaloneServer(server, {
  listen: { port: process.env.SERVER_PORT },
  context: async ({ req }) => {
    const user = await checkAuth(req);
    return user;
  },
});

console.log(`Server is running on port ${process.env.SERVER_PORT}`);

// ! DataBase Connection
connectDB();
