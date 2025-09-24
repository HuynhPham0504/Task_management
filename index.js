const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const database = require("./config/database");

database.connect();

const routesApiVer1 = require("./api/v1/routes/index.route");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(cookieParser());

// parse application/json
app.use(bodyParser.json());

routesApiVer1(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});