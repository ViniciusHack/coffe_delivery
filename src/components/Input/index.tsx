import { UseFormRegisterReturn } from "react-hook-form";
import { InputContainer, InputStyle } from "./styles";

interface InputProps {
  placeholder?: string;
  optional?: boolean;
  width?: string;
  register?: UseFormRegisterReturn;
}

export function Input({ placeholder, optional = false, width, register }: InputProps) {
  return (
    <InputContainer width={width}>
      {optional && <span>Opcional</span>}
      <InputStyle {...register} placeholder={placeholder}/>
    </InputContainer>
  )
}