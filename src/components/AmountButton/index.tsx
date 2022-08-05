import { Minus, Plus } from "phosphor-react";
import { AmountContainer } from "./styles";

interface AmountButtonProps {
  amount: number;
  setAmount: (value: React.SetStateAction<number>) => void
  size: "sm" | "md";
}

export function AmountButton({ amount, setAmount, size }: AmountButtonProps) {
  return (
    <AmountContainer size={size}>
      <button onClick={() => setAmount(state => {
        if(state > 0) {
          state-= 1
        }
        return state
      })}
      >
        <Minus size={14} />
      </button>
      <span>{amount}</span>
      <button onClick={() => setAmount(state => state+=1)}>
        <Plus size={14} />
      </button>
    </AmountContainer>
  )
}