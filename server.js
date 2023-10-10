const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const Port = 3000;
const app = express();

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Helloworld",
    fields: () => ({
      message: { type: GraphQLString, resolve: () => "Hello sagar" },
    }),
  }),
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  return res.status(200).json("hello from graphQL");
});

app.listen(Port, () => {
  console.log("server started at port", Port);
});
