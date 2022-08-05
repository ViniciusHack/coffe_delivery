import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { Button } from "../../components/Button";
import { CoffeeCartItem } from "../../components/CoffeeCartItem";
import { Input } from "../../components/Input";
import { SelectButton } from "../../components/SelectButton";
import { CalcItem, CartItemsContainer, CheckoutContainer, Content, FormContainer, FormContent, FormHeader, InputInLine, InputsWrapper, Payment, PaymentMethod, Text, TotalCalc } from "./styles";

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
         <FormHeader>
            <CurrencyDollar size={22} />
            <Text>
              <h4>Pagamento</h4>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </Text>
          </FormHeader>
          <PaymentMethod>
            <SelectButton selected={true} icon={<CreditCard />} text="Cartão de crédito"/>
            <SelectButton selected={false} icon={<Bank />} text="Cartão de débito"/>
            <SelectButton selected={false} icon={<Money />} text="Dinheiro"/>
          </PaymentMethod>
        </Payment>
      </FormContainer>
      <CartItemsContainer>
        <h3>Cafés selecionados</h3>
        <Content>
          <CoffeeCartItem />
          <CoffeeCartItem />
        <TotalCalc>
          <CalcItem>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </CalcItem>
          <CalcItem>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </CalcItem>
          <CalcItem>
            <h3>Total</h3>
            <h3>R$ 33,20</h3>
          </CalcItem>
        </TotalCalc>

        <Button mainColor="yellow" size="lg" variant="default" text="confirmar pedido" />
        </Content>
      </CartItemsContainer>
    </CheckoutContainer>
  )
}