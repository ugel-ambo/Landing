"use server";

import { revalidatePath } from "next/cache";

const REVALIDATE_TOKEN = process.env.REVALIDATE_SECRET || "ugel-ambo-revalidate-2024";

export async function revalidateContent(token: string, paths?: string[]) {
    if (token !== REVALIDATE_TOKEN) {
        return { success: false, error: "Invalid token" };
    }

    try {
        if (paths && paths.length > 0) {
            for (const path of paths) {
                revalidatePath(path);
            }
        } else {
            revalidatePath("/Gestion-Pedagogica", "layout");
            revalidatePath("/Gestion-Pedagogica/inicial", "page");
            revalidatePath("/Gestion-Pedagogica/inicial/especialistas", "page");
            revalidatePath("/Gestion-Pedagogica/primaria", "page");
            revalidatePath("/Gestion-Pedagogica/primaria/especialistas", "page");
            revalidatePath("/Gestion-Pedagogica/secundaria", "page");
            revalidatePath("/Gestion-Pedagogica/secundaria/especialistas", "page");
            revalidatePath("/Gestion-Pedagogica/pronoi", "page");
            revalidatePath("/Gestion-Pedagogica/pronoi/especialistas", "page");
            revalidatePath("/Areas/Direccion", "page");
            revalidatePath("/Areas/Gestion-Administrativa", "page");
            revalidatePath("/Areas/Gestion-Institucional", "page");
            revalidatePath("/Areas/Gestion-Pedagogica", "page");
            revalidatePath("/Areas/Recursos-Humanos", "page");
            revalidatePath("/integridad", "page");
        }

        return { success: true, revalidated: true, paths: paths || "all" };
    } catch (error) {
        console.error("Error revalidating:", error);
        return { success: false, error: String(error) };
    }
}
