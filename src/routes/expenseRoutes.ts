import { Router, Request, Response } from "express";

const expenseRouter = Router();

expenseRouter.get("/monthly", async (req: Request, res: Response) => {
    res.status(200).send("Monthly expenses");
});


expenseRouter.get("/yearly", async (req: Request, res: Response) => {
    res.status(200).send("Yearly expenses");
});

expenseRouter.post('/add', async (req: Request, res: Response) => {
    res.status(200).send("Added an expense");
})
export {expenseRouter};