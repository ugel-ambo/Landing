"use server";

import connectMongoDB from "@/lib/mongodbConnection";
import Fortalecimiento from "@/models/Fortalecimiento";

export async function getFortalecimientos(area: string) {
    try {
        await connectMongoDB();
        const fortalecimientos = await Fortalecimiento.find({ area }).sort({ fecha: -1 }).lean();

        // Convert _id and dates to string to be passed to client component
        return JSON.parse(JSON.stringify(fortalecimientos));
    } catch (error) {
        console.error("Error fetching fortalecimientos:", error);
        return [];
    }
}
