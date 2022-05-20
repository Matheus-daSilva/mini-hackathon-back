import db from "../db.js";

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

    try {
        await db.collection("questions").insertOne(body);
        res.sendStatus(201);
    } catch (e) {
        console.log("Erro ao postar questão\n", e);
        return res.sendStatus(500);
    }
}

