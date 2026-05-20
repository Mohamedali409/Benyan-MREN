require("dotenv/config");
const express = require("express");
const connect_db = require("./config/db");
const adminRouter = require("./routers/admin.router");

const app = express();
app.use(express.json());

//logs
if (process.env.NODE_ENV === "dev") {
  app.use((req, res, next) => {
    console.log(`${req.method}  ${req.originalUrl}`);
  });
}

app.get("/test", (req, res) => {
  res.status(200).json({
    message: "server running",
    success: true,
  });
});

app.use("/api/auth", adminRouter);

connect_db();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`The server run in port ${PORT}`);
});
