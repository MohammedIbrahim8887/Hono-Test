import { Context } from "hono";
import { getAllMusic, getMusicById } from "../../models/music.model";

export const getMusicByIdController = async (c: Context) => {
  const id = c.req.param;
  const music = await getAllMusic();
  if (!music) {
    return c.json({ message: "Music not found" }, 404);
  }
  return c.json(music);
};
