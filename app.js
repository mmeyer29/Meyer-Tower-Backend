const express = require("express");
const app = express();

const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

app.use("/starships", require("./routes/starships"));
app.use("/searches", require("./routes/searches"));
app.use("/results", require("./routes/results"));

app.use((request, response, next) => {
  response.status(404).send();
}).use((error, request, response, next) => {
  response.status(500).send(error.message);
});

module.exports = app;
