import db from "../db.js";
import dayjs from "dayjs";

export async function getQuestions(req, res) {
    try {
        const questions = await db.collection("questions").find().toArray();
        res.send(questions);
    } catch (e) {
        console.log("Erro ao carregar questões\n", e);
        return res.sendStatus(500);
    }
}


export async function postQuestion(req, res) {
    const {body} = req;

    const question = {
        ...body,
        answers: [],
        date: dayjs().format('DD/MM/YYYY HH:mm')
    }

    try {
        await db.collection("questions").insertOne(question);
        res.sendStatus(201);
    } catch (e) {
        console.log("Erro ao postar questão\n", e);
        return res.sendStatus(500);
    }
}

