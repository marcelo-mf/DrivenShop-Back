import joi from "joi";

const newUserSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    cpf: joi.string().required().pattern(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/)
})

export default newUserSchema