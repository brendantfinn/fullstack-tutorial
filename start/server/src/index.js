const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');
// createStore function to set up our SQLite database. 

const LaunchAPI = require('./datasources/launch');
const UserAPI = require('./datasources/user');

const store = createStore();

const server = new ApolloServer({ 
  typeDefs,
  dataSources: () => ({
    // dataSources function to the ApolloServer constructor to connect instances of LaunchAPI and UserAPI to our graph. 
    LaunchAPI: new LaunchAPI(),
    UserAPI: new UserAPI({ store })
  }) 
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});