import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { InputContainer, InputStyle } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean;
  width?: string;
  register?: UseFormRegisterReturn;
}

export function Input({ optional = false, width, register, ...rest }: InputProps) {
  return (
    <InputContainer width={width}>
      {optional && <span>Opcional</span>}
      <InputStyle {...rest} {...register} />
    </InputContainer>
  )
}