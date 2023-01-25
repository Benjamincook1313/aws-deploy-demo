const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));