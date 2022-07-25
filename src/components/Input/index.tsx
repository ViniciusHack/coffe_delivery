import { InputContainer, InputStyle } from "./styles";

interface InputProps {
  placeholder?: string;
  optional?: boolean;
}

export function Input({ placeholder, optional = false }: InputProps) {
  return (
    <InputContainer>
      {optional && <span>Opcional</span>}
      <InputStyle placeholder={placeholder}/>
    </InputContainer>
  )
}