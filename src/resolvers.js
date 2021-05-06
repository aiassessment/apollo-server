const resolvers = {
  Query: {
    async link(root, { slug }, { models }) {
      return models.Link.findOne({ where: { slug: slug } });
    },
    async allLinks(root, {}, { models }) {
      return models.Link.findAll();
    }
  },
  Mutation: {
    async createLink(root, { url, slug }, { models }) {
      const matchingSlug = await models.Link.findOne({ where: { slug: slug } });
      console.log(matchingSlug);
      if (!matchingSlug) {
        return models.Link.create({
          url,
          slug
        });
      } else {
        console.log("slug taken");
      }
    }
  }
};

module.exports = resolvers;
