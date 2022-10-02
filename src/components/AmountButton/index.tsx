import { Minus, Plus } from 'phosphor-react'
import { AmountContainer } from './styles'

interface AmountButtonProps {
  onIncrease: () => void
  onDecrease: () => void
  amount: number
  size: 'sm' | 'md'
}

export function AmountButton({
  size,
  onIncrease,
  amount,
  onDecrease,
}: AmountButtonProps) {
  return (
    <AmountContainer size={size}>
      <button type="button" onClick={onDecrease}>
        <Minus size={14} />
      </button>
      <span>{amount}</span>
      <button type="button" onClick={onIncrease}>
        <Plus size={14} />
      </button>
    </AmountContainer>
  )
}
