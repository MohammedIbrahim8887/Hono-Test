import { Context } from "hono";
import { Music } from "../../types/music";

export const createMusicController = async (c: Context) => {
  const data: Music = await c.req.json();

  return c.json(data);
};
