import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";

const productsRoutes = Router()

//usando o middleware (global) em todas as rotas deve ser colocado antes delas 
productsRoutes.use(myMiddleware)

// rota raiz com query params 
productsRoutes.get("/", (req, res) => {
    // query params: ?page=1&limit=10
    const {page,limit} = req.query

    //passando parametros diretamente na rota
    res.send(`Página: ${page} | Limite: ${limit}`)
})

//usando o middleware apenas nessa rota
productsRoutes.post("/", myMiddleware, (req, res) => {
    // body params: { "name": "Product 1", "price": 10 }
    const {name,price} = req.body
//res.send(`Produto: ${name} | Preço: ${price}`)

//da pra passar a reposta direto em json, sem precisar fazer stringfy
    res.status(201).json({name,price,userId: req.userId})
})

export {productsRoutes}

