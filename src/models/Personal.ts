import mongoose from 'mongoose'

// Esquemas y modelos de Payload CMS para uso en el landing
// Payload CMS usa nombres de colección en plural por defecto

const personalSchema = new mongoose.Schema({
  nombre: String,
  cargo: String,
  area: String,
  orden: Number,
  foto: { type: mongoose.Schema.Types.ObjectId, ref: 'media' },
}, { 
  collection: 'personals',  // Payload usa el plural
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

// Evitar errores de modelo ya definido en desarrollo con HMR
export const PersonalModel = mongoose.models.personal || mongoose.model('personal', personalSchema)
export const MediaModel = mongoose.models.media || mongoose.model('media', mediaSchema)
