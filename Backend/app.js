const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const connectToDatabase = require("./config/databaseConnection");
const router = require("./routes/userRoutes");
const Product = require("./routes/productsRoutes");
const app = express();

connectToDatabase();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

app.use(
  cors({
    origin: [`http://localhost:5173`],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/", router);
app.use("/", Product);
