const _ = require('lodash');

const {
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: "Runner",
  description: "This represent a Runner",
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLInt)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    raceId: {type: new GraphQLNonNull(GraphQLInt)},
  })
});
