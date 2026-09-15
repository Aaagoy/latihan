import Products from "../models/ProductsModel.js";

export const getProducts = async(req, res) => {
    try {
        const response = await Products.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getProductsById = async(req, res) => {
    try {
        const response = await Products.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);        
    } catch (error) {        
        console.log(error.message);
    }
}

export const createProducts = async(req, res) => {
    try {
        await Products.create(req.body);
        res.status(201).json({msg: "Created Complete"});
    } catch (error) {        
        console.log(error.message);
    }
}

export const updateProducts = async(req, res) => {
    try {
        await Products.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Updated Complete"});
    } catch (error) {        
        console.log(error.message);
    }

}
export const deleteProducts = async(req, res) => {
    try {
        await Products.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Deleted Complete"});
    } catch (error) {        
        console.log(error.message);
    }
}

