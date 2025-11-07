const typeDefs = `#graphql

    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
    }

    type Todo {
        id: ID!
        title: String!
        completed: Boolean
        userId: ID
    }

    type Query {
        # user
        getUsers: [User]
        getUserById(id: ID!): User
        deleteUser(id: ID!): [User]

        # todo
        getTodos: [Todo]
        getTodoById(id: ID!): Todo
    }

    type Mutation {
        # user
        register(user: userInput): User
        login(user: userInput): String

        # todo
        addTodo(todo: todoInput): Todo
    }

    input userInput {
        name: String
        email: String!
        password: String!
    }

    input todoInput {
        title: String!
        completed: Boolean!
    }


    
`;

export default typeDefs;
