import { useCallback } from 'react'
import { useContextSelector } from 'use-context-selector'
import { CartContext } from '../../contexts/CartContext'
import { CartItem } from '../../reducers/cart/actions'
import { AmountButton } from '../AmountButton'
import { Button } from '../Button'
import {
  ButtonGroup,
  CoffeeCartItemContainer,
  CoffeeInfo,
  Content,
  Price,
} from './styles'

interface CoffeeCartItemProps {
  coffee: CartItem
  price: number
}
export function CoffeeCartItem({ coffee, price }: CoffeeCartItemProps) {
  const { updateItemQuantity, removeCartItem } = useContextSelector(
    CartContext,
    (context) => {
      const { updateItemQuantity, removeCartItem } = context
      return { updateItemQuantity, removeCartItem }
    },
  )

  const onIncrease = useCallback(() => {
    updateItemQuantity(coffee.id, coffee.quantity + 1)
  }, [coffee.quantity, coffee.id, updateItemQuantity])

  const onDecrease = useCallback(() => {
    if (coffee.quantity > 1) {
      updateItemQuantity(coffee.id, coffee.quantity - 1)
    }
  }, [coffee.quantity, coffee.id, updateItemQuantity])

  return (
    <CoffeeCartItemContainer>
      <Content>
        <CoffeeInfo>
          <img src={coffee.imageUrl} alt={`Imagem ${coffee.title}`} />
          <div>
            <h4>{coffee.title}</h4>
            <ButtonGroup>
              <AmountButton
                amount={coffee.quantity}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                size="sm"
              />
              <Button
                mainColor="purple"
                variant="base"
                size="sm"
                icon={{ name: 'Trash', weight: 'regular' }}
                text="Remover"
                onClick={() => removeCartItem(coffee.id)}
              />
            </ButtonGroup>
          </div>
        </CoffeeInfo>
        <Price>
          {Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(price / 100)}
        </Price>
      </Content>
      <hr />
    </CoffeeCartItemContainer>
  )
}
