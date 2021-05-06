const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.User.findById(id);
    }
  }
};

module.exports = resolvers;
