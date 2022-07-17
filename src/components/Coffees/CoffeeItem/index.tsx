import { Minus, Plus } from "phosphor-react";
import Express from '../../../assets/coffee_express.svg';
import { Button } from "../../Button";
import { Actions, Amount, Badge, CoffeeItemContainer, Footer, ImageBox } from "./styles";

export function CoffeeItem() {
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
          <button>
            <Minus size={14} />
          </button>
          <span>{1}</span>
          <button>
            <Plus size={14} />
          </button>
        </Amount>
        <Button mainColor="purple" size="md" variant="default" icon={{ name: "ShoppingCart", weight: 'fill' }}  />
      </Actions>
      </Footer>
    </CoffeeItemContainer>
  )
}