import express from "express";
const app = express();

//root route
app.get("/", (req, res) => {
  const genres = ["action", "isekai", "slice of life", "martial arts"];

  let an_genre = `<ul>`;

  for (let genre of genres) {
    an_genre += `<li><a href="/user/${genre}">${genre}</a></li>`;
  }

  an_genre += `</ul>`;
  res.send(an_genre);
});

app.get("/user/:name", (req, res) => {
  const genre_name = req.params.name;
  res.send(`genre name:${genre_name}`);
});

app.listen(3400, () => {
  console.log("server running on port 3400...");
});
