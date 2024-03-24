import { Context } from "hono";
import { getMusicById } from "../../models/music.model";

export const getMusicByIdController = async (c: Context) => {
  const { id } = c.req.param();
  console.log("DATA IS____------_____-----", id);
  const music = await getMusicById(Number(id));
  if (!music) {
    return c.json({ message: "Music not found" }, 404);
  }
  return c.json(music);
};
