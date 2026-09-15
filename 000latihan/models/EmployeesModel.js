import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Employees = db.define('employees', {
    idkaryawan: DataTypes.INTEGER,
    namekaryawan: DataTypes.STRING,
    gender: DataTypes.STRING,
    position: DataTypes.STRING,
    education: DataTypes.STRING
},{
    freezeTableName: true
});

export default Employees;
//function membaca tabel, gunakan async ⬇️
(async() => {
    await db.sync()
})();