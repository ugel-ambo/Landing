"use server";

import connectMongoDB from "@/lib/mongodbConnection";
import HeroImage from "@/models/HeroImage";
import Media from "@/models/Media";
import { getMediaUrl } from "@/lib/media";
void Media;

export type HeroSlide = {
  id: string;
  src: string;
  alt: string;
};

export async function getHeroImages(): Promise<HeroSlide[]> {
  try {
    await connectMongoDB();

    const imagenes = await HeroImage.find({ activo: true })
      .populate("imagen")
      .sort({ orden: 1, createdAt: -1 })
      .lean();

    return imagenes
      .map((h: any) => {
        const rawUrl: string = h.imagen?.url || "";
        const url = getMediaUrl(rawUrl, "");
        const version =
          h.updatedAt instanceof Date
            ? h.updatedAt.getTime()
            : h.updatedAt
              ? new Date(h.updatedAt).getTime()
              : "";
        const src = url
          ? `${url}${url.includes("?") ? "&" : "?"}v=${version}`
          : "";
        return {
          id: String(h._id),
          src,
          alt: h.alt || "UGEL Ambo",
        };
      })
      .filter((h) => Boolean(h.src));
  } catch (error) {
    console.error("Error fetching hero images:", error);
    return [];
  }
}
