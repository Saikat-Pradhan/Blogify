const express = require("express");
const cors = require("cors");
const app = express();
const connectDb = require("./config/connectToMongoDB");
const BlogRoute = require("./routes/blog");
require("dotenv").config();

const PORT = process.env.PORT;
connectDb();

app.use(express.json());
app.use(cors());

app.use("/", BlogRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});