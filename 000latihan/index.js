import express from "express";
import cors from "cors";
import ProductsRoute from "./routes/ProductsRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(ProductsRoute);

app.listen(5000, ()=> console.log("Yokoso"));