import cors from "cors";
import dotenv from "dotenv";

import questionRouter from "./routes/questionRouter.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

// ROTAS
app.use(questionRouter);


//PORTA
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(chalk.bold.blue(`Servidor rodando na porta ${port}`)));