const Student = require("../../user/student/Student")

module.exports = {
    message_to: async(req,res)=>{
        const {id} = req.params;
        let findStudent;
        try{
            findStudent = await Student.findOne({where:{id:id}})

            if(!findStudent){
                return res.status(404).json({ error: "Student not found" })
            }else{
                return res.status(200).json({
                    status:true,
                    data: findStudent
                })
            }
        }
        catch(error){

            return res.status(500).json({
                status:false,
                message: `An error occurred while finding the student.  ${error} `
            })
           
        }
    },
}