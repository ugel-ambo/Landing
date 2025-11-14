import EspecialistasSection from "../../components/EspecialistasSection";
import especialistasData from "../data";


export default function App() {
    return (
      <div className="min-h-screen">
        <EspecialistasSection 
          data={especialistasData}
          title="Especialistas de Nivel Secundaria"
          subtitle="Conoce a nuestro equipo comprometido con la educación secundaria"
          nivel="Secundaria"
        />
      </div>
    );
  }