const Student = require("../../student/Student");
const { Op } = require('sequelize');
module.exports = {
    login_students: async(req,res) =>{
        const { username, password } = req.body;

        let validate;
        try{
            validate = await Student.findOne({where:{username,password}});
            
            if(validate){
                return res.status(202).json({
                    status:true,
                    message: validate
                })
            }else{
                return res.status(401).json({
                    status:false,
                    message: "Invalid username or password."
                })
            }
        }catch(err){
            return res.status(400).json({
                success: false,
                message: "Something went wrong with your request.",
              });
        }
    },

    all_student: async(req,res) =>{
        const { studentID }= req.params

        let getAll
        try{
            getAll = await Student.findAll({
                where: {
                    id: {
                        [Op.not]: studentID
                    }
                }
            });
            
            return res.status(200).json({
                status:true,
                message: getAll
            })
        }catch(err){
            return res.status(401).json({
                status:false,
                message: `Something wrong: ${err}`
            })
        }
    },
    
}