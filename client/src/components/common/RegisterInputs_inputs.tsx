
interface inputsType {
    inputKey?:number;
    inputName:string;
    inpputType:string;
    inputPlaceholder:string;
}

const RegisterInputs_inputs = ({inputName,inpputType,inputPlaceholder,inputKey}:inputsType) => {
  return (
    <>
        <div  className='' key={inputKey}>
            <p>{inputName}</p>
            <input type={inpputType} placeholder={inputPlaceholder}
            className='outline-none p-[3px_5px] w-full rounded-md border-[1px] border-[#1E693A] text-black'/>
        </div>             
    </>
  )
}

export default RegisterInputs_inputs