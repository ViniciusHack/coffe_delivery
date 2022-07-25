import { MapPinLine } from "phosphor-react";
import { Input } from "../../components/Input";
import { CartItems, CheckoutContainer, FormContainer, FormContent, FormHeader, InputInLine, InputsWrapper, Payment, Text } from "./styles";

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
          <InputsWrapper>
            <Input placeholder="CPF" width="12.5rem"/>
            <Input placeholder="Rua" width="35rem"/>
            <InputInLine>
              <Input placeholder="Número" width="12.5rem"/>
              <Input placeholder="Complemento" optional/>
            </InputInLine>
            <InputInLine>
              <Input placeholder="Bairro" width="12.5rem"/>
              <Input placeholder="Cidade"/>
              <Input placeholder="UF" width="5rem"/>
            </InputInLine>
          </InputsWrapper>
        </FormContent>
        <Payment>

        </Payment>
      </FormContainer>
      <CartItems>

      </CartItems>
    </CheckoutContainer>
  )
}