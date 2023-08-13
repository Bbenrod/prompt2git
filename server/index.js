const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Habilita CORS para permitir solicitudes desde el frontend
app.use(express.json()); // Habilita el uso de JSON en el cuerpo de las solicitudes

// Rutas
const translateRoutes = require("./translateRoutes"); // Importa las rutas
app.use("/api/translate", translateRoutes);

//Errores
app.use((err, req, res, next) => {
    console.error("[error]", err);
});

// Manejo de errores globales
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
    console.log(`[Server] Server is running on port ${PORT}`);
});
