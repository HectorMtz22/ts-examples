import express from "express";
import User from "./User";
import FileAccess from "./FileAccess";
import Fibonacci from "./Fibonacci";

const app = express();

app.use("/user", User);
app.use("/file", FileAccess);
app.use("/fibonacci", Fibonacci);

export default app;
