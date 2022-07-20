require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const products = require("./src/routes/products");
const options = require("./src/server/config");

//db & relations
const { database } = require("./src/database/database");
require("./src/database/relations");

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors(options));
app.use("/", products);

database
  .sync({ force: process.env.DEV === "on" })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`🟢 Server on port ${process.env.PORT}`)
    )
  )
  .catch(() => console.log("🔴 Server error: failed to sync database"));
