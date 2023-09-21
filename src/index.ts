import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
    res.send("Typescript + Express!");
});

app.listen(PORT, ()=>{
    console.log(`[Server]: listening on http://localhost:${PORT}`);
});