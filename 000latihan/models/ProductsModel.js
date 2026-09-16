import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Product = db.define('cakes', {
    namaproduct: DataTypes.STRING,
    kategori: DataTypes.STRING,
    harga: DataTypes.FLOAT,
    stok: DataTypes.INTEGER
},{
    freezeTableName: true
});

export default Product;
//function membaca tabel, gunakan async ⬇️
(async() => {
    await db.sync()
})();