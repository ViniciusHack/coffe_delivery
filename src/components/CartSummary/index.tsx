import { useContextSelector } from "use-context-selector";
import { CartContext } from "../../contexts/CartContext";
import { CoffeeCartItem } from "../CoffeeCartItem";
import { CalcItem, CartSummaryContainer, TotalCalc } from "./styles";

export function CartSummary() {
  const cart = useContextSelector(CartContext, (context) => {
    return context.cart;
  });

  const totalCost = cart.reduce((acc, item) => {
    const itemTotalCost = item.quantity * item.price_on_cents

    return acc += itemTotalCost
  }, 0)

  const tax_on_cents = 350;
  const total_on_cents = tax_on_cents + totalCost

  return (
    <CartSummaryContainer>
      {cart.map(item => (
        <CoffeeCartItem {...item} price={item.price_on_cents}/>
      ))}
      <TotalCalc>
        <CalcItem>
          <span>Total de itens</span>
          <span>{Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(totalCost / 100)}</span>
        </CalcItem>
        <CalcItem>
          <span>Entrega</span>
          <span>{Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(tax_on_cents / 100)}</span>
        </CalcItem>
        <CalcItem>
          <h3>Total</h3>
          <h3>{Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(total_on_cents / 100)}</h3>
        </CalcItem>
        </TotalCalc>
    </CartSummaryContainer>
  )
}