import { CoffeeItem } from "./CoffeeItem";
import { CoffeeList, CoffeesContainer } from "./styles";

export function Coffees() {
  return (
    <CoffeesContainer>
      <h2>Nossos cafés</h2>
      <CoffeeList>
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
      </CoffeeList>
    </CoffeesContainer>
  )
}