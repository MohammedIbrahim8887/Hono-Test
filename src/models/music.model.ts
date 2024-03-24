import { eq } from "drizzle-orm";
import db from "../db";
import { music } from "../db/schema";
import { Music } from "../types/music";

export const createMusic = async (data: Music) => {
  const musicData = {
    ...data,
    created_at: data.created_at?.toISOString(),
    updated_at: data.updated_at?.toISOString(),
  };

  return await db.insert(music).values(musicData);
};

export const getAllMusic = async () => {
  return await db.select().from(music);
};

export const getMusicById = async (id: number) => {
  return await db.select().from(music).where(eq(music.id, id));
};

export const getAllArtistMusic = async (artist_id: number) => {
  return await db.select().from(music).where(eq(music.artist_id, artist_id));
};

export const updateMusic = async (id: number, data: Music) => {
  const musicData = {
    ...data,
    created_at: data.created_at?.toISOString(),
    updated_at: data.updated_at?.toISOString(),
  };
  return await db.update(music).set(musicData).where(eq(music.id, id));
};

export const deleteMusic = async (id: number) => {
  return await db.delete(music).where(eq(music.id, id));
};
