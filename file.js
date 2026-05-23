import express from "express";
import anime_data from "./public/animes.json" with { type: "json" };

const app = express();

app.get("/", (req, res) => {
  res.send(anime_data);
});

app.get("/anime/:id", (req, res) => {
  const an_id = Number(req.params.id);

  let filtered_data = anime_data.find((an) => {
    return an.id === an_id;
  });

  if (filtered_data == undefined) {
    return res.send("no anime found with this id...");
  }

  res.send(filtered_data);
});

app.get("/animename/:name", (req, res) => {
  const an_name = req.params.name;

  let filtered_data = anime_data.find((an) => {
    return an.name.toLowerCase() === an_name.toLowerCase();
  });

  if (filtered_data == undefined) {
    return res.send("no anime found with this name...");
  }

  res.send(filtered_data);
});

app.listen(3400, () => {
  console.log("server running on port 3400...");
});
