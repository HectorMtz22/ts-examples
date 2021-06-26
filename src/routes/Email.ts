import express, { Request, Response } from "express";
import { body } from "express-validator";

const router = express.Router();

router.get(
  "/",
  body("email").isEmail().normalizeEmail(),
  (req: Request, res: Response) => {
    console.log(req.body);
    res.send("Aver");
  }
);

export default router;
