import express from "express";
import User from "./User";
import FileAccess from "./FileAccess";
import Fibonacci from "./Fibonacci";
import Email from "./Email";

const app = express();

app.use("/user", User);
app.use("/file", FileAccess);
app.use("/fibonacci", Fibonacci);
app.use("/user/email", Email);

export default app;
