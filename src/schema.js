let {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
} = require('graphql');

// Entities Schema
const FixtureType = require('./models/fixtures/schema');
const RaceType = require('./models/races/schema');
const RunnerType = require('./models/runners/schema')

// Data sources
const FixtureData = require('./models/fixtures/data');
const RaceData = require('./models/races/data');
const RunnerData = require('./models/runners/data')

// This is the Root Query
const QueryRootType = new GraphQLObjectType({
  name: 'AppSchema',
  description: "Application Schema Query Root",
  fields: () => ({
    runners: {
      type: new GraphQLList(RunnerType),
      description: "List of all runners",
      resolve: () => RunnerData
    },
    races: {
      type: new GraphQLList(RaceType),
      description: "List of all races",
      resolve: () => RaceData
    },
    fixtures: {
      type: new GraphQLList(FixtureType),
      description: "List of all fixture",
      resolve: () => FixtureData
    }
  })
});

const AppSchema = new GraphQLSchema({
  query: QueryRootType
  // If you need to create or updata a datasource,
  // you use mutations. Note:
  // mutations will not be explored in this post.
  // mutation: BlogMutationRootType
});

module.exports = AppSchema;
