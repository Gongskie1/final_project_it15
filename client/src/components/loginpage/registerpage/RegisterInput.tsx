import { useFormik } from "formik";
import * as Yup from "yup";


interface FormValues {
    [key: string]: string;
}


const RegisterInput = () => {
    const formik = useFormik<FormValues>({
        initialValues:{

            Username:"",
            Password:"",
            Name:"",
            Profile_pic:"",
            Email:"",
            Age:"",
            Status:"",
            Department:"",
            Program:"",
            About_me:"",

        },
        validationSchema: Yup.object({

        }),
        onSubmit: values =>{
            console.log("This is the value of form: ",JSON.stringify(values));
        }
    })
  return (
    <div className='h-full flex flex-col justify-center gap-5 '>
        <div className='h-full flex justify-center items-center'>
            <form onSubmit={formik.handleSubmit} className='max-h-[75%] h-full w-full bg-slate-500 flex flex-col gap-4'>

            div
                
            </form>
            
        </div>
    </div>
  )
}

export default RegisterInput