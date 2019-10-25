const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
require("colors");
const dbConnection = require("./config/db");
const compression = require("compression");

//routes
const bootcampsRouter = require("./routes/bootcamps");

dotenv.config({ path: "./config/config.env" });

//dababase connection
dbConnection();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(logger("dev"));
app.use(compression());
app.use("/api/v1/bootcamps", bootcampsRouter);

app.listen(PORT, () =>
  console.log(`server is listening at ${PORT}`.yellow.bold)
);
