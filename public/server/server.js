const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// const { PORT } = process.env;

app.listen(5567, () => console.log(`Server listening on port 5567`));