import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { fibonacci } from "../Fibonacci";
const router = express.Router();

router.get("/", (_, res: Response) => {
  res.send("Haz post");
});

router.post(
  "/",
  body("fibonacci").isNumeric(),
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Dont forget, the return statement
    return res.send(fibonacci(req.body.fibonacci) + "");
  }
);

export default router;
