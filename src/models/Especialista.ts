import mongoose from 'mongoose';
import { MediaModel } from './Personal'; 

const colegioSchema = new mongoose.Schema({
  ubicacion: { type: String, required: true },
  colegio: { type: String, required: true },
  nivel_modalidad: { type: String, required: true },
}, { _id: false });

const especialistaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  nivel: { 
    type: String, 
    required: true,
    enum: ['inicial', 'primaria', 'secundaria', 'ceba', 'pronoi'],
  },
  foto: { type: mongoose.Schema.Types.ObjectId, ref: 'media' },
  presentacion: { type: String },
  colegios: [colegioSchema],
}, { 
  collection: 'especialistas', 
  strict: false, 
});

export const EspecialistaModel = mongoose.models.especialista || 
  mongoose.model('especialista', especialistaSchema);

export { MediaModel };

