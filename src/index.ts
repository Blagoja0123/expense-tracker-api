import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";

//Router imports

import { expenseRouter } from "./routes/expenseRoutes.js";

dotenv.config();

const app: Express = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
    res.send("Typescript + Express!");
});


app.use('/api/expenses', expenseRouter);

app.listen(PORT, ()=>{
    console.log(`[Server]: listening on http://localhost:${PORT}`);
});