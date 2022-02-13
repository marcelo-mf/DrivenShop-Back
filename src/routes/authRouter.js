import express from "express";
import { signIn, signUp } from "../controllers/authController.js";
import validateNewUserSchema from "../middlewares/validateNewUserSchema.js";
import validateUserSchema from "../middlewares/validateUserSchema.js";
import db from "../db.js";

const authRouter = express.Router();

authRouter.get("/hello", async (req, res) => {
    const user = await db.collection('users').find({}).toArray()
    const session = await db.collection('sessions').find({}).toArray()
    res.send({ users: user, session: session})
});

authRouter.post("/driven-shop/sign-up", validateNewUserSchema, signUp)

authRouter.post("/driven-shop/sign-in", validateUserSchema, signIn)

export default authRouter;