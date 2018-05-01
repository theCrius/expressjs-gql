const _ = require('lodash');

const {
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLList
} = require('graphql');

// Dependepencies
const RaceType = require('./../races/schema');
const RaceData = require('./../races/data');

module.exports = new GraphQLObjectType({
  name: "Fixture",
  description: "This represent a Fixture",
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLInt)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    races: {
      type: new GraphQLList(RaceType),
      resolve: fixture =>  RaceData.filter(race => race.fixtureId == fixture.id)
    }
  })
});
