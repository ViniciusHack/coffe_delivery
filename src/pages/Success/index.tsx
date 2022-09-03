import { useNavigate } from 'react-router-dom';
import { useContextSelector } from 'use-context-selector';
import Motoboy from '../../assets/motoboy.svg';
import { FeatureItem } from '../../components/FeatureItem';
import { DeliveryContext } from '../../contexts/DeliveryContext';
import { Content, OrderInfo, SuccessContainer } from "./styles";

export function Success() {
  const { address, paymentMethod } = useContextSelector(DeliveryContext, (context) => {
    const { address, paymentMethod } = context;
    return { address, paymentMethod }
  })
  const navigate = useNavigate();

  const getPaymentMethodByType = () => {
    switch (paymentMethod) {
      case 'cash':
        return 'Dinheiro'
      case 'credit':
        return 'Cartão de Crédito'
      case 'debit':
        return 'Cartão de Débito'
      default:
        return 'Não processável'
    }
  }

  if(!address) {
    navigate("/")
    return <></>
  }

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <Content>
        <OrderInfo>
          <FeatureItem color='secondary-400' 
          text={[`Entrega em ${address.street}, ${address.number}`, `${address.neighborhood} - ${address.city}, ${address.uf}`]} 
          boldText={`${address.street}, ${address.number}`} icon="MapPin" />
          <FeatureItem color='primary-400' 
          text={["Previsão de entrega", "20 min - 30 min"]} 
          boldText="20 min - 30 min" 
          icon="Timer"/>
          <FeatureItem color='primary-700' 
          text={["Pagamento na entrega", getPaymentMethodByType()]}
          boldText={getPaymentMethodByType()}
          icon='CurrencyDollar' />
        </OrderInfo>
        <img src={Motoboy} alt="Motoboy" />
      </Content>
    </SuccessContainer>
  )
}