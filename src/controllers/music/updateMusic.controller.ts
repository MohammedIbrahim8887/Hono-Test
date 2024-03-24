import { Context } from "hono";
import { updateMusic } from "../../models/music.model";

export const updateMusicController = async (c: Context) => {
  const { id } = c.req.param();
  const data: any = c.req.json;
  try {
    const music = await updateMusic(Number(id), data);
    return c.json({ data: music }, 200);
  } catch (error) {
    console.error(error);
    return c.json({ message: "Internal Server Error", error: error }, 500);
  }
};
