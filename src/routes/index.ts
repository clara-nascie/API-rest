import { Router } from "express";
import { productsRoutes } from "./products-routes";


//importando as rotas
const routes = Router()

//usando as rotas
routes.use("/products", productsRoutes)

export {routes}