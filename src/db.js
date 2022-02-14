import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
await mongoClient.connect();
const db = mongoClient.db('drivenshop');

const products = await db.collection('products').find().toArray()

if (products.length === 0) {
    await db.collection('products').insertMany([
        { name: "Modulo 1 - Node.js e MongoDB", image: "https://koenig-media.raywenderlich.com/uploads/2014/03/MongoDB.png", type:'back', price:'299,90', time:'6h30min', id:'3', description: 'Curso muito legal de isso e aquilo sobre back end e tals bla bla bla bla' },
        { name: "Modulo 2 - JavaScript", image: "https://www.cloudsavvyit.com/p/uploads/2021/02/c123ee3a.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1", type:'front', price:'299,90', time:'4h30min', id:'2', description: 'Curso muito legal de isso e aquilo sobre front end e tals bla bla bla bla' },
        { name: "Modulo 1 - HTML e CSS", image: "https://www.cupcom.com.br/wp-content/uploads/2020/03/site-html-css.jpg", type:'front', price:'299,90', time:'4h30min', id:'1', description: 'Curso muito legal de isso e aquilo sobre front end e tals bla bla bla bla' },
        { name: "Modulo 1 - Time management", image: 'https://blog.phonetrack.com.br/wp-content/uploads/2019/02/PHT-18-blog.png', type:'soft', price:'299,90', time:'2h30min', id:'4', description: 'Curso muito legal de isso e aquilo sobre front end e tals bla bla bla bla' },
        { name: "Modulo 2 - Produtividade", image: 'https://www.revendedor.com.br/wp-content/uploads/2020/12/grau-de-produtividade.png', type:'soft', price:'299,90', time:'4h30min', id:'5', description: 'Curso muito legal de isso e aquilo sobre front end e tals bla bla bla bla' },
        { name: "Modulo 2 - SQL", image: 'https://www.tshirtgeek.com.br/wp-content/uploads/2021/09/com037-scaled.jpg', type:'back', price:'299,90', time:'4h30min', id:'6', description: 'Curso muito legal de isso e aquilo sobre front end e tals bla bla bla bla' }
    ])
}


export default db;