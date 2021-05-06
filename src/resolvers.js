const resolvers = {
  Query: {
    async link(root, { slug }, { models }) {
      return models.Link.findById(slug);
    }
  },
  Mutation: {
    async createLink(root, { url, slug }, { models }) {
      return models.Link.create({
        url,
        slug
      });
    }
  }
};

module.exports = resolvers;
