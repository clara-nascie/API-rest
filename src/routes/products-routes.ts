import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";
import { ProductsController } from "../controllers/products-controller";

const productsRoutes = Router()
const productsController = new ProductsController()

//usando o middleware (global) em todas as rotas deve ser colocado antes delas 
productsRoutes.use(myMiddleware)

//rota raiz com query params
productsRoutes.get("/", productsController.index)

//usando o middleware apenas nessa rota
productsRoutes.post("/", myMiddleware, productsController.create)

export {productsRoutes}
