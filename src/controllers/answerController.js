import { ObjectId } from "mongodb";
import db from "../db.js";
import dayjs from "dayjs";

export async function postAnswer(req, res) {
    const {_id, answer} = req.body;

    const sendAnswer = {
        ...answer,
        date: dayjs().format('DD/MM/YYYY HH:mm')
    }

    try {
        const question = await db.collection("questions").findOne({_id: ObjectId(_id)});

        const { answers } = question;

        await db.collection("questions").updateOne({
            _id: ObjectId(_id)
        }, { $set: {answers: [...answers, sendAnswer]} })

        res.sendStatus(201);
    } catch (e) {
        console.log("Erro ao carregar questões\n", e);
        return res.sendStatus(500);
    }
}


// export async function deleteAnswer(req, res) {
//     const {body} = req;

//     try {
//         await db.collection("questions").insertOne(body);
//         res.sendStatus(201);
//     } catch (e) {
//         console.log("Erro ao postar questão\n", e);
//         return res.sendStatus(500);
//     }
// }