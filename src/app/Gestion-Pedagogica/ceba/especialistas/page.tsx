import EspecialistasSection from "../../components/EspecialistasSection";
import especialistasData from "../data";

export default function App() {
    return (
      <div className="min-h-screen">
        <EspecialistasSection 
          data={especialistasData}
          title="Especialistas de Educación Básica Alternativa"
          subtitle="Conoce a nuestro equipo comprometido con la educación básica alternativa"
          nivel="Básica Alternativa"
        />
      </div>
    );
  }