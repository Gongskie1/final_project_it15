import React from 'react'

const MainChatNav = () => {
  return (
    <div
    className='shadow-xl px-5 py-2 border-t-[1px] border-x-[1px] rounded-t-lg'
    >
        <div
        className='flex flex-row justify-between'
        >
            <div
            className='w-12 h-12 bg-[#E5E5E5] cursor-pointer flex justify-center items-center rounded-lg'
            >
                img
            </div>
            <div>
                <h2
                className='text-base font-semibold uppercase'
                >receiver</h2>
            </div>
        </div>
    </div>
  )
}

export default MainChatNav