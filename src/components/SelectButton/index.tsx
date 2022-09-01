import { ButtonHTMLAttributes, ReactElement } from "react";
import { RadioButtonContainer } from "./styles";

export interface RadioOption {
  label: string;
  value: string;
  selected: boolean;
  icon?: ReactElement;
}

interface RadioButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  value: string;
  selected: boolean;
  icon?: ReactElement;
  onSelectValue: (value: string) => void;
}

export function RadioButton({ icon, label, value, selected, onSelectValue }: RadioButtonInterface) {
  return (
    <RadioButtonContainer onClick={() => onSelectValue(value)} selected={selected} type="button">
      {icon}
      <p>{label}</p>
    </RadioButtonContainer>
  )
}