import RegisterInput from "./RegisterInput"

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
        className="flex-1 p-3"
        >
          <RegisterInput/>
        </div>

      </div>
    </div>
  )
}

export default Register