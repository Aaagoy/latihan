// import Product from "../models/ProductModels.js";
import Employees from "../models/EmployeesModel.js";

export const getEmployees = async(req, res) => {
    try {
        const response = await Employees.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getEmployeesById = async(req, res) => {
    try {
        const response = await Employees.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);        
    } catch (error) {        
        console.log(error.message);
    }
}

export const createEmployees = async(req, res) => {
    try {
        await Employees.create(req.body);
        res.status(201).json({msg: "Created Complete"});
    } catch (error) {        
        console.log(error.message);
    }
}

export const updateEmployees = async(req, res) => {
    try {
        await Employees.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Updated Complete"});
    } catch (error) {        
        console.log(error.message);
    }

}
export const deleteEmployees = async(req, res) => {
    try {
        await Employees.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Deleted Complete"});
    } catch (error) {        
        console.log(error.message);
    }
}

