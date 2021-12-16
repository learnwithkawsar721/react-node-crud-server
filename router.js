const crudRoute = require("./routes/crud.route");
const routerConfig = (app) => {
  app.use("/todo", crudRoute);
};

module.exports = routerConfig;
