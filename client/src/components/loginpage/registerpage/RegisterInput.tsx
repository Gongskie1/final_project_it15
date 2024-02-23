import React from 'react'
import { registerConstant1, registerConstant2 } from '../../../constant'
import RegisterInputs_inputs from '../../common/RegisterInputs_inputs'
import { departmentConstant, statusConstant } from '../../../constant/registerConstant'

const RegisterInput = () => {
  return (
    <div className='h-full flex flex-col justify-center gap-5 '>
        <div className='h-full flex justify-center items-center'>
            <form className='h-3/4 flex flex-col gap-4'>

                <div className='w-full flex flex-row gap-2'>

                    <div className='flex-1 flex flex-col gap-4'>
                        {registerConstant1.map((value,index) => (
                            <RegisterInputs_inputs 
                            inputKey={index} 
                            inputName={value.input_name} 
                            inpputType={value.input_type} 
                            inputPlaceholder={value.input_placeholder}/>
                        ))
                        }
                        <select name="" id="" className='p-[3px_5px] w-full rounded-md border-[1px] border-[#1E693A] text-black cursor-pointer h-full'>
                            {departmentConstant.map((value,index) =>(
                                <option
                                    
                                    value={value.departmentValue} 
                                    key={index}>

                                        {value.deparmentName}

                                    </option>
                            ))
                                
                            }
                        </select>
                    
                    </div>
                    <div className='flex-1 flex flex-col gap-4'>
                        {registerConstant2.map((value,index) => (
                            <RegisterInputs_inputs 
                            inputKey={index} 
                            inputName={value.input_name} 
                            inpputType={value.input_type} 
                            inputPlaceholder={value.input_placeholder}/>
                        ))
                        }
                        
                        <select name="Program" id="" className='p-[3px_5px] w-full rounded-md border-[1px] border-[#1E693A] text-black cursor-pointer h-full'>
                            {statusConstant.map((value,index)=>(
                                <option
                                    
                                    key={index}     
                                    value={value.optionValue}>
                                        
                                        {value.optionName}
                                    
                                    </option>
                            ))
                            }
                        </select>
                        
                    </div>

                </div>
                
                <RegisterInputs_inputs  
                    inputName={'Program'} 
                    inpputType={'text'} 
                    inputPlaceholder={'Program'} 
                />

                <textarea 
                className='p-[3px_5px] w-full rounded-md border-[1px] border-[#1E693A] text-black cursor-pointer'
                placeholder='About me'
                >
                    
                </textarea>

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
            
        </div>
    </div>
  )
}

export default RegisterInput