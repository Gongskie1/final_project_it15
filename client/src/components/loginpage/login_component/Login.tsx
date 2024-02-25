import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { ErrorInput } from "../../common/";

interface response {
  status: string;
  message: string;
}

const Login = () => {
  const baseUrl = "http://localhost:8080/students-login";
  const navigate = useNavigate();
  const [responseData,setResponseData] = useState<response>();
  const [status,setStatus] = useState<boolean>(false);

  const formik = useFormik({
    initialValues:{
      username:"",
      password:""
    },
    validationSchema: Yup.object({
      username: Yup.string()
                .required("Required"),
      password: Yup.string()
                .required("Required")
    }),

    onSubmit: async (values) => {
      
        await axios.post(baseUrl, JSON.stringify(values),{ headers: {"Content-Type": "application/json"} })
              .then(response =>{
                setResponseData(response.data)
                setStatus(false)
                // window.alert(response.data.status)
                navigate("/chat-page");
                // console.log(responseData)
              }).catch(error =>{
                setResponseData(error.response.data)
                setStatus(true)
                console.log("There is an error on your request", responseData);
              });
    }

  })

  


  return (
    <div
    className="
    text-[#1e693a]
    rounded-md
    p-[100px_20px] 
    w-3/4
    h-full
    flex flex-col justify-between items-center
    relative
    "
    > 
      <ErrorInput status={status} />
      <h1
        className="text-3xl font-bold"
        >Login to your account</h1>
      <form onSubmit={formik.handleSubmit}
      className="
      flex
      flex-col
      gap-5
      w-full
      "
      >
        

        <div
        className="
        flex relative
        flex-col
        gap-1
        w-full
        "
        >
          <p
          className="text-lg font-semibold"
          >Username</p>
          <input 
          className="
          outline-none
          p-[5px_10px]
          rounded-md
          border-[1px]
          border-[#1E693A]
          text-black
          "
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
           />
           {formik.touched.username && formik.errors.username ? (
            <div className="absolute pl-1 -bottom-6 text-red-600">
              {formik.errors.username}
            </div>
           ): null}
        </div>

        <div
        className="
        flex relative
        flex-col
        gap-1
        "
        >
          <p
          className="text-lg font-semibold"
          >Password</p>
          <input
          className="
          outline-none
          p-[5px_10px]
          rounded-md
          border-[1px]
          border-[#1E693A]
          text-black
          "
          type="text"
          placeholder="Password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="absolute pl-1 -bottom-5 text-red-600">
              {formik.errors.password}
            </div>
           ): null}
        </div>

        <div>
          <button 
          type="submit"
          className="
          text-[white]
          bg-[#2563EB]
          rounded-md
          border-[1px]
          border-[#221f1f]
          w-full
          p-[5px_10px]
          active:opacity-80
          "
          >login</button>
        </div>
      </form>

      <p
      className="text-black text-center"
      >
        Not Registered Yet? <span 
        className="text-blue-600 pl-2 cursor-pointer"
        onClick={() => navigate("/register")}
        >Create an Account</span>
      </p>

    </div>
  )
}

export default Login