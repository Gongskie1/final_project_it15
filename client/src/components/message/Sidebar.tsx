import React from 'react'

const Sidebar = () => {
  return (
    <div className='px-4  h-full flex flex-col'>

        <div className=' flex flex-row items-center gap-2 border-b-[1px] py-4'>
            <input type="text" className='outline-none border-[#6A9C7D] border-[1px] rounded-md p-[5px] h-full' placeholder='search'/> 
            <button type='submit' className='w-8 h-8 bg-black'>s</button>
        </div>

        <div className='pt-2 pb-3 flex flex-col max-h-full h-full overflow-hidden '>
            <h3 className='text-base font-semibold'>Friends</h3>

            <div className='pt-4 flex overflow-auto bg-[#F1F5F9] h-full rounded-lg'>

                <div className='flex flex-row justify-center items-center self-baseline gap-2'>
                    <div
                    className='w-10 h-10 bg-[#E5E5E5] rounded-lg flex justify-center items-center cursor-pointer'
                    >s</div>
                    <p className='self-start'>Mark joseph tiempo</p>
                </div>
                

            </div>
            
        </div>

    </div>
  )
}

export default Sidebar