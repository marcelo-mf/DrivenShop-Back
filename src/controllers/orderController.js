import db from "../db.js";

export default async function order(req, res) {
    const order = req.body
    const user = res.locals.user


    try {
        await db.collection('orders').insertOne({...order, userId: user._id})

        await db.collection('users').updateOne({_id: user._id},{$addToSet: {purchased: order.courses}})

        res.sendStatus(201)

    } catch {
        res.sendStatus(500)
    }
}