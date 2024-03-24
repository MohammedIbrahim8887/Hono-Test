import { Context } from "hono";
import { getAllArtistMusic } from "../../models/music.model";

export const getAllArtistMusicController = async (c: Context) => {
  const { id } = c.req.param();
  const music = await getAllArtistMusic(Number(id));
  if (!music) {
    return c.json({ message: "Music not found" }, 404);
  }
  return c.json({ data: music }, 200);
};
