import cors from "cors";
import dotenv from "dotenv";
import chalk from "chalk";
import express, {json} from "express";

import questionRouter from "./routes/questionRouter.js";
import answerRouter from "./routes/answerRouter.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

// ROTAS
app.use(questionRouter);
app.use(answerRouter);

app.get('/', () => 'Seja bem vindo ao nosso projeto para o hackathon! Saiba mais em https://github.com/Matheus-daSilva/mini-hackathon-back')

//PORTA
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(chalk.bold.blue(`Servidor rodando na porta ${port}`)));