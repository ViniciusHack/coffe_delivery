import { InputContainer, InputStyle } from "./styles";

interface InputProps {
  placeholder?: string;
  optional?: boolean;
  width?: string;
}

export function Input({ placeholder, optional = false, width }: InputProps) {
  return (
    <InputContainer width={width}>
      {optional && <span>Opcional</span>}
      <InputStyle placeholder={placeholder}/>
    </InputContainer>
  )
}