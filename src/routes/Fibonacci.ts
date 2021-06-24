import express, { Response } from "express";
import { fibonacci } from "../Fibonacci";
const router = express.Router();

router.get("/", (_, res: Response) => {
  res.send(fibonacci(100000n) + "");
});

export default router;
