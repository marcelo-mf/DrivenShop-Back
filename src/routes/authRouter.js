import express from "express";
import { signIn, signUp } from "../controllers/authController.js";
import validateNewUserSchema from "../middlewares/validateNewUserSchema.js";
import validateUserSchema from "../middlewares/validateUserSchema.js";

const authRouter = express.Router();

let users = [{name: "a", email: "a@a.com", password: "a"}]

authRouter.get("/hello", (req, res) => {
    res.send(users);
});

authRouter.post("/driven-shop/sign-up", validateNewUserSchema, signUp)

authRouter.post("/driven-shop/sign-in", validateUserSchema, signIn)

export default authRouter;