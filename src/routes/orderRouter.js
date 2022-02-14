import express from "express";
import orderController from "../controllers/orderController.js";
import validateOrderSchema from "../middlewares/validateOrderSchema.js";
import { validateToken } from "../middlewares/validateUserToken.js";

const orderRouter = express.Router()

orderRouter.post('/driven-shop/order', validateOrderSchema, validateToken, orderController)

export default orderRouter