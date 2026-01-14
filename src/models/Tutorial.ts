import mongoose from "mongoose";

const tutorialSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    youtubeUrl: { type: String, required: true },
    categoria: {
      type: String,
      enum: ["docentes", "directivos", "otros"],
      default: "docentes",
    },
    orden: { type: Number, default: 0 },
    activo: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    collection: "tutoriales",
    strict: false,
  }
);

export const TutorialModel =
  mongoose.models.tutoriales ||
  mongoose.model("tutoriales", tutorialSchema);
