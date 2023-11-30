const jsonServer = require("json-server");
const server = jsonServer.create();
const route = jsonServer.router(require("./db.js")());
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(route);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
module.exports = server;
