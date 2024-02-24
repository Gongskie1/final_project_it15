interface InputField {
    [key: string]: string;
    input_name: string;
    input_placeholder: string;
    input_type: string;
  }
  
  export const registerConstant1: Array<InputField> = [
    {
      input_name: "Username",
      input_placeholder: "Username",
      input_type: "text"
    },
    {
      input_name: "Password",
      input_placeholder: "Password",
      input_type: "text"
    },
    {
      input_name: "Email",
      input_placeholder: "Email",
      input_type: "text"
    }
  ];
  
  export const registerConstant2: Array<InputField> = [
    {
      input_name: "Name",
      input_placeholder: "Name",
      input_type: "text"
    },
    {
      input_name: "Age",
      input_placeholder: "Age",
      input_type: "text"
    },
  ];
  