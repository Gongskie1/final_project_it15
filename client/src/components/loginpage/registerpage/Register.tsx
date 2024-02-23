import RegisterInput from "./RegisterInput"
import UserProfile from "./UserProfile"

const Register = () => {
  return (
    <div
    className='
    h-screen
    flex justify-center items-center
    p-[40px_60px]
    text-[#1E693A]
    '
    >
      <div 
      className="
      h-full w-full rounded-md
      shadow-[0_0_30px_3px_lightgray]
      flex flex-row 
      border-[1px]
      py-5
      "
      >
        <div
        className="flex-[2_1_0%] flex flex-col justify-center items-center border-[lightgray] border-r-[1px] "
        >
          <h1 className='self-start text-xl font-medium mb-10 pl-5'>Register you account</h1>
          <UserProfile/>
        </div>

        <div
        className="flex-1 p-3"
        >
          <RegisterInput/>
        </div>

      </div>
    </div>
  )
}

export default Register