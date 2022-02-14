import express from "express";
import { validateToken } from "../middlewares/validateUserToken.js";
import { getAll, getProduct } from "../controllers/productController.js";

const productRouter = express.Router()

productRouter.use(validateToken)

productRouter.get('/home', getAll)

productRouter.get('/product/:productId', getProduct)

export default productRouter