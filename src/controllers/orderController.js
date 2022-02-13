import db from "../db.js";

export default async function order(req, res) {
    const order = req.body
    const user = res.locals.user


    try {
        await db.collection('orders').insertOne({...order, userId: user._id})

        if (order.courses.length === 0) {
            res.sendStatus(422)
        }

        for(let i = 0; i < order.courses.length; i++) {
            await db.collection('users').updateOne({_id: user._id},{$addToSet: {"purchased": order.courses[i]}})
        }

        res.sendStatus(201)

    } catch {
        res.sendStatus(500)
    }
}