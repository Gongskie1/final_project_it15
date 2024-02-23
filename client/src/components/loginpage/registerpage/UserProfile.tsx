import React from 'react'

const UserProfile = () => {
  return (
    <div
    className='w-full h-3/4 p-5 flex flex-row gap-2  '
    >           
    

        <div
        className='flex-1 flex flex-col gap-4 py-3 rounded-xl shadow-lg border-[1px]'
        >
            <div className='flex justify-center '>
                <div
                className='w-[70px] h-[70px] bg-[lightgray]  rounded-full border-[1px] border-black'
                > 
                    <img src="" alt="" /> 
                </div>
            </div>
            
            <div className='px-2 text-sm'>
                <h3
                className=''
                >Name: <span className='text-xs font-semibold'>Mark Joseph Tiempo</span></h3>
                <h3>Email: <span className='text-xs font-semibold'>m.tiempo.528866@umindanao.edu.ph</span></h3>
                <h3>Age: <span className='text-xs font-semibold'>21</span></h3>
                <h3>Status: <span className='text-xs font-semibold'>single</span></h3>
            </div>
        </div>
        <div
        className='flex-[2_1_0%] flex flex-col gap-10 rounded-xl p-5 shadow-lg border-[1px] '
        >
            <h1
            className='text-2xl'
            >School Details</h1>
            <div
            className='px-5 flex flex-col gap-3'
            >
                <p>Department: <span className='text-sm font-semibold'>CCE</span></p>
                <p>Program: <span className='text-sm font-semibold'>BSIT</span></p>
                <div>
                    <p>About me:</p>
                    <div className='text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem nostrum, iusto repellat magni obcaecati tenetur ex, iste mollitia distinctio quia. Totam eligendi optio repellat libero quidem reprehenderit aperiam nihil.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserProfile