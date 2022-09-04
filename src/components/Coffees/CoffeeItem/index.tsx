import { useCallback, useState } from "react";
import { useContextSelector } from 'use-context-selector';
import { CartContext } from "../../../contexts/CartContext";
import { useFindCartItem } from "../../../hooks/useFindCartItem";
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

export function CoffeeItem({ id, badges, description, imageUrl, price, title }: CoffeeItemProps) {
  const [quantity, setQuantity] = useState(0);
  const { addNewCartItem, updateItemQuantity } = useContextSelector(CartContext, (context) => {
    const { addNewCartItem, updateItemQuantity } = context;
    return { updateItemQuantity, addNewCartItem };
  }); 
  const { findCartItem } = useFindCartItem();

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
    const { itemAlreadyExists } = findCartItem(id)
    if(itemAlreadyExists) {
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