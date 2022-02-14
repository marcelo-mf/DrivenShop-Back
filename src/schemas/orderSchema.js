import joi from "joi";

const orderSchema = joi.object({
    order: joi.array().required()
})

export default orderSchema