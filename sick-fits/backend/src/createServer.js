const { GraphQLServer } = require('graphql-yoga')

const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const db = require('./db')

const server = new GraphQLServer({ 
    typeDefs: 'src/schema.graphql',
    /**
     * If assigning resolvers, your typeDefs or schema
     * must have matching resolvers to work, example if if you assign Mutation and Query
     * they will need matching types of with at least one dummy value
     * type Mutation { hi: String! }
     * type Query { hi: String! }
     */
    resolvers: {
        Mutation,
        Query
    },
    resolverValidationOptions: {
        requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
})

module.exports = server