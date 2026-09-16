import { Op } from "sequelize";
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


export const searchProducts = async(req, res) => {
    try {
        const {kategori, maxHarga} = req.query;
        let whereCondition = {};
        if(kategori){
            whereCondition.kategori = kategori;
        }
        if (maxHarga) {
            whereCondition.harga={
                [Op.lte]: Number(maxHarga)
            };
        }
        const response = await Products.findAll({
            where: whereCondition            
        });
        res.status(200).json(response);        
    } catch (error) {        
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const updateStokProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const { stok } = req.body;

    // Validasi 2: Jika jumlah tidak diberikan
    if (stok === undefined || stok === null || stok === "") {
      return res.status(400).json({
        message: "Jumlah stok wajib diisi",
      });
    }

    // Validasi 3: Jika jumlah <= 0
    if (Number(stok) <= 0) {
      return res.status(400).json({
        message: "Jumlah stok harus lebih dari 0",
      });
    }

    // Cari produk berdasarkan ID
    const product = await Products.findByPk(id);

    // Validasi 1: Jika produk tidak ditemukan
    if (!product) {
      return res.status(404).json({
        message: "Product tidak ditemukan",
      });
    }

    // Hitung stok baru (stok_baru = stok_lama + jumlah)
    const stok_lama = product.stok;
    const jumlah_tambah = Number(stok);
    const stok_baru = stok_lama + jumlah_tambah;

    // Update stok di database
    product.stok = stok_baru;
    await product.save();

    // Validasi 4: Response jika berhasil
    return res.status(200).json({
      message: "Stok berhasil ditambahkan",
      stok_lama: stok_lama,
      jumlah_tambah: jumlah_tambah,
      stok_baru: stok_baru,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};