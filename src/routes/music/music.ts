import { Hono } from "hono";
import { createMusicController } from "../../controllers/music/createMusic.controller";
import { getMusicByIdController } from "../../controllers/music/getMusicById.controller";
import { getAlMusicCOntroller } from "../../controllers/music/getAllMusic.controller";
import { getAllArtistMusicController } from "../../controllers/music/getAllArtistsMusic.controller";
import { updateMusicController } from "../../controllers/music/updateMusic.controller";

const music = new Hono();

music.post("/create", createMusicController);
music.get("/", getAlMusicCOntroller);
music.get("/:id", getMusicByIdController);
music.get("/artist/:id", getAllArtistMusicController);
music.delete("/:id", updateMusicController);
music.post("/update/:id", updateMusicController);

export default music;
