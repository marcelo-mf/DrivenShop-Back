import joi from "joi";

const orderSchema = joi.object({
    courses: joi.array().required()
})

export default orderSchema