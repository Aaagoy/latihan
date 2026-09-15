import express from "express";
import { getEmployees, getEmployeesById, createEmployees, updateEmployees, deleteEmployees } from "../controllers/EmployeesControllers.js";

const router = express.Router();

router.get('/Employees', getEmployees);
router.get('/Employees/:id', getEmployeesById);
router.post('/Employees', createEmployees);
router.patch('/Employees/:id', updateEmployees);
router.delete('/Employees/:id', deleteEmployees);

export default router;