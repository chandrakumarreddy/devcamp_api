const express = require("express");
const dotenv = require("dotenv");
const compression = require("compression");

dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(compression());

app.listen(PORT, () => console.log(`server is listening at ${PORT}`));
