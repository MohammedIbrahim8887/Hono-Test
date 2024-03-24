import { Hono } from "hono";
import { getAllArtistsController } from "../../controllers/artist/getAllArtists.controller";
import { getArtistController } from "../../controllers/artist/getArtist.controller";
import { updateArtistController } from "../../controllers/artist/updateArtist.controller";
import { deleteArtistController } from "../../controllers/artist/deleteArtist.controller";
import { createArtistController } from "../../controllers/artist/createArtist.controller";

const artist = new Hono();

artist.get("/", getAllArtistsController);
artist.get("/:id", getArtistController);
artist.post("/update/:id", updateArtistController);
artist.post("/create", createArtistController);
artist.delete("/:id", deleteArtistController);

export default artist;
