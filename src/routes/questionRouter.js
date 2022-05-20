import { Router } from "express";

import { postQuestion, getQuestions } from "../controllers/questionController.js";

const questionRouter = Router();

// ROTAS DE PRODUTOS
questionRouter.post("/question", postQuestion);
questionRouter.get("/questions", getQuestions);

export default questionRouter;