

const Message_nav = () => {
  const storedValue = localStorage.getItem("student");
  const username = storedValue ? JSON.parse(storedValue) : null;
  return (
    <div className='p-[10px_20px] max-w-6xl  w-full flex items-center justify-between'>
        <h1 className='font-medium'><p>{username.username}</p></h1>
        <div>
            <div className='w-14 h-14 bg-[lightgray] rounded-lg cursor-pointer hover:bg-opacity-80'>
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Message_nav