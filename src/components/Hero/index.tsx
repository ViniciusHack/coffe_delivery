import BackgroundHero from '../../assets/background_hero.png'
import CoffeeHero from '../../assets/coffee_hero.svg'
import { FeatureItem } from '../FeatureItem'
import {
  Background,
  Features,
  HeroContainer,
  LeftContent,
  RightContent,
} from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <Background>
        <img src={BackgroundHero} alt="" />
      </Background>
      <LeftContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <Features>
          <FeatureItem
            text={['Compra simples e segura']}
            icon={'ShoppingCart'}
            color={'primary-700'}
          />
          <FeatureItem
            text={['Embalagem mantém o café intacto']}
            icon={'Package'}
            color={'base-700'}
          />
          <FeatureItem
            text={['Entrega rápida e rastreada']}
            icon={'Timer'}
            color={'primary-400'}
          />
          <FeatureItem
            text={['O café chega fresquinho até você']}
            icon={'Coffee'}
            color={'secondary-400'}
          />
        </Features>
      </LeftContent>
      <RightContent>
        <img src={CoffeeHero} alt="" />
      </RightContent>
    </HeroContainer>
  )
}
