import express from "express";
import { getProducts, getProductsById, createProducts, updateProducts, deleteProducts, searchProducts, updateStokProducts } from "../controllers/ProductsControllers.js";

const router = express.Router();

router.get('/cakes', getProducts);
router.get('/cakes/search', searchProducts);
router.get('/cakes/:id', getProductsById);
router.post('/cakes', createProducts);
router.patch('/cakes/:id', updateProducts);
router.delete('/cakes/:id', deleteProducts);
router.patch('/cakes/:id/stok', updateStokProducts);

export default router;