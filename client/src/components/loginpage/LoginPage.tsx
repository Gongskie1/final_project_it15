import Login from "./login_component/Login";
const LoginPage = () => {
  return (
    <div
    className='flex p-[15px_25px] h-screen'
    >
        <div
        className="
        w-full h-full 
         rounded-md shadow-[0_0_5px_0px_green]
        p-2
        "
        >
          <div 
          className="w-full h-full  rounded-md
          flex
          "
          >
            <div
            className="
            bg-green-300
            rounded-l-md 
            flex-1"
            >1
            </div>

            <div
            className="
            flex-1
            flex items-center justify-center
            "
            >
              <Login/>
            </div>

          </div>
        </div>
    </div>
  )
}

export default LoginPage