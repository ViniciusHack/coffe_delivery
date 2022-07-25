import { MapPinLine } from "phosphor-react";
import { Input } from "../../components/Input";
import { CartItems, CheckoutContainer, FormContainer, FormContent, FormHeader, Payment, Text } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormContainer>
        <h3>Complete seu pedido</h3>
        <FormContent>
          <FormHeader>
            <MapPinLine size={22} />
            <Text>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </Text>
          </FormHeader>
          <Input placeholder="CPF" optional/>
        </FormContent>
        <Payment>

        </Payment>
      </FormContainer>
      <CartItems>

      </CartItems>
    </CheckoutContainer>
  )
}