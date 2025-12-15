import express, { Request, Response } from "express";

export const app = express();
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  return res.status(200).json({
    data: [1, 2, 3, 4, 5],
  });
});

app.get("/slow", (_req: Request, res: Response) => {
  setTimeout(() => {
    res.status(200).json({
      data: [1, 2, 3, 4, 5],
    });
  }, 10000);
});

app.listen(5000, () => {
  console.log("Server running!!!");
});
