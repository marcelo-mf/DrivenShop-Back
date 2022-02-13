import userSchema from "../schemas/userSchema.js";

export default function validateUserSchema(req, res, next) {

    const validation = userSchema.validate(req.body);

    if (validation.error) {
        res.sendStatus(422)
        return
    };

    next();

}