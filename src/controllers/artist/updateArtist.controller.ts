import { Context } from "hono";
import { updateArtist } from "../../models/artist.model";

export const updateArtistController = async (c: Context) => {
  const { id } = c.req.param();
  const data: any = c.req.json;

  try {
    const artist = await updateArtist(Number(id), data);
    return c.json({ data: artist }, 200);
  } catch (error) {
    console.error(error);
    return c.json({ message: "Internal Server Error", error: error }, 500);
  }
};
