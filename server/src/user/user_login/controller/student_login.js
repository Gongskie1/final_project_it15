const Student = require("../../student/Student");

module.exports = {
    login_students: async(req,res) =>{
        const { username, password} = req.body;

        let validate;
        try{
            validate = await Student.findOne({where:{username,password}});
            
            if(validate){
                return res.status(202).json({
                    status:true,
                    data: validate
                })
            }else{
                return res.status(403).json({
                    status:false,
                    data: "Invalid username or password."
                })
            }
        }catch(err){
            return `${err} Something wrong with your model`
        }
    }
}