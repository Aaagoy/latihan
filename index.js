import express from "express";
import cors from "cors";
import EmployeesRoute from "./routes/EmployeesRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(EmployeesRoute);

app.listen(5000, ()=> console.log("Yokoso"));