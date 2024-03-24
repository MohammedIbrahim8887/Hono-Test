import { Context } from "hono";
import { createArtist } from "../../models/artist.model";

export const createArtistController = async (c: Context) => {
  const data: any = c.req.json;
  const artist = await createArtist(data);
  return c.json({ data: artist }, 200);
};
