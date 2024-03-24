import { Context } from "hono";
import { deleteArtist } from "../../models/artist.model";

export const deleteArtistController = async (c: Context) => {
  const { id } = c.req.param();
  try {
    const artist = await deleteArtist(Number(id));
    return c.json({ data: artist }, 200);
  } catch (error) {
    console.error(error);
    return c.json({ message: "Internal Server Error", error: error }, 500);
  }
};
