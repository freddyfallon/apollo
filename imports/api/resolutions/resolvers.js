import Resolutions from './resolutions';

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    },
  },

  Mutation: {
    createResolution() {
      console.log('🖐️ Got here!');
      // const resolutionId = Resolutions.insert({
      //   name: 'Test res',
      // });
    },
  },
};
