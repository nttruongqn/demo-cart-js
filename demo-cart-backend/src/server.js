import express from "express";
import bodyParser from "body-parser";

import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connectDB from "./config/connectDB";
import cors from "cors";

require("dotenv").config();

let app = express();
app.use(cors({ origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config app
viewEngine(app);
initWebRoutes(app);
connectDB();

let port = process.env.PORT || 2805;
app.listen(port, () => {
  console.log("crush not be long to me: " + port);
});
