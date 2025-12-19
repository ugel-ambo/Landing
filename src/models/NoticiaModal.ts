import mongoose from 'mongoose';
import Media from './Media';
void Media;

const noticiaModalSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  imagen: { type: mongoose.Schema.Types.ObjectId, ref: 'media', required: true },
  activo: { type: Boolean, default: true },
  orden: { type: Number, default: 0 },
}, { 
  collection: 'noticias-modals', // Standard pluralization
  timestamps: true,
  strict: false,
});

export const NoticiaModalModel = mongoose.models['noticias-modal'] || mongoose.model('noticias-modal', noticiaModalSchema);
export default NoticiaModalModel;
