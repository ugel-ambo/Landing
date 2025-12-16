import { Schema, model, models } from "mongoose";

export interface IMedia {
    _id?: string;
    alt: string;
    url: string;
    cloudinaryPublicId?: string;
    width?: number;
    height?: number;
    mimeType?: string;
    filesize?: number;
    filename?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const MediaSchema = new Schema<IMedia>(
    {
        alt: { type: String, required: true },
        url: { type: String },
        cloudinaryPublicId: { type: String },
        width: { type: Number },
        height: { type: Number },
        mimeType: { type: String },
        filesize: { type: Number },
        filename: { type: String },
    },
    {
        timestamps: true,
    }
);

const Media = models.media || model<IMedia>("media", MediaSchema);

export default Media;
