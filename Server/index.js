require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

//database
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Connected to database!"))
  .catch((err) => console.error(err));

//routes prefix
app.use("/", require("./routes/routes"));

//start server

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
