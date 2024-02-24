module.exports = {
    create_students: (req,res) =>{
        const {
            username,
            password,
            profile_pic,
            email,
            age,
            status,
            department,
            program,
            about_me,
        } = req.body;
        const student_properties = {
            username:username,
            password:password,
            profile_pic:profile_pic,
            email:email,
            age:age,
            status:status,
            department:department,
            program:program,
            about_me:about_me
        }
        if(!username || !password || !email){
            return res.status(400).json({
                status:false,
                data: "Fill all fields"
            });
        }else{
            return res.status(200).json({
                status:true,
                data:student_properties
            });
        }

        

        
    },
}