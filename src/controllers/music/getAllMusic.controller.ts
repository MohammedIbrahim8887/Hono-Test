import { Context } from "hono";
import { getAllMusic } from "../../models/music.model";

export const getAlMusicCOntroller = async (c: Context) => {
  const music = await getAllMusic();

  if (!music) return c.json({ message: "Music not found" }, 400);

  return c.json({ data: music }, 200);
};
