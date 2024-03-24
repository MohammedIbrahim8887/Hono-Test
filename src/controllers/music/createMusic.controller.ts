import { Context } from "hono";
import { Music } from "../../types/music";
import { createMusic } from "../../models/music.model";

export const createMusicController = async (c: Context) => {
  const data: Music = await c.req.json();

  try {
    const music = await createMusic(data);
    return c.json({ data: music }, 200);
  } catch (error) {
    console.error(error);
    return c.json({ message: "Internal Server Error", error: error }, 500);
  }
};
