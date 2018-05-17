'use strict';
require('dotenv').config();

/*
  Required modules {express and express-graphql}
  will be imported along with the schema object
  from the schema.js file in src/schema.js
*/

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./src/schema.js');

const app = express();
app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true //set to false if you don't want graphiql enabled
}));

app.listen(process.env.PORT, () => console.log(`Express GraphQL Server running on: http://localhost:${process.env.PORT}/graphql`));
