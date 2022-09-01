import { Bank, CreditCard, MapPinLine, Money } from "phosphor-react";
import { useForm } from "react-hook-form";
import { useContextSelector } from "use-context-selector";
import { Button } from "../../components/Button";
import { CartSummary } from "../../components/CartSummary";
import { Input } from "../../components/Input";
import { SelectButton } from "../../components/SelectButton";
import { CartContext } from "../../contexts/CartContext";
import { AddressForm, CartItemsContainer, CheckoutContainer, Content, CurrencyDollarStyled, FormContainer, FormHeader, InputInLine, InputsWrapper, Payment, PaymentMethod, Text } from "./styles";

interface IFormData {
  cpf: number;
  street: string;
  number: number;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
}

export function Checkout() {
  const { register, handleSubmit } = useForm<IFormData>();
  const cartItemsQuantity = useContextSelector(CartContext, (context) => {
    return context.cartItemsQuantity
  })

  const onSubmit = (data: IFormData) => {
    console.log({ data })
  }

  return (
    <CheckoutContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h3>Complete seu pedido</h3>
          <AddressForm>
            <FormHeader>
              <MapPinLine size={22} />
              <Text>
                <h4>Endereço de Entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </Text>
            </FormHeader>
            <InputsWrapper>
              <Input placeholder="CPF" width="12.5rem" register={register("cpf")}/>
              <Input placeholder="Rua" width="35rem" register={register("street")}/>
              <InputInLine>
                <Input placeholder="Número" width="12.5rem" register={register("number")}/>
                <Input placeholder="Complemento" optional register={register("complement")}/>
              </InputInLine>
              <InputInLine>
                <Input placeholder="Bairro" width="12.5rem" register={register("neighborhood")}/>
                <Input placeholder="Cidade" register={register("city")}/>
                <Input placeholder="UF" width="5rem" register={register("uf")}/>
              </InputInLine>
            </InputsWrapper>
          </AddressForm>
          <Payment>
          <FormHeader>
              <CurrencyDollarStyled size={22} />
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
        </div>
      
      <CartItemsContainer>
        <h3>Cafés selecionados</h3>
        
        <Content>
          <CartSummary />
          <Button disabled={cartItemsQuantity === 0} mainColor="yellow" size="lg" type="submit" variant="default" text="confirmar pedido" />
        </Content>
      </CartItemsContainer>
      </FormContainer>
    </CheckoutContainer>
  )
}