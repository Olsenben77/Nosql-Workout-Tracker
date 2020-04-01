const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes.js");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//changed server
app.use(express.static("public"));
app.use(router);
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds053380.mlab.com:53380/heroku_61vbc4m2, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.listen(PORT, () => {
  console.log("app is running on port " + PORT);
});
