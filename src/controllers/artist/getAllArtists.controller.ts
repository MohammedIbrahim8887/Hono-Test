import { Context } from "hono";
import { getAllArtists } from "../../models/artist.model";

export const getAllArtistsController = async (c: Context) => {
  const artists = await getAllArtists();
  if (!artists) {
    return c.json({ message: "Artists not found" }, 404);
  }

  return c.json({ data: artists }, 200);
};
