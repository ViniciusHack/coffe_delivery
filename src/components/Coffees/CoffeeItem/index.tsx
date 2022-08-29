import { useState } from "react";
import CoffeeExpress from '../../../assets/coffee_express.svg';
import { AmountButton } from "../../AmountButton";
import { Button } from "../../Button";
import { Actions, Badge, CoffeeItemContainer, Footer, ImageBox } from "./styles";

export function CoffeeItem() {
  const [itemCount, setItemCount] = useState(0);

  return (
    <CoffeeItemContainer>
      <ImageBox>
        <img src={CoffeeExpress} />
      </ImageBox>
      <Badge>
        Tradicional
      </Badge>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <Footer>
        <span>R${" "}<strong>9,90</strong></span>
        <Actions>
          <AmountButton amount={itemCount} setAmount={setItemCount} size="md" />
          <Button
            mainColor="purple"
            size="md"
            onClick={() => {}}
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