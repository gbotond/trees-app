const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { trees, owners, species } = mockData;
const data = JSON.stringify({ trees, owners, species });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
