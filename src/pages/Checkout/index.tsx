import { zodResolver } from '@hookform/resolvers/zod';
import { Bank, CreditCard, MapPinLine, Money } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useContextSelector } from "use-context-selector";
import * as zod from 'zod';
import { Button } from "../../components/Button";
import { CartSummary } from "../../components/CartSummary";
import { Input } from "../../components/Input";
import { RadioGroup } from "../../components/RadioGroup";
import { CartContext } from "../../contexts/CartContext";
import { DeliveryContext } from '../../contexts/DeliveryContext';
import { AddressForm, CartItemsContainer, CheckoutContainer, Content, CurrencyDollarStyled, FormContainer, FormHeader, InputInLine, InputsWrapper, Payment, Text } from "./styles";

const required_error = "This field is required";

const schema = zod.object({
  cpf: zod.string().regex(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/, { message: "Invalid format"}).length(11, { message: "Invalid format" }),
  street: zod.string().min(1, { message: required_error }),
  number: zod.number({
    invalid_type_error: "Must be a number",
    required_error
  }),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, { message: required_error }),
  city: zod.string().min(1, { message: required_error }),
  uf: zod.string({ required_error }).length(2, {
    message: "Must have 2 characters"
  }),
  paymentMethod: zod.enum(["credit", "debit", "cash"])
})

type IFormData = zod.infer<typeof schema>;

export function Checkout() {
  const { register, handleSubmit, control, watch, formState} = useForm<IFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      paymentMethod: "credit"
    }
  });
  const { resetCart, cartItemsQuantity } = useContextSelector(CartContext, (context) => {
    const { resetCart, cartItemsQuantity } = context;
    return { resetCart, cartItemsQuantity }
  })
  const changeFormData = useContextSelector(DeliveryContext, (context) => {
    return context.changeFormData;
  })
  const navigate = useNavigate();

  const paymentMethodWatcher = watch("paymentMethod")

  const onSubmit = (data: IFormData) => {
    const { city, neighborhood, number, street, uf, paymentMethod } = data;
    const formData = {
      address: {
        number,
        street,
        neighborhood,
        city,
        uf
      },
      paymentMethod
    } as const

    changeFormData(formData);
    resetCart();
    navigate("/success")
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
              <Input placeholder="CPF" width="12.5rem" type="number" register={register("cpf")}/>
              {formState.errors?.cpf && <span>{formState.errors?.cpf.message}</span>}

              <Input placeholder="Rua" width="35rem" register={register("street")}/>
              {formState.errors?.street && <span>{formState.errors?.street.message}</span>}

              <InputInLine>
                <Input placeholder="Número" width="12.5rem" type="number" register={register("number", {
                  valueAsNumber: true
                })}/>
                {formState.errors?.number && <span>{formState.errors?.number.message}</span>}

                <Input placeholder="Complemento" optional register={register("complement")}/>
                {formState.errors?.complement && <span>{formState.errors?.complement.message}</span>}
                
              </InputInLine>
              <InputInLine>
                <Input placeholder="Bairro" width="12.5rem" register={register("neighborhood")}/>
                {formState.errors?.neighborhood && <span>{formState.errors?.neighborhood.message}</span>}

                <Input placeholder="Cidade" register={register("city")}/>
                {formState.errors?.city && <span>{formState.errors?.city.message}</span>}

                <Input placeholder="UF" width="5rem" register={register("uf")}/>
                {formState.errors?.uf && <span>{formState.errors?.uf.message}</span>}

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
            <Controller 
              control={control} 
              name="paymentMethod"
              render={({ field }) => {
                return (
                  <RadioGroup 
                    onSelectValue={field.onChange}
                    items={[
                      {
                        label: "Cartão de crédito",
                        selected: paymentMethodWatcher === "credit", // to-do,
                        value: "credit",
                        icon: <CreditCard />
                      },
                      {
                        label: "Cartão de débito",
                        selected: paymentMethodWatcher === "debit", // to-do,
                        value: "debit",
                        icon: <Bank />
                      },
                      {
                        label: "Dinheiro",
                        selected: paymentMethodWatcher === "cash", // to-do,
                        value: "cash",
                        icon: <Money />
                      },
                    ]}
                  />
                )
              }}
            />
            
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