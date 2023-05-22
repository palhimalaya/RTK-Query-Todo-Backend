const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const { mongoose } = require("mongoose");
const path = require("path");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3005",
    credentials: true,
  })
);
app.use(express.json());

connectDB();

app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/root"));
app.use("/todos", require("./routes/todosRoute"));

app.use("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "./views/404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not found" });
  } else {
    res.type("txt").send("404 Not found");
  }
});

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  console.log("MongoDB connection established successfully");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error: ", err);
});
