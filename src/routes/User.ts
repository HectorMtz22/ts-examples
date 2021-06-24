import express, { Response, Request } from "express";
import { body, validationResult } from "express-validator";
import { User } from "../models/Individuo";
const router = express.Router();

const user: User = {
  name: "Hector",
  age: 18,
};

router.get("/", (_, res: Response) => {
  res.send(user);
});

router.post("/", body("username").isEmail(), (req: Request, res: Response) => {
  const errors = validationResult(req);
  console.log(errors);
  res.send("Just request");
});

export default router;
