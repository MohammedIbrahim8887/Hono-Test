import { Context } from "hono";
import { getArtist } from "../../models/artist.model";

export const getArtistController = async (c: Context) => {
  const { id } = c.req.param();
  const artist = await getArtist(Number(id));

  if (!artist) {
    return c.json({ message: "Artist not found" }, 404);
  }

  return c.json({ data: artist }, 200);
};
