import { Hono } from "hono";
import music from "./routes/music/music";
import { env } from "hono/adapter";
import artist from "./routes/artist/artist";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello CloudFlare Workers!");
});

app.route("/music", music);
app.route("/artists", artist);

export default app;
