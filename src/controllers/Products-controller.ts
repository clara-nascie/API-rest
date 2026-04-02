import {Request, Response} from "express"
import {AppError} from "../../utils/App-Error"

class ProductsController {
/**
 * MAXIMO DE 5 METODOS POR CONTROLLER
 * INDEX - LISTAR TODOS OS RECURSOS
 * SHOW - LISTAR UM RECURSO ESPECIFICO
 * CREATE - POST PARA CRIAR UM RECURSO
 * UPDATE - PUT OU PATCH PARA ATUALIZAR UM RECURSO
 * DELETE - DELETE PARA DELETAR UM RECURSO
 */
    index(req: Request, res: Response){
         // query params: ?page=1&limit=10
            const {page,limit} = req.query
        
            //passando parametros diretamente na rota
            res.send(`Página: ${page} | Limite: ${limit}`)
        
    }   

    create(req: Request, res: Response){
            // body params: { "name": "Product 1", "price": 10 }
            const {name,price} = req.body

            //verificando se o produto existe
            if(!price){
                throw new AppError("Preço é obrigatório")
            }

             //verificando se o produto existe
            if(!name){
                throw new AppError("Nome é obrigatório")
            }

            //comentado para nao dar erro
            //throw new AppError("Erro ao criar produto")

            //da pra passar a reposta direto em json, sem precisar fazer stringfy
            res.status(201).json({name,price,userId: req.userId})

    }

    update(){
        
    }

    delete(){
        
    }
}

export {ProductsController}