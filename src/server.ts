import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";

const PORT = 3333

const app = express()

// habilitar o uso de json no express
app.use(express.json())

//usando as rotas
app.use(routes)

//tratamento de erros
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    console.log(error)
    return res.status(500).json({message: "Internal server error"})
})

// inicializa o servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})