import { Request, Response, NextFunction } from "express";

//função que vai ser executada antes de qualquer rota ou depois de uma rota
//nest serve pra continuar pra prooxima funcao
export function myMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    //passando um parametro para a requisição
    req.userId = "123"

    console.log("Middleware executado")
    return next()
}