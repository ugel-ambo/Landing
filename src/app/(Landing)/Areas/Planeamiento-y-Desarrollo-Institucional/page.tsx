import { AreaSection } from "../components/area-section"
import { planeamientoData } from "./data"

export default function Planeamiento() {
    return (
        <main className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <AreaSection {...planeamientoData} />
            </div>
        </main>
    )
}
