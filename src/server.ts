import express from "express";
import { myMiddleware } from "./middlewares/my-middleware";

const PORT = 3333

const app = express()

// habilitar o uso de json no express
app.use(express.json())

//usando o middleware (global) em todas as rotas deve ser colocado antes delas 
app.use(myMiddleware)

// rota raiz com query params 
app.get("/products", (req, res) => {
    // query params: ?page=1&limit=10
    const {page,limit} = req.query

    //passando parametros diretamente na rota
    res.send(`Página: ${page} | Limite: ${limit}`)
})

app.post("/products", (req, res) => {
    // body params: { "name": "Product 1", "price": 10 }
    const {name,price} = req.body
//res.send(`Produto: ${name} | Preço: ${price}`)

//da pra passar a reposta direto em json, sem precisar fazer stringfy
    res.status(201).json({name,price,userId: req.userId})
})

// inicializa o servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})