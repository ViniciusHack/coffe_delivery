import { useContext, useState } from "react";
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

export function CoffeeItem({ id, badges, description, imageUrl, price, title }: CoffeeItemProps) {
  const { addNewCartItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  return (
    <CoffeeItemContainer>
      <ImageBox>
        <img src={imageUrl} />
      </ImageBox>
      {badges.map(badge => (
        <Badge>
          {badge}
        </Badge>
      ))}
      <h3>{title}</h3>
      <p>{description}</p>
      <Footer>
        <span>R${" "}<strong>{price}</strong></span>
        <Actions>
          <AmountButton amount={quantity} setAmount={setQuantity} size="md" />
          <Button
            mainColor="purple"
            size="md"
            onClick={() => addNewCartItem({
              id: 0,
              title: "Expresso Tradicional",
              imageUrl: "https://fakeimage.com",
              price_on_cents: 20000,
              quantity,
            })}
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