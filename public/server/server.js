const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());


const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`));