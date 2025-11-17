import { AreaSection } from "../components/area-section"
import { gestionAdministrativaData } from "./data"

export default function GAdministrativa() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <AreaSection {...gestionAdministrativaData} />
      </div>
    </main>
  )
}
