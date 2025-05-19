const authRoutes = require("./authRoutes");
const predictionRoutes = require("./predictionRoutes");

const routes = {
  name: "api-routes",
  register: async (server) => {
    await server.register([authRoutes, predictionRoutes]);
  },
};

module.exports = routes;
