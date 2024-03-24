import { Context } from "hono";
import { deleteMusic } from "../../models/music.model";

export const deleteMusicController = async (c: Context) => {
  const { id } = c.req.param();
  try {
    const music = await deleteMusic(Number(id));

    return c.json({ data: music }, 200);
  } catch (error) {
    console.error(error);
    return c.json({ message: "Internal Server Error", error: error }, 500);
  }
};
