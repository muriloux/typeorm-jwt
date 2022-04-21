import "dotenv/config";
import "./database/connect";
import express from "express";
import router from "./route/index";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("✔ Server running at http://localhost:3000");
});
