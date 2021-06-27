import express from "express";
import router from "./routes";

const app = express();
const port = 3001;

app.use(express.json());

const requestTime = (
  req: express.Request,
  _: express.Response,
  next: express.NextFunction
) => {
  const { body } = req;
  console.log(body);

  console.log(Date.now());
  next();
};

app.use(requestTime);

app.use("/", router); // Imports all routes

app.listen(port, () => {
  // Cuando funcione
  console.log("Estamos al aire!");
});
