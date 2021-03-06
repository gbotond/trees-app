const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));


const middlewares = jsonServer.defaults({
  static: "node_modules/json-server/dist"
});

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(function(req, res, next) {
  setTimeout(next, 0);
});

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

server.post("/trees/", function(req, res, next) {
  const error = validateTree(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    req.body.slug = createSlug(req.body.species);
    next();
  }
});

server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

function createSlug(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function validateTree(tree) {
  if (!tree.species) return "Species is required.";
  if (!tree.ownerId) return "Owner is required.";
  if (!tree.family) return "Family is required.";
  if (!tree.condition) return "Condition is required.";
  return "";
}
