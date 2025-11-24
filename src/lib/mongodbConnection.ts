import mongoose from "mongoose";

const NEXT_PUBLIC_MONGODB_ID = process.env.NEXT_PUBLIC_MONGODB_ID;

const connectMongoDB = async () => {
    try {
        if (!NEXT_PUBLIC_MONGODB_ID) {
            throw new Error("la variable de la bd no esta definida");
        }
        await mongoose.connect(NEXT_PUBLIC_MONGODB_ID, {
            dbName: "ugel_ambo",
        });
        console.log("Conectado a MongoDB.");
    } catch (error) {
        console.log("Error al conectar a MongoDB:", error);
    }
};

export default connectMongoDB;
