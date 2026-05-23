import { anime_genres } from "../model/genre_model.js";

export const handlegenres = (req, res) => {
  const genres = anime_genres();
  res.render("genres", { an_genre: genres });
};
