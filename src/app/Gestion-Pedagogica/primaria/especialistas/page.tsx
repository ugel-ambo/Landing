import EspecialistasSection from "../../components/EspecialistasSection";
import especialistasData from "../data";


export default function App() {
    return (
      <div className="min-h-screen">
        <EspecialistasSection 
          data={especialistasData}
          title="Especialistas de Nivel Primaria"
          subtitle="Conoce a nuestro equipo comprometido con la educación primaria"
          nivel="Primaria"
        />
      </div>
    );
  }