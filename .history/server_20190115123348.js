const express = require("express");
const mongoose = require("mongoose");

const app = express();

//DB Config
const db = require("./config/key").mongoURI;
app.get("/", (req, res) => res.send("Hello World"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port: ${port}`));
