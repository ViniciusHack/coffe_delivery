import Motoboy from '../../assets/motoboy.svg';
import { FeatureItem } from '../../components/FeatureItem';
import { Content, OrderInfo, SuccessContainer } from "./styles";

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <Content>
        <OrderInfo>
          <FeatureItem color='secondary-400' 
          text={['Entrega em Rua João Daniel Martinelli, 102', 'Farrapos - Porto Alegre, RS']} 
          boldText="Rua João Daniel Martinelli, 102" icon="MapPin" />
          <FeatureItem color='primary-400' 
          text={["Previsão de entrega", "20 min - 30 min"]} 
          boldText="20 min - 30 min" 
          icon="Timer"/>
          <FeatureItem color='primary-700' 
          text={["Pagamento na entrega", "Cartão de Crédito"]}
          boldText="Cartão de Crédito" 
          icon='CurrencyDollar' />
        </OrderInfo>
        <img src={Motoboy} alt="Motoboy" />
      </Content>
    </SuccessContainer>
  )
}