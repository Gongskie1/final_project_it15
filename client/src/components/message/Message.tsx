import { MainChat, Message_nav, SideBar } from ".."



const Message = () => {
  return (
    <div className="text-[#6A9C7D] h-screen relative flex flex-col">
      <nav className="shadow-md flex justify-center items-center"><Message_nav/></nav>
      <main
      className="flex flex-row h-full"
      >
        <div className="border-2"><SideBar/></div>
        <div className="w-full h-full "><MainChat/></div>
      </main>
    </div>
  )
}

export default Message