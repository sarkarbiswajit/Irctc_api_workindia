const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");

require("dotenv").config();
require("./database");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
