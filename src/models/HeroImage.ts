import mongoose from "mongoose";
import Media from "./Media";
void Media;

const heroImageSchema = new mongoose.Schema(
  {
    alt: { type: String, required: true },
    imagen: { type: mongoose.Schema.Types.ObjectId, ref: "media", required: true },
    orden: { type: Number, default: 0 },
    activo: { type: Boolean, default: true },
  },
  {
    collection: "hero-images",
    timestamps: true,
    strict: false,
  }
);

export const HeroImageModel =
  mongoose.models["hero-image"] ||
  mongoose.model("hero-image", heroImageSchema);

export default HeroImageModel;
