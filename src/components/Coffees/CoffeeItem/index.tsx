import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import Express from '../../../assets/coffee_express.svg';
import { Button } from "../../Button";
import { Actions, Amount, Badge, CoffeeItemContainer, Footer, ImageBox } from "./styles";

export function CoffeeItem() {
  const [itemCount, setItemCount] = useState(0);

  const increaseItemCount = () => {
    setItemCount(state => state+= 1)
  }

  const decreaseItemCount = () => {
    setItemCount(state => {
      if(state > 0) {
        state-= 1
      }
      return state
    })
  }

  return (
    <CoffeeItemContainer>
      <ImageBox>
        <img src={Express} />
      </ImageBox>
      <Badge>
        Tradicional
      </Badge>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <Footer>
        <span>R${" "}<strong>9,90</strong></span>
        <Actions>
        <Amount>
          <button onClick={decreaseItemCount}>
            <Minus size={14} />
          </button>
          <span>{itemCount}</span>
          <button onClick={increaseItemCount}>
            <Plus size={14} />
          </button>
        </Amount>
        <Button mainColor="purple" size="md" variant="default" icon={{ name: "ShoppingCart", weight: 'fill' }}  />
      </Actions>
      </Footer>
    </CoffeeItemContainer>
  )
}