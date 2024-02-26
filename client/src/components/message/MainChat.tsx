import MainChatNav from './MainChatNav'
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { useFormik }from "formik";
import { useEffect, useRef, useState } from 'react';
import {io} from "socket.io-client";
// import * as Yup from "yup"

interface inputType{
    inputMessage:string,
    inputFile: FileList | undefined;
}
const socket = io("http://localhost:8080");

const MainChat = () => {
    const [message, setMessage] = useState<inputType>();
    
    
    const formik = useFormik<inputType>({
        initialValues:{
            inputMessage:"",
            inputFile: undefined
        },
        onSubmit:(values)=>{
            console.log(values)

            formik.setFieldValue("inputMessage", "");
            handleClearFile()

            setMessage(values)
            
        }
    })

    useEffect(()=>{
        socket.emit("fromClient", message);
        // socket.connect
    },[message])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        formik.setFieldValue('inputFile', e.target.files?.[0]);
    };
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleClearFile = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        formik.setFieldValue("inputFile", null||"" );
    };

  return (
    <div
    className=' h-full flex'
    >
        <form
        onSubmit={formik.handleSubmit}
        className='h-full w-full flex flex-col p-[10px_15px]' 
        action="">

            <div className='w-full shadow-xl'>
                <MainChatNav/>
            </div>

            <div
            className='h-full pt-3 flex flex-col border-[1px] rounded-b-lg bg-slate-100'
            >

                <div className=' h-full border-b-2'>
                    {message?.inputMessage }
                </div>
                {/* ------------------------------------- */}
                <div className='py-3 flex flex-row items-center px-3 gap-2 bg-slate-200'>
                    <div className='border-r-2 border-blue-500'>
                        <input 
                        type="file"
                        id="inputFile"
                        name="inputFile"
                        onChange={handleFileChange}
                        onBlur={formik.handleBlur}
                        ref={fileInputRef}
                        />
                        <div className='cursor-pointer' onClick={handleClearFile}>Clear File</div>
                    </div>

                    <div className='w-full'>

                        <input
                        className='outline-none border-[1px] border-[#6A9C7D] px-2 py-2 rounded-2xl w-full' 
                        type="text"
                        placeholder='type here'
                        id="inputMessage"
                        name="inputMessage"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.inputMessage}
                        />
                    </div>
                    <div className='border flex items-center justify-center'>
                        <button type='submit'>
                            <BsFillSendArrowUpFill size={30}/>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default MainChat