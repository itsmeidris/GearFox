// package
const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const path = require("path");

//utils
const connectToDatabase = require("./config/databaseConnection");
const cors = require("cors");
const userRoutes = require("./routes/userRoute");

const app = express();

connectToDatabase();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

app.use("/api/users", userRoutes);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
