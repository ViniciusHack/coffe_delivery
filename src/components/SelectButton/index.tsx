import { ReactElement } from "react";
import { SelectButtonContainer } from "./styles";

interface SelectButtonInterface {
  text: string;
  icon: ReactElement;
  selected: boolean;
}

export function SelectButton({ icon, text, selected }: SelectButtonInterface) {
  return (
    <SelectButtonContainer selected={selected} type="button">
      {icon}
      <p>{text}</p>
    </SelectButtonContainer>
  )
}