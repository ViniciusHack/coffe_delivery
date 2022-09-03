import { memo, useCallback, useState } from "react";
import { useContextSelector } from 'use-context-selector';
import { CartContext } from "../../../contexts/CartContext";
import { AmountButton } from "../../AmountButton";
import { Button } from "../../Button";
import { Actions, Badge, CoffeeItemContainer, Footer, ImageBox } from "./styles";

interface CoffeeItemProps {
  id: number;
  title: string;
  badges: string[];
  imageUrl: string;
  description: string;
  price: number;
}

function CoffeeItemComponent({ id, badges, description, imageUrl, price, title }: CoffeeItemProps) {
  const [quantity, setQuantity] = useState(0);
  const { addNewCartItem, updateItemQuantity, cart } = useContextSelector(CartContext, (context) => {
    const { addNewCartItem, updateItemQuantity, cart } = context;
    return { updateItemQuantity, addNewCartItem, cart };
  });

  const onIncrease = useCallback(() => {
    setQuantity(state => state + 1)
  }, [])

  const onDecrease = useCallback(() => {
    if(quantity > 0) {
      setQuantity(state => {
        return state - 1
      })
    }
  }, [quantity])

  const handleClickCoffeeItem = () => {
    const cartItem = cart.find(item => item.id === id);
    if(!!cartItem) {
      updateItemQuantity(id, quantity)
    } else {
      addNewCartItem({
        id,
        title,
        imageUrl,
        price_on_cents: price,
        quantity,
      })
    }
  };

  return (
    <CoffeeItemContainer>
      <ImageBox>
        <img src={imageUrl} />
      </ImageBox>
      {badges.map(badge => (
        <Badge key={badge}>
          {badge}
        </Badge>
      ))}
      <h3>{title}</h3>
      <p>{description}</p>
      <Footer>
        <span>R${" "}<strong>{Intl.NumberFormat('pt-br').format(price / 100).padEnd(4, "0")}</strong></span>
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
            name: "ShoppingCart",
            weight: 'fill'
            }}
          />
        </Actions>
      </Footer>
    </CoffeeItemContainer>
  )
}

export const CoffeeItem = memo(CoffeeItemComponent);