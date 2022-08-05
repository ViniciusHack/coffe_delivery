import { useState } from 'react';
import CoffeeExpress from '../../assets/coffee_express.svg';
import { AmountButton } from "../AmountButton";
import { Button } from "../Button";
import { ButtonGroup, CoffeeCartItemContainer, CoffeeInfo, Content, Price } from "./styles";

export function CoffeeCartItem() {
  const [amount, setAmount] = useState(0);

  return (
    <CoffeeCartItemContainer>
      <Content>
        <CoffeeInfo>
          <img src={CoffeeExpress} />
          <div>
            <h4>Expresso Tradicional</h4>
            <ButtonGroup>
              <AmountButton amount={amount} setAmount={setAmount} size="sm" />
              <Button mainColor="purple" variant="base" size="sm" icon={{ name: "Trash", weight: "regular" }} text="Remover" />
            </ButtonGroup>
          </div>
        </CoffeeInfo>
        <Price>R$ 9,90</Price>
      </Content>
      <hr />
    </CoffeeCartItemContainer>
  )
}