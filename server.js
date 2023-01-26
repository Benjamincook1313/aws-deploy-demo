const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));