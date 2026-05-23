import express from "express";
import { handlehome } from "./controller/home_controller.js";
import { handlegenres } from "./controller/genre_controller.js";

const app = express();

app.set("view engine", "ejs");

app.get("/", handlehome);
app.get("/genres", handlegenres);

app.listen(3400, () => {
  console.log("server running on port 3400...");
});
