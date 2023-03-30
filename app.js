const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { MongoClient } = require("mongodb");
const blogRouter = require("./routes/blog");
require("dotenv").config();
//configure mongoose

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static(__dirname + "/public"));
// app.set("view engine", "ejs");
app.use("/api/blogs", blogRouter);

app.listen(process.env.PORT, function () {
  console.log(`App is running on Port ${process.env.PORT}`);
});
