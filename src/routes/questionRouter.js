import { Router } from "express";

import { postQuestion, getQuestions } from "../controllers/questionController.js";
import { postQuestionMiddleware } from "../middlewares/questionMiddleware.js";

const questionRouter = Router();

// ROTAS DE PRODUTOS
questionRouter.post("/question", postQuestionMiddleware, postQuestion);
questionRouter.get("/questions", getQuestions);

export default questionRouter;