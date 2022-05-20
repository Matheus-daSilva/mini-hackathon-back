import { Router } from "express";

import { postAnswer } from "../controllers/answerController.js";

const answerRouter = Router();

// ROTAS DE PRODUTOS
answerRouter.post("/answer", postAnswer);
// answerRouter.get("/questions", getQuestions);

export default answerRouter;