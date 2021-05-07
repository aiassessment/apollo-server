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
      const checkForMatch = async (slugToTry) => {
        return await models.Link.findOne({ where: { slug: slugToTry } });
      };
      let finalSlug = "";
      const matchingSlug = slug ? await checkForMatch(slug) : null;
      if (!matchingSlug) {
        if (!slug) {
          let slugTaken = true;
          while (slugTaken) {
            finalSlug = Math.random().toString(36).substr(2, 5);
            slugTaken = await checkForMatch(finalSlug);
          }
        } else {
          finalSlug = slug;
        }
        return models.Link.create({
          url,
          slug: finalSlug
        });
      } else {
        return { error: "Slug taken" };
      }
    }
  }
};

module.exports = resolvers;
