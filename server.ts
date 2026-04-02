import express, { NextFunction, Request, Response } from "express";
import { routes } from "./src/routes";
import { AppError } from "./utils/App-Error";
import { ZodError } from "zod";

const PORT = 3333

const app = express()

// habilitar o uso de json no express
app.use(express.json())

//usando as rotas
app.use(routes)

/**
 * 400 - bad request - erro do cliente 
 * 500 - internal server error - erro do servidor
 */

//tratamento de erros
app.use((error: any, req: Request, res: Response, _: NextFunction) => {
    // verificando se o erro é uma instancia de AppError
    if(error instanceof AppError){
        return res.status(error.statusCode).json({message: error.message})
    }

    //verificando se o erro é uma instancia de ZodError
    if(error instanceof ZodError){
        return res.status(400).json({message: "Erro de validação", issues:error.format()})
    }

    // se não for uma instancia de AppError, retorna um erro 500
    return res.status(500).json({message: "Internal server error"})
})

// inicializa o servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})