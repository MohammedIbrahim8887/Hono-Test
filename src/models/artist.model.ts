import { eq } from "drizzle-orm";
import db from "../db";
import { artist } from "../db/schema";
import { Artist } from "../types/artist";

export const createArtist = async (data: Artist) => {
  const artistData = {
    ...data,
    created_at: data.created_at?.toISOString(),
    updated_at: data.updated_at?.toISOString(),
  };
  return await db.insert(artist).values(artistData);
};

export const getArtist = async (id: number) => {
  return await db.select().from(artist).where(eq(artist.id, id));
};

export const getAllArtists = async () => {
  return await db.select().from(artist);
};

export const updateArtist = async (id: number, data: Artist) => {
  const artistData = {
    ...data,
    created_at: data.created_at?.toISOString(),
    updated_at: data.updated_at?.toISOString(),
  };
  return await db.update(artist).set(artistData).where(eq(artist.id, id));
};

export const deleteArtist = async (id: number) => {
  return await db.delete(artist).where(eq(artist.id, id));
};
