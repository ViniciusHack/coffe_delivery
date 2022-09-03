import { useCallback } from 'react';
import { useContextSelector } from 'use-context-selector';
import { CartContext } from '../../contexts/CartContext';
import { AmountButton } from "../AmountButton";
import { Button } from "../Button";
import { ButtonGroup, CoffeeCartItemContainer, CoffeeInfo, Content, Price } from "./styles";

interface CoffeeCartItemProps{
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;
}
export function CoffeeCartItem({ id, imageUrl, price, quantity, title }: CoffeeCartItemProps) {
  const { updateItemQuantity, removeCartItem } = useContextSelector(CartContext, (context) => {
    const { updateItemQuantity, removeCartItem } = context;
    return { updateItemQuantity, removeCartItem }
  })

  const onIncrease = useCallback(() => {
    updateItemQuantity(id, quantity + 1)
  }, [quantity, id])

  const onDecrease = useCallback(() => {
    if(quantity > 1) {
      updateItemQuantity(id, quantity - 1)
    }
  }, [quantity, id])
  
  return (
    <CoffeeCartItemContainer>
      <Content>
        <CoffeeInfo>
          <img src={imageUrl} />
          <div>
            <h4>{title}</h4>
            <ButtonGroup>
              <AmountButton 
                amount={quantity}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                size="sm"
              />
              <Button 
                mainColor="purple"
                variant="base"
                size="sm"
                icon={{ name: "Trash", weight: "regular" }}
                text="Remover"
                onClick={() => removeCartItem(id)}
              />
            </ButtonGroup>
          </div>
        </CoffeeInfo>
        <Price>{Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }).format(price / 100)}</Price>
      </Content>
      <hr />
    </CoffeeCartItemContainer>
  )
}