import { Hono } from "hono";
import music from "./routes/music/music";
import { env } from "hono/adapter";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello CloudFlare Workers!");
});

app.route("/music", music);

export default app;
