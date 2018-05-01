const _ = require('lodash');

const {
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLList
} = require('graphql');

// Dependepencies
const RunnerType = require('./../runners/schema');
const RunnerData = require('./../runners/data');

module.exports = new GraphQLObjectType({
  name: "Race",
  description: "This represent a Race",
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLInt)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    fixtureId: {type: new GraphQLNonNull(GraphQLInt)},
    runners: {
      type: new GraphQLList(RunnerType),
      resolve: race => RunnerData.filter(runner => runner.raceId == race.id)
    }
  })
});
