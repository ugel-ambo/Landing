import mongoose from 'mongoose'

const personalSchema = new mongoose.Schema({
  nombre: String,
  cargo: String,
  area: String,
  orden: Number,
  foto: { type: mongoose.Schema.Types.ObjectId, ref: 'media' },
}, { 
  collection: 'personals', 
  strict: false, 
})

const mediaSchema = new mongoose.Schema({
  url: String,
  alt: String,
  cloudinaryPublicId: String,
  width: Number,
  height: Number,
  mimeType: String,
  filesize: Number,
  filename: String,
}, { 
  collection: 'media',
  strict: false,
})

export const PersonalModel = mongoose.models.personal || mongoose.model('personal', personalSchema)
export const MediaModel = mongoose.models.media || mongoose.model('media', mediaSchema)
