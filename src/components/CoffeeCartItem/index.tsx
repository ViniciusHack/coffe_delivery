import { useState } from 'react';
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
  const [amount, setAmount] = useState(quantity);

  return (
    <CoffeeCartItemContainer>
      <Content>
        <CoffeeInfo>
          <img src={imageUrl} />
          <div>
            <h4>{title}</h4>
            <ButtonGroup>
              <AmountButton amount={amount} setAmount={setAmount} size="sm" />
              <Button mainColor="purple" variant="base" size="sm" icon={{ name: "Trash", weight: "regular" }} text="Remover" />
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