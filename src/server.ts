import express from "express";
import { routes } from "./routes";

const PORT = 3333

const app = express()

// habilitar o uso de json no express
app.use(express.json())

//usando as rotas
app.use(routes)

// inicializa o servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})