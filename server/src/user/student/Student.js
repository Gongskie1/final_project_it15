const { DataTypes } = require("sequelize");
const { sequelize } = require("../../common/DB/connection");

const Student = sequelize.define("student", 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        profile_pic:{
            type: DataTypes.STRING,
            allowNull: true
        },
        email:{
            type: DataTypes.STRING,
            allowNull: true
        },
        age:{
            type: DataTypes.STRING,
            allowNull: true
        },
        status:{
            type: DataTypes.STRING,
            allowNull: true
        },
        department:{
            type: DataTypes.STRING,
            allowNull: true
        },
        program:{
            type: DataTypes.STRING,
            allowNull: true
        },
        about_me:{
            type: DataTypes.STRING,
            allowNull: true
        }
    }
);



module.exports = Student;
