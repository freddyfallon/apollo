import { createApolloServer } from 'meteor/apollo'; // eslint-disable-line
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`;

const typeDefs = [testSchema, ResolutionsSchema];

const testResolvers = {
  Query: {
    hi() {
      return 'Hello guys';
    },
  },
};

const resolvers = merge(testResolvers, ResolutionsResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({ schema });
