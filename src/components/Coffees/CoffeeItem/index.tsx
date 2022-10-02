import { useCallback, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { ICoffee } from '../../../@types/Coffees'
import { CartContext } from '../../../contexts/CartContext'
import { AmountButton } from '../../AmountButton'
import { Button } from '../../Button'
import { Actions, Badge, CoffeeItemContainer, Footer, ImageBox } from './styles'

interface CoffeeItemProps {
  coffee: ICoffee
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const [quantity, setQuantity] = useState(0)
  const addNewCartItem = useContextSelector(CartContext, (context) => {
    return context.addNewCartItem
  })

  const onIncrease = useCallback(() => {
    setQuantity((state) => state + 1)
  }, [])

  const onDecrease = useCallback(() => {
    if (quantity > 0) {
      setQuantity((state) => {
        return state - 1
      })
    }
  }, [quantity])

  const handleClickCoffeeItem = () => {
    addNewCartItem({
      id: coffee.id,
      title: coffee.title,
      imageUrl: coffee.imageUrl,
      price_on_cents: coffee.price,
      quantity,
    })
  }

  return (
    <CoffeeItemContainer>
      <ImageBox>
        <img src={coffee.imageUrl} alt={`Imagem ${coffee.title}`} />
      </ImageBox>
      {coffee.badges.map((badge) => (
        <Badge key={badge}>{badge}</Badge>
      ))}
      <h3>{coffee.title}</h3>
      <p>{coffee.description}</p>
      <Footer>
        <span>
          R${' '}
          <strong>
            {Intl.NumberFormat('pt-br')
              .format(coffee.price / 100)
              .padEnd(4, '0')}
          </strong>
        </span>
        <Actions>
          <AmountButton
            onDecrease={onDecrease}
            onIncrease={onIncrease}
            amount={quantity}
            size="md"
          />
          <Button
            mainColor="purple"
            size="md"
            onClick={handleClickCoffeeItem}
            variant="default"
            icon={{
              name: 'ShoppingCart',
              weight: 'fill',
            }}
          />
        </Actions>
      </Footer>
    </CoffeeItemContainer>
  )
}
