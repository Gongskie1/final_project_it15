const  Student = require("../../student/Student");

module.exports = {
    create_students: async (req, res) => {
        const { username, password, profile_pic, email, age, status, department, program, about_me } = req.body;
        const student_properties = {
            username: username,
            password: password,
            profile_pic: profile_pic,
            email: email,
            age: age,
            status: status,
            department: department,
            program: program,
            about_me: about_me
        };

        if (!username || !password || !email) {
            return res.status(400).json({
                status: false,
                data: "Please fill in all empty fields."
            });
        } else {
            let findStudent;
            let create_studAccount;
            try {
                findStudent = await Student.findOne({ where:{email} });

                if (!findStudent) {
                    create_studAccount = await Student.create(student_properties)

                    return res.status(200).json({
                        status: false,
                        data: "A student has been created."
                    });
                } else {
                    return res.status(200).json({
                        status: true,
                        data: "Student email is used"
                    });
                }
            } catch (error) {
                
                return res.status(500).json({
                    status: false,
                    data:` ${error} An error occurred while finding the student.`
                });
            }
        }
    },
};
