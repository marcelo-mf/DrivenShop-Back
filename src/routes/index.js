import express from "express";
import authRouter from "./authRouter.js";
import orderRouter from "./orderRouter.js";

const router = express.Router();

router.use(authRouter);
router.use(orderRouter);

export default router