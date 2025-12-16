import mongoose from 'mongoose';
import { MediaModel } from './Personal'; // Importar para asegurar que el modelo media esté registrado

// Esquema para colegios asignados a cada especialista
const colegioSchema = new mongoose.Schema({
  ubicacion: { type: String, required: true },
  colegio: { type: String, required: true },
  nivel_modalidad: { type: String, required: true },
}, { _id: false });

// Esquema del especialista compatible con la colección de Payload CMS
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
  collection: 'especialistas', // Nombre de colección de Payload
  strict: false, 
});

// Evitar errores de modelo ya definido en desarrollo con HMR
export const EspecialistaModel = mongoose.models.especialista || 
  mongoose.model('especialista', especialistaSchema);

// Re-exportar MediaModel para conveniencia
export { MediaModel };

