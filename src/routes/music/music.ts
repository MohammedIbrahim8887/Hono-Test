import { Hono } from "hono";
import { createMusicController } from "../../controllers/music/createMusic.controller";
import { getMusicByIdController } from "../../controllers/music/getMusic.controller";

const music = new Hono();

music.post("/create", createMusicController);
music.get("/", getMusicByIdController);

export default music;
