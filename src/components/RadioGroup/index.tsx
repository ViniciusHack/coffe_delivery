import { RadioButton, RadioOption } from "../RadioButton";
import { RadioGroupContainer } from "./styles";

interface RadioGroupProps {
  items: RadioOption[];
  onSelectValue: (value: string) => void;
}

export function RadioGroup({ items, onSelectValue }: RadioGroupProps) {
  return (
    <RadioGroupContainer>
      {items.map(item => (
        <RadioButton key={item.value} {...item} onSelectValue={onSelectValue} />
      ))}
    </RadioGroupContainer>
  )
}