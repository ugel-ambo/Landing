import { AreaSection } from "../components/area-section"
import { direccionData } from "./data"

export default function Direccion() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <AreaSection {...direccionData} />
      </div>
    </main>
  )
}
