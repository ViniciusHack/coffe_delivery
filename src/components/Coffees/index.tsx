import { useEffect, useState } from "react";
import { ICoffee } from "../../@types/Coffees";
import { api } from "../../services/api";
import { CoffeeItem } from "./CoffeeItem";
import { CoffeeList, CoffeesContainer } from "./styles";

export function Coffees() {
  const [coffees, setCoffees] = useState<ICoffee[]>([]);

  useEffect(() => {
    async function getCoffeesData() {
      const response = await api.get("/coffees");
      setCoffees(response.data);
    };

    getCoffeesData();
  }, [])
  
  return (
    <CoffeesContainer>
      <h2>Nossos cafés</h2>
      <CoffeeList>
        {coffees.map(coffee => (
          <CoffeeItem {...coffee}/>
        ))}
      </CoffeeList>
    </CoffeesContainer>
  )
}