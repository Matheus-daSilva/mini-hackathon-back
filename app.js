import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Servidor de pé e escutando na porta ${PORT}`))