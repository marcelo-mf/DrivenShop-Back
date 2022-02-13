import orderSchema from '../schemas/orderSchema.js'

export default function validateOrderSchema(req, res, next) {
    
    const validation = orderSchema.validate(req.body)

    if (validation.error) {
        res.sendStatus(422)
        return
    }

    next()
}