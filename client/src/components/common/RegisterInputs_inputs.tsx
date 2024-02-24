import { ChangeEventHandler } from "react";

interface inputsType {
    inputKey?:number;
    inputName:string;
    inpputType:string;
    inputPlaceholder:string;
    input_id:string;
    name:string;
    input_value:string;
    input_onBlur: ChangeEventHandler<HTMLInputElement>;
    input_onChange: ChangeEventHandler<HTMLInputElement>;
}

const RegisterInputs_inputs = ({
  inputName,
  inpputType,
  inputPlaceholder,
  inputKey,
  input_id,
  name,
  input_value,
  input_onBlur,
  input_onChange
}: inputsType) => {
  return (
    <div 
      key={inputKey}>
      <p>{inputName}</p>
      <input
        type={inpputType} 
        placeholder={inputPlaceholder}
        className='outline-none p-[3px_5px] w-full rounded-md border-[1px] border-[#1E693A] text-black'
        id={input_id}
        name={name}
        onChange={input_onChange}
        onBlur={input_onBlur}
        value={input_value}
      />
    </div>
  );
};

export default RegisterInputs_inputs