import express from "express";
import authRouter from "./authRouter.js";
import orderRouter from "./orderRouter.js";
import productRouter from "./productRouter.js";

const router = express.Router();

router.use(authRouter);
router.use(orderRouter);
router.use(productRouter);

export default router